export interface Guide {
    id: number;
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    category: GuideCategory;
    readTime: string;
    updatedAt: string;
    excerpt: string;
    heroImage?: string;
    heroAlt?: string;
    content: string;
}

export type GuideCategory =
    | 'comprendre'
    | 'prix'
    | 'aides'
    | 'types'
    | 'installation'
    | 'entretien'
    | 'comparatifs'
    | 'reglementation';

export const GUIDE_CATEGORIES: Record<GuideCategory, { label: string; emoji: string; color: string }> = {
    comprendre: { label: 'Comprendre', emoji: '🔵', color: 'blue' },
    prix: { label: 'Prix & Coûts', emoji: '💰', color: 'amber' },
    aides: { label: 'Aides & Financement', emoji: '🏛️', color: 'purple' },
    types: { label: 'Types & Choix', emoji: '🔧', color: 'cyan' },
    installation: { label: 'Installation', emoji: '🏠', color: 'green' },
    entretien: { label: 'Entretien', emoji: '🛠️', color: 'orange' },
    comparatifs: { label: 'Comparatifs', emoji: '🏆', color: 'yellow' },
    reglementation: { label: 'Réglementation', emoji: '📋', color: 'slate' },
};
