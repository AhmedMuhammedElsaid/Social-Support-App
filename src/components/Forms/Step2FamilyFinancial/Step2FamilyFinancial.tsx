import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { familyFinancialSchema, FamilyFinancialFormData } from '../../../utils/validation'
import { updateFamilyFinancialInfo, setCurrentStep } from '../../../store/slices/formSlice'
import { RootState } from '../../../store/store'
import { Select, Button, Input } from '../../UI'
import { familyFinancialSchemaFields } from '../../../utils/inputsBuilder'
interface Step2FamilyFinancialProps {
    onNext: () => void
    onBack: () => void
}

export const Step2FamilyFinancial: React.FC<Step2FamilyFinancialProps> = ({ onNext, onBack, }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const formData = useSelector((state: RootState) => state.form.formData.familyFinancialInfo)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<FamilyFinancialFormData>({
        resolver: zodResolver(familyFinancialSchema),
        defaultValues: formData,
        mode: 'onChange',
    })

    useEffect(() => {
        reset(formData);
    }, [formData]);

    const onSubmit = (data: FamilyFinancialFormData) => {
        dispatch(updateFamilyFinancialInfo(data))
        dispatch(setCurrentStep(3))
        onNext()
    }

    const renderInputFields = useCallback(() =>
        familyFinancialSchemaFields.map((field) => {
            const error = errors[field.name]?.message;
            const commonProps = { key: field.name, label: t(field.label), error, required: field.required };
            if (field.type === 'select') return (<Select{...commonProps} options={field.options}{...register(field.name)} />);
            return <Input {...commonProps} type={field.type} {...field.inputProps} {...register(field.name, field.registerOptions)} />
        }), [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{renderInputFields()}</div>
            <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={onBack}>{t('form.back')}</Button>
                <Button type="submit" disabled={!isValid}>{t('form.next')}</Button>
            </div>
        </form>
    )
}
