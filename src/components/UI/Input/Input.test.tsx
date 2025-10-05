// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import { Input } from './Input'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n/i18n'

// const renderWithi18n = (component: React.ReactElement) => {
//     return render(
//         <I18nextProvider i18n={i18n}>
//             {component}
//         </I18nextProvider>
//     )
// }

// describe('Input', () => {
//     it('renders with label', () => {
//         renderWithi18n(<Input label="Test Label" />)
//         expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
//     })

//     it('shows required indicator', () => {
//         renderWithi18n(<Input label="Test Label" required />)
//         expect(screen.getByText('*')).toBeInTheDocument()
//     })

//     it('shows error message', () => {
//         renderWithi18n(<Input label="Test Label" error="This field is required" />)
//         expect(screen.getByText('This field is required')).toBeInTheDocument()
//         expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
//     })

//     it('applies correct classes when error is present', () => {
//         renderWithi18n(<Input label="Test Label" error="Error message" />)
//         const input = screen.getByRole('textbox')
//         expect(input).toHaveClass('border-red-500')
//     })

//     it('forwards all input props', () => {
//         renderWithi18n(
//             <Input
//                 label="Test Label"
//                 placeholder="Enter text"
//                 type="email"
//                 disabled
//             />
//         )
//         const input = screen.getByRole('textbox')
//         expect(input).toHaveAttribute('placeholder', 'Enter text')
//         expect(input).toHaveAttribute('type', 'email')
//         expect(input).toBeDisabled()
//     })
// })
