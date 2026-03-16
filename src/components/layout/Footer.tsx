import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-50">
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Ta-Pompe-a-Chaleur<span className="text-green-500">.fr</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Le guide indépendant pour choisir, installer et financer votre pompe à chaleur en France.
                        </p>
                        <Link
                            href="/devis"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
                        >
                            Devis gratuit →
                        </Link>
                    </div>

                    {/* Guides populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/guides/fonctionnement-pompe-a-chaleur" className="text-slate-400 hover:text-white text-sm transition-colors">Fonctionnement PAC</Link></li>
                            <li><Link href="/guides/prix-pompe-a-chaleur" className="text-slate-400 hover:text-white text-sm transition-colors">Prix PAC 2026</Link></li>
                            <li><Link href="/guides/maprimenov-pompe-a-chaleur" className="text-slate-400 hover:text-white text-sm transition-colors">MaPrimeRénov&apos;</Link></li>
                            <li><Link href="/guides/pac-air-eau-vs-air-air" className="text-slate-400 hover:text-white text-sm transition-colors">Air-Eau vs Air-Air</Link></li>
                            <li><Link href="/guides/installation-pompe-a-chaleur-etapes" className="text-slate-400 hover:text-white text-sm transition-colors">Installation</Link></li>
                            <li><Link href="/guides/entretien-pompe-a-chaleur-obligations" className="text-slate-400 hover:text-white text-sm transition-colors">Entretien</Link></li>
                            <li><Link href="/guides" className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors">Tous les guides →</Link></li>
                        </ul>
                    </div>

                    {/* Villes populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Villes</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/pompe-a-chaleur/paris-75000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Paris</Link></li>
                            <li><Link href="/pompe-a-chaleur/lyon-69000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Lyon</Link></li>
                            <li><Link href="/pompe-a-chaleur/marseille-13000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Marseille</Link></li>
                            <li><Link href="/pompe-a-chaleur/toulouse-31000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Toulouse</Link></li>
                            <li><Link href="/pompe-a-chaleur/bordeaux-33000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Bordeaux</Link></li>
                            <li><Link href="/pompe-a-chaleur/nantes-44000" className="text-slate-400 hover:text-white text-sm transition-colors">PAC Nantes</Link></li>
                            <li><Link href="/annuaire" className="text-green-400 hover:text-green-300 text-sm font-semibold transition-colors">Tout l&apos;annuaire →</Link></li>
                        </ul>
                    </div>

                    {/* Infos */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Informations</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Accueil</Link></li>
                            <li><Link href="/marques" className="text-slate-400 hover:text-white text-sm transition-colors">Marques</Link></li>
                            <li><Link href="/marques/daikin" className="text-slate-400 hover:text-white text-sm transition-colors">Daikin</Link></li>
                            <li><Link href="/marques/atlantic" className="text-slate-400 hover:text-white text-sm transition-colors">Atlantic</Link></li>
                            <li><Link href="/marques/mitsubishi" className="text-slate-400 hover:text-white text-sm transition-colors">Mitsubishi</Link></li>
                            <li><Link href="/faq" className="text-slate-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
                            <li><Link href="/mentions-legales" className="text-slate-400 hover:text-white text-sm transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800">
                <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2026 Ta-Pompe-a-Chaleur.fr — Tous droits réservés.</p>
                    <p>Guide indépendant · Devis gratuits d&apos;installateurs RGE · France métropolitaine</p>
                </div>
            </div>
        </footer>
    );
}
