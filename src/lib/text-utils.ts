import { City } from '@/types';

/**
 * Simple deterministic hash from string → number.
 * Used to pick spintax variants consistently per city slug.
 */
function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function pickVariant(options: string[], seed: string): string {
    return options[hashCode(seed) % options.length];
}

export function getCityIntro(city: City): string {
    const pop = city.population || 0;
    const seed = city.slug;

    if (pop > 50000) {
        const options = [
            `Moteur économique du département ${city.department_name}, l'agglomération de ${city.name} est au cœur de la rénovation énergétique avec un réseau d'artisans chauffagistes dense.`,
            `Dans la métropole dynamique de ${city.name}, de nombreux foyers font le choix de la pompe à chaleur pour faire face à la hausse des prix de l'énergie.`,
            `Le bassin de vie de ${city.name} concentre les meilleurs experts en transition thermique de la région ${city.region}, prêts à intervenir pour votre confort.`,
            `Installer une PAC en zone urbaine dense comme à ${city.name} demande un savoir-faire spécifique que maîtrisent nos partenaires certifiés RGE locaux.`,
            `Avec ses ${pop.toLocaleString('fr-FR')} habitants, ${city.name} fait partie des grandes villes où la demande en rénovation énergétique est la plus forte du ${city.department_name}.`,
            `L'agglomération de ${city.name} offre un maillage exceptionnel d'installateurs PAC, garantissant des délais d'intervention courts et des tarifs compétitifs.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 10000) {
        const options = [
            `Ville à forte croissance du ${city.department_name}, ${city.name} voit fleurir les projets de rénovation globale et d'installation de pompes à chaleur air-eau.`,
            `À ${city.name}, l'amélioration du DPE des logements est une priorité. Les chauffagistes de la région interviennent rapidement pour remplacer votre ancienne chaudière.`,
            `Commune stratégique de ${city.region}, ${city.name} dispose d'un réseau idéal de professionnels agréés pour le déploiement de solutions thermiques durables.`,
            `Que votre bien soit en hypercentre de ${city.name} ou dans son agglomération, optimisez votre facture d'électricité grâce à une pompe à chaleur moderne.`,
            `Avec une population de ${pop.toLocaleString('fr-FR')} habitants, ${city.name} bénéficie d'un vivier important de professionnels RGE spécialisés en aérothermie.`,
            `La ville de ${city.name} se distingue dans le ${city.department_name} par un taux élevé de projets de rénovation énergétique aidés par MaPrimeRénov'.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 2000) {
        const options = [
            `Le parc immobilier situé autour de ${city.name} se métamorphose. L'adoption de la pompe à chaleur y est facilitée par la présence d'installateurs de proximité.`,
            `En plein ${city.department_name}, la charmante bourgade de ${city.name} bénéficie d'une couverture complète par des experts de la rénovation énergétique.`,
            `Résider à ${city.name} ne vous empêche pas d'accéder aux technologies de chauffage de pointe, soutenues par les aides nationales (MaPrimeRénov').`,
            `Les propriétés individuelles de ${city.name} représentent un terrain idéal pour l'installation d'une pompe à chaleur aérothermique sur-mesure.`,
            `Avec environ ${pop.toLocaleString('fr-FR')} résidents, ${city.name} offre un cadre propice aux installations PAC air-eau, particulièrement adaptées aux maisons individuelles.`,
            `Les foyers de ${city.name} et des communes voisines font de plus en plus appel aux installateurs certifiés du ${city.department_code} pour leur projet thermique.`
        ];
        return pickVariant(options, seed);
    }

    if (pop > 0) {
        const options = [
            `Dans la quiétude de ${city.name}, le remplacement des chaudières fioul par des pompes à chaleur de dernière génération s'accélère grâce aux artisans du secteur.`,
            `Au sein de la commune de ${city.name}, le confort thermique hivernal n'est plus un luxe. Nos professionnels labellisés RGE interviennent jusque dans les zones rurales de la région ${city.region}.`,
            `Vivre à ${city.name} vous donne les mêmes droits aux certificats d'économies d'énergie (CEE) que dans les grandes villes pour l'installation de votre PAC.`,
            `L'habitat en zone rurale autour de ${city.name} nécessite des solutions de chauffage performantes et économiques proposées par nos partenaires locaux.`,
            `Commune de ${pop.toLocaleString('fr-FR')} habitants dans le ${city.department_name}, ${city.name} est idéalement située pour bénéficier des tournées d'installation de nos artisans RGE.`,
            `Le calme de ${city.name}, en plein cœur du ${city.department_name}, n'empêche pas ses habitants de profiter des meilleures offres en pompes à chaleur disponibles en ${city.region}.`
        ];
        return pickVariant(options, seed);
    }

    const options = [
        `Dans le département ${city.department_name}, le secteur de ${city.name} est activement couvert par notre réseau de techniciens spécialisés en pompes à chaleur.`,
        `Propriétaire à ${city.name}, lancez sereinement votre projet de transition énergétique en comparant les devis d'installateurs validés.`,
        `La localité de ${city.name} fait partie des zones d'intervention privilégiées par nos partenaires chauffagistes en région ${city.region}.`,
        `Pour chiffrer précisément votre installation à ${city.name}, appuyez-vous sur notre comparateur gratuit de professionnels certifiés du ${city.department_code}.`
    ];
    return pickVariant(options, seed);
}
