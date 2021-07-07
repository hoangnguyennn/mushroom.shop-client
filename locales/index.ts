import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import vi from './vi';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi }
  },
  lng: 'vi',
  fallbackLng: 'vi'
});

export default i18n;
