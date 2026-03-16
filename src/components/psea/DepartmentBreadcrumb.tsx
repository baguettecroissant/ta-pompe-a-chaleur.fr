import Link from 'next/link';
import { City } from '@/types';
import { ChevronRight, Home } from 'lucide-react';

interface DepartmentBreadcrumbProps {
    city: City;
}

export function DepartmentBreadcrumb({ city }: DepartmentBreadcrumbProps) {
    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;

    return (
        <nav aria-label="Fil d'ariane" className="text-sm text-slate-500 mb-6 flex items-center flex-wrap gap-1">
            <Link href="/" className="hover:text-green-600 flex items-center gap-1">
                <Home className="h-3 w-3" />
                Accueil
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300" />

            <Link href={`/annuaire/${deptSlug}`} className="hover:text-green-600">
                {city.department_name}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300" />

            <span className="text-slate-900 font-medium" aria-current="page">
                {city.name}
            </span>
        </nav>
    );
}
