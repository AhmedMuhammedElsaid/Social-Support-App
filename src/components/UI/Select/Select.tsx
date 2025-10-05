import React from 'react'
import { useTranslation } from 'react-i18next'
import { SelectProps } from '../../../types/componentsTypes'

const Select: React.FC<SelectProps> = ({
    label,
    options,
    error,
    required = false,
    className = '',
    id,
    isSM,
    ...props
}) => {
    const { t } = useTranslation()
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

    return (
        <div className={isSM ? "" : "w-full"}>
            <label htmlFor={selectId}
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">
                {label} {required && <span className="text-red-500">*</span>} </label>
            <select
                id={selectId}
                className={`w-full px-3 py-2 border rounded-lg shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white
                ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
                 ${className}`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${selectId}-error` : undefined}
                {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{t(option.label)}</option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert" id={`${selectId}-error`}>{error}</p>
            )}
        </div>
    )
}
export default Select
