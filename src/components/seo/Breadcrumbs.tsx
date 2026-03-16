import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const allItems = [{ label: "Accueil", href: "/" }, ...items];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            ...(item.href ? { "item": `https://www.ta-pompe-a-chaleur.fr${item.href}` } : {}),
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav aria-label="Fil d'Ariane" className="text-sm text-slate-400">
                <ol className="flex items-center gap-2 flex-wrap">
                    {allItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && <span className="text-slate-500">/</span>}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-white transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-slate-300">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
