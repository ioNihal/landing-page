"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { LucideVerified, MoveRight } from "lucide-react";
import { AITools } from "@/lib/types";
import ToolCard from "./ToolCard";

const MAX_ITEMS = 3;

const LatestToolsList: AITools[] = [
    {
        id: 0,
        name: "ChatGPT",
        url: "/",
        verified: false,
        img: "/featured/placeholder.webp",
        bannerImg: "/tools/chatgpt.webp",
        type: "Chatbots",
        tags: ["Free", "API", "Popular"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
    {
        id: 1,
        name: "Claude 3.5",
        url: "/",
        verified: false,
        img: "/tools/claude.webp",
        bannerImg: "/tools/claude.webp",
        type: "Chatbots",
        tags: ["Premium", "New", "AI Assistant"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
    {
        id: 2,
        name: "Flux Pro",
        url: "/",
        verified: false,
        img: "/tools/flux.webp",
        bannerImg: "/tools/flux.webp",
        type: "Image Generation",
        tags: ["Free", "New", "AI Assistant"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
    {
        id: 3,
        name: "ChatGPT",
        url: "/",
        verified: true,
        img: "/featured/placeholder.webp",
        bannerImg: "/tools/chatgpt.webp",
        type: "Chatbots",
        tags: ["Free", "API", "Popular"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
    {
        id: 4,
        name: "Claude 3.5",
        url: "/",
        verified: true,
        img: "/tools/claude.webp",
        bannerImg: "/tools/claude.webp",
        type: "Chatbots",
        tags: ["Premium", "New", "AI Assistant"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
    {
        id: 5,
        name: "Flux Pro",
        url: "/",
        verified: true,
        img: "/tools/flux.webp",
        bannerImg: "/tools/flux.webp",
        type: "Image Generation",
        tags: ["Free", "New", "AI Assistant"],
        description:
            "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8,
    },
];

export default function LatestTools() {
    const [period, setPeriod] = useState("all");
    const [verified, setVerified] = useState(false);

    // small data now
    const filteredTools = useMemo(() => {
        let tools = [...LatestToolsList];

        if (verified) {
            tools = tools.filter((tool) =>
                tool.verified
            );
        }

        return tools.slice(0, MAX_ITEMS);
    }, [verified]);

    return (
        <section className="px-4 sm:px-6 lg:px-10 py-8 bg-slate-950">

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Latest Tools
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                        Most popular AI tools based on user engagement and growth.
                    </p>
                </div>

                {/* filters */}
                <div className="flex flex-wrap items-center justify-between lg:justify-start gap-3">
                    <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="bg-slate-900 text-slate-200 text-sm sm:text-base
                        px-3 sm:px-4 py-2.5 rounded-md border border-slate-800
                        outline-none hover:bg-slate-800 transition">
                        <option value="all">All Time</option>
                        <option value="2024-12">December 2024</option>
                        <option value="2025-01">January 2025</option>
                        <option value="2025-02">February 2025</option>
                        <option value="2025-03">March 2025</option>
                        <option value="2025-04">April 2025</option>
                        <option value="2025-05">May 2025</option>
                        <option value="2025-06">June 2025</option>
                        <option value="2025-07">July 2025</option>
                        <option value="2025-08">August 2025</option>
                    </select>

                    <button
                        onClick={() => setVerified(v => !v)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base
                        rounded-md transition ${verified
                                ? "bg-linear-to-b from-white to-cyan-100 text-blue-600"
                                : "bg-slate-900 text-slate-300 border border-slate-800"}`}>
                        <span>Verified</span>
                        <LucideVerified size={18} />
                    </button>
                </div>
            </div>

            {/* tools */}
            <div className="space-y-5">
                {filteredTools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/"
                    className="px-6 py-2 rounded-lg inline-flex items-center gap-2
                    bg-linear-to-r from-cyan-400 to-blue-600 hover:from-cyan-600 hover:to-blue-600
                  text-white text-sm font-medium transition">
                    See All AI Tools <MoveRight />
                </Link>
            </div>
        </section>

    );
}
