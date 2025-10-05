import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from '../UI';

export interface AISuggestionModalProps {
    isOpen: boolean;
    onClose: () => void;
    field: string | null;
    fieldLabel: string;
    currentText: string;
    suggestion: string;
    isLoading: boolean;
    error: string | null;
    onRetry: () => void;
    onAccept: () => void;
    onEdit: () => void;
}

const AISuggestionModal: React.FC<AISuggestionModalProps> = ({
    isOpen,
    onClose,
    field,
    currentText,
    suggestion,
    isLoading,
    error,
    onRetry,
    onAccept,
    onEdit,
}) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const getFieldLabel = (fieldName: string | null) => {
        if (!fieldName) return '';
        // You can customize this based on your field names
        const fieldLabels: Record<string, string> = {
            financialSituation: t('form.financialSituation'),
            employmentCircumstances: t('form.employmentCircumstances'),
            reasonForApplying: t('form.reasonForApplying'),
        };
        return fieldLabels[fieldName] || fieldName;
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={`${t('form.aiAssist.suggestion')} - ${getFieldLabel(field)}`}
        >
            <div className="space-y-4">
                {currentText && (
                    <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                            {t('form.aiAssist.currentText')}
                        </h4>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 max-h-32 overflow-y-auto">
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {currentText}
                            </p>
                        </div>
                    </div>
                )}

                {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                        <div className="flex items-center space-x-3">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                            <span className="text-gray-600">
                                {t('form.aiAssist.generating')}
                            </span>
                        </div>
                    </div>
                ) : error ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-red-800 font-medium">
                                {error}
                            </span>
                        </div>
                        <p className="ml-3 my-4 text-sm text-red-700">{t('form.aiAssist.error')}</p>
                        <button
                            onClick={onRetry}
                            className="ml-3 mt-2 text-sm text-red-800 hover:text-red-900 underline"
                        >
                            {t('form.aiAssist.tryAgain')}
                        </button>
                    </div>
                ) : (
                    <>
                        <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                                {t('form.aiAssist.aiSuggestion')}
                            </h4>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-h-64 overflow-y-auto">
                                <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                                    {suggestion}
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <p className="text-xs text-yellow-800">
                                <strong>{t('form.aiAssist.tip')}:</strong> {t('form.aiAssist.tipDescription')}
                            </p>
                        </div>
                    </>
                )}

                {!isLoading && (
                    <div className={`flex gap-3 pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Button
                            variant="outline"
                            onClick={onClose}
                            disabled={isLoading}
                        >
                            {t('form.aiAssist.discard')}
                        </Button>
                        {!error && suggestion && (
                            <>
                                <Button
                                    variant="primary"
                                    onClick={onEdit}
                                    disabled={isLoading}
                                >
                                    {t('form.aiAssist.edit')}
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={onAccept}
                                    disabled={isLoading}
                                >
                                    {t('form.aiAssist.accept')}
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </Modal>
    );
};
export default AISuggestionModal;
