import { getCitiesByDepartment, getAllDepartments, getDepartmentByCode } from '@/lib/cities';
import { guides } from '@/data/guides';
import { BRANDS } from '@/data/brands';
import departmentsData from '@/lib/db/departments-infos.json';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.ta-pompe-a-chaleur.fr';

export async function generateStaticParams() {
    const departments = getAllDepartments();
    return [
        { id: 'main.xml' },
        ...departments.map(d => ({ id: `${d.code}.xml` }))
    ];
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id.endsWith('.xml')) {
        return notFound();
    }

    const sitemapId = id.replace('.xml', '');
    let urls: { url: string; lastModified: Date; changeFrequency: string; priority: number }[] = [];

    if (sitemapId === 'main') {
        const siteLastUpdated = new Date('2026-03-16');

        const staticPages = [
            { path: '', priority: 1, frequency: 'daily' },
            { path: '/devis', priority: 0.9, frequency: 'weekly' },
            { path: '/guides', priority: 0.8, frequency: 'weekly' },
            { path: '/marques', priority: 0.8, frequency: 'weekly' },
            { path: '/annuaire', priority: 0.8, frequency: 'weekly' },
            { path: '/faq', priority: 0.7, frequency: 'monthly' },
            { path: '/mentions-legales', priority: 0.2, frequency: 'yearly' },
        ];

        urls = staticPages.map(p => ({
            url: `${BASE_URL}${p.path}`,
            lastModified: siteLastUpdated,
            changeFrequency: p.frequency,
            priority: p.priority,
        }));

        // Guides
        guides.forEach(guide => {
            urls.push({
                url: `${BASE_URL}/guides/${guide.slug}`,
                lastModified: new Date(guide.updatedAt),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Brands
        BRANDS.forEach((brand: { slug: string }) => {
            urls.push({
                url: `${BASE_URL}/marques/${brand.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });

        // Department landing pages
        departmentsData.forEach((dept: { name: string; code: string }) => {
            const slug = `${dept.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-')}-${dept.code}`;
            urls.push({
                url: `${BASE_URL}/annuaire/${slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'weekly',
                priority: 0.6,
            });
        });
    } else {
        // Department city pages
        const departmentCities = getCitiesByDepartment(sitemapId);

        if (departmentCities.length === 0) {
            return notFound();
        }

        const cityLastUpdated = new Date('2026-03-16');
        urls = departmentCities.map(city => ({
            url: `${BASE_URL}/pompe-a-chaleur/${city.slug}`,
            lastModified: cityLastUpdated,
            changeFrequency: 'weekly',
            priority: 0.5,
        }));
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(item => `
    <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
    </url>
    `).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
