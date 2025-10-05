import { z } from 'zod';

export const personalInfoSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    nationalId: z.string().min(5, 'National ID must be at least 5 characters'),
    dateOfBirth: z.string().refine((val) => {
        const birthDate = new Date(val);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        return age >= 18;
    }, 'Must be at least 18 years old'),
    gender: z.enum(['male', 'female']),
    address: z.string().min(5, 'Address must be at least 5 characters'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    country: z.string().min(2, 'Country is required'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    email: z.string().email('Invalid email address'),
});

export const familyFinancialSchema = z.object({
    maritalStatus: z.enum(['single', 'married', 'divorced', 'widowed']),
    dependents: z.number().min(0).max(20, 'Maximum 20 dependents allowed'),
    employmentStatus: z.enum(['employed', 'unemployed', 'student', 'retired']),
    monthlyIncome: z.number().min(0, 'Income cannot be negative'),
    housingStatus: z.enum(['owned', 'rented', 'with_family', 'other']),
});

export const situationDescriptionSchema = z.object({
    financialSituation: z.string().min(10, 'Please provide at least 10 characters'),
    employmentCircumstances: z.string().min(10, 'Please provide at least 10 characters'),
    reasonForApplying: z.string().min(10, 'Please provide at least 10 characters'),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
export type FamilyFinancialFormData = z.infer<typeof familyFinancialSchema>;
export type SituationDescriptionFormData = z.infer<typeof situationDescriptionSchema>;
