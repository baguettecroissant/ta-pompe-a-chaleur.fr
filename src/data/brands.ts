export interface Brand {
    slug: string;
    name: string;
    logo?: string;
    country: string;
    countryFlag: string;
    founded: string;
    headquarters: string;
    tagline: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    models: {
        name: string;
        type: "air-air" | "air-eau" | "hybride" | "geothermie";
        priceRange: string;
        features: string[];
    }[];
    pros: string[];
    cons: string[];
    warranty: string;
    priceRange: {
        airAir: string;
        airEau: string;
    };
    savRating: number;
    qualityRating: number;
    priceRating: number;
    faq: { question: string; answer: string }[];
}

export const BRANDS: Brand[] = [
    {
        slug: "daikin",
        name: "Daikin",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1924",
        headquarters: "Osaka, Japon",
        tagline: "Le leader mondial incontesté de la pompe à chaleur",
        description: `Daikin est le fabricant de pompes à chaleur le plus reconnu au monde. Depuis près d'un siècle, l'entreprise japonaise s'impose comme la référence absolue en matière d'innovation thermique, en particulier avec la technologie Inverter qu'elle a largement contribué à démocratiser.

En France, Daikin bénéficie d'une notoriété exceptionnelle et du plus large réseau d'installateurs qualifiés. Outre la conception de ses propres compresseurs, Daikin est le seul fabricant à développer aussi ses propres fluides frigorigènes (comme le R-32), garantissant une efficacité énergétique et une empreinte carbone maîtrisées.`,
        seoTitle: "Daikin Pompe à Chaleur : Prix, Avis et Modèles 2026",
        seoDescription: "Tout savoir sur les PAC Daikin (Altherma, Perfera) : prix (2 500€ à 15 000€), fonctionnement, avis clients, garanties et réseau d'installateurs en France.",
        models: [
            {
                name: "Daikin Altherma 3 H HT",
                type: "air-eau",
                priceRange: "9 500€ - 15 000€",
                features: ["Haute température (70°C)", "Idéal rénovation", "Silencieux (38 dBA)", "Design récompensé"],
            },
            {
                name: "Daikin Perfera (Mural)",
                type: "air-air",
                priceRange: "2 500€ - 4 000€",
                features: ["A+++ en chaud/froid", "Purification d'air Flash Streamer", "Détecteur de présence", "Très silencieux"],
            },
            {
                name: "Daikin Ururu Sarara",
                type: "air-air",
                priceRange: "3 500€ - 5 500€",
                features: ["Humidification intégrée", "Apport d'air neuf", "Nettoyage filtre auto", "Premium absolu"],
            },
            {
                name: "Daikin Altherma Hybride",
                type: "hybride",
                priceRange: "7 000€ - 11 000€",
                features: ["Couplage chaudière gaz", "Régulation intelligente", "Faible encombrement", "Idéal grands froids"],
            },
        ],
        pros: [
            "Qualité de fabrication et fiabilité exceptionnelles",
            "Très grand réseau d'installateurs et SAV en France",
            "Haute performance acoustique (très silencieux)",
            "Technologies exclusives (Inverter, Fluide R32)",
            "Longue durée de vie des pièces",
        ],
        cons: [
            "Prix supérieurs à la moyenne du marché",
            "Coût des pièces détachées élevé hors garantie",
            "Gamme parfois complexe à déchiffrer",
        ],
        warranty: "3 ans pièces, 5 ans compresseur",
        priceRange: {
            airAir: "2 500€ - 6 000€",
            airEau: "8 000€ - 16 000€",
        },
        savRating: 5,
        qualityRating: 5,
        priceRating: 3,
        faq: [
            {
                question: "Quel est le prix d'une pompe à chaleur Daikin ?",
                answer: "Le tarif dépend fortement du modèle. Une PAC air-air (climatisation réversible) Daikin varie de 2 500€ à 6 000€ installée. Pour une PAC air-eau (chauffage central et eau chaude), comptez entre 8 000€ et 16 000€ avec la pose.",
            },
            {
                question: "Pourquoi Daikin est considéré comme la meilleure marque ?",
                answer: "Daikin fabrique l'intégralité de ses composants (compresseurs, cartes électroniques, fluides), ce qui garantit une fiabilité optimale. De plus, c'est la marque maîtrisant le mieux la technologie Inverter et offrant le fonctionnement le plus silencieux.",
            },
            {
                question: "Où sont fabriquées les PAC Daikin pour l'Europe ?",
                answer: "Pour le marché européen, Daikin a localisé sa production. La majorité des modèles air-eau (Altherma) vendus en France sont assemblés en Europe (notamment en Belgique, République Tchèque et Allemagne).",
            },
        ],
    },
    {
        slug: "atlantic",
        name: "Atlantic",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1968",
        headquarters: "La Roche-sur-Yon, France",
        tagline: "L'excellence française du confort thermique",
        description: `Créée en Vendée en 1968, Atlantic est la marque française leader dans les solutions de confort thermique. Contrairement aux géants asiatiques spécialisés d'abord dans la climatisation, Atlantic vient du monde du chauffage traditionnel, ce qui en fait un expert absolu du chauffage central et de la rénovation en France.

La force d'Atlantic réside dans ses pompes à chaleur air-eau (gamme Alfea) développées spécifiquement pour les climats européens et les radiateurs existants. La marque bénéficie en outre d'un service après-vente très réactif pour les professionnels sur le territoire national.`,
        seoTitle: "Pompe à Chaleur Atlantic : Prix, Modèles Alfea et Avis 2026",
        seoDescription: "Découvrez les pompes à chaleur Atlantic (Alfea Extensa, Loria). Fabrication française, prix d'installation (6000€ à 14000€), avis et subventions MaPrimeRénov'.",
        models: [
            {
                name: "Alfea Extensa A.I.",
                type: "air-eau",
                priceRange: "7 000€ - 11 000€",
                features: ["Échangeur coaxial breveté", "Idéal plancher chauffant", "Connectivité Cozytouch", "Production ECS intégrée"],
            },
            {
                name: "Alfea Excellia A.I.",
                type: "air-eau",
                priceRange: "9 000€ - 14 000€",
                features: ["Haute température (60°C)", "Idéal rénovation radiateurs", "Maintien de puissance à -15°C", "Robuste"],
            },
            {
                name: "Takao M2 (Air-Air)",
                type: "air-air",
                priceRange: "2 000€ - 3 500€",
                features: ["Design compact", "Détecteur de présence", "Mode silence", "Filtration optimisée"],
            },
        ],
        pros: [
            "Conception et fabrication française (pour les PAC Air/Eau)",
            "Échangeur coaxial breveté (très résistant aux eaux dures et impuretés)",
            "Service technique ultra-réactif basé en France",
            "Parfaitement adapté aux rénovations de vieilles maisons",
            "Rapport qualité-prix excellent sur la gamme Air/Eau",
        ],
        cons: [
            "Certaines gammes Air/Air sont sous-traitées (partenariat Fujitsu)",
            "Design des unités extérieures plus massif",
            "Esthétique des unités intérieures Air/Air classique",
        ],
        warranty: "2 ans pièces (extensible à 5), 5 ans compresseur",
        priceRange: {
            airAir: "2 000€ - 4 500€",
            airEau: "7 000€ - 14 000€",
        },
        savRating: 4,
        qualityRating: 4,
        priceRating: 4,
        faq: [
            {
                question: "Les pompes à chaleur Atlantic sont-elles fabriquées en France ?",
                answer: "Oui, la recherche, le développement et la fabrication des pompes à chaleur Air/Eau (comme la gamme Alfea) sont réalisés en France, principalement dans l'usine de Billy-Berclau (Pas-de-Calais).",
            },
            {
                question: "Qu'est-ce que l'échangeur coaxial Atlantic ?",
                answer: "C'est une technologie brevetée par Atlantic pour ses PAC Air/Eau. Contrairement aux échangeurs à plaques classiques qui peuvent s'encrasser facilement, l'échangeur coaxial est beaucoup moins sensible aux impuretés de l'eau des vieux réseaux de radiateurs.",
            },
            {
                question: "Atlantic ou Daikin, que choisir ?",
                answer: "Pour une PAC Air/Air (climatisation), Daikin reste une référence technique supérieure. Pour une PAC Air/Eau en remplacement d'une chaudière fioul ou gaz sur un vieux réseau, Atlantic est extrêmement robuste et souvent plus avantageux financièrement en France.",
            },
        ],
    },
    {
        slug: "mitsubishi",
        name: "Mitsubishi Electric",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1921",
        headquarters: "Tokyo, Japon",
        tagline: "La puissance technologique face aux froids extrêmes",
        description: `Mitsubishi Electric est l'un des pionniers historiques de la climatisation et des pompes à chaleur. Le conglomérat japonais est réputé pour la longévité de ses équipements et sa maîtrise des compresseurs haute performance.

Sa technologie brevetée Hyper Heating (Zubadan) permet aux pompes à chaleur Mitsubishi de maintenir 100% de leur puissance de chauffe même lorsque les températures extérieures chutent à -15°C, garantissant un chauffage efficace sans résistance électrique d'appoint dans les régions froides.`,
        seoTitle: "Mitsubishi Pompe à Chaleur : Prix, Zubadan et Ecodan 2026",
        seoDescription: "Examen des PAC Mitsubishi Electric. Technologies Hyper Heating, Ecodan, Zubadan. Prix moyen (3000€ à 16000€), avantages, inconvénients et avis.",
        models: [
            {
                name: "Ecodan Zubadan",
                type: "air-eau",
                priceRange: "9 500€ - 16 000€",
                features: ["Technologie Hyper Heating", "Chauffage garanti à -28°C", "Maintien 100% puissance à -15°C", "Silencieuse"],
            },
            {
                name: "Mural MSZ-LN",
                type: "air-air",
                priceRange: "2 800€ - 4 500€",
                features: ["Capteur 3D I-See Sensor", "4 coloris premium", "Plasma Quad Plus (filtration virus)", "Design luxueux"],
            },
            {
                name: "Ecodan Eco Inverter",
                type: "air-eau",
                priceRange: "7 500€ - 11 000€",
                features: ["Construction neuve (RT2012/RE2020)", "Format ultra-compact", "Hautes performances (COP)", "Connectivité MelCloud"],
            },
        ],
        pros: [
            "Technologie Hyper Heating inégalée pour les climats rudes",
            "Niveau sonore des unités extérieures très bas (Gamme Silence)",
            "Robustesse et taux de panne historiquement bas",
            "Filtration d'air de pointe sur la gamme Air/Air",
        ],
        cons: [
            "Coût d'investissement initial élevé",
            "Réseau installateurs un peu moins dense que Daikin",
            "Module intérieur Air/Eau parfois volumineux",
        ],
        warranty: "3 ans pièces, 5 ans compresseur",
        priceRange: {
            airAir: "2 800€ - 5 500€",
            airEau: "7 500€ - 16 000€",
        },
        savRating: 4,
        qualityRating: 5,
        priceRating: 3,
        faq: [
            {
                question: "Qu'est-ce que la technologie Zubadan de Mitsubishi ?",
                answer: "Zubadan (qui signifie 'super chauffage' en japonais) est une technologie de compresseur avec réinjection de fluide. Elle permet à la pompe à chaleur de fonctionner jusqu'à -28°C et de conserver sa puissance nominale de chauffe jusqu'à -15°C extérieur.",
            },
            {
                question: "Combien coûte une PAC Ecodan de Mitsubishi ?",
                answer: "La gamme Air/Eau Ecodan est généralement facturée entre 7 500€ (pour une maison neuve bien isolée) et plus de 15 000€ pour une grande maison en rénovation avec la technologie Zubadan (pose comprise).",
            },
            {
                question: "Les PAC Mitsubishi sont-elles bruyantes ?",
                answer: "Non, Mitsubishi Electric propose parmi les unités extérieures les plus silencieuses du marché (châssis AA et ultra-silence), ce qui garantit le respect des normes d'urbanisme en limite de propriété.",
            },
        ],
    },
];

export function getBrandBySlug(slug: string): Brand | undefined {
    return BRANDS.find((brand) => brand.slug === slug);
}

export function getAllBrandSlugs(): string[] {
    return BRANDS.map((brand) => brand.slug);
}
