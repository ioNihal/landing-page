import { AITools } from "@/lib/types";
import { Bookmark, ExternalLink, Star, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ tool }: { tool: AITools }) {
    return (
        <div className=" relative flex flex-col lg:flex-row gap-4 lg:gap-6
            rounded-2xl border border-white/15 bg-linear-to-br from-[#0d1525] to-slate-950
            p-4 lg:p-5 hover:border-white/25 transition">

            {/* bookmark */}
            <button className="hidden lg:block absolute top-4 right-4 text-white/60 hover:text-white">
                <Bookmark size={20} />
            </button>

            <div className="w-full lg:w-64 h-48 lg:h-42 rounded-2xl overflow-hidden shrink-0">
                <Image
                    src={tool.bannerImg}
                    alt={tool.name}
                    width={340}
                    height={240}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex-1">

                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Image src={tool.img} alt={tool.name} width={40} height={40} />
                    <h3 className="text-lg lg:text-xl font-semibold text-white">
                        {tool.name}
                    </h3>

                    {tool.verified && (
                        <Verified size={18} className="text-cyan-400" />
                    )}

                    <span className="text-xs lg:text-sm px-3 py-0.5 rounded-md border border-white/20 text-white/80">
                        {tool.type}
                    </span>

                    {/* mobile bookmark */}
                    <button className="ml-auto block lg:hidden text-white/60 hover:text-white">
                        <Bookmark size={24} />
                    </button>
                </div>

                <p className="text-sm lg:text-base text-white/70 mb-4">
                    {tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                    {tool.tags.map(tag => (
                        <span
                            key={tag}
                            className={`text-xs lg:text-sm px-3 py-1 rounded-md ${["Free", "Paid", "Premium"].includes(tag)
                                ? "bg-green-200 text-green-800"
                                : "bg-neutral-700 text-neutral-200"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="hidden mt-10 lg:flex items-center gap-2 text-yellow-400 text-sm lg:text-base">
                    <Star size={16} fill="currentColor" />
                    <span className="text-white font-medium">
                        {tool.rating}
                    </span>
                </div>
            </div>

            <div className="flex justify-between lg:justify-end items-center lg:items-end gap-3 lg:gap-4">
                <span className="text-xl lg:text-2xl font-semibold text-white">
                    ${tool.price}
                </span>

                {/* mobile rating */}
                <div className="flex lg:hidden mr-auto lg:mr-0 items-center gap-2 text-yellow-400 text-sm lg:text-base">
                    <Star size={16} fill="currentColor" />
                    <span className="text-white font-medium">
                        {tool.rating}
                    </span>
                </div>

                <Link
                    href={tool.url}
                    className="inline-flex items-center gap-2
                    px-4 py-1.5 rounded-md bg-cyan-500 hover:bg-cyan-400
                    text-white font-semibold text-sm transition"
                >
                    Visit
                    <ExternalLink size={14} />
                </Link>
            </div>
        </div>
    );
}

