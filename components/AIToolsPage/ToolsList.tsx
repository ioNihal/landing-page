"use client";

import { usePagination } from "@/hooks/usePagination";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";

const TOOLS = [
    {
        id: 0,
        name: "ChatGPT",
        slug: "chatgpt",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "Free",
        tags: ["chatbot"],
        url: "#"
    },
    {
        id: 1,
        name: "Gemini",
        slug: "gemini",
        img: "/tools/chatgpt.webp",
        description: "Gemini is Google's multimodal AI assistant and developer platform that understands and generates text, images, audio, and code, with a very large context window and tight integration across Google",
        type: "Free",
        tags: ["automation"],
        url: "#"
    },
    {
        id: 2,
        name: "Github Copilot",
        slug: "github-copilot",
        img: "/tools/chatgpt.webp",
        description: "GitHub Copilot is an AI-powered coding assistant that provides autocomplete-style suggestions as users write code.",
        type: "Free Trial",
        tags: ["code assistant"],
        url: "#"
    },
    {
        id: 3,
        name: "Jasper AI",
        slug: "jasper-ai",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "Freemium",
        tags: ["content"],
        url: "#"
    },
    {
        id: 4,
        name: "Midjourney",
        slug: "midjourney",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "Free Trial",
        tags: ["art"],
        url: "#"
    },
    {
        id: 5,
        name: "Runway ML",
        slug: "runway-ml",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "",
        tags: ["creative"],
        url: "#"
    },
    {
        id: 6,
        name: "Stable Diffusion",
        slug: "stable-diffusion",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "",
        tags: ["featured"],
        url: "#"
    },
    {
        id: 7,
        name: "Tools 7",
        slug: "tools-7",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "",
        tags: ["business"],
        url: "#"
    },
    {
        id: 8,
        name: "Tools 8",
        slug: "tools-8",
        img: "/tools/chatgpt.webp",
        description: "",
        type: "Freemium",
        tags: ["business"],
        url: "#"
    },
    {
        id: 9,
        name: "Tools 9",
        slug: "tools-9",
        img: "/tools/chatgpt.webp",
        description: "Claude 3.5 is a next-gen AI assistant built for advanced reasoning, creativity, and productivity. It helps with writing, coding, research, and problem-solving while maintaining context in long content",
        type: "Free Trial",
        tags: ["business"],
        url: "#"
    },
]

const MAX = 5;


export default function ToolsList() {
    const searchParams = useSearchParams();
    const pricingParam = searchParams.get("pricing") ?? "all";

    const [selected, setSelected] = useState(pricingParam);
    const router = useRouter();

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelected(value);
        setPage(1);

        router.push(`?pricing=${value}`, { scroll: false });
    }

    const toSlug = (value: string) =>
        value.toLowerCase().trim().replace(/\s+/g, "-");

    const filteredTools = useMemo(() => {
        if (selected === "all") return TOOLS;

        return TOOLS.filter(
            tool => toSlug(tool.type) === selected
        );
    }, [selected]);


    const {
        page,
        setPage,
        totalPages,
        paginatedItems
    } = usePagination(filteredTools, MAX);


    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="listfilter" className="text-sm text-slate-300">
                        Filter by pricing:
                    </label>
                    <select
                        name="listfilter"
                        value={selected}
                        onChange={handleSelect}
                        className="bg-slate-950 text-sm px-3 py-2 rounded-md border border-white/20 focus:outline-none"
                    >
                        <option value="all">Show All</option>
                        <option value="free">Free</option>
                        <option value="freemium">Freemium</option>
                        <option value="free-trial">Free Trial</option>
                    </select>
                </div>

                <p className="text-sm text-slate-400">
                    Showing {(page - 1) * MAX + 1}–
                    {Math.min(page * MAX, filteredTools.length)} of{" "}
                    {filteredTools.length} products
                </p>
            </div>

            {/* List */}
            <section className="mt-10">
                <ul className="flex flex-col gap-6">
                    {paginatedItems.map((tool) => (
                        <li
                            key={tool.id}
                            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6
                            rounded-xl border border-slate-700/70 bg-slate-900/40
                            p-6 hover:border-cyan-400/60 transition"
                        >
                            {/* Image */}
                            <div className="relative h-16 w-16 shrink-0 rounded-md overflow-hidden bg-slate-800">
                                <Image
                                    src={tool.img}
                                    alt={tool.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="flex-1 space-y-1">
                                <h2 className="text-base font-semibold text-white">
                                    {tool.name}
                                </h2>

                                <p className="text-sm text-slate-400 line-clamp-2">
                                    {tool.description || "No description available"}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {tool.type && (
                                        <span className="text-xs px-2 py-1 rounded bg-cyan-500/15 text-cyan-300">
                                            {tool.type}
                                        </span>
                                    )}
                                    {tool.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded bg-slate-700/60 text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div className="flex sm:flex-col gap-2 sm:items-end">
                                <Link
                                    href={`products/${tool.slug}`}
                                    className="px-4 py-2 rounded-md bg-slate-700 text-sm text-white text-center hover:bg-slate-600 transition"
                                >
                                    View Details
                                </Link>
                                <Link
                                    href={tool.url}
                                    className="px-4 py-2 rounded-md bg-cyan-500 text-sm 
                                    flex items-center justify-center gap-1 hover:bg-cyan-400 transition"
                                >
                                    Visit <ExternalLink size={14} />
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-10">
                        <div className="flex gap-2">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                                className="px-3 py-2 rounded-md bg-slate-800 text-sm text-slate-300
                                disabled:opacity-40"
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i + 1)}
                                    className={`px-3 py-2 rounded-md text-sm ${page === i + 1
                                        ? "bg-cyan-500 text-slate-950"
                                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-3 py-2 rounded-md bg-slate-800 text-sm text-slate-300
                                disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>

                        <p className="text-sm text-slate-400">
                            Page {page} of {totalPages} ({filteredTools.length} total products)
                        </p>
                    </div>
                )}

            </section>
        </div>
    );

}
