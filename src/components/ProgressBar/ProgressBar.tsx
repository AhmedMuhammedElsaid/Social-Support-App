import React from 'react'
import { useTranslation } from 'react-i18next'

export interface ProgressBarProps {
    currentStep: number
    totalSteps: number
    steps: string[]
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    currentStep,
    totalSteps,
    steps,
}) => {
    const { t } = useTranslation()
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

    return (
        <div className="w-full mb-8">
            {/* Progress Bar */}
            <div className="relative mb-4">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                    <div
                        style={{ width: `${progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
            </div>

            {/* Step Labels */}
            <div className="flex justify-between">
                {steps.map((step, index) => {
                    const stepNumber = index + 1
                    const isCompleted = stepNumber < currentStep
                    const isCurrent = stepNumber === currentStep

                    return (
                        <div
                            key={stepNumber}
                            className={`flex flex-col items-center ${isCompleted ? 'text-blue-600' : isCurrent ? 'text-blue-600 font-medium' : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                         border-2 ${isCompleted
                                        ? 'bg-blue-600 border-blue-600 text-white'
                                        : isCurrent
                                            ? 'border-blue-600 bg-white text-blue-600 dark:bg-gray-800'
                                            : 'border-gray-300 bg-white text-gray-500 dark:border-gray-600 dark:bg-gray-800'
                                    }`}
                                aria-current={isCurrent ? 'step' : undefined}
                            >
                                {isCompleted ? (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    stepNumber
                                )}
                            </div>
                            <span className="text-xs mt-2 text-center hidden sm:block">
                                {t(step)}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProgressBar
