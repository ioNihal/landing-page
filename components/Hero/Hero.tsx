import { Brain, Zap } from "lucide-react";
import Searchbox from "./Searchbox";
import Link from "next/link";
import { FeaturedTool } from "@/lib/types";
import FeaturedCard from "./FeaturedCard";

const featuredAITools: FeaturedTool[] = [
    {
        name: "ChatGPT",
        url: "/",
        img: "/featured/placeholder.webp",
        type: "Chatbots",
        tags: ["Free", "API", "Popular"],
        description: "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8
    },
    {
        name: "MidJourney",
        url: "/",
        img: "/featured/placeholder.webp",
        type: "Image Generation",
        tags: ["Premium", "Discord", "Art"],
        description: "AI-powered image generation tool for creating stunning visuals from text prompts.",
        price: 30,
        rating: 4.6
    },
    {
        name: "Github Copilot",
        url: "/",
        img: "/featured/placeholder.webp",
        type: "Developer Tools",
        tags: ["Paid", "IDE", "Coding"],
        description: "AI coding assistant that helps developers write code faster and with fewer errors.",
        price: 10,
        rating: 4.7
    },
]

export default function Hero() {
    return (
        <section className="relative isolate bg-slate-950 text-white min-h-screen flex items-center">
            {/* bg grid */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                     p-4 py-3 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <Brain className="text-cyan-400" size={22} />
                    <span>Next-Gen AI Discovery Platform</span>
                    <Zap className="text-purple-400" size={22} />
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold
                    bg-linear-to-r from-cyan-400 to-purple-400
                    bg-clip-text text-transparent">
                    AI Tools Tracker
                </h1>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Transform your work with 30,000 AI tools across 3,000 AI tasks.
                </p>

                {/* Searchbox */}
                <Searchbox />


                <ul className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-3 text-sm">
                    {["AI Companions", "Productivity AI", "Creative AI", "Agentic AI", "+ More"].map(item => (
                        <li key={item}>
                            <Link
                                href="/"
                                className={`rounded-md
                                     ${item === "+ More" ?
                                        "hover:bg-transparent border-0"
                                        : "border hover:bg-black/20 transition"}
                                 border-white/20 px-4 py-2 `}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>


                {/* featured ai tools cards */}
                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
                    {featuredAITools.map((tool) => (
                        <FeaturedCard key={tool.name} tool={tool} />
                    ))}
                </div>

            </div>
        </section>
    )
}
