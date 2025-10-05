import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../utils/Constants';
import { Select } from '../UI';
import { setLocalStorageItem } from '../../utils/helpers';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = e.target.value
        i18n.changeLanguage(lang);
        document.body.dir = i18n.dir(lang);
        setLocalStorageItem("i18nextLng", lang)
    }, [])

    return (
        <Select
            isSM
            value={i18n.resolvedLanguage}
            options={LANGUAGES}
            aria-label="Select language"
            onChange={handleChange}
        />
    );
};
