import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { personalInfoSchema, PersonalInfoFormData } from '../../../utils/validation';
import { updatePersonalInfo, setCurrentStep } from '../../../store/slices/formSlice';
import { personalInfoSchemaFields } from '../../../utils/inputsBuilder';
import { RootState } from '../../../store/store';
import { Input, Button, Select } from '../../UI';

interface Step1PersonalInfoProps { onNext: () => void; }

export const Step1PersonalInfo: React.FC<Step1PersonalInfoProps> = ({ onNext }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form.formData.personalInfo);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: formData,
        mode: 'onChange',
    });

    const onSubmit = (data: PersonalInfoFormData) => {
        dispatch(updatePersonalInfo(data));
        dispatch(setCurrentStep(2));
        onNext();
    };

    useEffect(() => {
        reset(formData);
    }, [formData]);

    const renderInputFields = useCallback(() =>
        personalInfoSchemaFields.map((field) => {
            const isSelectInput = field.type === 'select'
            const commonProps = {
                label: t(field.label),
                error: errors[field.name]?.message,
                required: field.required,
                ...register(field.name),
            };
            return isSelectInput ?
                <Select key={field.name} options={field.options} {...commonProps} />
                : <Input key={field.name} type={field.type} {...commonProps} placeholder={t(field.placeholder || "")} />
        }), [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderInputFields()}
            </div>
            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={!isValid}>{t('form.next')}</Button>
            </div>
        </form>
    );
};
