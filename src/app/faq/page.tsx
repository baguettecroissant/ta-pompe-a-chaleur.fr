import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ Pompe à Chaleur — Toutes vos questions",
    description: "Réponses à toutes vos questions sur les pompes à chaleur : prix, aides, installation, entretien, bruit, marques, garanties. Guide complet 2026.",
    alternates: { canonical: 'https://www.ta-pompe-a-chaleur.fr/faq' },
};

const faqItems = [
    { q: "Combien coûte une pompe à chaleur en 2026 ?", a: "Le prix varie selon le type : PAC air-air de 2 500€ à 5 000€, PAC air-eau de 8 000€ à 15 000€, et PAC géothermique de 12 000€ à 20 000€ (pose comprise). Les aides MaPrimeRénov' et CEE peuvent couvrir jusqu'à 90% du montant." },
    { q: "Quelles aides financières pour une PAC ?", a: "Les principales aides sont MaPrimeRénov' (jusqu'à 5 000€), les Primes CEE (jusqu'à 4 000€), l'Éco-PTZ (prêt à taux zéro jusqu'à 50 000€), et la TVA réduite à 5,5%. Le cumul peut dépasser 10 000€ pour les foyers modestes." },
    { q: "Faut-il un installateur RGE ?", a: "Oui, obligatoire. Le label RGE (Reconnu Garant de l'Environnement) est la condition sine qua non pour bénéficier des aides d'État. Un installateur non RGE vous prive de toutes les subventions." },
    { q: "Quelle est la durée de vie d'une PAC ?", a: "Une pompe à chaleur bien entretenue dure en moyenne 15 à 20 ans. Le compresseur, pièce maîtresse, est généralement garanti 5 ans par les fabricants (Daikin, Atlantic, Mitsubishi)." },
    { q: "L'entretien est-il obligatoire ?", a: "Oui. Depuis 2020, un entretien tous les 2 ans est obligatoire pour les PAC de 4 à 70 kW. Il doit être réalisé par un professionnel qualifié. Le coût moyen est de 150€ à 300€ par intervention." },
    { q: "Une PAC est-elle bruyante ?", a: "Les modèles récents sont très silencieux. L'unité extérieure génère environ 40 à 50 dB (bruit d'un réfrigérateur). La réglementation impose un seuil de 5 dB au-dessus du bruit ambiant en limite de propriété." },
    { q: "PAC air-air ou air-eau : que choisir ?", a: "La PAC air-air (climatisation réversible) est idéale en complément ou pour des logements neufs. La PAC air-eau remplace une chaudière existante et alimente radiateurs et plancher chauffant — c'est le choix n°1 en rénovation." },
    { q: "Faut-il une autorisation pour l'installation ?", a: "Oui, une déclaration préalable de travaux en mairie est requise pour l'unité extérieure. En copropriété, l'accord de l'assemblée générale est également nécessaire." },
    { q: "Daikin, Atlantic ou Mitsubishi : quelle marque choisir ?", a: "Daikin excelle en silence et fiabilité, Atlantic offre un excellent rapport qualité-prix avec une fabrication française, et Mitsubishi est imbattable pour les régions froides grâce à sa technologie Zubadan. Le choix dépend de votre climat et de votre installation existante." },
    { q: "Le COP, c'est quoi ?", a: "Le COP (Coefficient de Performance) mesure le rendement d'une PAC. Un COP de 4 signifie que pour 1 kWh d'électricité consommé, la PAC produit 4 kWh de chaleur. Plus le COP est élevé, plus la PAC est performante et économique." },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "FAQ" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Foire Aux <span className="text-green-400">Questions</span></h1>
                        <p className="text-xl text-slate-300">Tout ce que vous devez savoir avant d&apos;installer une pompe à chaleur.</p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqItems.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }) }} />

                    <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((f, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="border-b-slate-200">
                                    <AccordionTrigger className="text-lg font-bold text-slate-900 py-5">{f.q}</AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-base leading-relaxed pb-5">{f.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-50 text-center border-t border-green-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-green-950 mb-4">Vous avez un projet ?</h2>
                    <p className="text-lg text-green-800 mb-8">Obtenez 3 devis gratuits et comparez les offres d&apos;installateurs RGE.</p>
                    <Link href="/devis"><Button size="lg" className="bg-green-600 text-white hover:bg-green-700 font-bold text-lg px-10 py-6 rounded-full shadow-xl">Comparer les devis<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>
        </div>
    );
}
