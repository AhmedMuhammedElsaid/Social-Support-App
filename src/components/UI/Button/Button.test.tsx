// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { Button } from './Button'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n/i18n'

// const renderWithi18n = (component: React.ReactElement) => {
//     return render(
//         <I18nextProvider i18n={i18n}>
//             {component}
//         </I18nextProvider>
//     )
// }

// describe('Button', () => {
//     it('renders with children', () => {
//         renderWithi18n(<Button>Click me</Button>)
//         expect(screen.getByText('Click me')).toBeInTheDocument()
//     })

//     it('handles click events', () => {
//         const handleClick = jest.fn()
//         renderWithi18n(<Button onClick={handleClick}>Click me</Button>)

//         fireEvent.click(screen.getByText('Click me'))
//         expect(handleClick).toHaveBeenCalledTimes(1)
//     })

//     it('shows loading state', () => {
//         renderWithi18n(<Button isLoading>Click me</Button>)
//         expect(screen.getByText('Loading...')).toBeInTheDocument()
//     })

//     it('is disabled when loading', () => {
//         renderWithi18n(<Button isLoading>Click me</Button>)
//         expect(screen.getByRole('button')).toBeDisabled()
//     })

//     it('is disabled when disabled prop is true', () => {
//         renderWithi18n(<Button disabled>Click me</Button>)
//         expect(screen.getByRole('button')).toBeDisabled()
//     })

//     it('applies correct classes for variants', () => {
//         const { rerender } = renderWithi18n(<Button variant="primary">Primary</Button>)
//         expect(screen.getByRole('button')).toHaveClass('bg-blue-600')

//         rerender(
//             <I18nextProvider i18n={i18n}>
//                 <Button variant="secondary">Secondary</Button>
//             </I18nextProvider>
//         )
//         expect(screen.getByRole('button')).toHaveClass('bg-gray-600')
//     })

//     it('applies correct classes for sizes', () => {
//         const { rerender } = renderWithi18n(<Button size="sm">Small</Button>)
//         expect(screen.getByRole('button')).toHaveClass('px-3', 'py-1.5')

//         rerender(
//             <I18nextProvider i18n={i18n}>
//                 <Button size="lg">Large</Button>
//             </I18nextProvider>
//         )
//         expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3')
//     })
// })
