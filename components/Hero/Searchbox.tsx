"use client";
import { Search } from "lucide-react";

export default function Searchbox() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 mx-auto max-w-2xl flex items-center gap-2
            rounded-full bg-slate-950 border border-white/10 p-2">
            <input
                type="text"
                placeholder="Search the best AI tools for every need"
                className="flex-1 bg-transparent px-4 py-2 text-sm
            placeholder-gray-400 focus:outline-none" />
            <button
                type="submit"
                className="rounded-full px-8 bg-cyan-400 p-3">
                <Search size={18} />
            </button>
        </form>
    );
}
