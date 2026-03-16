import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ta-pompe-a-chaleur.fr'),
  title: "Pompe à Chaleur 2026 : Guide, Prix & Devis Gratuit",
  description: "Guide complet sur la pompe à chaleur : comparez Daikin, Atlantic, Mitsubishi Electric. Obtenez 3 devis gratuits d'installateurs RGE et réduisez vos factures de 70%.",
  openGraph: {
    title: "Pompe à Chaleur 2026 : Guide, Prix & Devis Gratuit",
    description: "Comparez les meilleures marques de PAC. Obtenez 3 devis gratuits d'installateurs certifiés RGE.",
    url: 'https://www.ta-pompe-a-chaleur.fr',
    siteName: 'Ta-Pompe-a-Chaleur.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pompe à Chaleur 2026 : Guide, Prix & Devis Gratuit",
    description: "Comparez les meilleures marques de PAC. Obtenez 3 devis gratuits d'installateurs certifiés RGE.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ta-Pompe-a-Chaleur.fr",
  "url": "https://www.ta-pompe-a-chaleur.fr",
  "logo": "https://www.ta-pompe-a-chaleur.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ta-Pompe-a-Chaleur.fr",
  "url": "https://www.ta-pompe-a-chaleur.fr",
  "description": "Guide indépendant et comparateur de pompes à chaleur en France. Devis gratuits d'installateurs certifiés RGE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${roboto.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
