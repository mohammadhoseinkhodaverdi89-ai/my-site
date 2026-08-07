import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fa: {
      translation: {
        title: "سلام",
        btn: "فارسی",
      },
    },
    en: {
      translation: {
        title: "hello",
        btn: "english",
      },
    },
  },
  lng: "fa", // زبان پیش‌فرض برنامه
  fallbackLng: "en", // زبان جایگزین
  // در کانفیگ i18n
interpolation: {
  escapeValue: false // ⚠️ اگر این را False کنی، خودت باید حواست به XSS باشد
}
});

export default i18n;