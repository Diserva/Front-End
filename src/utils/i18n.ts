import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/locales/en-En.json';
import ru from '../assets/locales/ru-Ru.json';
import uk from '../assets/locales/uk-Uk.json';

const loadLanguageFromLocalStorage = () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  return savedLanguage || 'en';
};

export const translations = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
  uk: {
    translation: uk,
  },
};

export const languageNames = [
  {
    value: 'en', 
    name: 'English'
  },
  {
    value: 'ru', 
    name: 'Russian'
  },
  {
    value: 'uk', 
    name: 'Ukraine'
  },
]; 

i18next.use(initReactI18next).init({
  debug: true,
  resources: translations,
  lng: loadLanguageFromLocalStorage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18next.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18next;