import { StoryObj, Meta } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'Components/LanguageSwitcher',
    component: LanguageSwitcher,
    decorators: [
        (Story) => (
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};
