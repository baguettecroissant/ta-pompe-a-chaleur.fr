"use client";

import { useEffect, useRef } from "react";

export function ViteUnDevisWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Avoid double injection
        if (containerRef.current && containerRef.current.querySelector("script")) {
            return;
        }

        // Set global variables for the ViteUnDevis script
        const w = window as any;
        w.vud_partenaire_id = '2353';
        w.vud_categorie_id = '36'; // 36 = Pompe à chaleur

        // Create script
        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.async = true;
        vud_js.src = '//www.viteundevis.com/f219b53eb1/' + w.vud_partenaire_id + '/' + w.vud_categorie_id + '/';

        // Inject
        if (containerRef.current) {
            containerRef.current.appendChild(vud_js);
        }
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            {/* Target DIV for the ViteUnDevis category widget (PAC) */}
            <div id="vf219b53eb1d" className="min-h-[400px] flex items-center justify-center text-slate-400">
                <span ref={containerRef}>
                    {/* Script will be appended here */}
                </span>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
                Service gratuit et sans engagement
            </p>
        </div>
    );
}
