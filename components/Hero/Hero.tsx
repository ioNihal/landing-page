import { Brain, ExternalLink, Star, Zap } from "lucide-react";
import Searchbox from "./Searchbox";
import Link from "next/link";
import Image from "next/image";

const featuredAITools = [
    {
        name: "ChatGPT",
        url: "/",
        img: "/featured/placeholder.png",
        type: "Chatbots",
        tags: ["Free", "API", "Popular"],
        description: "Advanced conversational AI for text generation, analysis, and creative tasks.",
        price: 20,
        rating: 4.8
    },
    {
        name: "MidJourney",
        url: "/",
        img: "/featured/placeholder.png",
        type: "Image Generation",
        tags: ["Premium", "Discord", "Art"],
        description: "AI-powered image generation tool for creating stunning visuals from text prompts.",
        price: 30,
        rating: 4.6
    },
    {
        name: "Github Copilot",
        url: "/",
        img: "/featured/placeholder.png",
        type: "Developer Tools",
        tags: ["Paid", "IDE", "Coding"],
        description: "AI coding assistant that helps developers write code faster and with fewer errors.",
        price: 10,
        rating: 4.7
    },
]

export default function Hero() {
    return (
        <section className="w-full h-auto bg-slate-950 relative bg-grid 
        grid place-items-center text-white py-10 2xl:py-20 isolate">
            {/* bg grid */}
            <div className="absolute inset-0 -z-10
            bg-linear-to-br from-purple-400/20 to-70% to-green-300/20" />


            <div className="max-w-7xl">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                p-4 py-3 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <Brain className="text-cyan-400" size={22} />
                    <span>Next-Gen AI Discovery Platform</span>
                    <Zap className="text-purple-400" size={22} />
                </div>

                <h1 className="text-7xl font-sans font-bold mt-10 text-center
                bg-linear-to-r from-cyan-400 to-purple-400 
                bg-clip-text text-transparent">AI Tools Tracker</h1>

                <p className="mt-6 text-center text-gray-300">Transform your work with 30,000 AI Tools doing 3000 AI Tasks</p>

                {/* Searchbox */}
                <Searchbox />


                <ul className="mt-8 flex items-center gap-8 w-max mx-auto
                *:border *:border-gray-600 *:hover:bg-black/20 *:transition-colors *:duration-200
                *:cursor-pointer *:px-6 *:py-2.5 *:rounded-sm">
                    <li className="hover:text-cyan-500"><Link href={"/"}>AI Companions</Link></li>
                    <li className="hover:text-purple-500"><Link href={"/"}>Productivity AI</Link></li>
                    <li className="hover:text-teal-500"><Link href={"/"}>Creative AI</Link></li>
                    <li className="hover:text-orange-500"><Link href={"/"}>Agentic AI</Link></li>
                    <li className="border-0! hover:bg-transparent!"><Link href={"/"}>+ More</Link></li>
                </ul>


                {/* featured ai tools cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredAITools.map((tool) => (
                        <article key={tool.name} className="bg-slate-950
                        p-4 border border-gray-400 rounded-2xl hover:-translate-y-1 
                        transition-transform duration-200">
                            <div className="flex gap-3">
                                <Image src={tool.img} alt={tool.name} height={100} width={100} className=" w-14 h-14 object-cover" />
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold mb-3">{tool.name}</h2>
                                    <span className="border border-gray-600 text-base text-gray-200 p-1 px-2 rounded-lg">{tool.type}</span>
                                    <ul className="flex items-center gap-2 mt-3">
                                        {tool.tags.map((tag, index) => (
                                            <li key={index} className={`text-sm p-2 py-1.5 rounded-lg
                                                 ${["Free", "Premium", "Paid"].includes(tag) ? "bg-green-200 text-green-700" : "bg-neutral-700"}`}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                                <span
                                    className="inline-flex items-center gap-2 h-max
                                  bg-amber-500 p-1 px-3 rounded-lg text-sm"><Star size={14} fill="yellow" /> Featured</span>
                            </div>
                            <p className="text-gray-300 mt-6">{tool.description}</p>
                            <div className="flex items-center justify-between gap-4 mt-4">
                                <span className="text-xl font-medium">${tool.price}</span>
                                <span className="font-medium inline-flex gap-2 mr-auto "><Star size={18} fill="yellow" /> {tool.rating}</span>
                                <Link href={'/'} className="inline-flex gap-2 bg-blue-400 p-1 px-3 rounded-lg ">Visit <ExternalLink size={20} /></Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}
