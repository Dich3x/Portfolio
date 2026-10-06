export const supportedLanguages = ["ru", "en"] as const;

export type LangType = (typeof supportedLanguages)[number];
