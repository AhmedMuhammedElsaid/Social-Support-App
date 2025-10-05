// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { Select } from './Select'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n/i18n'

// const renderWithi18n = (component: React.ReactElement) => {
//     return render(
//         <I18nextProvider i18n={i18n}>
//             {component}
//         </I18nextProvider>
//     )
// }

// const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
// ]

// describe('Select', () => {
//     it('renders with label and options', () => {
//         renderWithi18n(<Select label="Test Label" options={options} />)

//         expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
//         expect(screen.getByDisplayValue('Option 1')).toBeInTheDocument()
//     })

//     it('handles selection change', () => {
//         const handleChange = jest.fn()
//         renderWithi18n(
//             <Select label="Test Label" options={options} onChange={handleChange} />
//         )

//         fireEvent.change(screen.getByRole('combobox'), { target: { value: 'option2' } })
//         expect(handleChange).toHaveBeenCalledTimes(1)
//     })

//     it('shows error message', () => {
//         renderWithi18n(
//             <Select label="Test Label" options={options} error="Selection required" />
//         )

//         expect(screen.getByText('Selection required')).toBeInTheDocument()
//         expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
//     })

//     it('applies disabled state', () => {
//         renderWithi18n(<Select label="Test Label" options={options} disabled />)

//         expect(screen.getByRole('combobox')).toBeDisabled()
//     })
// })
