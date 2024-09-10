import en from "~/translations/en.json";
import de from "~/translations/de.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: en,
    de: de,
  },
}));
