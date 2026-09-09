import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://www.mauritiusmotion.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mauritius Motion — Coach Sportif Privé Nord Maurice",
    template: "%s | Mauritius Motion",
  },
  description:
    "Coaching sportif sur-mesure à domicile ou en extérieur dans le Nord de l'île Maurice. 15+ ans d'expérience, plus de 500 athlètes accompagnés. Réservez votre séance.",
  keywords: [
    "coach sportif Maurice",
    "coach sportif Grand Baie",
    "personal trainer Mauritius",
    "coach sportif Trou aux Biches",
    "coaching sportif Nord Maurice",
  ],
  openGraph: {
    title: "Coach Sportif Privé Nord Maurice",
    description:
      "Coaching sportif sur-mesure à domicile ou en extérieur, dans le Nord de l'île Maurice.",
    url: SITE_URL,
    siteName: "Mauritius Motion",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Mauritius Motion",
  description:
    "Coaching sportif privé, sur-mesure, dans le Nord de l'île Maurice (Grand Baie, Trou aux Biches, Pereybère, Mont Choisy, Cap Malheureux, Pointe aux Canonniers).",
  areaServed: [
    "Grand Baie",
    "Trou aux Biches",
    "Pereybère",
    "Mont Choisy",
    "Cap Malheureux",
    "Pointe aux Canonniers",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Rivière du Rempart",
    addressCountry: "MU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
