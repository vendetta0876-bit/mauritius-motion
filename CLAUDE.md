# CLAUDE.md — Mauritius Motion (coaching sportif)

## Contexte
Site vitrine one-page pour une offre de coaching sportif physique classique
en présentiel, dans le Nord de l'île Maurice (Grand Baie, Trou aux Biches,
Pereybère, Mont Choisy, Cap Malheureux, Pointe aux Canonniers). Cible :
touristes de passage + résidents étrangers (pas les Mauriciens locaux,
budget non adapté).

Ce projet est distinct de deux autres projets du même coach (Alain Attieh /
Titi) : le site "Dépolarisation®" (préparation mentale) et "KTRLX"
(kettlebell pour traileurs). Ne pas mélanger le contenu ou la charte
graphique avec ces deux-là.

## Stack
- Next.js 16.3.4 (App Router, Turbopack), TypeScript, Tailwind CSS
- Polices : Anton (display) + Manrope (body), via next/font/google
- Déploiement prévu : Vercel
- `package.json` utilise un `overrides` pour forcer postcss ^8.5.10 (faille de
  sécurité corrigée sur la version embarquée par défaut)

## Structure
- `app/page.tsx` assemble les 7 sections dans `components/`
- Un composant par section : Hero, Coach, Method, Pricing, Testimonials,
  Faq, Contact — plus Nav et WhatsappCta (bouton réutilisable)
- `app/globals.css` : tokens couleur, effet glassmorphism, animation de la
  frise "Ma méthode" (fondu doux en boucle, 6s, respecte
  prefers-reduced-motion)
- SEO : metadata dans `app/layout.tsx` (JSON-LD SportsActivityLocation),
  `app/robots.ts`, `app/sitemap.ts`, JSON-LD FAQPage dans `components/Faq.tsx`

## Charte graphique
- Fond nuance 1 : `#0A1A22` (bleu nuit océan) — sections impaires
- Fond nuance 2 : `#0F2530` — sections paires (alternance pour éviter la
  monotonie, comme sur le site Dépolarisation)
- Accent primaire : corail `#FF5A36`
- Accent secondaire : turquoise/lagon `#00C2B2`
- Cartes formules en glassmorphism (fond translucide + flou), halos de
  couleur en arrière-plan

## Contenu déjà validé (ne pas réinventer sans demander)
- **Hero** : badge "Pas de programme générique. Du sur-mesure.", H1
  "Coaching sportif à l'île Maurice", 3 stats (15+ ans, 500+ athlètes,
  100% dédié à votre progression)
- **Votre coach** : reprend le texte bio du site Dépolarisation (15 ans,
  7 ans co-owner CrossFit, 30 ans de sport), badge "Progresser sans se
  blesser"
- **Ma méthode** : observation directe → outils (kettlebell, poids du
  corps, matériel léger, environnement naturel — PAS de mention sable ou
  dénivelé) → influence CrossFit, sans nommer les formats EMOM/AMRAP/For
  Time explicitement
- **Mes formules** : Pack 5 séances (2 500 Rs/séance, 12 500 Rs) et Pack
  10 séances (2 250 Rs/séance, -10%, 22 500 Rs, badge "Le plus complet").
  Séances d'1h. Bullets pack 5 : sur-mesure, domicile ou extérieur (pas
  d'hôtel), tout niveau, conseils nutrition, conseils préparation mentale
- **Témoignages** : 6 avis repris tels quels du site
  alainattieh.com (Frédéric, Jean-Michel Laine, Hafiz, Alberto E.
  Hernandez, Sébastien Rech, Marie-Charlotte Frey) — gardés intacts même
  si certains mentionnent "Dépolarisation®", choix assumé
- **FAQ** : 5 questions, sans mention de langue parlée (le coach ne parle
  pas bien anglais, donc aucune mention de langue nulle part sur le site)
- **Contact** : WhatsApp uniquement, pas de formulaire ni email. Numéro :
  +230 57822062

## À faire
- [x] Nom de marque définitif : **Mauritius Motion** (déjà appliqué dans
      `app/layout.tsx` et `components/Nav.tsx`)
- [x] Domaine définitif : `https://www.mauritiusmotion.com` (appliqué dans
      `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`)
- [x] Vraies photos du coach — intégrées via `next/image` (`fill`,
      `object-cover`). Fichiers : `public/images/apex-hero.png` (Hero) et
      `public/images/apex-coach.jpg` (Coach). Les 4 coins décoratifs de
      `components/Coach.tsx` sont conservés par-dessus l'image.
- [x] Carte — `components/Contact.tsx` utilise un embed **OpenStreetMap**
      (pas Google Maps, aucune clé API) avec un cercle de zone en pointillé
      corail calé sur les coordonnées de Grand Baie (-20.0064, 57.5809)
      dans le cadrage `bbox` actuel de la carte
- [ ] Fiche Google Business Profile à créer/lier

## Historique de session
Contenu et design entièrement co-conçus dans une conversation Claude.ai
précédente, section par section (contenu puis design pour chacune), avant
scaffolding. Se référer à ce fichier plutôt que régénérer le contenu
depuis zéro.
