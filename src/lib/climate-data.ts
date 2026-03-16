/**
 * Enrichment data for city pages.
 * Provides climate zones, regional characteristics, and PAC recommendations
 * to make each city page content-rich and unique.
 */

import { City } from "@/types";

// --- Climate Zone H1/H2/H3 (French RT2012 regulation) ---
// Mapped by department code to one of 3 zones
// H1 = cold continental/oceanic (north/east), H2 = temperate oceanic (west/center), H3 = warm mediterranean (south)

const ZONE_H1_DEPTS = [
    '01', '02', '03', '05', '07', '08', '10', '14', '15', '19', '21', '23', '25', '26',
    '27', '28', '36', '37', '38', '39', '41', '42', '43', '45', '51', '52', '54', '55',
    '57', '58', '59', '60', '61', '62', '63', '67', '68', '69', '70', '71', '73', '74',
    '75', '76', '77', '78', '80', '87', '88', '89', '90', '91', '92', '93', '94', '95'
];

const ZONE_H3_DEPTS = [
    '06', '11', '13', '20', '2A', '2B', '30', '34', '66', '83', '84'
];

export type ClimateZone = 'H1' | 'H2' | 'H3';

export function getClimateZone(departmentCode: string): ClimateZone {
    if (ZONE_H1_DEPTS.includes(departmentCode)) return 'H1';
    if (ZONE_H3_DEPTS.includes(departmentCode)) return 'H3';
    return 'H2';
}

// --- Climate zone content ---

interface ClimateProfile {
    label: string;
    description: string;
    winterTemp: string;
    heatingDays: string;
    recommendedPAC: string;
    recommendedCOP: string;
    estimatedSavings: string;
    estimatedBill: string;
    dimensioning: string;
}

const CLIMATE_PROFILES: Record<ClimateZone, ClimateProfile> = {
    H1: {
        label: "Zone H1 — Climat continental / semi-continental",
        description: "hiver rigoureux avec des températures régulièrement négatives",
        winterTemp: "-7°C à 0°C",
        heatingDays: "200 à 240 jours",
        recommendedPAC: "PAC Air/Eau haute température ou PAC géothermique",
        recommendedCOP: "COP minimum de 3,5 à -7°C",
        estimatedSavings: "50 à 65%",
        estimatedBill: "900 € à 1 400 €/an en chauffage PAC (vs 2 500 € à 3 500 € en fioul/gaz)",
        dimensioning: "Puissance recommandée : 10 à 16 kW pour une maison de 120 m². Un dimensionnement précis par un installateur RGE est essentiel pour éviter les surconsommations en zone froide."
    },
    H2: {
        label: "Zone H2 — Climat océanique tempéré",
        description: "hiver doux à modéré, idéal pour les pompes à chaleur aérothermiques",
        winterTemp: "0°C à 5°C",
        heatingDays: "160 à 200 jours",
        recommendedPAC: "PAC Air/Eau basse ou moyenne température",
        recommendedCOP: "COP moyen de 4,0 à 4,5",
        estimatedSavings: "55 à 70%",
        estimatedBill: "700 € à 1 100 €/an en chauffage PAC (vs 2 000 € à 3 000 € en fioul/gaz)",
        dimensioning: "Puissance recommandée : 8 à 12 kW pour une maison de 120 m². Les températures clémentes offrent un rendement optimal de votre PAC tout au long de l'année."
    },
    H3: {
        label: "Zone H3 — Climat méditerranéen",
        description: "hiver doux et court, été chaud nécessitant souvent une climatisation",
        winterTemp: "3°C à 8°C",
        heatingDays: "100 à 150 jours",
        recommendedPAC: "PAC Air/Air réversible (chauffage + climatisation)",
        recommendedCOP: "COP souvent supérieur à 5 grâce au climat favorable",
        estimatedSavings: "60 à 75%",
        estimatedBill: "500 € à 800 €/an (chauffage + clim PAC) vs 1 500 € à 2 500 € (solutions classiques)",
        dimensioning: "Puissance recommandée : 6 à 10 kW pour une maison de 120 m². La réversibilité est un atout majeur en zone méditerranéenne, offrant fraîcheur l'été sans surcoût important."
    }
};

export function getClimateProfile(departmentCode: string): ClimateProfile {
    return CLIMATE_PROFILES[getClimateZone(departmentCode)];
}

// --- Regional housing & context ---

interface RegionalProfile {
    housingType: string;
    architecture: string;
    energyContext: string;
    localAdvantage: string;
}

const REGIONAL_PROFILES: Record<string, RegionalProfile> = {
    "Auvergne-Rhône-Alpes": {
        housingType: "maisons de pierre, chalets de montagne et pavillons récents",
        architecture: "Le bâti traditionnel en granite ou pisé et les constructions de montagne nécessitent un dimensionnement soigné de la PAC face aux hivers rudes.",
        energyContext: "Région à forte dépendance au chauffage fioul et bois en zones rurales et montagneuses, où la PAC offre une alternative performante.",
        localAdvantage: "La proximité des Alpes et des volcans d'Auvergne garantit un réseau dense d'artisans chauffagistes expérimentés en conditions hivernales."
    },
    "Bourgogne-Franche-Comté": {
        housingType: "maisons en pierre calcaire, fermes comtoises et pavillons de lotissement",
        architecture: "Les maisons traditionnelles bourguignonnes aux murs épais offrent une bonne inertie thermique, optimisant le rendement d'une PAC basse température.",
        energyContext: "Le remplacement des chaudières fioul par des PAC Air/Eau est une priorité de rénovation dans cette région de tradition industrielle.",
        localAdvantage: "Le réseau d'artisans spécialisés en rénovation énergétique est bien développé grâce à l'impulsion des programmes régionaux."
    },
    "Bretagne": {
        housingType: "maisons en granit, longères et pavillons bretons",
        architecture: "Les constructions en granite caractéristiques de la Bretagne affichent une forte inertie thermique mais nécessitent souvent une isolation complémentaire.",
        energyContext: "Le climat océanique doux de la Bretagne offre des conditions idéales pour les PAC aérothermiques, avec un COP élevé même en hiver.",
        localAdvantage: "Les températures rarement négatives permettent un fonctionnement optimal des PAC Air/Eau, avec un retour sur investissement parmi les plus rapides de France."
    },
    "Centre-Val de Loire": {
        housingType: "maisons de tuffeau, longères ligériennes et pavillons résidentiels",
        architecture: "Les bâtisses en tuffeau du Val de Loire, classées ou non, peuvent accueillir des PAC discrètes respectant le patrimoine architectural.",
        energyContext: "La plaine céréalière du Centre-Val de Loire se caractérise par un habitat dispersé, où les PAC remplacent avantageusement les chaudières fioul.",
        localAdvantage: "Le climat tempéré du bassin ligérien et les hivers modérés assurent un rendement saisonnier (SCOP) parmi les meilleurs de France métropolitaine."
    },
    "Corse": {
        housingType: "maisons de pierre, bergeries rénovées et villas contemporaines",
        architecture: "L'architecture typiquement méditerranéenne de la Corse est idéale pour les PAC Air/Air réversibles, assurant fraîcheur estivale et chauffage hivernal.",
        energyContext: "L'insularité et le coût de l'énergie en Corse rendent la PAC particulièrement rentable, avec une connexion réseau parfois limitée en zone de montagne.",
        localAdvantage: "Le climat exceptionnellement doux du littoral corse permet des COP très élevés et un amortissement rapide de l'investissement PAC."
    },
    "Grand Est": {
        housingType: "maisons à colombages, habitations en grès des Vosges et pavillons modernes",
        architecture: "Le patrimoine alsacien à colombages et les habitations vosgiennes requièrent des PAC haute température ou géothermiques face aux hivers froids.",
        energyContext: "Région aux hivers les plus froids de France métropolitaine, le Grand Est est en pleine transition du chauffage au gaz/fioul vers les PAC.",
        localAdvantage: "La tradition industrielle et artisanale du Grand Est garantit un vivier de chauffagistes qualifiés, experts des installations en climat rigoureux."
    },
    "Hauts-de-France": {
        housingType: "maisons flamandes en briques, corons rénovés et habitations récentes",
        architecture: "Les constructions en brique rouge typiques du Nord offrent une isolation correcte et s'adaptent bien à l'installation de PAC Air/Eau.",
        energyContext: "La reconversion énergétique des Hauts-de-France passe par le remplacement massif des chaudières gaz par des solutions pompes à chaleur.",
        localAdvantage: "Les dispositifs régionaux d'aide à la rénovation énergétique sont parmi les plus généreux de France, complétant les aides nationales."
    },
    "Normandie": {
        housingType: "colombages normands, longères en pierre et pavillons modernes",
        architecture: "L'habitat normand traditionnel, souvent humide, bénéficie grandement d'une PAC Air/Eau qui régule hygrométrie et température simultanément.",
        energyContext: "Le climat océanique humide de Normandie permet un fonctionnement régulier des PAC, réduisant significativement la facture de chauffage.",
        localAdvantage: "La douceur des hivers normands favorise un COP élevé et constant, faisant des PAC aérothermiques le choix le plus économique."
    },
    "Nouvelle-Aquitaine": {
        housingType: "échoppes bordelaises, maisons en pierre du Périgord et villas landaises",
        architecture: "Le bâti diversifié de la Nouvelle-Aquitaine (pierres, bois, brique) offre de multiples configurations pour l'installation de PAC adaptées.",
        energyContext: "Première région française par la surface, la Nouvelle-Aquitaine présente un fort potentiel de transition énergétique en habitat individuel.",
        localAdvantage: "Le climat tempéré à doux du sud-ouest et les températures hivernales clémentes assurent un rendement PAC supérieur à la moyenne nationale."
    },
    "Occitanie": {
        housingType: "bastides méridionales, mas languedociens et villas contemporaines",
        architecture: "Les constructions en terre cuite et pierre typiques de l'Occitanie supportent idéalement les PAC Air/Air réversibles pour un confort toute l'année.",
        energyContext: "En Occitanie, la PAC réversible est la solution idéale : chauffage l'hiver et climatisation l'été, avec l'un des ensoleillement les plus forts de France.",
        localAdvantage: "Le climat semi-méditerranéen offre des COP parmi les plus élevés de France, et la forte croissance démographique stimule le marché de la rénovation."
    },
    "Pays de la Loire": {
        housingType: "maisons angevines en tuffeau, logis vendéens et pavillons modernes",
        architecture: "L'architecture ligérienne se prête naturellement à l'intégration de PAC, avec des espaces extérieurs généreux facilitant la pose de l'unité externe.",
        energyContext: "Les Pays de la Loire combinent un climat océanique doux et un parc immobilier important de maisons individuelles, cible idéale pour les PAC.",
        localAdvantage: "Le dynamisme économique de la région (Nantes, Angers) a favorisé l'émergence d'un réseau dense d'installateurs certifiés RGE."
    },
    "Provence-Alpes-Côte d'Azur": {
        housingType: "bastides provençales, cabanons et appartements de la Côte d'Azur",
        architecture: "Le bâti méditerranéen aux murs épais est naturellement isolé, optimisant le rendement d'une PAC réversible qui assure aussi la climatisation.",
        energyContext: "La région PACA est idéale pour la PAC réversible : le besoin en climatisation estivale justifie à lui seul l'investissement, en plus du chauffage hivernal.",
        localAdvantage: "L'ensoleillement exceptionnel et les hivers doux du littoral offrent les COP les plus élevés de France métropolitaine (>5 en moyenne)."
    },
    "Île-de-France": {
        housingType: "appartements haussmanniens, pavillons de banlieue et logements sociaux",
        architecture: "L'habitat parisien et francilien présente des contraintes spécifiques (copropriétés, vis-à-vis) maîtrisées par nos installateurs spécialisés.",
        energyContext: "L'Île-de-France, avec 12 millions d'habitants, est le premier marché français pour les PAC, notamment pour le remplacement des chaudières gaz.",
        localAdvantage: "La densité du réseau d'artisans RGE en Île-de-France garantit une grande réactivité et des devis compétitifs grâce à la concurrence."
    }
};

export function getRegionalProfile(region: string): RegionalProfile {
    return REGIONAL_PROFILES[region] || REGIONAL_PROFILES["Île-de-France"];
}

// --- Estimated annual savings ---

export function getEstimatedSavings(departmentCode: string, population: number): {
    annualSavingMin: number;
    annualSavingMax: number;
    paybackYears: string;
} {
    const zone = getClimateZone(departmentCode);
    // Base savings vary by zone (more heating needed = more savings)
    const baseSavings = { H1: { min: 1200, max: 2100 }, H2: { min: 900, max: 1700 }, H3: { min: 600, max: 1200 } };
    const s = baseSavings[zone];

    // Adjust slightly by population (urban = gas network = higher per-unit energy cost savings)
    const urbanBonus = population > 10000 ? 1.1 : population > 2000 ? 1.05 : 1.0;

    return {
        annualSavingMin: Math.round(s.min * urbanBonus / 100) * 100,
        annualSavingMax: Math.round(s.max * urbanBonus / 100) * 100,
        paybackYears: zone === 'H1' ? '5 à 8' : zone === 'H2' ? '6 à 9' : '7 à 10'
    };
}

// --- Housing type context based on population ---

export function getHousingContext(population: number): string {
    if (population > 50000) return "appartements en copropriété, immeubles collectifs et maisons de ville";
    if (population > 10000) return "pavillons, maisons de ville et petits immeubles résidentiels";
    if (population > 2000) return "maisons individuelles, pavillons de lotissement et quelques petits collectifs";
    if (population > 0) return "maisons individuelles, corps de ferme rénovés et habitations rurales";
    return "habitations individuelles et bâtiments ruraux";
}
