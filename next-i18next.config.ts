import i18next, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './app/lib/i18';
import { uk } from './app/lib/i18';
import { AVAILABLE_LANGUAGES } from '@/app/lib/definitions';

const translations: Record<AVAILABLE_LANGUAGES, ResourceLanguage> = {
    en: {
        translation: en
    },
    uk: {
        translation: uk
    }
};

i18next
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: 'en',
        supportedLngs: ['en', 'uk']
    });

export default i18next;
