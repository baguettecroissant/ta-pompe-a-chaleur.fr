import type { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/seo-utils';
import { getAllDepartments } from '@/lib/cities';
import { guides } from '@/data/guides';

const BASE_URL = 'https://www.ta-pompe-a-chaleur.fr';
const CHUNK_SIZE = 5000;

export async function generateSitemaps() {
    const totalCities = getAllCitySlugs().length;
    const cityChunks = Math.ceil(totalCities / CHUNK_SIZE);
    // id 0 = static pages + departments
    // id 1..N = city chunks
    const ids = [];
    for (let i = 0; i <= cityChunks; i++) {
        ids.push({ id: i });
    }
    return ids;
}

export default async function sitemap(
    { id }: { id: number }
): Promise<MetadataRoute.Sitemap> {

    // Sitemap 0: static pages + department pages
    if (id === 0) {
        const staticPages: MetadataRoute.Sitemap = [
            { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
            { url: `${BASE_URL}/devis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
            { url: `${BASE_URL}/marques`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/marques/daikin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/marques/atlantic`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/marques/mitsubishi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
            { url: `${BASE_URL}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
            { url: `${BASE_URL}/annuaire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        ];

        const departments = getAllDepartments();
        const deptPages: MetadataRoute.Sitemap = departments.map(dept => ({
            url: `${BASE_URL}/annuaire/${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

        const guidePages: MetadataRoute.Sitemap = guides.map(g => ({
            url: `${BASE_URL}/guides/${g.slug}`,
            lastModified: new Date(g.updatedAt),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        return [...staticPages, ...guidePages, ...deptPages];
    }

    // Sitemaps 1..N: city pages in chunks of CHUNK_SIZE
    const allSlugs = getAllCitySlugs();
    const cityIndex = id - 1; // offset because id=0 is static
    const start = cityIndex * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, allSlugs.length);
    const slugChunk = allSlugs.slice(start, end);

    return slugChunk.map(slug => ({
        url: `${BASE_URL}/pompe-a-chaleur/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
    }));
}
