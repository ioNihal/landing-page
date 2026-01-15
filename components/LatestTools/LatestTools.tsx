"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { AITools } from "@/lib/types";
import ToolCard from "./ToolCard";


const MAX_ITEMS = 3;

const LatestToolsList: AITools[] = [
    {
        id: 0,
        name: "ChatGPT",
        url: "/products/chatgpt",
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
        url: "/products/claude",
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
        url: "/products/flux-pro",
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
        url: "/products/chatgpt",
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
        url: "/products/claude",
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
        url: "/products/flux-pro",
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

    // small data now
    const filteredTools = useMemo(() => {
        let tools = [...LatestToolsList];

        // OG Logic for period filtering
        // const now = new Date();
        // tools = tools.filter((tool) => {
        //     if (period === "all") return true;

        //     const createdAt = new Date(tool?.createdAt);
        //     const diffMs = now.getTime() - createdAt.getTime();
        //     const diffDays = diffMs / (1000 * 60 * 60 * 24);

        //     switch (period) {
        //         case "week":
        //             return diffDays <= 7;

        //         case "month":
        //             return diffDays <= 30 && createdAt.getMonth() === now.getMonth();

        //         case "30days":
        //             return diffDays <= 30;

        //         default:
        //             return true;
        //     }
        // });

        if (period !== "all") {
            tools = [];
        }

        return tools.slice(0, MAX_ITEMS);
    }, [period]);

    return (
        <section className="px-4 sm:px-6 lg:px-10 py-8 bg-slate-950">

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 mx-auto max-w-7xl">
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
                        className="bg-slate-900 w-full lg:w-max text-slate-200 text-sm sm:text-base
                        px-3 sm:px-4 py-2.5 rounded-md border border-slate-800
                        outline-none hover:bg-slate-800 transition">
                        <option value="all">All Time</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="30days">Last 30 Days</option>
                    </select>
                </div>
            </div>

            {/* tools */}
            <div className="space-y-5 mx-auto max-w-7xl">
                {filteredTools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Link href="/collections"
                    className="px-6 py-2 rounded-lg inline-flex items-center gap-2
                    bg-linear-to-r from-cyan-400 to-blue-600 hover:from-cyan-600 hover:to-blue-600
                  text-white text-sm font-medium transition">
                    See All AI Tools <MoveRight />
                </Link>
            </div>
        </section>

    );
}
