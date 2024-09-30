import en from "~/locales/en.json";
import de from "~/locales/de.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    de: de,
  },
}));
