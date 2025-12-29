"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

type FAQ = {
    q: string;
    a: ReactNode;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-10 space-y-3">
            {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                    <div
                        key={item.q}
                        className={`rounded-xl border transition
                            ${isOpen
                                ? "border-white/20 bg-slate-800/70"
                                : "border-white/10 bg-slate-900/40 hover:bg-slate-900/60"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                            <span className="text-sm sm:text-base font-medium">
                                {item.q}
                            </span>

                            <ChevronDown
                                size={18}
                                className={`shrink-0 transition-transform duration-300
                                    ${isOpen ? "rotate-180 text-white" : "text-slate-400"}`}
                            />
                        </button>

                        <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300
                                ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                            <div className="overflow-hidden px-6 pb-5 text-sm text-slate-300 leading-relaxed">
                                {item.a}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
