import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Leaf, Wind, Award, Zap, Euro, Flame, BookOpen, CheckCircle, MapPin, Clock, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.ta-pompe-a-chaleur.fr',
  },
  openGraph: {
    images: [{ url: 'https://www.ta-pompe-a-chaleur.fr/images/hero-pompe-chaleur.png', width: 1024, height: 1024, alt: 'Maison française avec pompe à chaleur installée' }],
  },
};

const topCities = [
  { name: "Paris", slug: "paris-75000" },
  { name: "Lyon", slug: "lyon-69000" },
  { name: "Marseille", slug: "marseille-13000" },
  { name: "Toulouse", slug: "toulouse-31000" },
  { name: "Bordeaux", slug: "bordeaux-33000" },
  { name: "Nantes", slug: "nantes-44000" },
  { name: "Lille", slug: "lille-59000" },
  { name: "Strasbourg", slug: "strasbourg-67000" },
];

export default function Home() {
  const featuredGuides = guides.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section — Split layout with image */}
      <section className="relative bg-green-950 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/95 to-green-950/40 z-[1]"></div>
        <div className="absolute inset-0 right-0 z-0">
          <Image
            src="/images/hero-pompe-chaleur.png"
            alt="Maison française avec pompe à chaleur installée dans un jardin verdoyant"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 border border-green-500/30 px-5 py-2 rounded-lg text-sm font-semibold tracking-wide mb-8">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Votre Transition Écologique 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
              Le chauffage de demain,<br />
              <span className="text-green-400">au meilleur prix.</span>
            </h1>

            <p className="text-lg md:text-xl text-green-50 mb-10 font-light leading-relaxed">
              Comparez gratuitement les devis de pose pour votre Pompe à Chaleur. Des installateurs RGE certifiés dans votre région pour réduire vos factures de 70%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devis" className="w-full sm:w-auto">
                <Button size="lg" className="bg-green-500 hover:bg-green-400 text-green-950 font-bold text-lg px-8 py-7 rounded-xl shadow-xl w-full">
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/guides" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-green-500/30 text-green-200 hover:bg-green-800/50 font-semibold text-lg px-8 py-7 rounded-xl w-full">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Lire nos guides
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-green-200/60 text-sm">
              <Shield className="h-5 w-5" />
              <span>Service 100% gratuit, conseillers indépendants.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-green-900 border-b border-green-800 py-4 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-green-100 text-xs md:text-sm font-semibold text-center">
            <div className="flex flex-col items-center gap-1 justify-center"><Award className="h-6 w-6 text-green-400 mb-1" /> Certification RGE</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Euro className="h-6 w-6 text-green-400 mb-1" /> Devis 100% Gratuits</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Flame className="h-6 w-6 text-green-400 mb-1" /> Économies d&apos;Énergie</div>
            <div className="flex flex-col items-center gap-1 justify-center"><Leaf className="h-6 w-6 text-green-400 mb-1" /> Aides Financières</div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 prose prose-lg prose-slate prose-headings:text-slate-900 prose-a:text-green-600">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                Quel budget prévoir pour une Pompe à Chaleur ?
              </h2>
              <p className="lead text-xl text-slate-600">
                L&apos;installation d&apos;une pompe à chaleur (PAC) est le moyen le plus efficace de réduire drastiquement vos factures de chauffage. C&apos;est un investissement rapidement rentabilisé grâce aux aides d&apos;État.
              </p>

              <div className="not-prose grid gap-5 my-8">
                <div className="p-5 bg-slate-50 border-l-4 border-green-500 rounded-r-xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2"><Wind className="h-5 w-5 text-green-500" /> PAC Air-Air</h3>
                  <p className="text-slate-600">Idéale pour climatiser l&apos;été et chauffer l&apos;hiver. À partir de <strong>2 500 € à 5 000 €</strong> pose incluse. <Link href="/guides/pac-air-eau-vs-air-air" className="text-green-600 font-medium hover:underline">Comparatif Air-Air vs Air-Eau →</Link></p>
                </div>
                <div className="p-5 bg-slate-50 border-l-4 border-green-600 rounded-r-xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2"><Flame className="h-5 w-5 text-green-600" /> PAC Air-Eau</h3>
                  <p className="text-slate-600">Remplace votre chaudière sur un réseau de radiateurs existant. Entre <strong>8 000 € et 12 000 €</strong>. <Link href="/guides/prix-pompe-a-chaleur" className="text-green-600 font-medium hover:underline">Guide prix complet →</Link></p>
                </div>
                <div className="p-5 bg-slate-50 border-l-4 border-teal-600 rounded-r-xl">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2"><Leaf className="h-5 w-5 text-teal-600" /> PAC Géothermique</h3>
                  <p className="text-slate-600">Le summum de l&apos;écologie, captant l&apos;énergie du sol. Budget de <strong>12 000 € à 20 000 €</strong> avant aides.</p>
                </div>
              </div>

              <p className="text-slate-500 text-base">
                <strong>À noter :</strong> Jusqu&apos;à 10 000€ d&apos;aides (MaPrimeRénov&apos;, CEE) peuvent être déduits. <Link href="/guides/maprimenov-pompe-a-chaleur" className="font-semibold underline">Détails MaPrimeRénov&apos; 2026</Link>.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-5">
              <div className="bg-green-600 text-white rounded-2xl p-7 shadow-xl">
                <h3 className="text-xl font-bold mb-3">L&apos;intervention</h3>
                <p className="text-green-100 mb-5">
                  Une fois le devis RGE approuvé, l&apos;installation prend <strong>une à deux journées</strong>. <Link href="/guides/installation-pompe-a-chaleur-etapes" className="underline text-green-200">Voir les étapes</Link>.
                </p>
                <Link href="/devis">
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-bold">Demander un devis</Button>
                </Link>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" /> Nos Marques
                </h3>
                <ul className="space-y-2.5">
                  <li><Link href="/marques/daikin" className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"><CheckCircle className="h-4 w-4 text-green-500" /> Daikin — Leader mondial</Link></li>
                  <li><Link href="/marques/atlantic" className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"><CheckCircle className="h-4 w-4 text-green-500" /> Atlantic — Made in France</Link></li>
                  <li><Link href="/marques/mitsubishi" className="flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors"><CheckCircle className="h-4 w-4 text-green-500" /> Mitsubishi — Hyper Heating</Link></li>
                </ul>
                <Link href="/marques" className="inline-flex items-center text-green-600 font-semibold text-sm mt-3 hover:underline">
                  Voir le comparatif <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🆕 Guides Experts Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Nos Guides Experts</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">Tout comprendre sur la pompe à chaleur</h2>
            <p className="text-slate-500">Des guides détaillés et à jour pour chaque étape de votre projet PAC.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map(guide => {
              const cat = GUIDE_CATEGORIES[guide.category];
              return (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-green-300 hover:shadow-lg transition-all group">
                  {guide.heroImage && (
                    <div className="h-40 overflow-hidden bg-slate-100">
                      <Image src={guide.heroImage} alt={guide.heroAlt || guide.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold text-green-600">{cat.emoji} {cat.label}</span>
                    <h3 className="text-base font-bold text-slate-800 mt-1 mb-2 group-hover:text-green-700 transition-colors line-clamp-2">{guide.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/guides" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md">
              Voir tous les guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Stack Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Le Réseau N°1</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">Un accompagnement sur-mesure</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Euro className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Maximisez les Aides</h3>
              <p className="text-slate-600 leading-relaxed">
                Nos artisans s&apos;occupent de déduire directement <Link href="/guides/maprimenov-pompe-a-chaleur" className="text-green-600 font-medium">MaPrimeRénov&apos;</Link> et les CEE de votre devis. Un reste à charge minimal.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">RGE Garantie</h3>
              <p className="text-slate-600 leading-relaxed">
                Le label RGE est obligatoire pour obtenir vos aides. Tous nos installateurs partenaires le possèdent.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Le Juste Prix</h3>
              <p className="text-slate-600 leading-relaxed">
                <Link href="/devis" className="text-green-600 font-medium">Demandez 3 devis</Link> pour comparer sereinement les COP et les tarifs d&apos;entretien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🆕 Trouvez un installateur PAC — Maillage villes */}
      <section className="py-20 bg-green-50/50 border-y border-green-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Annuaire national</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-6">Trouvez un installateur PAC près de chez vous</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Notre annuaire couvre <strong>plus de 35 000 communes</strong> en France. Trouvez un artisan RGE certifié dans votre ville et obtenez un devis adapté à votre logement et votre zone climatique.
              </p>
              <Link href="/annuaire">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl shadow-md">
                  <MapPin className="mr-2 h-5 w-5" /> Voir l&apos;annuaire complet
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {topCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/pompe-a-chaleur/${city.slug}`}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-green-300 hover:shadow-md transition-all group flex items-center gap-3"
                >
                  <MapPin className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors text-sm">PAC {city.name}</span>
                    <span className="block text-xs text-slate-400">Devis gratuit</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300 ml-auto group-hover:text-green-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🆕 Marques populaires — Section pleine largeur */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Marques de confiance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">Comparez les meilleures PAC du marché</h2>
            <p className="text-slate-500">Les fabricants les plus fiables, testés et recommandés par nos installateurs partenaires.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/marques/daikin" className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-green-300 hover:shadow-lg transition-all group text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-green-700">D</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 mb-2">Daikin</h3>
              <p className="text-sm text-slate-500 mb-3">Leader mondial, SCOP jusqu&apos;à 4.56. R-32 écologique.</p>
              <span className="text-sm font-semibold text-green-600">Découvrir Daikin <ArrowRight className="inline h-3 w-3" /></span>
            </Link>
            <Link href="/marques/atlantic" className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-green-300 hover:shadow-lg transition-all group text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-blue-700">A</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 mb-2">Atlantic</h3>
              <p className="text-sm text-slate-500 mb-3">Made in France, intelligence artificielle intégrée.</p>
              <span className="text-sm font-semibold text-green-600">Découvrir Atlantic <ArrowRight className="inline h-3 w-3" /></span>
            </Link>
            <Link href="/marques/mitsubishi" className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-green-300 hover:shadow-lg transition-all group text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-black text-red-700">M</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-700 mb-2">Mitsubishi Electric</h3>
              <p className="text-sm text-slate-500 mb-3">Technologie Zubadan, performante jusqu&apos;à -25°C.</p>
              <span className="text-sm font-semibold text-green-600">Découvrir Mitsubishi <ArrowRight className="inline h-3 w-3" /></span>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/marques" className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1">
              Voir toutes les marques <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">Foire Aux Questions</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Quelles sont les aides pour une pompe à chaleur en 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "Les principales aides sont MaPrimeRénov' et les Primes CEE (Certificats d'Économies d'Énergie). Ensemble, elles peuvent couvrir jusqu'à 90% du devis pour les foyers très modestes." } },
                  { "@type": "Question", "name": "Faut-il une autorisation pour installer une PAC ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, pour l'unité extérieure, une déclaration préalable de travaux (DP) en mairie est obligatoire car elle modifie l'aspect extérieur de votre logement." } },
                  { "@type": "Question", "name": "Est-ce bruyant ?", "acceptedAnswer": { "@type": "Answer", "text": "Les modèles récents sont très silencieux. L'unité extérieure tourne autour de 40 à 50 décibels, soit le bruit d'un lave-vaisselle récent." } },
                  { "@type": "Question", "name": "L'entretien est-il obligatoire ?", "acceptedAnswer": { "@type": "Answer", "text": "L'entretien d'une pompe à chaleur est obligatoire tous les 2 ans pour les PAC d'une puissance comprise entre 4 et 70 kW." } }
                ]
              })
            }}
          />

          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b-slate-200">
                <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">Quelles sont les aides valables en 2026 ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                  Les principales aides sont <strong>MaPrimeRénov&apos;</strong> et les <strong>Primes CEE</strong>. Elles peuvent couvrir jusqu&apos;à 90% du devis pour les foyers très modestes. <Link href="/guides/maprimenov-pompe-a-chaleur" className="text-green-600 font-medium">En savoir plus →</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b-slate-200">
                <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">Faut-il une autorisation pour installer une PAC ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                  Oui. L&apos;installation de l&apos;unité extérieure nécessite une <strong>déclaration préalable de travaux (DP)</strong> en mairie. En copropriété, l&apos;accord du syndic est aussi requis. <Link href="/guides/installation-pompe-a-chaleur-etapes" className="text-green-600 font-medium">Guide installation →</Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-slate-200">
                <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">Est-ce bruyant pour le voisinage ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                  Les compresseurs récents (<Link href="/marques/daikin" className="text-green-600 font-medium">Daikin</Link>, <Link href="/marques/mitsubishi" className="text-green-600 font-medium">Mitsubishi</Link>, <Link href="/marques/atlantic" className="text-green-600 font-medium">Atlantic</Link>) génèrent environ <strong>45 décibels</strong>, équivalent au son d&apos;un réfrigérateur.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">L&apos;entretien est-il obligatoire ?</AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">
                  Oui, <strong>au moins tous les 2 ans</strong> pour les PAC de 4 à 70 kW, par un professionnel certifié. <Link href="/guides/entretien-pompe-a-chaleur-obligations" className="text-green-600 font-medium">Guide entretien →</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-green-600 font-semibold hover:underline inline-flex items-center gap-1">
              Consulter toute la FAQ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Votre devis en 3 clics</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto font-medium">
            Renseignez votre projet et recevez les propositions chiffrées de nos artisans locaux pour comparer les modèles et les COP.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold text-xl px-12 py-8 rounded-full shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1">
              Comparer les Offres
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm font-semibold text-green-200/80 uppercase tracking-widest">
            <span>Gratuit</span>
            <span>Local</span>
            <span>RGE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
