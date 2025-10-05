import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationForm, FormStep } from '../../types/formTypes';
import { FORM_LOCAL_STORAGE_KEY, initialFormData } from '../../utils/Constants';
import { removeLocalStorageItem, setLocalStorageItem } from '../../utils/helpers';

export interface FormState {
    currentStep: FormStep;
    formData: ApplicationForm;
    isSubmitting: boolean;
    submissionError: string | null;
}

export const initialState: FormState = {
    currentStep: 1,
    formData: initialFormData,
    isSubmitting: false,
    submissionError: null,
};

const handleUpdateFormDataInLocalStorage = (formData: ApplicationForm) => setLocalStorageItem(FORM_LOCAL_STORAGE_KEY, formData);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setCurrentStep: (state, action: PayloadAction<FormStep>) => {
            state.currentStep = action.payload;
        },
        updatePersonalInfo: (state, action: PayloadAction<FormState['formData']['personalInfo']>) => {
            state.formData.personalInfo = { ...state.formData.personalInfo, ...action.payload };
            handleUpdateFormDataInLocalStorage(state.formData);
        },
        updateFamilyFinancialInfo: (state, action: PayloadAction<FormState['formData']['familyFinancialInfo']>) => {
            state.formData.familyFinancialInfo = { ...state.formData.familyFinancialInfo, ...action.payload };
            handleUpdateFormDataInLocalStorage(state.formData);
        },
        updateSituationDescription: (state, action: PayloadAction<FormState['formData']['situationDescription']>) => {
            state.formData.situationDescription = { ...state.formData.situationDescription, ...action.payload };
            handleUpdateFormDataInLocalStorage(state.formData);
        },
        setSubmitting: (state, action: PayloadAction<boolean>) => {
            state.isSubmitting = action.payload;
        },
        setSubmissionError: (state, action: PayloadAction<string | null>) => {
            state.submissionError = action.payload;
        },
        updateFormWithCachedValues: (state, action: PayloadAction<ApplicationForm>) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        resetForm: (state) => {
            state.formData = initialState.formData;
            state.currentStep = 1;
            state.isSubmitting = false;
            state.submissionError = null;
            removeLocalStorageItem(FORM_LOCAL_STORAGE_KEY);
        },
    },
});

export const {
    setCurrentStep,
    updatePersonalInfo,
    updateFamilyFinancialInfo,
    updateSituationDescription,
    setSubmitting,
    setSubmissionError,
    updateFormWithCachedValues,
    resetForm,
} = formSlice.actions;

export default formSlice.reducer;
