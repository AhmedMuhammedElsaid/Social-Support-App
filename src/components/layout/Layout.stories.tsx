// Layout.stories.tsx (Minimal version)
import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: <div className="p-8"><h1>Main Content</h1><p>This is the main content area.</p></div>,
    },
};
export const WithHeader: Story = {
    args: {
        header: <div className="p-4 bg-blue-500 text-white">Header Content</div>,
        children: <div className="p-8"><h1>Main Content</h1><p>This layout has a header.</p></div>,
    },
};

export const WithSidebar: Story = {
    args: {
        header: <div className="p-4 bg-gray-800 text-white">Application Header</div>,
        sidebar: <div className="p-4 bg-white h-full">Sidebar Navigation</div>,
        children: <div className="p-8"><h1>Dashboard</h1><p>This layout has a header and sidebar.</p></div>,
    },
};

export const Complete: Story = {
    args: {
        header: <div className="p-4 bg-gray-800 text-white">Application Header</div>,
        sidebar: <div className="p-4 bg-white h-full">Sidebar Menu</div>,
        footer: <div className="p-4 bg-gray-100 text-center">Footer Content</div>,
        children: <div className="p-8"><h1>Complete Application</h1><p>This is the complete layout with all sections.</p></div>,
    },
};
