"use client";

import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";


export default function ToolsToolbar() {
    const [toggleVerfied, setToggleVerfied] = useState(false)

    return (
        <div className="flex flex-row gap-3 items-center justify-between mb-6">
            <SearchBar placeholder={"Search tools..."} />

            <button onClick={() => setToggleVerfied((p) => !p)}
                className={`inline-flex items-center gap-2 px-4 py-2 font-medium
                 rounded-md ${toggleVerfied ? "bg-linear-to-b from-white to-cyan-100/80 text-blue-600" : "bg-slate-900"} border border-white/10 text-sm`}>
                Verified
                <BadgeCheck size={20} fill={toggleVerfied ? "blue" : "none"} className={toggleVerfied ? "text-white/70" : "text-cyan-400"} />
            </button>
        </div>
    );
}
