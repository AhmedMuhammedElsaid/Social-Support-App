export interface PersonalInfo {
    name: string;
    nationalId: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | undefined;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
}

export interface FamilyFinancialInfo {
    maritalStatus: 'single' | 'married' | 'divorced' | 'widowed' | undefined;
    dependents: number;
    employmentStatus: 'employed' | 'unemployed' | 'student' | 'retired' | undefined;
    monthlyIncome: number;
    housingStatus: 'owned' | 'rented' | 'with_family' | 'other' | undefined;
}

export interface SituationDescription {
    financialSituation: string;
    employmentCircumstances: string;
    reasonForApplying: string;
}

export interface ApplicationForm {
    personalInfo: PersonalInfo;
    familyFinancialInfo: FamilyFinancialInfo;
    situationDescription: SituationDescription;
}

export type FormStep = 1 | 2 | 3;

type TStep1FormValues = {
    name: string;
    nationalId: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    email: string;
};

type BaseField<T> = {
    name: keyof T;
    label: string;
    required?: boolean;
    placeholder?: string
    className?: string
    id?: string
    registerOptions?: Record<string, number | string | boolean | undefined>;
};

type InputField<T> = BaseField<T> & {
    type: 'text' | 'number' | 'email' | 'tel' | 'date';
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};


type SelectField<T> = BaseField<T> & {
    type: 'select';
    options: { label: string; value: string }[];
};

export type TStepOneForm = InputField<TStep1FormValues> | SelectField<TStep1FormValues>;

type TStep2FormValues = {
    maritalStatus: string;
    dependents: number;
    employmentStatus: string;
    monthlyIncome: number;
    housingStatus: string;
};

type SelectAdditionalField = BaseField<TStep2FormValues> & SelectField<TStep2FormValues>;

export type TStepTwoForm = InputField<TStep2FormValues> | SelectAdditionalField;
