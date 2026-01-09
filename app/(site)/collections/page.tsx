import FeaturedCard from "@/components/Hero/FeaturedCard";
import { featuredAITools } from "@/components/Hero/Hero";
import Searchbox from "@/components/Hero/Searchbox";
import { Brain, Circle, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
    {
        title: "Productivity AI",
        img: "/categories/aicompanions.png",
        subcategories: [
            {
                title: "Audio & Music",
                slug: "audio-music"
            },
            {
                title: "Marketing",
                slug: "marketing"
            }
        ]
    },
    {
        title: "Creative AI",
        img: "/categories/productivityai2.png",
        subcategories: [
            {
                title: "Automation",
                slug: "automation",
            },
            {
                title: "Chatbots",
                slug: "chatbots"
            },
        ]
    },
    {
        title: "AI Companions",
        img: "/categories/creativeai.png",
        subcategories: [
            {
                title: "Writing & Content",
                slug: "writing-content",
            },
        ]
    },
]
export default function CollectionsPage() {
    return (
        <main className="grow relative isolate bg-slate-950 text-white">
            { /* Background */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-500/10 to-green-400/20" />

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/20 to-purple-400/20 rounded-full
                     p-5 py-2 backdrop-blur-sm text-xs border border-cyan-400/30">
                    <Brain className="text-cyan-400" size={16} />
                    <span>Next-Gen AI Discovery Platform</span>
                    <Zap className="text-purple-400" size={16} />
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 
                    bg-linear-to-r from-cyan-400 to-purple-400 
                    bg-clip-text text-transparent">
                    AI Tool Tracker
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-slate-300">
                    Transform your work with 30,000 AI Tools doing 3000 AI Tasks
                </p>

                {/* Searchbox */}
                <Searchbox text="Search the Best AI Tools for Every Need..." />

                {/* featured ai tools cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left max-w-4xl mx-auto mt-10">
                    {featuredAITools.map((tool) => (
                        <FeaturedCard key={tool.name} tool={tool} />
                    ))}
                </div>

            </section>

            <section className="p-4 lg:p-10 bg-slate-950">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="flex flex-col border-2 border-white/20 bg-slate-950 rounded-3xl overflow-clip
                        hover:border-blue-400/50 transition">
                            <Image src={cat.img} alt={`${cat.title}-thumbnail`} height={250} width={400}
                                className=" w-full h-auto object-cover" />
                            <div className="py-6 px-8">
                                <h3 className="text-xl hover:underline underline-offset-2 transition-all ease-in duration-300"><Link href={"#"}>{cat.title}</Link></h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {cat?.subcategories?.map((subcat, i) => (
                                        <li key={i}>
                                            <Link href={`/collections/${subcat.slug}`} className="flex items-center gap-2 hover:text-blue-400">
                                                <Circle fill="currentColor" size={6} />
                                                {subcat.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
