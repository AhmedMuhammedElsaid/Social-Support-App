import axios from 'axios';
import { aISuggestionFallbacks, URLS } from '../utils/Constants';
import { AIContext } from '../types';
import { FamilyFinancialInfo, PersonalInfo } from '../types/formTypes';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


class OpenAIService {
    async getWritingSuggestion(context: AIContext): Promise<string> {
        if (!OPENAI_API_KEY)
            throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your environment variables.');

        const { field, currentText, personalInfo, financialInfo, prompt, context: contextDescription } = context;
        try {
            const systemMessage = this.buildSystemMessage(personalInfo, financialInfo, contextDescription, currentText);
            const userMessage = prompt || this.getDefaultPrompt(field);

            const response = await axios.post(
                URLS.OPENAI_API_URL,
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        { role: 'system', content: systemMessage },
                        { role: 'user', content: userMessage }],
                    max_tokens: 300,
                    temperature: 0.7,
                    presence_penalty: 0.3,
                    frequency_penalty: 0.2,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${OPENAI_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    timeout: 30000,
                }
            );

            const choice = response.data.choices[0];
            if (!choice || !choice.message) throw new Error('No response from AI service');

            return choice.message.content.trim();
        } catch (error) {
            console.error('OpenAI API Error:', error);

            if (axios.isAxiosError(error)) {
                if (error.code === 'ECONNABORTED') {
                    throw new Error('Request timeout. Please check your internet connection and try again.');
                }

                const status = error.response?.status;
                const errorMessage = error.response?.data?.error?.message;

                switch (status) {
                    case 401:
                        throw new Error('Invalid API key. Please check your OpenAI API key configuration.');
                    case 429:
                        throw new Error('Too many requests. Please wait a moment before trying again.');
                    case 500:
                        throw new Error('OpenAI service is temporarily unavailable. Please try again later.');
                    case 503:
                        throw new Error('OpenAI service is overloaded. Please try again in a few moments.');
                    default:
                        throw new Error(errorMessage || 'Failed to connect to AI service. Please try again.');
                }
            }

            throw new Error('An unexpected error occurred. Please try again.');
        }
    }
    private buildSystemMessage(personalInfo: PersonalInfo, financialInfo: FamilyFinancialInfo, contextDescription: string = '', currentText: string = ''): string {
        return `You are an AI assistant helping someone complete a government social support application. 

CONTEXT: ${contextDescription}

INSTRUCTIONS:
1. Provide a helpful, professional writing suggestion based on the user's prompt and any existing text
2. Keep the suggestion concise but comprehensive (2-4 sentences)
3. Use formal but empathetic language appropriate for a government application
4. Focus on clarity and specificity
5. If the user has provided existing text, build upon it rather than replacing it entirely
6. Do not make up specific financial numbers or personal details
7. Ensure the suggestion is realistic and appropriate for a social support application

Personal Information:
- Name: ${personalInfo.name}.
- Age: ${this.calculateAge(personalInfo.dateOfBirth)}.
- Location: ${personalInfo.city}, ${personalInfo.state}, ${personalInfo.country}.
- Contact: ${personalInfo.phone}, ${personalInfo.email}.

Financial Information:
- Employment: ${financialInfo.employmentStatus}.
- Monthly Income: $${financialInfo.monthlyIncome}.
- Dependents: ${financialInfo.dependents}.
- Housing: ${financialInfo.housingStatus}.
- Marital Status: ${financialInfo.maritalStatus}.

USER'S EXISTING TEXT: "${currentText}"

Your response should be a direct suggestion that the user can use in their application.`;
    }
    private calculateAge(dateOfBirth: string): number {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    private getDefaultPrompt(field: string): string {
        const prompts: { [key: string]: string } = {
            financialSituation: 'Please help me describe my financial situation for a government support application.',
            employmentCircumstances: 'Please help me describe my employment circumstances for a government support application.',
            reasonForApplying: 'Please help me explain why I need financial assistance in my government support application.'
        };
        return prompts[field] || 'Please help me improve this text for a government support application.';
    }
    getFallbackSuggestion(field: string): string {
        return aISuggestionFallbacks[field] || "I would appreciate your consideration for support during this difficult time as I work to improve my circumstances.";
    }
}

export default new OpenAIService();
