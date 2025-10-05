import { useTranslation } from "react-i18next";
import { TSuccessMessage } from "../../types/componentsTypes";

export default function SuccessMessage({ handleClick }: TSuccessMessage) {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('common.success')}
                </h2>
                <p className="text-gray-600 mb-6">
                    Your application has been submitted successfully. We will review your information and contact you soon.
                </p>
                <button
                    onClick={handleClick}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Submit Another Application
                </button>
            </div>
        </div>
    )
}
