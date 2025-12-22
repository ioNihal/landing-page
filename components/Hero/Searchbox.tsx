"use client";

import { Search } from "lucide-react";

export default function Searchbox() {
    return (
        <form onSubmit={(e) => { e.preventDefault() }} className="mt-6 mx-auto w-4xl flex gap-3 justify-between py-2 px-3 rounded-full bg-slate-950">
            <input type="text" placeholder="Search the Best AI Tools for Every Need"
                className="w-full p-3 px-6 rounded-full focus:outline-0 " />
            <button type="submit" className="bg-cyan-400 px-8 rounded-full cursor-pointer">
                <Search />
            </button>
        </form>
    )
}
