// import type { Meta, StoryObj } from '@storybook/react'
// import { Modal } from './Modal'
// import { Button } from '../Button/Button'
// import { useState } from 'react'

// const ModalExample = ({ size }: { size: 'sm' | 'md' | 'lg' | 'xl' }) => {
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <>
//             <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
//             <Modal
//                 isOpen={isOpen}
//                 onClose={() => setIsOpen(false)}
//                 title="Example Modal"
//                 size={size}
//             >
//                 <div className="space-y-4">
//                     <p>This is an example modal content. You can put any content here.</p>
//                     <div className="flex justify-end space-x-2">
//                         <Button variant="outline" onClick={() => setIsOpen(false)}>
//                             Cancel
//                         </Button>
//                         <Button onClick={() => setIsOpen(false)}>
//                             Confirm
//                         </Button>
//                     </div>
//                 </div>
//             </Modal>
//         </>
//     )
// }

// const meta: Meta<typeof Modal> = {
//     title: 'UI/Modal',
//     component: Modal,
//     parameters: {
//         layout: 'centered',
//     },
//     tags: ['autodocs'],
// }

// export default meta
// type Story = StoryObj<typeof Modal>

// export const Small: Story = {
//     render: () => <ModalExample size="sm" />,
// }

// export const Medium: Story = {
//     render: () => <ModalExample size="md" />,
// }

// export const Large: Story = {
//     render: () => <ModalExample size="lg" />,
// }

// export const ExtraLarge: Story = {
//     render: () => <ModalExample size="xl" />,
// }
