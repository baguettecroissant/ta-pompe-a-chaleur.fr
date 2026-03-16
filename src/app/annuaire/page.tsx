import { getAllDepartments, DepartmentInfo } from '@/lib/cities';
import Link from 'next/link';
import { Metadata } from 'next';
import { Map as MapIcon, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Annuaire Installateurs Pompe à Chaleur par Département",
    description: "Parcourez notre annuaire national pour trouver un installateur de pompe à chaleur certifié RGE dans votre département. Comparez les prix et les avis.",
    alternates: { canonical: 'https://www.ta-pompe-a-chaleur.fr/annuaire' },
    openGraph: {
        title: "Annuaire Installateurs Pompe à Chaleur par Département",
        description: "Parcourez notre annuaire national pour trouver un installateur de pompe à chaleur certifié RGE dans votre département.",
        url: 'https://www.ta-pompe-a-chaleur.fr/annuaire',
    },
    twitter: {
        card: 'summary',
        title: "Annuaire Installateurs Pompe à Chaleur par Département",
        description: "Parcourez notre annuaire national pour trouver un installateur de pompe à chaleur certifié RGE dans votre département.",
    },
};

export default function AnnuairePage() {
    const departments = getAllDepartments();

    const regionsMap = new Map<string, DepartmentInfo[]>();
    departments.forEach(dept => {
        const current = regionsMap.get(dept.region) || [];
        current.push(dept);
        regionsMap.set(dept.region, current);
    });

    const sortedRegions = Array.from(regionsMap.keys()).sort();

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Annuaire" }]} />
                    <div className="text-center mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            Annuaire National des <span className="text-green-400">Installateurs</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Sélectionnez votre région ou votre département pour découvrir les professionnels agréés,
                            les aides locales disponibles et les tarifs moyens constatés près de chez vous.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 max-w-6xl mx-auto">
                        {sortedRegions.map(region => (
                            <div key={region} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex items-center gap-2">
                                    <MapIcon className="h-5 w-5 text-green-600" />
                                    <h2 className="text-xl font-bold text-slate-800">{region}</h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {regionsMap.get(region)?.map(dept => {
                                            const slug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                            return (
                                                <Link
                                                    key={dept.code}
                                                    href={`/annuaire/${slug}`}
                                                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="bg-slate-100 text-slate-600 font-mono text-sm font-bold px-2 py-1 rounded">
                                                            {dept.code}
                                                        </span>
                                                        <span className="text-slate-700 font-medium group-hover:text-green-700">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-green-400" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
                    <h3>Pourquoi utiliser notre annuaire ?</h3>
                    <p>
                        L&apos;installation d&apos;une pompe à chaleur requiert une expertise locale. Les contraintes architecturales de nos régions
                        (maisons en pierre en Bretagne, chalets dans les Alpes, immeubles haussmanniens à Paris) demandent des solutions sur-mesure.
                    </p>
                    <p>Notre annuaire référence les artisans capables d&apos;intervenir rapidement chez vous pour :</p>
                    <ul>
                        <li>Effectuer une visite technique gratuite.</li>
                        <li>Établir un devis précis et sans engagement.</li>
                        <li>Vous accompagner dans les dossiers d&apos;aides (MaPrimeRénov&apos;, CEE, Éco-PTZ).</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
