import FeaturedCard from "@/components/Hero/FeaturedCard";
import Searchbox from "@/components/Hero/Searchbox";
import { Atom, AudioLines, Bot, BotMessageSquare, Brain, Briefcase, Brush, ChevronRight, Circle, Cloud, FileText, Gamepad2, Globe, GraduationCap, Headset, HousePlug, Landmark, Megaphone, MessageCircleCode, MessageCircleMore, Microscope, Music, Palette, PencilLine, Plane, Presentation, Scale, Send, Shield, ShoppingBag, Stethoscope, Target, TrendingUp, UserSearch, Video, Wallet, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const featuredAITools = [
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

const CATEGORIES = [
    {
        title: "AI Companions",
        img: "/categories/aicompanions.png",
        subcategories: [
            {
                title: "Chatbots",
                Icon: MessageCircleMore,
            },
            {
                title: "Virtual Assistants",
                Icon: BotMessageSquare,
            },
            {
                title: "Voice & Speech",
                Icon: AudioLines,
            },
            {
                title: "Translation",
                Icon: Globe,
            },
            {
                title: "Customer Support",
                Icon: Headset,
            },
        ]
    },
    {
        title: "Productivity AI",
        img: "/categories/productivityai2.png",
        subcategories: [
            {
                title: "Marketing",
                Icon: Megaphone,
            },
            {
                title: "Sales & CRM",
                Icon: Briefcase,
            },
            {
                title: "Workflow Automation",
                Icon: Zap,
            },
            {
                title: "Analytics",
                Icon: TrendingUp,
            },
            {
                title: "HR & Recruiting",
                Icon: UserSearch,
            },
            {
                title: "Finance & Accounting",
                Icon: Landmark,
            },
            {
                title: "E-commerce & Retail",
                Icon: ShoppingBag,
            },
        ]
    },
    {
        title: "Creative AI",
        img: "/categories/creativeai.png",
        subcategories: [
            {
                title: "Writing & Content",
                Icon: PencilLine,
            },
            {
                title: "Image Generation",
                Icon: Palette,
            },
            {
                title: "Video & Animation",
                Icon: Video,
            },
            {
                title: "Audio & Music",
                Icon: Music,
            },
            {
                title: "Design",
                Icon: Brush,
            },
            {
                title: "Presentations",
                Icon: Presentation,
            },
            {
                title: "Branding & Ads",
                Icon: Target,
            },
        ]
    },
    {
        title: "Other AI",
        img: "/categories/otherai.png",
        subcategories: [
            {
                title: "Machine Learning",
                Icon: Brain,
            },
            {
                title: "Developer Tools",
                Icon: MessageCircleCode,
            },
            {
                title: "Research & Data Science",
                Icon: Microscope,
            },
            {
                title: "Cybersecurity",
                Icon: Shield,
            },
            {
                title: "Cloud & Infrastructure",
                Icon: Cloud,
            },
            {
                title: "Robotics",
                Icon: Bot,
            },
            {
                title: "IoT (Internet of things)",
                Icon: Globe,
            },
        ]
    },
    {
        title: "GPT",
        img: "/categories/gpt.png",
        subcategories: [
            {
                title: "Healthcare",
                Icon: Stethoscope,
            },
            {
                title: "Education & Learning",
                Icon: GraduationCap,
            },
            {
                title: "Legal & Compliance",
                Icon: Scale,
            },
            {
                title: "Real Estate",
                Icon: HousePlug,
            },
            {
                title: "Travel & Hospitality",
                Icon: Plane,
            },
            {
                title: "Gaming",
                Icon: Gamepad2,
            },
            {
                title: "Personal Finance",
                Icon: Wallet,
            },
            {
                title: "Scientific Research",
                Icon: Atom,
            },
        ]
    },
]

export default function page() {
    return (
        <main className="relative isolate bg-slate-950 text-white">
            {/* bg grid */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs ">

                <Link href={"/"}>Home</Link>&nbsp;<ChevronRight size={16} />AI&nbsp;Tool&nbsp;Category
            </div>


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                     p-4 py-3 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <FileText className="text-cyan-400" size={22} />
                    <span>Tool Submission Form</span>
                    <Send className="text-purple-400" size={22} />
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold
                    bg-linear-to-r from-cyan-400 to-purple-400
                    bg-clip-text text-transparent">
                    AI Tools Tasks
                </h1>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    All available AI Tool Tasks Categorized
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

            <section className="p-4 lg:p-10 bg-slate-950">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="flex flex-col border border-white/20 bg-slate-950 rounded-xl">
                            <Image src={cat.img} alt={`${cat.title}-thumbnail`} height={250} width={400}
                                className=" w-full h-auto object-cover rounded-t-xl" />
                            <div className="py-6 px-8">
                                <h3 className="text-xl">{cat.title}</h3>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {cat?.subcategories?.map((subcat, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <Circle fill="currentColor" size={6} />
                                            {subcat.title}<subcat.Icon size={20} />
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
