import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import trans from '../lib/i18n/index';

const initOptions = {
  fallbackLng: 'ru',
  resources: trans,
  lng: 'ru',
  debug: false,
  backend: {
    loadPath: '../lib/i18n/{{lng}}/{{lng}}.json',
  },
};

i18n.use(initReactI18next).init(initOptions);

export default i18n;
