"use client";

import { City } from "@/types";
import { Search, MapPin } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

interface DepartmentCitiesProps {
    departmentName: string;
    departmentCode: string;
    cities: City[];
}

export function DepartmentCities({ departmentName, departmentCode, cities }: DepartmentCitiesProps) {
    const [search, setSearch] = useState("");

    const filteredCities = useMemo(() => {
        if (!search) return cities;
        const lower = search.toLowerCase();
        return cities.filter(c =>
            c.name.toLowerCase().includes(lower) ||
            c.zip.includes(lower)
        );
    }, [cities, search]);

    const isSearching = search.length > 0;
    const featuredCount = 12;
    const featuredCities = isSearching ? [] : filteredCities.slice(0, featuredCount);
    const listedCities = isSearching ? filteredCities : filteredCities.slice(featuredCount);

    return (
        <div className="space-y-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 max-w-2xl mx-auto -mt-24 relative z-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                        type="search"
                        placeholder={`Rechercher une ville dans le ${departmentCode} (ex: ${cities[0]?.name || "Ville"}...)`}
                        className="pl-10 h-12 text-lg"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <p className="text-sm text-slate-500 mt-2 text-center">
                    {filteredCities.length} villes desservies dans le {departmentName}
                </p>
            </div>

            {!isSearching && featuredCities.length > 0 && (
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-green-600" />
                        Principales installations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {featuredCities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/pompe-a-chaleur/${city.slug}`}
                                className="group flex flex-col p-4 rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-md transition-all bg-white"
                            >
                                <span className="text-lg font-bold text-slate-800 group-hover:text-green-700 mb-1">
                                    {city.name}
                                </span>
                                <span className="text-slate-500 text-sm">
                                    Code postal : {city.zip}
                                </span>
                                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-green-600 font-medium flex items-center">
                                    Voir les installateurs
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {listedCities.length > 0 && (
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        {isSearching ? "Résultats de recherche" : `Toutes les communes (${departmentCode})`}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2">
                        {listedCities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/pompe-a-chaleur/${city.slug}`}
                                className="text-slate-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm truncate block transition-colors"
                                title={`Pompe à chaleur à ${city.name}`}
                            >
                                {city.name}
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {filteredCities.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    Aucune ville trouvée pour &quot;{search}&quot;.
                </div>
            )}
        </div>
    );
}
