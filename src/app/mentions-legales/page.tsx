import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Mentions Légales — Ta-Pompe-a-Chaleur.fr",
    description: "Mentions légales du site Ta-Pompe-a-Chaleur.fr. Informations sur l'éditeur, l'hébergeur et la politique de confidentialité.",
    alternates: { canonical: 'https://www.ta-pompe-a-chaleur.fr/mentions-legales' },
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Mentions Légales" }]} />
                    <h1 className="text-3xl md:text-4xl font-bold mt-6">Mentions Légales</h1>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-slate">
                    <h2>Éditeur du site</h2>
                    <p>
                        Le site <strong>ta-pompe-a-chaleur.fr</strong> est un site d&apos;information indépendant
                        dédié aux pompes à chaleur en France. Il a pour objectif d&apos;aider les particuliers
                        à comparer les marques, comprendre les aides financières et obtenir des devis gratuits.
                    </p>

                    <h2>Hébergement</h2>
                    <p>
                        Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                    </p>

                    <h2>Propriété intellectuelle</h2>
                    <p>
                        L&apos;ensemble des contenus (textes, images, graphiques) présents sur ce site sont
                        protégés par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite
                        sans autorisation préalable.
                    </p>

                    <h2>Données personnelles</h2>
                    <p>
                        Les données collectées via les formulaires de demande de devis sont transmises
                        à nos partenaires installateurs RGE dans le seul but de vous fournir des
                        propositions commerciales. Conformément au RGPD, vous disposez d&apos;un droit
                        d&apos;accès, de rectification et de suppression de vos données.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Ce site n&apos;utilise aucun cookie de tracking publicitaire. Les seuls cookies
                        éventuellement utilisés sont des cookies techniques nécessaires au bon
                        fonctionnement du site et du service de demande de devis.
                    </p>

                    <h2>Liens d&apos;affiliation</h2>
                    <p>
                        Ce site contient des liens et widgets d&apos;affiliation. Lorsque vous demandez un
                        devis via notre partenaire, nous pouvons percevoir une commission. Cela ne modifie
                        en rien le prix que vous payez ni l&apos;indépendance de nos recommandations.
                    </p>

                    <h2>Responsabilité</h2>
                    <p>
                        Les informations fournies sur ce site le sont à titre indicatif. Nous nous efforçons
                        de les maintenir à jour mais ne saurions garantir leur exactitude. Il est recommandé
                        de vérifier les prix et conditions directement auprès des installateurs.
                    </p>
                </div>
            </section>
        </div>
    );
}
