import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './messages/en-En.json';
import ru from './messages/ru-Ru.json';
import uk from './messages/uk-Uk.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en,
			ru,
			uk
		},
		lng: 'en',
		supportedLngs: ['en', 'uk', 'ru']
	});

export default i18next;
