// import axios from 'axios'
// import { openAIService } from './openAIService'

// jest.mock('axios')
// const mockedAxios = axios as jest.Mocked<typeof axios>

// describe('OpenAIService', () => {
//     beforeEach(() => {
//         openAIService.setApiKey('test-api-key')
//         jest.clearAllMocks()
//     })

//     it('should make API call with correct parameters', async () => {
//         const mockResponse = {
//             data: {
//                 choices: [
//                     {
//                         message: {
//                             content: 'This is a test suggestion',
//                         },
//                     },
//                 ],
//             },
//         }

//         mockedAxios.post.mockResolvedValue(mockResponse)

//         const context = {
//             personalInfo: {
//                 name: 'John Doe',
//                 dateOfBirth: '1990-01-01',
//                 city: 'Test City',
//                 state: 'Test State',
//                 country: 'Test Country',
//                 phone: '1234567890',
//                 email: 'test@example.com',
//             },
//             financialInfo: {
//                 employmentStatus: 'unemployed',
//                 monthlyIncome: 1000,
//                 dependents: 2,
//                 housingStatus: 'rented',
//                 maritalStatus: 'married',
//             },
//             field: 'financialSituation',
//             currentText: 'Current financial situation...',
//         }

//         const result = await openAIService.getWritingSuggestion(context)

//         expect(mockedAxios.post).toHaveBeenCalledWith(
//             'https://api.openai.com/v1/chat/completions',
//             expect.objectContaining({
//                 model: 'gpt-3.5-turbo',
//                 max_tokens: 500,
//                 temperature: 0.7,
//             }),
//             expect.objectContaining({
//                 headers: {
//                     'Authorization': 'Bearer test-api-key',
//                     'Content-Type': 'application/json',
//                 },
//                 timeout: 30000,
//             })
//         )

//         expect(result).toBe('This is a test suggestion')
//     })

//     it('should handle API errors gracefully', async () => {
//         mockedAxios.post.mockRejectedValue({
//             code: 'ECONNABORTED',
//         })

//         const context = {
//             personalInfo: {},
//             financialInfo: {},
//             field: 'financialSituation',
//             currentText: '',
//         }

//         await expect(openAIService.getWritingSuggestion(context)).rejects.toThrow(
//             'Request timeout. Please try again.'
//         )
//     })

//     it('should throw error when API key is not set', async () => {
//         openAIService.setApiKey('')

//         const context = {
//             personalInfo: {},
//             financialInfo: {},
//             field: 'financialSituation',
//             currentText: '',
//         }

//         await expect(openAIService.getWritingSuggestion(context)).rejects.toThrow(
//             'OpenAI API key not configured'
//         )
//     })
// })
