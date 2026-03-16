import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Star, CheckCircle, XCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS, getBrandBySlug, getAllBrandSlugs } from "@/data/brands";

export async function generateStaticParams() {
    return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) return {};
    return {
        title: brand.seoTitle,
        description: brand.seoDescription,
        alternates: { canonical: `https://www.ta-pompe-a-chaleur.fr/marques/${brand.slug}` },
    };
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`h-5 w-5 ${s <= rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
            ))}
        </div>
    );
}

const typeLabels: Record<string, string> = { "air-air": "Air/Air", "air-eau": "Air/Eau", "hybride": "Hybride", "geothermie": "Géothermique" };

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);
    if (!brand) notFound();
    const otherBrands = BRANDS.filter((b) => b.slug !== brand.slug);

    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Marques", href: "/marques" }, { label: brand.name }]} />
                    <div className="max-w-3xl mt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl">{brand.countryFlag}</span>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold">{brand.name} <span className="text-green-400">Pompe à Chaleur</span></h1>
                                <p className="text-slate-400 mt-1">Depuis {brand.founded} — {brand.headquarters}</p>
                            </div>
                        </div>
                        <p className="text-xl text-green-300 font-medium">{brand.tagline}</p>
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos de {brand.name}</h2>
                                <div className="prose prose-lg prose-slate">
                                    {brand.description.split('\n\n').map((p, i) => (<p key={i}>{p}</p>))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Modèles phares</h2>
                                <div className="grid gap-4">
                                    {brand.models.map((m) => (
                                        <div key={m.name} className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                                <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                                                <div className="flex items-center gap-3 mt-1 sm:mt-0">
                                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">{typeLabels[m.type]}</span>
                                                    <span className="text-sm font-bold text-green-600">{m.priceRange}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {m.features.map((f, i) => (<span key={i} className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-md">{f}</span>))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                    <h3 className="text-lg font-bold text-green-600 mb-4">✅ Points forts</h3>
                                    <ul className="space-y-2">
                                        {brand.pros.map((p, i) => (<li key={i} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" /><span>{p}</span></li>))}
                                    </ul>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                    <h3 className="text-lg font-bold text-red-500 mb-4">⚠️ Points de vigilance</h3>
                                    <ul className="space-y-2">
                                        {brand.cons.map((c, i) => (<li key={i} className="flex items-start gap-2 text-sm text-slate-600"><XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" /><span>{c}</span></li>))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions fréquentes</h2>
                                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": brand.faq.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
                                <Accordion type="single" collapsible className="w-full">
                                    {brand.faq.map((f, i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-b-slate-200">
                                            <AccordionTrigger className="text-lg font-bold text-slate-900 py-4">{f.question}</AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">{f.answer}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm sticky top-24">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Notes {brand.name}</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between"><span className="text-sm text-slate-600">Qualité</span><StarRating rating={brand.qualityRating} /></div>
                                    <div className="flex items-center justify-between"><span className="text-sm text-slate-600">SAV</span><StarRating rating={brand.savRating} /></div>
                                    <div className="flex items-center justify-between"><span className="text-sm text-slate-600">Prix</span><StarRating rating={brand.priceRating} /></div>
                                </div>
                                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                                    <div className="flex justify-between text-sm mb-2"><span className="text-slate-600">Air/Air</span><span className="font-bold">{brand.priceRange.airAir}</span></div>
                                    <div className="flex justify-between text-sm mb-2"><span className="text-slate-600">Air/Eau</span><span className="font-bold">{brand.priceRange.airEau}</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-slate-600">Garantie</span><span className="font-bold">{brand.warranty}</span></div>
                                </div>
                                <Link href="/devis"><Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl h-12"><Shield className="mr-2 h-4 w-4" />Devis Gratuit</Button></Link>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Autres marques</h3>
                                <div className="space-y-3">
                                    {otherBrands.map((o) => (
                                        <Link key={o.slug} href={`/marques/${o.slug}`} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-green-50 transition-colors group">
                                            <div className="flex items-center gap-2"><span>{o.countryFlag}</span><span className="font-medium text-slate-700 group-hover:text-green-600">{o.name}</span></div>
                                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-green-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold mb-4">Installez votre PAC {brand.name}</h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto font-light">Comparez les devis d&apos;installateurs certifiés RGE dans votre département.</p>
                    <Link href="/devis"><Button size="lg" className="bg-green-500 hover:bg-green-400 text-white text-lg px-10 h-14 rounded-full shadow-lg border border-green-400">Obtenir un devis<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>
        </div>
    );
}
