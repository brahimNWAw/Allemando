# Allemando.ma

Site vitrine statique pour **Allemando Institut** — langue allemande, culture et orientation au Maroc.

## Stack

- Astro + TypeScript
- Tailwind CSS v4
- Content Collections (JSON) pour formations et centres
- Déploiement prévu : build → upload de `dist/` sur Namecheap `public_html`

## Commandes

```bash
# Node.js >= 22.23.4 recommandé
npm install
npm run dev
npm run build
npm run preview
```

## Structure utile

- `src/content/courses/` — formations A1–C1
- `src/content/locations/` — centres (Marrakech, Ouarzazate, Beni Mellal, Agadir)
- `src/i18n/ui.ts` — textes d’interface (FR principal ; DE/AR prêts)
- `public/images/brand/logo.jpg` — logo officiel

## Déploiement Namecheap (shared hosting)

Ce site est **100 % statique**. Namecheap n’a pas besoin de Node.js.

### Sur votre Mac

```bash
nvm use 22
npm install
npm run build
```

Cela crée le dossier `dist/` (HTML, CSS, images, `.htaccess`).

### Dans cPanel Namecheap

1. Ouvrez **File Manager** → `public_html`
2. Supprimez les fichiers par défaut inutiles (ex. `index.html` d’accueil Namecheap)
3. Uploadez **tout le contenu** de `dist/` (pas le dossier `dist` lui-même) dans `public_html`
4. Activez **SSL** (AutoSSL / Let’s Encrypt) pour `allemando.ma`
5. Ouvrez `https://allemando.ma` → doit aller vers `/fr/`

Structure attendue sur le serveur :

```
public_html/
  index.html
  .htaccess
  fr/
  _astro/
  images/
  robots.txt
  sitemap-index.xml
```

Pas de PHP, pas de base de données, pas de `npm` sur le serveur.

## Contenu à confirmer avec l’institut

- Adresses exactes (hors Beni Mellal déjà listée)
- Téléphones / WhatsApp officiels
- E-mail institutionnel définitif
- Témoignages avec consentement
- Photos authentiques des centres
