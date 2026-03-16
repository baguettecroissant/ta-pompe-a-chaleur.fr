import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES, GuideCategory } from "@/types/guide";
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Guides Pompe à Chaleur — Conseils et Astuces d'Experts",
    description: "Guides pratiques sur les pompes à chaleur : choix du modèle, prix, aides financières, installation, entretien. Tous nos conseils d'experts pour réussir votre projet PAC.",
    alternates: { canonical: 'https://www.ta-pompe-a-chaleur.fr/guides' },
    openGraph: {
        title: "Guides Pompe à Chaleur — Conseils d'Experts",
        description: "Guides pratiques sur les pompes à chaleur : choix du modèle, prix, aides, installation, entretien.",
        url: 'https://www.ta-pompe-a-chaleur.fr/guides',
    },
    twitter: {
        card: 'summary',
        title: "Guides Pompe à Chaleur — Conseils d'Experts",
        description: "Guides pratiques sur les pompes à chaleur : choix du modèle, prix, aides, installation, entretien.",
    },
};

const categoryColors: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    orange: 'bg-orange-100 text-orange-700 border-orange-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function GuidesPage() {
    const categories = Object.entries(GUIDE_CATEGORIES) as [GuideCategory, typeof GUIDE_CATEGORIES[GuideCategory]][];

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Guides" }]} />
                    <div className="max-w-3xl mt-6">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Guides &amp; <span className="text-green-400">Conseils</span> PAC
                        </h1>
                        <p className="text-xl text-slate-300">
                            {guides.length} guides experts pour réussir votre projet pompe à chaleur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl py-4">
                    <div className="flex flex-wrap gap-3">
                        {categories.map(([catKey, cat]) => {
                            const count = guides.filter(g => g.category === catKey).length;
                            if (count === 0) return null;
                            const colorClass = categoryColors[cat.color] || 'bg-slate-100 text-slate-700';
                            return (
                                <a key={catKey} href={`#${catKey}`} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${colorClass} hover:opacity-80 transition-opacity`}>
                                    {cat.emoji} {cat.label} <span className="opacity-60">({count})</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    {categories.map(([catKey, cat]) => {
                        const catGuides = guides.filter(g => g.category === catKey);
                        if (catGuides.length === 0) return null;
                        const colorClass = categoryColors[cat.color] || 'bg-slate-100 text-slate-700';

                        return (
                            <div key={catKey} id={catKey} className="mb-14">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                                    <span className="text-2xl">{cat.emoji}</span> {cat.label}
                                </h2>
                                <div className="space-y-4">
                                    {catGuides.map(guide => (
                                        <Link
                                            key={guide.slug}
                                            href={`/guides/${guide.slug}`}
                                            className="flex flex-col md:flex-row bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-green-300 hover:shadow-lg transition-all group"
                                        >
                                            {/* Thumbnail */}
                                            {guide.heroImage ? (
                                                <div className="md:w-64 lg:w-80 flex-shrink-0 overflow-hidden bg-slate-100">
                                                    <Image
                                                        src={guide.heroImage}
                                                        alt={guide.heroAlt || guide.title}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="md:w-64 lg:w-80 flex-shrink-0 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                                                    <BookOpen className="h-16 w-16 text-green-300" />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="flex-1 p-6 flex flex-col justify-between">
                                                <div>
                                                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${colorClass}`}>
                                                        {cat.label}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">
                                                        {guide.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 mb-4 line-clamp-2 md:line-clamp-3">
                                                        {guide.excerpt}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" /> {guide.readTime}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="h-3 w-3" /> {guide.updatedAt}
                                                        </span>
                                                    </div>
                                                    <span className="flex items-center gap-1 text-sm font-medium text-green-600 group-hover:text-green-700">
                                                        Lire <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
