import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { situationDescriptionSchema, SituationDescriptionFormData } from '../../../utils/validation';
import { updateSituationDescription, setSubmitting } from '../../../store/slices/formSlice';
import { RootState } from '../../../store/store';
import TextAreaWithAI from '../../AIAssistedTextarea/AIAssistedTextarea';
import AISuggestionModal from '../../AISuggestionModal/AISuggestionModal';
import { useAIAssistant } from '../../../hooks/useAIAssistant';
import { Button } from '../../UI';
interface Step3SituationDescriptionProps {
    onSubmit: () => void;
    onBack: () => void;
}

export const Step3SituationDescription: React.FC<Step3SituationDescriptionProps> = ({
    onSubmit,
    onBack,
}) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form.formData);
    const isRTL = useRef(i18n.language === 'ar');

    useEffect(() => {
        isRTL.current = i18n.language === 'ar';
    }, [i18n.language]);

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid },
    } = useForm<SituationDescriptionFormData>({
        resolver: zodResolver(situationDescriptionSchema),
        defaultValues: formData.situationDescription,
        mode: 'onChange',
    });

    const financialSituationValue = watch('financialSituation');
    const employmentCircumstancesValue = watch('employmentCircumstances');
    const reasonForApplyingValue = watch('reasonForApplying');

    const fieldConfigs = useRef({
        financialSituation: {
            label: t('form.financialSituation'),
            prompt: t('form.aiAssist.prompts.financialSituation', 'Help me write about my current financial situation including income, expenses, debts, and financial challenges'),
            context: t('form.aiAssist.contexts.financialSituation', 'The user is applying for government social support and needs to describe their financial circumstances professionally and clearly.')
        },
        employmentCircumstances: {
            label: t('form.employmentCircumstances'),
            prompt: t('form.aiAssist.prompts.employmentCircumstances', 'Help me describe my employment situation, job search efforts, work history, and employment challenges'),
            context: t('form.aiAssist.contexts.employmentCircumstances', 'The user needs to explain their employment status, job search activities, and any barriers to employment.')
        },
        reasonForApplying: {
            label: t('form.reasonForApplying'),
            prompt: t('form.aiAssist.prompts.reasonForApplying', 'Help me explain why I need financial assistance and how it will help improve my situation'),
            context: t('form.aiAssist.contexts.reasonForApplying', 'The user must clearly articulate their need for support and how the assistance will make a difference in their life.')
        }
    }).current;

    const {
        aiState,
        handleAIAssist,
        closeAIModal,
        retryAIAssist,
    } = useAIAssistant({
        formData,
        fieldConfigs,
    });

    const acceptSuggestion = () => {
        if (aiState.field && aiState.suggestion) {
            setValue(aiState.field as keyof SituationDescriptionFormData, aiState.suggestion, {
                shouldValidate: true,
                shouldDirty: true
            });
        }
        closeAIModal();
    };

    const handleEditSuggestion = () => {
        if (aiState.field && aiState.suggestion) {
            setValue(aiState.field as keyof SituationDescriptionFormData, aiState.suggestion, {
                shouldValidate: true,
                shouldDirty: true
            });
            closeAIModal();
        }
    };

    const handleFieldChange = (fieldName: keyof SituationDescriptionFormData) => (value: string) => {
        setValue(fieldName, value, { shouldValidate: true, shouldDirty: true });
    }

    const onFormSubmit = async (data: SituationDescriptionFormData) => {
        dispatch(updateSituationDescription(data));
        dispatch(setSubmitting(true));

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            onSubmit();
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            dispatch(setSubmitting(false));
        }
    };

    const getFieldLabel = (field: string | null) => {
        if (!field) return '';
        return fieldConfigs[field as keyof typeof fieldConfigs]?.label || field;
    };

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3 flex-1">
                            <h3 className="text-sm font-medium text-blue-800">
                                {t('form.aiAssist.available')}
                            </h3>
                            <div className="mt-1 text-sm text-blue-700">
                                <p>
                                    {t('form.aiAssist.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <TextAreaWithAI
                        name="financialSituation"
                        label={t('form.financialSituation')}
                        placeholder={t('form.financialSituationPlaceholder')}
                        required
                        onAIAssist={handleAIAssist}
                        error={errors.financialSituation?.message}
                        value={financialSituationValue || ''}
                        onChange={handleFieldChange('financialSituation')}
                    />

                    <TextAreaWithAI
                        name="employmentCircumstances"
                        label={t('form.employmentCircumstances')}
                        placeholder={t('form.employmentCircumstancesPlaceholder')}
                        required
                        onAIAssist={handleAIAssist}
                        error={errors.employmentCircumstances?.message}
                        value={employmentCircumstancesValue || ''}
                        onChange={handleFieldChange('employmentCircumstances')}
                    />

                    <TextAreaWithAI
                        name="reasonForApplying"
                        label={t('form.reasonForApplying')}
                        placeholder={t('form.reasonForApplyingPlaceholder')}
                        required
                        onAIAssist={handleAIAssist}
                        error={errors.reasonForApplying?.message}
                        value={reasonForApplyingValue || ''}
                        onChange={handleFieldChange('reasonForApplying')}
                    />
                </div>

                <div className={`flex justify-between pt-4 ${isRTL.current ? 'flex-row-reverse' : ''}`}>
                    <Button type="button" variant="outline" onClick={onBack}>
                        {t('form.back')}
                    </Button>
                    <Button type="submit" disabled={!isValid}>
                        {t('form.submit')}
                    </Button>
                </div>
            </form>

            <AISuggestionModal
                isOpen={aiState.isOpen}
                onClose={closeAIModal}
                field={aiState.field}
                fieldLabel={getFieldLabel(aiState.field)}
                currentText={aiState.currentText}
                suggestion={aiState.suggestion}
                isLoading={aiState.isLoading}
                error={aiState.error}
                onRetry={retryAIAssist}
                onAccept={acceptSuggestion}
                onEdit={handleEditSuggestion}
            />
        </>
    );
};
