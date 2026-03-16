import { getAllCitySlugs } from '@/lib/seo-utils';
import { getAllDepartments } from '@/lib/cities';

export const dynamic = 'force-dynamic';

export async function GET() {
    const baseUrl = 'https://www.ta-pompe-a-chaleur.fr';
    const departments = getAllDepartments();

    const sitemaps = [
        `${baseUrl}/sitemap/main.xml`,
        ...departments.map(d => `${baseUrl}/sitemap/${d.code}.xml`)
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps.map(url => `
    <sitemap>
        <loc>${url}</loc>
    </sitemap>`).join('')}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
