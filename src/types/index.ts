import { SituationDescriptionFormData } from "../utils/validation";
import { FamilyFinancialInfo, PersonalInfo } from "./formTypes";

export interface AISuggestionState {
    isOpen: boolean;
    field: keyof SituationDescriptionFormData | null;
    suggestion: string;
    isLoading: boolean;
}

export interface AIContext {
    personalInfo: PersonalInfo;
    financialInfo: FamilyFinancialInfo;
    field: string;
    currentText: string;
    prompt?: string;
    context?: string;
}
