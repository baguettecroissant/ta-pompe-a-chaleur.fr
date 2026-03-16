"use client";

import { useEffect, useRef } from "react";

export function ViteUnDevisWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Avoid double injection
        if (containerRef.current && containerRef.current.querySelector("script")) {
            return;
        }

        // Helper to safely add global variables for the script
        const w = window as any;
        w.vud_partenaire_id = '2353';
        const title = document.title || "pompe à chaleur";
        w.vud_keyword = encodeURI(title);
        w.vud_box_id = 'b4fec02231';

        // Create script
        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.async = true;
        vud_js.src = '//www.viteundevis.com/marqueblanche/?b=' + w.vud_box_id + '&p=' + w.vud_partenaire_id + '&c=' + w.vud_keyword;

        // Inject
        if (containerRef.current) {
            containerRef.current.appendChild(vud_js);
        }
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            {/* Target DIV for the widget as specified in the snippet */}
            <div id="vb4fec02231d" className="min-h-[400px] flex items-center justify-center text-slate-400">
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
