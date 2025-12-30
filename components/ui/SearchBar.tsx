import { Search } from "lucide-react";


export default function SearchBar({ placeholder }: { placeholder: string }) {
    return (
        <div className="relative w-full">
            <Search
                size={16}
                className="absolute left-3 top-3 text-slate-400"
            />
            <input
                placeholder={placeholder || "Search here..."}
                className="w-full rounded-md bg-slate-900 border border-white/10 pl-9 pr-3 py-2 text-sm"
            />
        </div>
    )
}
