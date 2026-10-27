import type { Locale } from '../config/site';

const fr = {
  nav: {
    home: 'Accueil',
    about: "L'Institut",
    programs: 'Formations',
    centers: 'Nos Centres',
    germany: 'Étudier en Allemagne',
    testimonials: 'Témoignages',
    contact: 'Contact',
    enroll: "S'inscrire",
  },
  common: {
    discoverPrograms: 'Découvrir les formations',
    contactCenter: 'Contacter le centre',
    learnMore: 'En savoir plus',
    viewAll: 'Voir tout',
    backHome: "Retour à l'accueil",
    language: 'Langue',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    verified: 'Informations vérifiées',
    needsConfirmation: 'Adresse à confirmer',
  },
  home: {
    heroEyebrow: 'Allemando Institut · Langue · Culture · Orientation',
    heroTitleBefore: 'Votre partenaire pour construire votre avenir en',
    heroTitleAccent: 'Allemagne',
    heroLead:
      "Apprenez l'allemand, préparez votre projet et avancez avec un accompagnement sérieux vers l'Allemagne.",
    heroPrimary: "S'inscrire",
    heroSecondary: 'Découvrir les formations',
    heroCenters: 'Nos centres : Marrakech · Agadir · Ouarzazate · Béni Mellal',
    trustTitle: 'Pourquoi Allemando',
    programsTitle: 'Nos formations',
    programsLead:
      'Un parcours CECRL clair, en présentiel ou à distance, adapté à vos objectifs académiques et professionnels.',
    centersTitle: 'Nos centres',
    centersLead:
      'Un réseau d’instituts au Maroc pour apprendre près de chez vous.',
    faqTitle: 'Questions fréquentes',
    ctaTitle: 'Prêt à commencer ?',
    ctaLead:
      'Contactez un centre Allemando pour connaître les prochaines sessions et le parcours adapté à votre niveau.',
  },
  footer: {
    tagline: 'Langue · Culture · Orientation',
    rights: 'Tous droits réservés.',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    social: 'Suivez-nous',
  },
  contact: {
    title: 'Contact',
    lead: 'Écrivez-nous ou rejoignez-nous sur nos canaux officiels pour une orientation personnalisée.',
    viaEmail: 'Par e-mail',
    viaFacebook: 'Facebook',
    viaLinkedIn: 'LinkedIn',
    viaWhatsApp: 'WhatsApp',
    note: 'Les coordonnées téléphoniques et adresses exactes sont confirmées centre par centre.',
  },
  about: {
    title: "L'Institut Allemando",
    lead: 'Langue, culture et orientation — un accompagnement pour apprendre l’allemand et préparer votre projet en Allemagne.',
  },
  germany: {
    title: 'Étudier et se former en Allemagne',
    lead: 'Orientation études, Ausbildung et préparation aux examens — sans promesse de visa ni de résultat d’admission.',
  },
} as const;

type Dictionary = typeof fr;

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  de: fr,
  ar: fr,
};

export function getUi(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}

export function tLocalized(
  field: { fr: string; de?: string; ar?: string },
  locale: Locale,
): string {
  if (locale === 'de' && field.de) return field.de;
  if (locale === 'ar' && field.ar) return field.ar;
  return field.fr;
}

export function tLocalizedList(
  field: { fr: string[]; de?: string[]; ar?: string[] },
  locale: Locale,
): string[] {
  if (locale === 'de' && field.de) return field.de;
  if (locale === 'ar' && field.ar) return field.ar;
  return field.fr;
}
