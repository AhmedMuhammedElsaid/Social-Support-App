// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { Modal } from './Modal'
// import { I18nextProvider } from 'react-i18next'
// import i18n from '../../../i18n'

// const renderWithi18n = (component: React.ReactElement) => {
//     return render(
//         <I18nextProvider i18n={i18n}>
//             {component}
//         </I18nextProvider>
//     )
// }

// describe('Modal', () => {
//     it('renders when isOpen is true', () => {
//         renderWithi18n(
//             <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         expect(screen.getByRole('dialog')).toBeInTheDocument()
//         expect(screen.getByText('Test Modal')).toBeInTheDocument()
//         expect(screen.getByText('Modal content')).toBeInTheDocument()
//     })

//     it('does not render when isOpen is false', () => {
//         const { container } = renderWithi18n(
//             <Modal isOpen={false} onClose={jest.fn()} title="Test Modal">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         expect(container.firstChild).toBeNull()
//     })

//     it('calls onClose when close button is clicked', () => {
//         const handleClose = jest.fn()
//         renderWithi18n(
//             <Modal isOpen={true} onClose={handleClose} title="Test Modal">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         fireEvent.click(screen.getByLabelText('Close'))
//         expect(handleClose).toHaveBeenCalledTimes(1)
//     })

//     it('calls onClose when backdrop is clicked', () => {
//         const handleClose = jest.fn()
//         renderWithi18n(
//             <Modal isOpen={true} onClose={handleClose} title="Test Modal">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         const backdrop = document.querySelector('.fixed.inset-0')
//         fireEvent.click(backdrop!)
//         expect(handleClose).toHaveBeenCalledTimes(1)
//     })

//     it('has correct accessibility attributes', () => {
//         renderWithi18n(
//             <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         const dialog = screen.getByRole('dialog')
//         expect(dialog).toHaveAttribute('aria-modal', 'true')
//         expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
//     })

//     it('applies correct size classes', () => {
//         const { rerender } = renderWithi18n(
//             <Modal isOpen={true} onClose={jest.fn()} title="Test Modal" size="sm">
//                 <p>Modal content</p>
//             </Modal>
//         )

//         expect(screen.getByRole('dialog')).toHaveClass('max-w-md')

//         rerender(
//             <I18nextProvider i18n={i18n}>
//                 <Modal isOpen={true} onClose={jest.fn()} title="Test Modal" size="lg">
//                     <p>Modal content</p>
//                 </Modal>
//             </I18nextProvider>
//         )

//         expect(screen.getByRole('dialog')).toHaveClass('max-w-2xl')
//     })
// })
