import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return guides.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const guide = guides.find(g => g.slug === slug);
    if (!guide) return {};
    const url = `https://www.ta-pompe-a-chaleur.fr/guides/${guide.slug}`;
    return {
        title: guide.metaTitle,
        description: guide.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: guide.metaTitle,
            description: guide.metaDescription,
            url,
            type: 'article',
            ...(guide.heroImage ? { images: [{ url: `https://www.ta-pompe-a-chaleur.fr${guide.heroImage}`, width: 1024, height: 1024, alt: guide.heroAlt || guide.title }] } : {}),
        },
        twitter: {
            card: guide.heroImage ? 'summary_large_image' : 'summary',
            title: guide.metaTitle,
            description: guide.metaDescription,
            ...(guide.heroImage ? { images: [`https://www.ta-pompe-a-chaleur.fr${guide.heroImage}`] } : {}),
        },
    };
}

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find(g => g.slug === slug);
    if (!guide) notFound();

    const cat = GUIDE_CATEGORIES[guide.category];
    const relatedGuides = guides.filter(g => g.slug !== guide.slug).slice(0, 3);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.metaDescription,
        "datePublished": guide.updatedAt,
        "dateModified": guide.updatedAt,
        "author": { "@type": "Organization", "name": "Ta-Pompe-a-Chaleur.fr" },
        "publisher": {
            "@type": "Organization",
            "name": "Ta-Pompe-a-Chaleur.fr",
            "url": "https://www.ta-pompe-a-chaleur.fr"
        },
        "mainEntityOfPage": `https://www.ta-pompe-a-chaleur.fr/guides/${guide.slug}`,
        ...(guide.heroImage ? { "image": `https://www.ta-pompe-a-chaleur.fr${guide.heroImage}` } : {}),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.ta-pompe-a-chaleur.fr" },
            { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.ta-pompe-a-chaleur.fr/guides" },
            { "@type": "ListItem", "position": 3, "name": guide.title }
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <header className="bg-slate-900 text-white py-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Breadcrumbs items={[
                        { label: "Guides", href: "/guides" },
                        { label: cat.label }
                    ]} />
                    <div className="mt-6">
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green-500/20 text-green-300 mb-4">
                            {cat.emoji} {cat.label}
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {guide.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {guide.readTime} de lecture</span>
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Mis à jour le {guide.updatedAt}</span>
                        </div>
                    </div>
                </div>
            </header>

            <article className="container mx-auto px-4 max-w-4xl py-12">
                {guide.heroImage && (
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={guide.heroImage}
                            alt={guide.heroAlt || guide.title}
                            width={1024}
                            height={1024}
                            className="w-full h-auto max-h-[500px] object-cover"
                            priority
                        />
                    </div>
                )}
                <div
                    className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-p:leading-relaxed prose-a:text-green-600 prose-a:font-medium hover:prose-a:text-green-700 prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-slate-200 prose-td:p-3 prose-td:border prose-td:border-slate-200 prose-li:marker:text-green-500"
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                />

                <div className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Prêt à lancer votre projet PAC ?</h2>
                        <p className="text-slate-600">Comparez gratuitement les devis d&apos;installateurs certifiés RGE.</p>
                    </div>
                    <ViteUnDevisWidget />
                </div>
            </article>

            <aside className="bg-slate-50 py-12 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Guides connexes</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {relatedGuides.map(rg => (
                            <Link key={rg.slug} href={`/guides/${rg.slug}`} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-green-300 hover:shadow-md transition-all group">
                                <h3 className="font-semibold text-slate-800 group-hover:text-green-700 text-sm mb-2 line-clamp-2">{rg.title}</h3>
                                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                                    Lire <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
}
