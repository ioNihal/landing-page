import Image from "next/image";
import Link from "next/link";
import { Bookmark, Star, ExternalLink } from "lucide-react";

type Tool = {
    id: number;
    name: string;
    desc: string;
    type: string;
    img: string;
    tags: string[];
    rating: number;
    price: number;
    url: string;
}

export default function ToolCard({ tool }: { tool: Tool }) {
    return (
        <div className="relative rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <button className="absolute top-3 right-3 text-slate-400 hover:text-white">
                <Bookmark size={24} />
            </button>

            <div className="flex gap-3">
                <Image
                    src={tool.img}
                    alt={`${tool.name}-logo`}
                    width={48}
                    height={48}
                    className="rounded-md object-cover"
                />
                <div>
                    <h3 className="font- semibold">{tool.name}</h3>
                    <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs border border-white/20 px-2 py-0.5 rounded">
                            {tool.type}
                        </span>

                        <span className="flex items-center gap-1 text-sm">
                            <Star size={14} fill="currentColor" className="text-yellow-400" /> {tool.rating}
                        </span>
                    </div>

                </div>
            </div>

            <p className="mt-3 text-sm text-slate-300">
                {tool.desc}
            </p>

            <div className="mt-3 flex gap-2">
                {tool?.tags.map((t) => (
                    <span key={t} className={`text-xs px-2 rounded
                    ${["Free", "Paid", "Premium"].includes(t) ? "bg-green-200 text-green-800" : "bg-neutral-700"}`}>
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
                <span className="font-semibold text-xl">${tool.price}</span>

                <Link
                    href={tool.url}
                    className="inline-flex items-center gap-3 text-sm bg-cyan-500 px-4 py-1.5 rounded-md"
                >
                    Visit <ExternalLink size={14} />
                </Link>
            </div>
        </div>
    );
}
