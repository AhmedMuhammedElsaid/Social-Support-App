// import React from 'react'
// import { render, screen, fireEvent, waitFor } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { Step2FamilyFinancial } from './Step2FamilyFinancial'
// import formReducer from '../../../store/slices/formSlice'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n/i18n'

// const createMockStore = (initialState = {}) => {
//     return configureStore({
//         reducer: {
//             form: formReducer,
//         },
//         preloadedState: {
//             form: {
//                 currentStep: 2,
//                 formData: {
//                     personalInfo: {
//                         name: 'John Doe',
//                         nationalId: '123456',
//                         dateOfBirth: '1990-01-01',
//                         gender: 'male',
//                         address: '123 Main St',
//                         city: 'Test City',
//                         state: 'Test State',
//                         country: 'Test Country',
//                         phone: '1234567890',
//                         email: 'test@example.com',
//                     },
//                     familyFinancialInfo: {
//                         maritalStatus: 'single',
//                         dependents: 0,
//                         employmentStatus: 'unemployed',
//                         monthlyIncome: 0,
//                         housingStatus: 'rented',
//                     },
//                     situationDescription: {
//                         financialSituation: '',
//                         employmentCircumstances: '',
//                         reasonForApplying: '',
//                     },
//                 },
//                 isSubmitting: false,
//                 submissionError: null,
//                 ...initialState,
//             },
//         },
//     })
// }

// const renderWithProviders = (component: React.ReactElement, initialState = {}) => {
//     const store = createMockStore(initialState)
//     return render(
//         <I18nextProvider i18n={i18n}>
//             <Provider store={store}>
//                 {component}
//             </Provider>
//         </I18nextProvider>
//     )
// }

// describe('Step2FamilyFinancial', () => {
//     it('renders all form fields', () => {
//         const mockOnNext = jest.fn()
//         const mockOnBack = jest.fn()
//         renderWithProviders(<Step2FamilyFinancial onNext={mockOnNext} onBack={mockOnBack} />)

//         expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument()
//         expect(screen.getByLabelText(/dependents/i)).toBeInTheDocument()
//         expect(screen.getByLabelText(/employment status/i)).toBeInTheDocument()
//         expect(screen.getByLabelText(/monthly income/i)).toBeInTheDocument()
//         expect(screen.getByLabelText(/housing status/i)).toBeInTheDocument()
//     })

//     it('shows validation errors for invalid data', async () => {
//         const mockOnNext = jest.fn()
//         const mockOnBack = jest.fn()
//         renderWithProviders(<Step2FamilyFinancial onNext={mockOnNext} onBack={mockOnBack} />)

//         // Set negative income to trigger validation error
//         const incomeInput = screen.getByLabelText(/monthly income/i)
//         fireEvent.change(incomeInput, { target: { value: '-100' } })

//         const submitButton = screen.getByRole('button', { name: /next/i })
//         fireEvent.click(submitButton)

//         await waitFor(() => {
//             expect(screen.getByText(/income cannot be negative/i)).toBeInTheDocument()
//         })
//     })

//     it('submits form with valid data', async () => {
//         const mockOnNext = jest.fn()
//         const mockOnBack = jest.fn()
//         renderWithProviders(<Step2FamilyFinancial onNext={mockOnNext} onBack={mockOnBack} />)

//         // Fill form with valid data
//         fireEvent.change(screen.getByLabelText(/marital status/i), {
//             target: { value: 'married' },
//         })
//         fireEvent.change(screen.getByLabelText(/dependents/i), {
//             target: { value: '2' },
//         })
//         fireEvent.change(screen.getByLabelText(/employment status/i), {
//             target: { value: 'employed' },
//         })
//         fireEvent.change(screen.getByLabelText(/monthly income/i), {
//             target: { value: '3000' },
//         })
//         fireEvent.change(screen.getByLabelText(/housing status/i), {
//             target: { value: 'owned' },
//         })

//         const submitButton = screen.getByRole('button', { name: /next/i })
//         fireEvent.click(submitButton)

//         await waitFor(() => {
//             expect(mockOnNext).toHaveBeenCalled()
//         })
//     })

//     it('calls onBack when back button is clicked', () => {
//         const mockOnNext = jest.fn()
//         const mockOnBack = jest.fn()
//         renderWithProviders(<Step2FamilyFinancial onNext={mockOnNext} onBack={mockOnBack} />)

//         const backButton = screen.getByRole('button', { name: /back/i })
//         fireEvent.click(backButton)

//         expect(mockOnBack).toHaveBeenCalledTimes(1)
//     })
// })
