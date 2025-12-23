import { AITools } from "@/lib/types";
import { Bookmark, ExternalLink, Star, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ToolCard({ tool }: { tool: AITools }) {
    return (
        <div className=" relative flex items-center gap-6 rounded-2xl
                border border-white/15 bg-linear-to-br from-[#0b1220] to-black
                p-4  hover:border-white/25 transition">

            {/* Bookmark */}
            <button className="absolute top-5 right-5 text-white/60 hover:text-white">
                <Bookmark size={24} />
            </button>


            <div className="w-64 h-42 rounded-2xl overflow-hidden shrink-0">
                <Image
                    src={tool.bannerImg}
                    alt={tool.name}
                    width={340}
                    height={240}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="flex-1">

                <div className="flex items-center gap-3 mb-3">
                    <Image src={tool.img} alt={tool.name} width={48} height={48} className="object-cover" />
                    <h3 className="text-xl font-semibold text-white">
                        {tool.name}
                    </h3>

                    {tool.verified && (
                        <Verified
                            size={20}
                            className="text-cyan-400"
                        />
                    )}

                    <span className="text-sm px-3 py-0.5 rounded-md border border-white/20 text-white/80">
                        {tool.type}
                    </span>
                </div>


                <p className="text-base text-white/70 max-w-3xl mb-4">
                    {tool.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-3">
                    {tool.tags.map(tag => (
                        <span
                            key={tag}
                            className={`text-sm px-3 py-1 rounded-md ${["Free", "Paid", "Premium"].includes(tag)
                                ? "bg-green-200 text-green-800"
                                : "bg-neutral-700 text-neutral-200"}`}>
                            {tag}
                        </span>
                    ))}
                </div>


                <div className="flex items-center gap-2 text-yellow-400 text-base">
                    <Star size={16} fill="currentColor" />
                    <span className="text-white font-medium">
                        {tool.rating}
                    </span>
                </div>
            </div>


            <div className="self-end flex justify-end items-end gap-5 min-w-30">
                <span className="text-2xl font-semibold text-white">
                    ${tool.price}
                </span>

                <Link href={tool.url} className="inline-flex items-center gap-2
                        px-4 py-1.5 rounded-md bg-cyan-500 hover:bg-cyan-400
                        text-white font-semibold text-sm transition">
                    Visit
                    <ExternalLink size={14} />
                </Link>
            </div>
        </div>
    );
}
