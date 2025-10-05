import { TStepOneForm, TStepTwoForm } from "../types/formTypes";
import { employmentStatusOptions, genderOptions, housingStatusOptions, maritalStatusOptions } from "./Constants";

export const personalInfoSchemaFields: TStepOneForm[] = [
    { name: 'name', label: 'form.name', type: 'text', required: true, placeholder: "form.namePlaceholder" },
    { name: 'nationalId', label: 'form.nationalId', type: 'text', required: true, placeholder: "form.nationallityPlaceholder" },
    { name: 'dateOfBirth', label: 'form.dateOfBirth', type: 'date', required: true, placeholder: "form.dateOfBirthPlaceholder" },
    { name: 'gender', label: 'form.maritalStatus', type: 'select', required: true, options: genderOptions },
    { name: 'address', label: 'form.address', type: 'text', required: true, placeholder: "form.addressPlaceholder" },
    { name: 'city', label: 'form.city', type: 'text', required: true, placeholder: "form.cityPlaceholder" },
    { name: 'state', label: 'form.state', type: 'text', required: true, placeholder: "form.statePlaceholder" },
    { name: 'country', label: 'form.country', type: 'text', required: true, placeholder: "form.countryPlaceholder" },
    { name: 'phone', label: 'form.phone', type: 'tel', required: true, placeholder: "form.phonePlaceholder" },
    { name: 'email', label: 'form.email', type: 'email', required: true, placeholder: "form.emailPlaceholder" },
];

export const familyFinancialSchemaFields: TStepTwoForm[] = [
    { name: 'maritalStatus', label: 'form.maritalStatus', type: 'select', required: true, options: maritalStatusOptions, },
    { name: 'dependents', label: 'form.dependents', type: 'number', required: true, inputProps: { min: 0, max: 20, }, registerOptions: { valueAsNumber: true, }, },
    { name: 'employmentStatus', label: 'form.employmentStatus', type: 'select', required: true, options: employmentStatusOptions, },
    { name: 'monthlyIncome', label: 'form.monthlyIncome', type: 'number', required: true, inputProps: { min: 0, step: 0.01, }, registerOptions: { valueAsNumber: true, }, },
    { name: 'housingStatus', label: 'form.housingStatus', type: 'select', required: true, options: housingStatusOptions, },
];
