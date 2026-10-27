export type Testimonial = {
  number: string;
  quote: string;
  author: string;
  role: string;
  ctaLabel: string;
  ctaPath: string;
  /** Optional portrait / story graphic from Instagram */
  image?: string;
  sourceUrl?: string;
};

/**
 * Hero / témoignages carousel.
 * Real student successes are attributed to public Instagram posts — not invented quotes.
 */
export const testimonials: Testimonial[] = [
  {
    number: '01',
    quote:
      'Visa obtenu pour poursuivre ses études en Allemagne — un parcours Allemando Student devenu réalité.',
    author: 'Montassar',
    role: 'Visa études · Allemagne',
    ctaLabel: 'Étudier en Allemagne',
    ctaPath: 'etudier-en-allemagne',
    image: '/images/social/instagram/students/montassar-02.jpg',
    sourceUrl: 'https://www.instagram.com/p/C0KfbkTiFRK/?img_index=2',
  },
  {
    number: '02',
    quote:
      'Au-delà de la langue, Allemando accompagne les étapes pour étudier et se former en Allemagne — avec des informations claires, sans fausses promesses.',
    author: 'Parcours orientation',
    role: 'Études & Ausbildung',
    ctaLabel: 'Étudier en Allemagne',
    ctaPath: 'etudier-en-allemagne',
  },
  {
    number: '03',
    quote:
      'Apprendre près de chez soi — Marrakech, Agadir, Ouarzazate, Beni Mellal — en présentiel ou à distance, pour un projet réaliste.',
    author: 'Parcours local',
    role: 'Centres au Maroc',
    ctaLabel: 'Voir les centres',
    ctaPath: 'centres',
  },
  {
    number: '04',
    quote:
      'La méthode, la culture et l’orientation dans un même institut : ce qu’il faut pour construire un parcours vers l’Allemagne.',
    author: 'Parcours Allemando',
    role: 'Langue · Culture · Orientation',
    ctaLabel: 'Découvrir les formations',
    ctaPath: 'formations',
  },
];
