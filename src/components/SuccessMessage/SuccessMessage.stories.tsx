import { Meta, StoryObj } from '@storybook/react';
import SuccessMessage from './SuccessMessage';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const meta: Meta<typeof SuccessMessage> = {
    title: 'Components/SuccessMessage',
    component: SuccessMessage,
    decorators: [
        (Story) => (
            <I18nextProvider i18n={i18n}>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <Story />
                </div>
            </I18nextProvider>
        ),
    ],
    args: {
        handleClick: () => alert('Submit new one clicked!'),
    },
};

export default meta;

type Story = StoryObj<typeof SuccessMessage>;

export const Default: Story = {};
