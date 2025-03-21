import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "../lib/i18n/ru/ru.json";
import kkTranslation from "../lib/i18n/kk/kk.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ruTranslation },
      kk: { translation: kkTranslation },
    },
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
    debug: false,
    backend: {
      loadPath: '../lib/i18n/{{lng}}/{{lng}}.json',
    },
  });

export default i18n;
