import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lnEn from './localize/en.json';
import lnTr from './localize/tr.json';
import lnGr from './localize/gr.json';

i18n.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: lnEn
        },

        tr: {
            translation: lnTr
        },

        gr: {
            translation: lnGr
        }
    },
    lng: "tr",
    fallbackLng: "tr",
    interpolation: {
        escapeValue: false
    }
});
export default i18n;