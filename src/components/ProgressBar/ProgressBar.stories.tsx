import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    decorators: [
        (Story) => (
            <I18nextProvider i18n={i18n}>
                <div className="p-4 max-w-2xl mx-auto">
                    <Story />
                </div>
            </I18nextProvider>
        ),
    ],
    args: {
        currentStep: 2,
        totalSteps: 4,
        steps: ['step1', 'step2', 'step3', 'step4'],
    },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};

export const FirstStep: Story = {
    args: {
        currentStep: 1,
    },
};

export const LastStep: Story = {
    args: {
        currentStep: 4,
    },
};

export const CustomLabels: Story = {
    args: {
        steps: ['personalInfo', 'Finicial', 'Conditions', 'confirm'],
    },
};
