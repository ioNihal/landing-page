import { AITools } from "@/lib/types";
import { Clock, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ tool }: { tool: AITools }) {
    return (
        <div className=" relative flex flex-col lg:flex-row gap-4 lg:gap-6
            rounded-2xl border border-white/15 bg-slate-950 hover:bg-gray-800
            p-4 lg:p-5 hover:border-white/25 transition">

            <div className="w-full lg:w-64 h-full rounded-lg overflow-hidden">
                <Link href={tool.url}>
                    <Image
                        src={tool.bannerImg}
                        alt={tool.name}
                        width={340}
                        height={240}
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>

            <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                        {tool.name}
                    </h3>

                    <span className="text-xs  px-2 py-1 rounded border border-white/20 text-white/80">
                        {tool.type}
                    </span>
                </div>

                <h4 className="text-white/70">Overview</h4>
                <p className="text-sm lg:text-base text-white/70 mb-4">
                    {tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                    {tool.tags.map(tag => (
                        <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded ${["Free", "Paid", "Premium"].includes(tag)
                                ? "bg-green-200 text-green-800"
                                : "bg-neutral-700 text-neutral-200"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={16} fill="currentColor" />
                        <span className="text-white font-medium">
                            {tool.rating}
                        </span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-slate-300">
                        <Clock size={16} />
                        <span>Oct 09, 2025</span>
                    </div>


                    <Link
                        href={tool.url}
                        className="ml-auto inline-flex items-center gap-2
                        px-4 py-2 rounded-md bg-cyan-500 hover:bg-cyan-400
                         text-white font-semibold text-sm transition"
                    >
                        Visit
                        <ExternalLink size={14} />
                    </Link>
                </div>
            </div>


        </div>
    );
}

