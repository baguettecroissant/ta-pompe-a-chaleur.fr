import { notFound } from "next/navigation";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/psea/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/psea/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { ClimateZoneModule } from "@/components/psea/ClimateZoneModule";
import { getRegionalProfile } from "@/lib/climate-data";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city);
}

export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({ slug }));
}

// Deterministic hash for FAQ variant selection
function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);

    if (!city) {
        notFound();
    }

    const introText = getCityIntro(city);
    const h = hashCode(city.slug);
    const pop = city.population || 0;
    const regional = getRegionalProfile(city.region);
    const popLabel = pop > 0 ? `${pop.toLocaleString('fr-FR')} habitants` : '';

    // --- Varied FAQ answers based on hash ---
    const prixAnswers = [
        `À ${city.name}, le prix d'une PAC Air/Air démarre autour de 3 000 € et peut atteindre 8 000 € selon la surface. Pour une PAC Air/Eau plus performante, prévoyez entre 10 000 € et 16 000 € avant déduction des aides.`,
        `Le coût d'une pompe à chaleur à ${city.name} (${city.zip}) varie selon le type : comptez 3 500 € à 7 500 € pour une Air/Air réversible, et de 9 000 € à 15 000 € pour une Air/Eau incluant l'eau chaude sanitaire.`,
        `Dans le ${city.department_name}, les tarifs constatés pour une PAC à ${city.name} sont de 3 000 € à 8 500 € (Air/Air) et de 10 000 € à 18 000 € (Air/Eau géothermique). Les aides peuvent réduire ce budget de 40 à 75%.`,
    ];
    const aidesAnswers = [
        `En installant une PAC à ${city.name}, vous êtes éligible à MaPrimeRénov' (jusqu'à 11 000 €), à la Prime CEE Coup de Pouce (jusqu'à 4 000 €), à l'Éco-PTZ (jusqu'à 50 000 € à taux zéro) et à la TVA réduite à 5,5%.`,
        `Les résidents de ${city.name} (${city.zip}) peuvent cumuler MaPrimeRénov', les primes CEE, et la TVA à 5,5%. Pour les ménages très modestes du ${city.department_name}, les aides peuvent couvrir jusqu'à 90% du montant des travaux.`,
        `À ${city.name}, département ${city.department_code}, les principales aides disponibles sont : MaPrimeRénov' (selon revenus), les Certificats d'Économies d'Énergie (CEE), l'Éco-PTZ et des aides complémentaires du ${city.department_name}.`,
    ];
    const dureeAnswers = [
        `L'installation d'une PAC chez vous à ${city.name} prend généralement 2 à 5 jours ouvrés. Comptez 2 à 4 semaines pour la visite technique, la validation du devis et la commande du matériel avant le début du chantier.`,
        `Après la visite d'un technicien RGE du ${city.department_code}, le délai total est de 3 à 6 semaines (étude + commande). Le chantier en lui-même dure 2 à 4 jours pour une PAC Air/Eau standard à ${city.name}.`,
        `À ${city.name}, les artisans du ${city.department_name} réalisent l'installation en 2 à 5 jours selon la complexité (remplacement chaudière, plancher chauffant). La mise en service est immédiate après les tests de pression.`,
    ];
    const entretienAnswers = [
        `Nos artisans RGE partenaires du ${city.department_code} proposent des contrats de maintenance annuels à ${city.name}. L'entretien obligatoire (tous les 2 ans minimum) inclut le contrôle du fluide frigorigène et l'optimisation des performances.`,
        `À ${city.name} et dans tout le ${city.department_name}, des techniciens qualifiés assurent l'entretien de votre PAC. Un contrat annuel (150 à 300 €/an) garantit longévité et rendement optimal de votre installation.`,
        `Les professionnels intervenant à ${city.name} (${city.zip}) proposent des formules de SAV complètes : entretien annuel, dépannage sous 48h et remplacement de pièces. L'entretien régulier est devenu obligatoire par décret.`,
    ];

    const faqPrix = prixAnswers[h % prixAnswers.length];
    const faqAides = aidesAnswers[(h + 1) % aidesAnswers.length];
    const faqDuree = dureeAnswers[(h + 2) % dureeAnswers.length];
    const faqEntretien = entretienAnswers[(h + 3) % entretienAnswers.length];

    // BreadcrumbList JSON-LD
    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.ta-pompe-a-chaleur.fr" },
            { "@type": "ListItem", "position": 2, "name": "Annuaire", "item": "https://www.ta-pompe-a-chaleur.fr/annuaire" },
            { "@type": "ListItem", "position": 3, "name": city.department_name, "item": `https://www.ta-pompe-a-chaleur.fr/annuaire/${deptSlug}` },
            { "@type": "ListItem", "position": 4, "name": `${city.name} (${city.zip})` },
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Quel est le prix moyen d'une pompe à chaleur à ${city.name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqPrix }
            },
            {
                "@type": "Question",
                "name": `À quelles aides ai-je droit pour une PAC à ${city.name} (${city.zip}) ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqAides }
            },
            {
                "@type": "Question",
                "name": `Quelle est la durée des travaux d'installation à ${city.name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqDuree }
            },
            {
                "@type": "Question",
                "name": `Qui assure l'entretien de ma PAC dans le ${city.department_name} ?`,
                "acceptedAnswer": { "@type": "Answer", "text": faqEntretien }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white selection:bg-green-100">
            <SchemaOrg city={city} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header className="bg-slate-50 pt-4 pb-0 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <DepartmentBreadcrumb city={city} />
                </div>
            </header>

            <CityHero city={city} />

            <article className="container mx-auto px-5 py-14 max-w-5xl">
                <section className="mb-14 grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Votre Pompe à Chaleur à {city.name}
                        </h2>
                        <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
                            <p>
                                Vivre à <strong>{city.name}</strong> ({city.zip}{popLabel ? `, ${popLabel}` : ''}) offre un cadre de vie appréciable, mais les hivers peuvent faire grimper la facture énergétique. {introText}
                                Que vous résidiez dans une construction récente ou dans une maison ancienne, l&apos;installation d&apos;une pompe à chaleur (PAC) est aujourd&apos;hui la solution
                                la plus efficace pour réduire vos dépenses de chauffage tout en valorisant votre patrimoine immobilier.
                            </p>
                            <p>
                                En {city.region}, l&apos;habitat est principalement constitué de {regional.housingType}. {regional.localAdvantage}
                            </p>
                            <p>
                                Dans le département ({city.department_name}), de nombreux artisans spécialisés RGE proposent des solutions
                                adaptées à vos besoins : PAC Air/Air pour climatiser en été, PAC Air/Eau pour remplacer votre vieille chaudière fioul ou gaz,
                                ou encore solutions hybrides et géothermie.
                            </p>
                        </div>
                    </div>
                    <aside className="md:col-span-1 sticky top-6">
                        <LocalAidsModule city={city} />
                    </aside>
                </section>

                <section className="mb-16 scroll-mt-24" id="devis">
                    <div className="bg-gradient-to-br from-slate-50 to-green-50/30 p-8 md:p-10 rounded-3xl border border-green-100 shadow-sm">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                Comparez les installateurs RGE à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium text-lg">
                                Obtenez jusqu&apos;à 3 devis gratuits d&apos;artisans certifiés RGE intervenant à {city.name} ({city.zip}).
                                <span className="block mt-3 text-sm text-green-700 font-semibold bg-green-100/60 inline-block px-4 py-1.5 rounded-full">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>
                        <ViteUnDevisWidget />
                    </div>
                </section>

                <StepsModule city={city} />

                <ClimateZoneModule city={city} />

                <section className="mb-20 mt-16 pt-10 border-t border-slate-100">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Questions fréquentes : {city.name}</h2>
                    <dl className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 hover:border-green-100 transition-colors">
                            <dt className="text-lg font-bold text-slate-800 mb-3">Quel est le prix moyen d&apos;une PAC à {city.name} ?</dt>
                            <dd className="text-slate-600 leading-relaxed">{faqPrix}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 hover:border-green-100 transition-colors">
                            <dt className="text-lg font-bold text-slate-800 mb-3">Quelles aides pour une PAC à {city.name} ({city.department_code}) ?</dt>
                            <dd className="text-slate-600 leading-relaxed">{faqAides}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 hover:border-green-100 transition-colors">
                            <dt className="text-lg font-bold text-slate-800 mb-3">Combien de temps pour l&apos;installation à {city.name} ?</dt>
                            <dd className="text-slate-600 leading-relaxed">{faqDuree}</dd>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-50 hover:border-green-100 transition-colors">
                            <dt className="text-lg font-bold text-slate-800 mb-3">Entretien PAC dans le {city.department_name} ?</dt>
                            <dd className="text-slate-600 leading-relaxed">{faqEntretien}</dd>
                        </div>
                    </dl>
                </section>

                <footer className="mt-12 text-center">
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                            <BookOpen className="h-6 w-6 text-green-500" />
                            Guides utiles
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link href="/marques" className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all group">
                                <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors shrink-0">
                                    <ArrowRight className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-green-700 text-sm">Comparatif des marques de PAC</span>
                            </Link>
                            <Link href="/faq" className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all group">
                                <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors shrink-0">
                                    <ArrowRight className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-green-700 text-sm">FAQ Pompe à Chaleur</span>
                            </Link>
                        </div>
                    </section>
                </footer>
            </article>

            <aside className="bg-slate-50 border-t border-slate-200">
                <NearbyCitiesModule city={city} />
            </aside>
        </main>
    );
}
