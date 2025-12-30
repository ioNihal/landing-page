"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type SelectBoxItem = {
    title: string;
    value: string;
};

type Props = {
    options: SelectBoxItem[];
};

export default function DropDownSelect({ options = [] }: Props) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<SelectBoxItem | null>(
        options[0] ?? null
    );
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative w-56">

            <button type="button" onClick={() => setOpen(v => !v)}
                className="w-full flex items-center justify-between  bg-slate-900 text-slate-200 text-sm
                   px-4 py-2 rounded-md border border-slate-800  hover:bg-slate-800 transition" >
                <span className={selected?.value === "default" ? "text-slate-400" : ""}>
                    {selected?.title ?? "Select option"}
                </span>
                <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
            </button>

            {/* Menu */}
            {open && (
                <ul className="absolute z-50 mt-2 w-full rounded-md  bg-slate-900 border border-slate-800
                     shadow-xl overflow-hidden">
                    {options.map(opt => (
                        <li key={opt.value} onClick={() => {
                            setSelected(opt);
                            setOpen(false);
                        }}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-slate-800
                            ${selected?.value === opt.value
                                    ? "bg-slate-800 text-white"
                                    : "text-slate-300"}`}>
                            {opt.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
