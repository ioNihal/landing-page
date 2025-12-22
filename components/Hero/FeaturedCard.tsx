
import { FeaturedTool } from "@/lib/types";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function FeaturedCard({ tool }: { tool: FeaturedTool }) {
    return (
        <article
            className="relative rounded-2xl border border-white/50
          bg-slate-950 p-4 transition-transform hover:-translate-y-1">
            {/* Featured badge */}
            <span className="absolute right-4 top-4 inline-flex items-center gap-1
                  rounded-md bg-amber-500 px-2 py-1 text-xs font-medium ">
                <Star size={12} fill="yellow" />
                Featured
            </span>

            {/* Header */}
            <div className="flex gap-3">
                <Image
                    src={tool.img}
                    alt={tool.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-lg object-cover" />

                <div className="flex-1">
                    <h3 className="text-lg font-semibold">{tool.name}</h3>

                    <span className="mt-1 inline-block rounded-md
                          border border-white/15 px-2 py-0.5 text-xs text-gray-300">
                        {tool.type}
                    </span>

                    {/* Tags */}
                    <ul className="mt-2 flex flex-wrap gap-2">
                        {tool.tags.map((tag) => (
                            <li
                                key={tag}
                                className={`rounded-md px-2 py-1 text-xs font-medium
                                ${["Free", "Paid", "Premium"].includes(tag)
                                        ? "bg-green-200 text-green-800"
                                        : "bg-neutral-700 text-neutral-200"}`}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                {tool.description}
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-center gap-4">
                <span className="text-lg font-semibold">${tool.price}</span>

                <span className="flex items-center gap-1 text-sm font-medium text-gray-200">
                    <Star size={14} fill="gold" />
                    {tool.rating}
                </span>

                <Link
                    href={tool.url}
                    className="ml-auto inline-flex items-center gap-1
                    rounded-md bg-cyan-400 px-3 py-1.5 text-sm
                    font-medium text-slate-900 hover:bg-cyan-300">
                    Visit <ExternalLink size={14} />
                </Link>
            </div>
        </article>
    );
}
