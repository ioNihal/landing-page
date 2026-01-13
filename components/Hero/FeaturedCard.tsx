
import { FeaturedTool } from "@/lib/types";
import { Bookmark, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function FeaturedCard({ tool }: { tool: FeaturedTool }) {
    return (
        <article
            className="relative rounded-xl border border-white/20
          bg-slate-950 p-3 transition hover:bg-gray-800">
            {/* Featured badge */}
            <div className="absolute right-4 top-4 flex items-center gap-2">
                <span className="flex items-center gap-1
                  rounded bg-[#9d7400] px-1 py-px text-[10px] font-mediu">
                    <Star size={12} fill="yellow" />
                    Featured
                </span>
                <span className="hover:text-cyan-400 cursor-pointer">
                    <Bookmark size={18} />
                </span>
            </div>

            {/* Header */}
            <div className="flex gap-2">
                <Image
                    src={tool.img}
                    alt={tool.name}
                    width={56}
                    height={56}
                    className="h-8 w-8 rounded-lg object-cover" />

                <div className="flex-1">
                    <h2 className="text-sm font-semibold">{tool.name}</h2>

                    <span className="mt-1 inline-block rounded
                          border border-white/15 px-1 py-0.5 text-[10px] text-gray-300">
                        {tool.type}
                    </span>

                    {/* Tags */}
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {tool.tags.map((tag) => (
                            <li
                                key={tag}
                                className={`rounded px-2 py-1 text-[10px] font-medium
                                ${["Free", "Paid", "Premium"].includes(tag)
                                        ? "bg-green-200 text-green-800"
                                        : "bg-gray-600 text-white"}`}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Description */}
            <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                {tool.description}
            </p>

            {/* Footer */}
            <div className="mt-2 flex items-center gap-4">
                <span className="text-lg font-medium">${tool.price}</span>

                <span className="flex items-center gap-1 text-xs font-medium text-gray-200">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    {tool.rating}
                </span>

                <Link
                    href={tool.url}
                    className="ml-auto inline-flex items-center gap-1
                    rounded bg-cyan-400 px-3 py-1 text-xs
                    font-medium text-white hover:bg-cyan-300">
                    Visit Tool <ExternalLink size={14} />
                </Link>
            </div>
        </article>
    );
}
