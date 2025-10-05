// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { Textarea } from './Textarea'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n/i18n'

// const renderWithi18n = (component: React.ReactElement) => {
//     return render(
//         <I18nextProvider i18n={i18n}>
//             {component}
//         </I18nextProvider>
//     )
// }

// describe('Textarea', () => {
//     it('renders with label', () => {
//         renderWithi18n(<Textarea label="Test Label" />)
//         expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
//     })

//     it('handles input changes', () => {
//         const handleChange = jest.fn()
//         renderWithi18n(<Textarea label="Test Label" onChange={handleChange} />)

//         fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test value' } })
//         expect(handleChange).toHaveBeenCalledTimes(1)
//     })

//     it('shows error message', () => {
//         renderWithi18n(<Textarea label="Test Label" error="This field is required" />)
//         expect(screen.getByText('This field is required')).toBeInTheDocument()
//     })

//     it('applies correct classes when error is present', () => {
//         renderWithi18n(<Textarea label="Test Label" error="Error message" />)
//         const textarea = screen.getByRole('textbox')
//         expect(textarea).toHaveClass('border-red-500')
//     })

//     it('forwards all textarea props', () => {
//         renderWithi18n(
//             <Textarea
//                 label="Test Label"
//                 placeholder="Enter text"
//                 rows={5}
//                 maxLength={100}
//             />
//         )
//         const textarea = screen.getByRole('textbox')
//         expect(textarea).toHaveAttribute('placeholder', 'Enter text')
//         expect(textarea).toHaveAttribute('rows', '5')
//         expect(textarea).toHaveAttribute('maxLength', '100')
//     })
// })
