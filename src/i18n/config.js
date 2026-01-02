import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import csTranslations from './locales/cs.json';
import enTranslations from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: csTranslations },
      en: { translation: enTranslations }
    },
    lng: 'cs',
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
