"use client";

import { Search, BadgeCheck } from "lucide-react";
import { useState } from "react";


export default function ToolsToolbar() {
    const [toggleVerfied, setToggleVerfied] = useState(false)

    return (
        <div className="flex flex-row gap-3 items-center justify-between mb-6">
            <div className="relative w-full">
                <Search
                    size={16}
                    className="absolute left-3 top-3 text-slate-400"
                />
                <input
                    placeholder="Search tools..."
                    className="w-full rounded-md bg-slate-900 border border-white/10 pl-9 pr-3 py-2 text-sm"
                />
            </div>

            <button onClick={() => setToggleVerfied((p) => !p)}
                className={`inline-flex items-center gap-2 px-4 py-2 font-medium
                 rounded-md ${toggleVerfied ? "bg-linear-to-b from-white to-cyan-100/80 text-blue-600" : "bg-slate-900"} border border-white/10 text-sm`}>
                Verified
                <BadgeCheck size={20} fill={toggleVerfied ? "blue" : "none"} className={toggleVerfied ? "text-white/70" : "text-cyan-400"} />
            </button>
        </div>
    );
}
