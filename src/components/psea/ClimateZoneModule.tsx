import { City } from "@/types";
import { getClimateProfile, getClimateZone, getEstimatedSavings, getHousingContext, getRegionalProfile } from "@/lib/climate-data";
import { Thermometer, TrendingDown, Home, MapPin } from "lucide-react";

interface ClimateZoneModuleProps {
    city: City;
}

export function ClimateZoneModule({ city }: ClimateZoneModuleProps) {
    const zone = getClimateZone(city.department_code);
    const climate = getClimateProfile(city.department_code);
    const regional = getRegionalProfile(city.region);
    const savings = getEstimatedSavings(city.department_code, city.population || 0);
    const housing = getHousingContext(city.population || 0);

    return (
        <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
                Quelle pompe à chaleur pour {city.name} ?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Climate zone card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <Thermometer className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Zone climatique {zone}</h3>
                            <p className="text-sm text-slate-500">{climate.label}</p>
                        </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex justify-between">
                            <span>Températures hivernales</span>
                            <span className="font-semibold text-slate-800">{climate.winterTemp}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Jours de chauffage/an</span>
                            <span className="font-semibold text-slate-800">{climate.heatingDays}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{climate.recommendedCOP}</span>
                        </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-sm font-semibold text-blue-700">
                            ✓ Recommandation : {climate.recommendedPAC}
                        </p>
                    </div>
                </div>

                {/* Savings card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-100 p-2 rounded-lg">
                            <TrendingDown className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Économies estimées à {city.name}</h3>
                            <p className="text-sm text-slate-500">Par rapport à une chaudière fioul/gaz</p>
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <span className="text-3xl font-black text-green-700">
                            {savings.annualSavingMin} € à {savings.annualSavingMax} €
                        </span>
                        <p className="text-sm text-green-600 font-medium mt-1">d&apos;économies estimées par an</p>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex justify-between">
                            <span>Réduction de la facture</span>
                            <span className="font-semibold text-green-700">{climate.estimatedSavings}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Retour sur investissement</span>
                            <span className="font-semibold text-slate-800">{savings.paybackYears} ans</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Regional context */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Home className="h-4 w-4 text-green-600" />
                            <h3 className="font-bold text-slate-800 text-sm">Habitat typique à {city.name}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            L&apos;habitat de {city.name} est principalement constitué de {housing}. {regional.architecture}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <h3 className="font-bold text-slate-800 text-sm">Contexte énergétique en {city.region}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {regional.energyContext}
                        </p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                        <strong className="text-green-700">Dimensionnement :</strong> {climate.dimensioning}
                    </p>
                </div>
            </div>
        </section>
    );
}
