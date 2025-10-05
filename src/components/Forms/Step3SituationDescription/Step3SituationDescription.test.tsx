// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { useForm } from 'react-hook-form';
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../../../i18nForTests'; // Your test i18n instance

// import { Step3SituationDescription } from './Step3SituationDescription';
// import formReducer from '../../../store/slices/formSlice';
// import { useAIAssistant } from '../../../hooks/useAIAssistant';

// // Mock the hooks and components
// jest.mock('react-i18next', () => ({
//   ...jest.requireActual('react-i18next'),
//   useTranslation: () => ({
//     t: (key: string) => key,
//     i18n: { language: 'en' }
//   })
// }));

// jest.mock('../../../hooks/useAIAssistant');
// jest.mock('../../AIAssistedTextarea/AIAssistedTextarea');
// jest.mock('../../AISuggestionModal/AISuggestionModal');
// jest.mock('../../UI', () => ({
//   Button: ({ children, onClick, disabled, type, variant }: any) => (
//     <button 
//       onClick={onClick} 
//       disabled={disabled}
//       type={type}
//       data-variant={variant}
//       data-testid={variant === 'outline' ? 'back-button' : 'submit-button'}
//     >
//       {children}
//     </button>
//   )
// }));

// const mockUseAIAssistant = useAIAssistant as jest.MockedFunction<typeof useAIAssistant>;

// // Mock AI Assistant hook response
// const mockAIState = {
//   isOpen: false,
//   field: null,
//   currentText: '',
//   suggestion: '',
//   isLoading: false,
//   error: null
// };

// const mockHandleAIAssist = jest.fn();
// const mockCloseAIModal = jest.fn();
// const mockRetryAIAssist = jest.fn();

// const mockUseAIAssistantImplementation = {
//   aiState: mockAIState,
//   handleAIAssist: mockHandleAIAssist,
//   closeAIModal: mockCloseAIModal,
//   retryAIAssist: mockRetryAIAssist
// };

// // Test utilities
// const createMockStore = (initialState = {}) => {
//   return configureStore({
//     reducer: {
//       form: formReducer
//     },
//     preloadedState: {
//       form: {
//         formData: {
//           situationDescription: {
//             financialSituation: '',
//             employmentCircumstances: '',
//             reasonForApplying: ''
//           }
//         },
//         isSubmitting: false,
//         ...initialState
//       }
//     }
//   });
// };

// const renderComponent = (props = {}, storeState = {}) => {
//   const store = createMockStore(storeState);
//   const defaultProps = {
//     onSubmit: jest.fn(),
//     onBack: jest.fn(),
//     ...props
//   };

//   return render(
//     <I18nextProvider i18n={i18n}>
//       <Provider store={store}>
//         <Step3SituationDescription {...defaultProps} />
//       </Provider>
//     </I18nextProvider>
//   );
// };

// describe('Step3SituationDescription', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     mockUseAIAssistant.mockReturnValue(mockUseAIAssistantImplementation);
//   });

//   describe('Rendering', () => {
//     it('should render all form fields correctly', () => {
//       renderComponent();

//       expect(screen.getByText('form.financialSituation')).toBeInTheDocument();
//       expect(screen.getByText('form.employmentCircumstances')).toBeInTheDocument();
//       expect(screen.getByText('form.reasonForApplying')).toBeInTheDocument();
//     });

//     it('should render AI assistance info box', () => {
//       renderComponent();

//       expect(screen.getByText('form.aiAssist.available')).toBeInTheDocument();
//       expect(screen.getByText('form.aiAssist.description')).toBeInTheDocument();
//     });

//     it('should render navigation buttons', () => {
//       renderComponent();

//       expect(screen.getByTestId('back-button')).toBeInTheDocument();
//       expect(screen.getByTestId('submit-button')).toBeInTheDocument();
//     });

//     it('should render with RTL layout when language is Arabic', () => {
//       // Mock RTL language
//       jest.spyOn(require('react-i18next'), 'useTranslation').mockReturnValue({
//         t: (key: string) => key,
//         i18n: { language: 'ar' }
//       });

//       renderComponent();
      
//       const form = screen.getByRole('form');
//       expect(form).toHaveClass('space-y-6');
//     });
//   });

//   describe('Form Validation', () => {
//     it('should disable submit button when form is invalid', () => {
//       renderComponent();

//       expect(screen.getByTestId('submit-button')).toBeDisabled();
//     });

//     it('should enable submit button when all required fields are filled', async () => {
//       // Mock valid form state
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: 'Test financial situation',
//             employmentCircumstances: 'Test employment circumstances',
//             reasonForApplying: 'Test reason for applying'
//           }
//         }
//       };

//       renderComponent({}, storeState);

//       await waitFor(() => {
//         expect(screen.getByTestId('submit-button')).not.toBeDisabled();
//       });
//     });

//     it('should show validation errors for empty required fields', async () => {
//       // Mock form with errors
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: '',
//             employmentCircumstances: '',
//             reasonForApplying: ''
//           }
//         }
//       };

//       renderComponent({}, storeState);

//       // Try to submit form
//       fireEvent.submit(screen.getByRole('form'));

//       await waitFor(() => {
//         // Assuming validation errors would be displayed
//         expect(screen.getByTestId('submit-button')).toBeDisabled();
//       });
//     });
//   });

//   describe('User Interactions', () => {
//     it('should call onBack when back button is clicked', async () => {
//       const mockOnBack = jest.fn();
//       renderComponent({ onBack: mockOnBack });

//       await userEvent.click(screen.getByTestId('back-button'));
//       expect(mockOnBack).toHaveBeenCalledTimes(1);
//     });

//     it('should call onSubmit when form is submitted with valid data', async () => {
//       const mockOnSubmit = jest.fn();
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: 'Valid financial situation',
//             employmentCircumstances: 'Valid employment circumstances',
//             reasonForApplying: 'Valid reason for applying'
//           }
//         }
//       };

//       renderComponent({ onSubmit: mockOnSubmit }, storeState);

//       await userEvent.click(screen.getByTestId('submit-button'));

//       await waitFor(() => {
//         expect(mockOnSubmit).toHaveBeenCalledTimes(1);
//       });
//     });

//     it('should handle AI assist button clicks', async () => {
//       renderComponent();

//       // Assuming AI assist buttons are rendered in TextAreaWithAI components
//       const aiAssistButtons = screen.getAllByText(/AI Assist/i);
//       await userEvent.click(aiAssistButtons[0]);

//       expect(mockHandleAIAssist).toHaveBeenCalled();
//     });
//   });

//   describe('AI Assistant Integration', () => {
//     it('should open AI modal when AI assist is triggered', () => {
//       const aiStateWithModalOpen = {
//         ...mockAIState,
//         isOpen: true,
//         field: 'financialSituation',
//         suggestion: 'AI generated suggestion'
//       };

//       mockUseAIAssistant.mockReturnValue({
//         ...mockUseAIAssistantImplementation,
//         aiState: aiStateWithModalOpen
//       });

//       renderComponent();

//       expect(screen.getByText('AISuggestionModal')).toBeInTheDocument();
//     });

//     it('should close AI modal when close function is called', async () => {
//       const aiStateWithModalOpen = {
//         ...mockAIState,
//         isOpen: true,
//         field: 'financialSituation'
//       };

//       mockUseAIAssistant.mockReturnValue({
//         ...mockUseAIAssistantImplementation,
//         aiState: aiStateWithModalOpen
//       });

//       renderComponent();

//       // Find and click close button in the modal
//       const closeButton = screen.getByText('Close'); // Adjust based on your modal implementation
//       await userEvent.click(closeButton);

//       expect(mockCloseAIModal).toHaveBeenCalled();
//     });

//     it('should accept AI suggestion when accept button is clicked', async () => {
//       const aiStateWithSuggestion = {
//         ...mockAIState,
//         isOpen: true,
//         field: 'financialSituation',
//         suggestion: 'AI generated financial situation'
//       };

//       mockUseAIAssistant.mockReturnValue({
//         ...mockUseAIAssistantImplementation,
//         aiState: aiStateWithSuggestion
//       });

//       renderComponent();

//       const acceptButton = screen.getByText('Accept'); // Adjust based on your modal implementation
//       await userEvent.click(acceptButton);

//       // Should call the accept suggestion logic
//       expect(mockCloseAIModal).toHaveBeenCalled();
//     });
//   });

//   describe('Form Data Persistence', () => {
//     it('should populate form with existing data from store', () => {
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: 'Existing financial info',
//             employmentCircumstances: 'Existing employment info',
//             reasonForApplying: 'Existing reason'
//           }
//         }
//       };

//       renderComponent({}, storeState);

//       // Verify that form fields show the existing data
//       // This depends on how your TextAreaWithAI component displays values
//       expect(screen.getByDisplayValue('Existing financial info')).toBeInTheDocument();
//     });

//     it('should update store when form is submitted', async () => {
//       const mockOnSubmit = jest.fn();
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: 'Test financial',
//             employmentCircumstances: 'Test employment',
//             reasonForApplying: 'Test reason'
//           }
//         }
//       };

//       renderComponent({ onSubmit: mockOnSubmit }, storeState);

//       await userEvent.click(screen.getByTestId('submit-button'));

//       await waitFor(() => {
//         expect(mockOnSubmit).toHaveBeenCalled();
//         // You might also want to verify that the Redux actions were dispatched
//       });
//     });
//   });

//   describe('Error Handling', () => {
//     it('should handle AI assistant errors', () => {
//       const aiStateWithError = {
//         ...mockAIState,
//         isOpen: true,
//         field: 'financialSituation',
//         error: 'AI service unavailable'
//       };

//       mockUseAIAssistant.mockReturnValue({
//         ...mockUseAIAssistantImplementation,
//         aiState: aiStateWithError
//       });

//       renderComponent();

//       expect(screen.getByText('AI service unavailable')).toBeInTheDocument();
//     });

//     it('should handle form submission errors', async () => {
//       const mockOnSubmit = jest.fn().mockRejectedValue(new Error('Submission failed'));
//       const storeState = {
//         formData: {
//           situationDescription: {
//             financialSituation: 'Valid data',
//             employmentCircumstances: 'Valid data',
//             reasonForApplying: 'Valid data'
//           }
//         }
//       };

//       // Mock console.error to avoid test noise
//       const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

//       renderComponent({ onSubmit: mockOnSubmit }, storeState);

//       await userEvent.click(screen.getByTestId('submit-button'));

//       await waitFor(() => {
//         expect(consoleSpy).toHaveBeenCalledWith('Submission error:', expect.any(Error));
//       });

//       consoleSpy.mockRestore();
//     });
//   });
// });
