import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

// Move the ModalExample component outside the meta definition
const ModalExample = ({ size }: { size: 'sm' | 'md' | 'lg' | 'xl' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Example Modal"
                size={size}
            >
                <div className="space-y-4">
                    <p>This is an example modal content. You can put any content here.</p>
                    <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>
                            Confirm
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg', 'xl'],
        },
        isOpen: {
            control: { type: 'boolean' },
        },
        onClose: {
            action: 'closed',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Define stories using the args pattern instead of render functions
export const Small: Story = {
    args: {
        isOpen: true,
        size: 'sm',
        title: 'Small Modal',
    },
    render: (args) => (
        <Modal {...args}>
            <div className="space-y-4">
                <p>This is a small modal content.</p>
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => { }}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>
                        Confirm
                    </Button>
                </div>
            </div>
        </Modal>
    ),
};

export const Medium: Story = {
    args: {
        isOpen: true,
        size: 'md',
        title: 'Medium Modal',
    },
    render: (args) => (
        <Modal {...args}>
            <div className="space-y-4">
                <p>This is a medium modal content.</p>
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => { }}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>
                        Confirm
                    </Button>
                </div>
            </div>
        </Modal>
    ),
};

export const Large: Story = {
    args: {
        isOpen: true,
        size: 'lg',
        title: 'Large Modal',
    },
    render: (args) => (
        <Modal {...args}>
            <div className="space-y-4">
                <p>This is a large modal content.</p>
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => { }}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>
                        Confirm
                    </Button>
                </div>
            </div>
        </Modal>
    ),
};

export const ExtraLarge: Story = {
    args: {
        isOpen: true,
        size: 'xl',
        title: 'Extra Large Modal',
    },
    render: (args) => (
        <Modal {...args}>
            <div className="space-y-4">
                <p>This is an extra large modal content.</p>
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => { }}>
                        Cancel
                    </Button>
                    <Button onClick={() => { }}>
                        Confirm
                    </Button>
                </div>
            </div>
        </Modal>
    ),
};

// Interactive example with state management
export const Interactive: Story = {
    render: function Render() {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Interactive Modal</Button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Interactive Modal"
                    size="md"
                >
                    <div className="space-y-4">
                        <p>This modal demonstrates the interactive open/close behavior.</p>
                        <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setIsOpen(false)}>
                                Close
                            </Button>
                            <Button onClick={() => setIsOpen(false)}>
                                Action
                            </Button>
                        </div>
                    </div>
                </Modal>
            </>
        );
    },
};
