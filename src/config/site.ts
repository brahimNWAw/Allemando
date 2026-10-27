export const siteConfig = {
  name: 'Allemando',
  legalName: 'Allemando Institut',
  tagline: 'Langue · Culture · Orientation',
  description:
    "Institut de langue allemande au Maroc. Formations A1 à C1, orientation études et Ausbildung en Allemagne.",
  url: 'https://allemando.ma',
  defaultLocale: 'fr' as const,
  /** All locales supported by the routing foundation. */
  locales: ['fr', 'de', 'ar'] as const,
  /** Locales actually generated for V1 (avoid untranslated DE/AR pages). */
  publishedLocales: ['fr'] as const,
  social: {
    facebook: 'https://www.facebook.com/allemandoinstitut',
    instagram: 'https://www.instagram.com/allemando_institut/',
    linkedin: 'https://ma.linkedin.com/company/allemando-deutsche-schule',
  },
  /**
   * Update `whatsappNumber` (international format, digits only) once confirmed.
   * Example: '2126XXXXXXXX'
   */
  contact: {
    email: 'contact@allemando.ma',
    whatsappNumber: '',
    whatsappMessage:
      "Bonjour Allemando, je souhaite m'informer sur vos formations d'allemand.",
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];
