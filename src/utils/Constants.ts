import { ApplicationForm } from "../types/formTypes";

export const URLS = Object.freeze({
    OPENAI_API_URL: 'https://api.openai.com/v1/chat/completions'
})

export const FORM_LOCAL_STORAGE_KEY = 'socialSupportFormCachedData';
export const LANG_LOCAL_STORAGE_KEY = 'i18nextLng';

export const steps = [
    'form.personalInfo',
    'form.familyFinancial',
    'form.situationDescription',];


export const genderOptions = [
    { value: 'male', label: 'form.genderOptions.male' },
    { value: 'female', label: 'form.genderOptions.female' }
]
export const maritalStatusOptions = [
    { value: 'single', label: 'form.maritalStatusOptions.single' },
    { value: 'married', label: 'form.maritalStatusOptions.married' },
    { value: 'divorced', label: 'form.maritalStatusOptions.divorced' },
    { value: 'widowed', label: 'form.maritalStatusOptions.widowed' },
]

export const employmentStatusOptions = [
    { value: 'employed', label: 'form.employmentStatusOptions.employed' },
    { value: 'unemployed', label: 'form.employmentStatusOptions.unemployed' },
    { value: 'student', label: 'form.employmentStatusOptions.student' },
    { value: 'retired', label: 'form.employmentStatusOptions.retired' },
]

export const housingStatusOptions = [
    { value: 'owned', label: 'form.housingStatusOptions.owned' },
    { value: 'rented', label: 'form.housingStatusOptions.rented' },
    { value: 'with_family', label: 'form.housingStatusOptions.with_family' },
    { value: 'other', label: 'form.housingStatusOptions.other' },
]
export const LANGUAGES = [
    { value: 'en', label: 'En' },
    { value: 'ar', label: 'Arabic' },
];

export const modalSizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
}

export const aISuggestionFallbacks: { [key: string]: string } = {
    financialSituation: "I am experiencing financial hardship due to unexpected circumstances that have impacted my ability to cover essential living expenses. My current situation requires temporary assistance to maintain stability while I work towards long-term solutions.",
    employmentCircumstances: "I have been actively seeking employment opportunities while developing new skills to enhance my job prospects. Current market conditions have created barriers that this support would help me overcome during my transition.",
    reasonForApplying: "This financial assistance would provide crucial support during a challenging transitional period, allowing me to address immediate needs while working towards sustainable independence and stability."
};

export const initialFormData: ApplicationForm = {
    personalInfo: {
        name: '',
        nationalId: '',
        dateOfBirth: '',
        gender: undefined,
        address: '',
        city: '',
        state: '',
        country: '',
        phone: '',
        email: '',
    },
    familyFinancialInfo: {
        maritalStatus: undefined,
        dependents: 0,
        employmentStatus: undefined,
        monthlyIncome: 0,
        housingStatus: undefined,
    },
    situationDescription: {
        financialSituation: '',
        employmentCircumstances: '',
        reasonForApplying: '',
    },
}
