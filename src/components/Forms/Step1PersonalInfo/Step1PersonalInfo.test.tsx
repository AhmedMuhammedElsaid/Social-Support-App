// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import formReducer from '../../../store/slices/formSlice';
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../../../i18n/i18n';
// import { initialFormData } from '../../../utils/Constants';
// import { Step1PersonalInfo } from './Step1PersonalInfo';
// import { FormStep } from '../../../types/formTypes';

// const createMockStore = (initialState = {}) => {
//     return configureStore({
//         reducer: {
//             form: formReducer,
//         },
//         preloadedState: {
//             form: {
//                 currentStep: 1 as FormStep,
//                 formData: initialFormData,
//                 isSubmitting: false,
//                 submissionError: null,
//                 ...initialState,
//             },
//         },
//     });
// };

// const renderWithProviders = (component: React.ReactElement, initialState = {}) => {
//     const store = createMockStore(initialState);
//     return render(
//         <I18nextProvider i18n={i18n}>
//             <Provider store={store}>
//                 {component}
//             </Provider>
//         </I18nextProvider>
//     );
// };

// describe('Step1PersonalInfo', () => {
//     it('renders all form fields', () => {
//         const mockOnNext = jest.fn();
//         renderWithProviders(<Step1PersonalInfo onNext={mockOnNext} />);

//         expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/national id/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
//     });

//     it('shows validation errors for invalid data', async () => {
//         const mockOnNext = jest.fn();
//         renderWithProviders(<Step1PersonalInfo onNext={mockOnNext} />);

//         const submitButton = screen.getByRole('button', { name: /next/i });
//         fireEvent.click(submitButton);

//         await waitFor(() => {
//             expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
//         });
//     });

//     it('submits form with valid data', async () => {
//         const mockOnNext = jest.fn();
//         renderWithProviders(<Step1PersonalInfo onNext={mockOnNext} />);

//         fireEvent.change(screen.getByLabelText(/full name/i), {
//             target: { value: 'John Doe' },
//         });
//         fireEvent.change(screen.getByLabelText(/national id/i), {
//             target: { value: '123456' },
//         });
//         fireEvent.change(screen.getByLabelText(/date of birth/i), {
//             target: { value: '1990-01-01' },
//         });
//         fireEvent.change(screen.getByLabelText(/address/i), {
//             target: { value: '123 Main St' },
//         });
//         fireEvent.change(screen.getByLabelText(/city/i), {
//             target: { value: 'Test City' },
//         });
//         fireEvent.change(screen.getByLabelText(/state/i), {
//             target: { value: 'Test State' },
//         });
//         fireEvent.change(screen.getByLabelText(/country/i), {
//             target: { value: 'Test Country' },
//         });
//         fireEvent.change(screen.getByLabelText(/phone number/i), {
//             target: { value: '1234567890' },
//         });
//         fireEvent.change(screen.getByLabelText(/email address/i), {
//             target: { value: 'test@example.com' },
//         });

//         const submitButton = screen.getByRole('button', { name: /next/i });
//         fireEvent.click(submitButton);

//         await waitFor(() => {
//             expect(mockOnNext).toHaveBeenCalled();
//         });
//     });
// });
