"use client";
import { Search } from "lucide-react";

export default function Searchbox({ text = "Search the best AI tools for every need" }: { text?: string }) {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 mx-auto max-w-4xl flex items-center gap-2
            rounded-full bg-slate-950 border border-white/10 p-1">
            <input
                type="text"
                placeholder={text}
                className="flex-1 bg-transparent px-4 py-2 text-sm
            placeholder-gray-400 focus:outline-none" />
            <button
                type="submit"
                className="rounded-full px-8 bg-cyan-400 p-3 hover:bg-cyan-300">
                <Search size={18} />
            </button>
        </form>
    );
}
