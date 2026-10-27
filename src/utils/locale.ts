import { siteConfig, type Locale } from '../config/site';

export type PublishedLocale = (typeof siteConfig.publishedLocales)[number];

export function isLocale(value: string): value is Locale {
  return (siteConfig.locales as readonly string[]).includes(value);
}

export function isPublishedLocale(value: string): value is PublishedLocale {
  return (siteConfig.publishedLocales as readonly string[]).includes(value);
}

export function publishedLocalePaths() {
  return siteConfig.publishedLocales.map((locale) => ({ params: { locale } }));
}

export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function whatsappUrl(number: string, message: string): string | null {
  const digits = number.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
