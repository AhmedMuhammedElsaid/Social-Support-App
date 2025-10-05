import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import openAIService from '../services/openaiService';
import { ApplicationForm } from '../types/formTypes';

interface AIAssistantState {
    isOpen: boolean;
    field: string | null;
    suggestion: string;
    isLoading: boolean;
    error: string | null;
    currentText: string;
}

interface FieldConfig {
    prompt: string;
    context?: string;
}

interface UseAIAssistantProps {
    formData: ApplicationForm;
    fieldConfigs: Record<string, FieldConfig>;
}

export const useAIAssistant = ({ formData, fieldConfigs }: UseAIAssistantProps) => {
    const { t } = useTranslation();

    const [aiState, setAiState] = useState<AIAssistantState>({
        isOpen: false,
        field: null,
        suggestion: '',
        isLoading: false,
        error: null,
        currentText: '',
    });

    const handleAIAssist = useCallback(async (field: string, currentText: string) => {
        setAiState({
            isOpen: true,
            field,
            suggestion: '',
            isLoading: true,
            error: null,
            currentText,
        });

        try {
            const config = fieldConfigs[field];
            if (!config) {
                throw new Error(`No configuration found for field: ${field}`);
            }

            const context = {
                personalInfo: formData.personalInfo,
                financialInfo: formData.familyFinancialInfo,
                field,
                currentText,
                prompt: config.prompt,
                context: config.context,
            };

            const suggestion = await openAIService.getWritingSuggestion(context);
            setAiState(prev => ({
                ...prev,
                suggestion,
                isLoading: false,
                error: null
            }));
        } catch (error) {
            let errorMessage = t('form.aiAssist.error');
            if (error instanceof Error) {
                if (error.message.includes('quota') || error.message.includes('billing')) {
                    errorMessage = t('form.aiAssist.quotaExceeded');
                } else if (error.message.includes('timeout')) {
                    errorMessage = t('form.aiAssist.timeout');
                } else if (error.message.includes('API key')) {
                    errorMessage = t('form.aiAssist.invalidKey');
                }
            }

            setAiState(prev => ({
                ...prev,
                suggestion: '',
                isLoading: false,
                error: error instanceof Error ? error?.message : errorMessage,
            }));
        }
    }, [formData, fieldConfigs, t]);

    const closeAIModal = useCallback(() => {
        setAiState({
            isOpen: false,
            field: null,
            suggestion: '',
            isLoading: false,
            error: null,
            currentText: '',
        });
    }, []);

    const retryAIAssist = useCallback(() => {
        if (aiState.field) {
            handleAIAssist(aiState.field, aiState.currentText);
        }
    }, [aiState.field, aiState.currentText, handleAIAssist]);

    return {
        aiState,
        handleAIAssist,
        closeAIModal,
        retryAIAssist,
    };
};
