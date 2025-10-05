import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Step2FamilyFinancial } from '../Step2FamilyFinancial/Step2FamilyFinancial';
import { Step3SituationDescription } from '../Step3SituationDescription/Step3SituationDescription';
import { setCurrentStep, resetForm, updateFormWithCachedValues } from '../../../store/slices/formSlice';
import { RootState } from '../../../store/store';
import { ApplicationForm, FormStep } from '../../../types/formTypes';
import { Step1PersonalInfo } from '../Step1PersonalInfo/Step1PersonalInfo';
import ProgressBar from '../../ProgressBar/ProgressBar';
import SuccessMessage from '../../SuccessMessage/SuccessMessage';
import { getLocalStorageItem } from '../../../utils/helpers';
import { FORM_LOCAL_STORAGE_KEY } from '../../../utils/Constants';

export const FormWizard: React.FC = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { currentStep, isSubmitting } = useSelector((state: RootState) => state.form);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const cachedForm = getLocalStorageItem(FORM_LOCAL_STORAGE_KEY);
        if (cachedForm) dispatch(updateFormWithCachedValues(cachedForm as ApplicationForm));
    }, []);

    const steps = [
        'form.personalInfo',
        'form.familyFinancial',
        'form.situationDescription',
    ];

    const handleNext = () => {
        if (currentStep < 3) dispatch(setCurrentStep((currentStep + 1) as FormStep));
    };

    const handleBack = () => {
        if (currentStep > 1) dispatch(setCurrentStep((currentStep - 1) as FormStep));
    };

    const handleSubmit = () => {
        setShowSuccess(true);
        dispatch(resetForm());
    };

    const renderCurrentStep = useCallback(() => {
        switch (currentStep) {
            case 1:
                return <Step1PersonalInfo onNext={handleNext} />;
            case 2:
                return <Step2FamilyFinancial onNext={handleNext} onBack={handleBack} />;
            case 3:
                return <Step3SituationDescription onSubmit={handleSubmit} onBack={handleBack} />;
            default:
                return null;
        }
    }, [currentStep]);

    if (showSuccess) return <SuccessMessage handleClick={() => setShowSuccess(false)} />

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8" dir={i18n.dir()}>
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 px-6 py-4">
                        <h1 className="text-2xl font-bold text-white text-center">
                            {t('application')}
                        </h1>
                    </div>
                    <div className="px-6 py-4 border-b border-gray-200">
                        <ProgressBar
                            currentStep={currentStep}
                            totalSteps={steps.length}
                            steps={steps}
                        />
                    </div>
                    <div className="px-6 py-6">
                        {isSubmitting ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" />
                                <p className="text-gray-600">{t('common.loading')}</p>
                            </div>
                        ) : (renderCurrentStep())}
                    </div>
                </div>
            </div>
        </div>
    );
};
