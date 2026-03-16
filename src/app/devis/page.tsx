import { Metadata } from "next";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Devis Pompe à Chaleur Gratuit — Comparez 3 Offres RGE",
    description: "Demandez votre devis gratuit pour une pompe à chaleur. Comparez les prix de 3 installateurs RGE certifiés près de chez vous en moins de 2 minutes.",
    alternates: {
        canonical: 'https://www.ta-pompe-a-chaleur.fr/devis',
    },
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-green-950 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Devis Gratuit" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Votre <span className="text-green-400">Devis Gratuit</span> en 2 minutes
                        </h1>
                        <p className="text-xl text-slate-300">
                            Renseignez votre projet ci-dessous et recevez jusqu&apos;à 3 propositions chiffrées d&apos;installateurs RGE de votre département.
                        </p>
                    </div>
                </div>
            </section>

            {/* Widget + Sidebar */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Widget */}
                        <div className="lg:col-span-8">
                            <ViteUnDevisWidget />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-green-600" /> Pourquoi nous faire confiance ?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Service 100% gratuit et sans engagement</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Artisans certifiés RGE uniquement</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Jusqu&apos;à 10 000€ d&apos;aides déductibles</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                        <span>Comparez 3 devis pour trouver le juste prix</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">💡 Le saviez-vous ?</h3>
                                <p className="text-sm text-green-800">
                                    Un foyer français économise en moyenne <strong>1 200€ par an</strong> en passant d&apos;une chaudière fioul à une pompe à chaleur air-eau. Le retour sur investissement se fait en 5 à 7 ans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
