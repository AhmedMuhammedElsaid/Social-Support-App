import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalProps } from '../../../types/componentsTypes'
import { modalSizeClasses } from '../../../utils/Constants'

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
}) => {
    const { t } = useTranslation()

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null


    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black/70 bg-opacity-50 transition-opacity" onClick={onClose} aria-hidden="true" />
            <div className="flex min-h-full items-center justify-center p-4">
                <div className={` relative bg-white rounded-lg shadow-xl w-full dark:bg-gray-800 ${modalSizeClasses[size]}`}
                    role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                        <h3 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button
                            className="text-gray-400 hover:text-gray-600 transition-colors dark:hover:text-gray-300"
                            onClick={onClose} aria-label={t('common.close')}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
