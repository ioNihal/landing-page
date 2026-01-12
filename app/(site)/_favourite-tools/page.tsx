import ToolCard from "@/components/Shared/ToolCard";
import DropDownSelect from "@/components/ui/DropDownSelect";
import SearchBar from "@/components/ui/SearchBar";
import { ChevronRight, Heart, Star } from "lucide-react";
import Link from "next/link";

const CATEGORY_OPTIONS = [
    { title: "Select Category", value: "default" },
    { title: "AI Companions", value: "ai-companions" },
    { title: "Productivity AI", value: "productivity-ai" },
    { title: "Creative AI", value: "creative-ai" },
    { title: "Other AI", value: "other-ai" },
    { title: "GPT", value: "gpt" },
];

const TOOLS = [
    {
        id: 0,
        name: "ChatGPT",
        desc: "Advanced conversational AI for text generation, analysis, and creative tasks.",
        type: "Chatbots",
        tags: ["Free", "API", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 1,
        name: "Zendesk Answer Bot",
        desc: "Automates customer support by resolving FAQs and reducing ticket loads for teams.",
        type: "Customer Support Chatbot",
        tags: ["Paid", "SaaS", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 2,
        name: "Freshchat (by Freshworks)",
        desc: "Modern messaging-first support bot with AI-powered automation and live agent handoff.",
        type: "Customer Support Chatbot",
        tags: ["Free", "Customer Support"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 3,
        name: "Tidio",
        desc: "Live chat and AI chatbot built for e-commerce websites and stores.",
        type: "Customer Support Chatbot",
        tags: ["Free", "E-commerce", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 4,
        name: "LivePerson",
        desc: "Conversational AI platform for real-time customer service and enterprise-grade support.",
        type: "Customer Support Chatbot",
        tags: ["Paid", "Enterprise"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 5,
        name: "Ada",
        desc: "AI-powered customer service bot designed to deliver personalized, automated support.",
        type: "Customer Support Chatbots",
        tags: ["Free", "AI", "Automation"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
]

export default function FavouriteToolsPage() {
    return (
        <main className="grow-0 relative isolate  text-white ">

            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs ">

                <Link href={"/"}>Home</Link>&nbsp;<ChevronRight size={16} />My&nbsp;Favourite&nbsp;AI&nbsp;Tools
            </div>
            {/* bg grid */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 2xl:py-36 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                     p-4 py-2 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <Star className="text-cyan-400" size={18} />
                    <span>Favourites</span>

                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-semibold 
                    bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Favourite AI Tools
                </h1>

                <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
                    Explore our carefully curated collection of AI tools across different categories and pricing models.
                </p>
            </div>

            <section className="bg-slate-950 px-4 lg:px-10 py-6">
                <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto">
                    <SearchBar placeholder="Search your favourite tools..." />
                    <div className="flex gap-8 justify-between">
                        <DropDownSelect options={CATEGORY_OPTIONS} />

                        <button className="py-2 px-3 text-sm rounded-md text-nowrap bg-red-600 hover:bg-red-700 cursor-pointer transition ">Clear All</button>
                    </div>
                </div>
                {TOOLS.length >= 0 ? (
                    <div className="my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {TOOLS.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} iconType="delete" />
                        ))}
                    </div>
                ) : (
                    <div className="lg:mt-10 py-24 flex flex-col items-center gap-4">
                        <Heart size={48} />
                        <h2 className="text-xl lg:text-3xl">No Favorite AI Tools Yet</h2>
                        <p className="text-slate-400 px-4 lg:px-0 text-center">Start exploring AI tools and add them to your shortlist.</p>
                        <Link href={"/"} className="bg-linear-to-r from-cyan-400 to-blue-600 hover:opacity-90 
                        transition cursor-pointer px-12 py-2 rounded-sm font-semibold text-lg">Browse AI Tools</Link>
                    </div>
                )}
            </section>

        </main>
    )
}
