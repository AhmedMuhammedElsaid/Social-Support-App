import React from 'react';
import { generateId } from '../../../utils/helpers';
import { InputProps } from '../../../types/componentsTypes';

const Input: React.FC<InputProps> = ({
    label,
    error,
    required = false,
    className = '',
    id,
    ...props
}) => {
    const inputId = id || `input-${generateId()}`;
    return (
        <div className="w-full">
            <label htmlFor={inputId}
                className="block text-sm font-medium text-gray-700 mb-1">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={inputId}
                className={`
                    w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200
                    ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${inputId}-error` : undefined}
                {...props} />
            {error && (<p id={`${inputId}-error`} className="mt-1 text-sm text-red-600" role="alert" >{error}</p>)}
        </div>
    );
};
export default Input;
