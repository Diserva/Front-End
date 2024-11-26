import i18next from 'i18next';
import { AVAILABLE_LANGUAGES } from '../definitions';

export function changeLanguage(language: AVAILABLE_LANGUAGES) {
      i18next.changeLanguage(language);
      

}

