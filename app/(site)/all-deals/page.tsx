import { ChevronRight, MessageCircleWarning, Percent, Star, Timer } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FLASH_DEALS = [
    {
        name: "Claude Pro",
        company: "Anthropic",
        price: 12,
        original: 20,
        discount: "40% OFF",
        claimed: "89/100",
        percentage: 89,
        logo: "/tools/claude.webp",
    },
    {
        name: "Gamma Plus",
        company: "Gamma",
        price: 8,
        original: 15,
        discount: "40% OFF",
        claimed: "89/100",
        percentage: 89,
        logo: "/tools/gamma.webp",
    },
    {
        name: "Notion AI",
        company: "Notion",
        price: 6,
        original: 10,
        discount: "40% OFF",
        claimed: "89/100",
        percentage: 89,
        logo: "/tools/notion.webp",
    },
];

const DEALS = [
    {
        name: "ChatGPT Plus",
        company: "OpenAI",
        rating: 4.5,
        type: "AI Assistant",
        price: 7,
        original: 10,
        discount: "30% OFF",
        desc: "Advanced AI conversations with GPT-4, faster response times, and priority access.",
        logo: "/tools/chatgpt.webp",
    },
    {
        name: "Midjourney",
        company: "Midjourney",
        type: "Image Generation",
        rating: 4.9,
        price: 20,
        original: 30,
        discount: "33% OFF",
        desc: "Create stunning AI-generated artwork and illustrations with simple text prompts.",
        logo: "/tools/midjourney.webp",
    },
    {
        name: "GitHub Copilot",
        company: "GitHub",
        type: "Code Assistant",
        rating: 4.5,
        price: 7,
        original: 10,
        discount: "30% OFF",
        desc: "Create stunning AI-generated artwork and illustrations with simple text prompts.",
        logo: "/tools/githubcopilot.webp",
    },
];

export default function AllDealsPage() {
    return (
        <main className="relative isolate bg-slate-950 text-white">
            {/* Breadcrumb */}
            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>All Deals</span>
            </div>

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
                <div className="inline-flex items-center gap-2 rounded-full 
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50
                     px-4 py-2 text-sm font-medium backdrop-blur">
                    <Percent size={14} className="text-cyan-400" />
                    Best Deals & Discount Platform
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                    Find the
                    <span className="block bg-linear-to-r from-cyan-400 to-purple-400 
                    bg-clip-text text-transparent">
                        Best AI Deals
                    </span>
                    for your needs
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-slate-300">
                    Transform your work with 30,000 AI tools across 2000+ AI tasks.
                </p>
            </section>

            <div className="bg-slate-950">
                {/* Flash Deals */}
                <section className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-0 justify-between mb-6">
                        <div className="flex gap-3">
                            <span className="flex items-center justify-center">

                                <svg width="32" height="32" viewBox="0 0 34 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_407_4180)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7447 2.54976C19.6398 1.12818 21.3847 2.09998 21.2425 3.94086L20.243 16.8751H28.3332C29.5342 16.8751 30.1904 18.7292 29.4214 19.9504L15.2548 42.4504C14.3597 43.872 12.6149 42.9002 12.7571 41.0593L13.7566 28.1252H5.66645C4.46534 28.1252 3.8092 26.271 4.57814 25.0498L18.7447 2.54976Z" fill="url(#paint0_linear_407_4180)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_407_4180" x1="16.9998" y1="1.86951" x2="16.9998" y2="43.1306" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF863A" />
                                            <stop offset="1" stopColor="#FF5550" />
                                        </linearGradient>
                                        <clipPath id="clip0_407_4180">
                                            <rect width="34" height="45" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </span>

                            <div className="text-sm flex flex-col text-slate-400">
                                <h2 className="text-3xl font-semibold text-white">Flash Deals</h2>
                                Limited time offers ending soon
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-orange-400">
                            <MessageCircleWarning size={14} /> Hurry! These deals expire soon
                        </div>
                    </div>

                    {/* flash deals cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {FLASH_DEALS.map((deal) => (
                            <div key={deal.name} className="rounded-xl border border-white/15 bg-slate-900/60 p-5 relative">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold">{deal.name}</h3>
                                        <p className="text-xs text-slate-400">
                                            {deal.company}
                                        </p>
                                    </div>
                                    <span className="absolute top-0 right-0 rounded-tr-xl text-xs bg-red-500 text-white px-2 py-0.5">
                                        Ends in 6 hours
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <div className="text-2xl font-bold flex items-center gap-2">
                                        ${deal.price}
                                        <span className=" text-sm line-through text-slate-400">
                                            ${deal.original}
                                        </span>
                                        <span className="inline-block text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded">
                                            {deal.discount}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 text-xs text-slate-400 flex items-center justify-between">
                                    <span>Claimed: {deal.claimed}</span>
                                    <span>{deal.percentage}%</span>
                                </div>

                                {/* percentbar */}
                                <div className="mt-4 w-full h-2 rounded-lg relative bg-neutral-300">
                                    <div className="absolute bg-white h-full top-0 left-0 rounded-lg"
                                        style={{ width: `${deal.percentage}%` }} />
                                </div>

                                <button className="mt-4 w-full rounded-md bg-linear-to-r from-orange-500 to-red-500
                                        flex items-center justify-center gap-1 cursor-pointer py-2 font-medium 
                                        hover:from-orange-600 hover:to-red-600 transition-colors duration-300 ease-in-out">
                                    <Timer size={16} /><span>Claim Deal</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* All Deals */}
                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                    <h2 className="text-2xl font-semibold text-center">
                        All Deals
                    </h2>
                    <p className="mt-2 text-center text-slate-400">
                        Hand-picked deals from the most popular AI tools trusted by professionals worldwide.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[...DEALS, ...DEALS, ...DEALS].map((deal, idx) => (
                            <div key={idx} className="rounded-xl border border-white/15 hover:border-white/40
                                         bg-slate-950 p-5 transition-all duration-300 relative">
                                <span className="absolute top-3 right-3 text-xs bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded">
                                    {deal.discount}
                                </span>
                                <div className="flex items-center gap-3 mt-6">
                                    <Image
                                        src={deal.logo}
                                        alt={deal.name}
                                        width={100}
                                        height={100}
                                        className="rounded-md w-10 h-10"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {deal.name}
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            {deal.company}
                                        </p>
                                    </div>

                                </div>

                                <p className="mt-4 text-sm text-slate-300">
                                    {deal.desc}
                                </p>

                                <div className="mt-4 flex items-center gap-1 text-sm">
                                    <span><Star fill="orange" color="orange" size={14} /></span>
                                    <span>{deal.rating}</span>
                                    <span className="bg-neutral-700 ml-3 p-0.5 text-xs px-1.5 rounded-sm">{deal.type}</span>
                                </div>

                                <div className="mt-4 text-2xl font-semibold flex items-center gap-2">
                                    ${deal.price}
                                    <span className="text-sm line-through text-slate-400">
                                        ${deal.original}
                                    </span>
                                    <span className="text-xs text-cyan-400">Save ${deal.original - deal.price}</span>
                                </div>
                                <Link href="/" className="block mt-4 text-center rounded-md bg-linear-to-r from-cyan-400 to-blue-600
                                     px-4 py-1.5 text-sm font-medium hover:from-cyan-500 hover:to-blue-700 transition">
                                    Get Deal
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
