"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";


export default function AccordionSection({ tabs, faqs }: { tabs: string[], faqs: Record<string, { q: string; a: string }[]> }) {
    const [activeTab, setActiveTab] = useState("General");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            {/* Tabs */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        role="tab"
                        aria-selected={activeTab === tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setOpenIndex(null);
                        }}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition hover:cursor-pointer
                                ${activeTab === tab
                                ? "bg-cyan-400 text-black"
                                : "bg-neutral-800 text-slate-300 hover:bg-slate-700"
                            }`}>
                        {tab}
                    </button>
                ))}
            </div>

            {/* Accordion */}
            <section className="mt-10 space-y-4">
                {faqs[activeTab]?.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    const panelId = `${activeTab}-${idx}`;


                    return (
                        <div key={item.q} className="rounded-xl border border-white/15 bg-slate-900/40">
                            <button
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left">
                                <span className="font-medium">
                                    {item.q}
                                </span>
                                <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-4 text-slate-300 text-sm leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </>
    )
}
