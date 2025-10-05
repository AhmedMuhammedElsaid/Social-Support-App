import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../UI';

interface TextAreaWithAIProps {
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    onAIAssist: (field: string, currentText: string) => void;
    error?: string;
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: () => void;
}

const TextAreaWithAI: React.FC<TextAreaWithAIProps> = React.memo(({
    name,
    label,
    placeholder,
    required = false,
    onAIAssist,
    error,
    value = '',
    onChange,
}) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [localValue, setLocalValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (!isFocused && value !== localValue)
            setLocalValue(value);
    }, [value, isFocused, localValue]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        if (onChange) onChange(newValue);
    }, [onChange]);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleAIAssistClick = useCallback(() => {
        onAIAssist(name, localValue);
    }, [name, localValue]);

    useEffect(() => {
        if (!isFocused && value !== localValue) setLocalValue(value);
    }, [value, isFocused, localValue]);

    return (
        <div className="w-full mb-6">
            <div className={`flex justify-between items-center mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <label
                    htmlFor={name}
                    className={`block text-sm font-medium text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {label} {required && <span className="text-red-500">*</span>}</label>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAIAssistClick}
                    className="flex items-center gap-1"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t('form.aiAssist.helpMeWrite')}
                </Button>
            </div>
            <textarea
                ref={textareaRef}
                id={name}
                name={name}
                value={localValue}
                onChange={handleChange}
                onFocus={handleFocus}
                className={`
            w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-colors duration-200 min-h-[120px] resize-vertical
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
            ${isRTL ? 'text-right' : 'text-left'}`}
                placeholder={placeholder} aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? `${name}-error` : undefined} />
            {error && (<p id={`${name}-error`} className="mt-1 text-sm text-red-600" role="alert"> {error}</p>)}
        </div>
    );
});

TextAreaWithAI.displayName = 'TextAreaWithAI';
export default TextAreaWithAI;
