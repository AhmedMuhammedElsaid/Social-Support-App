import React from 'react'
import { generateId } from '../../../utils/helpers'
import { TextareaProps } from '../../../types/componentsTypes'


const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    required = false,
    className = '',
    id,
    ...props
}) => {
    const textareaId = id || `textarea-${generateId()}`
    return (
        <div className="w-full">
            <label
                htmlFor={textareaId}
                className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                id={textareaId}
                className={`
          w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200 resize-vertical min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'}
          ${className}
        `}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${textareaId}-error` : undefined}
                {...props}
            />
            {error && (
                <p
                    id={`${textareaId}-error`}
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    )
}
export default Textarea
