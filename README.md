# Coaching Sportif — Île Maurice

Site vitrine one-page, Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx` — assemble les 7 sections
- `components/` — un composant par section (Hero, Coach, Method, Pricing,
  Testimonials, Faq, Contact) + Nav et WhatsappCta
- `app/globals.css` — tokens de couleur, effet glassmorphism, animation de
  la frise "Ma méthode"
- `tailwind.config.ts` — palette (bleu nuit, corail, turquoise)

## À faire avant mise en ligne

- [ ] **Nom de marque** — remplacer les mentions "Coaching Sportif Maurice" /
      "Coaching Sportif Île Maurice" dans `app/layout.tsx` et
      `components/Nav.tsx` par le nom définitif
- [ ] **Domaine** — remplacer `https://www.example.com` dans
      `app/layout.tsx`, `app/robots.ts` et `app/sitemap.ts`
- [ ] **Photos** — remplacer les deux placeholders "Photo du coach — à
      ajouter" (`components/Hero.tsx` et `components/Coach.tsx`) par de
      vraies photos via `next/image`
- [ ] **Carte Google Maps** — `components/Contact.tsx` utilise un embed
      simple sans clé API ; passer sur l'API Google Maps Embed officielle
      avec une clé si besoin d'un rendu plus fiable dans la durée
- [ ] **Google Business Profile** — créer/lier une fiche pour le SEO local
- [ ] **Numéro WhatsApp** — vérifier le format international dans
      `components/WhatsappCta.tsx` (actuellement 230 57822062)

## Déploiement

Projet prêt pour Vercel : `vercel deploy` ou connexion du repo Git
directement sur vercel.com.
