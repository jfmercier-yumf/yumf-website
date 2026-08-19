export const languages = ["fr", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "fr";

export const locales = {
  fr: "fr-CA",
  en: "en-CA",
} as const satisfies Record<Language, string>;

export type Locale = (typeof locales)[Language];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function getLocale(language: Language): Locale {
  return locales[language];
}
