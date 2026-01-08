import Image from "next/image";
import Link from "next/link";
import { ExternalLink, TrendingUp, Star } from "lucide-react";

type ToolRow = {
    id: number;
    name: string;
    url: string;
    avatar: string;
    type: string;
    tags: string[];
    price: number;
    rating: number;
    users: string;
    growth: string;
};

const TOP_TOOLS: ToolRow[] = [
    {
        id: 1,
        name: "ChatGPT",
        url: "/",
        avatar: "/tools/chatgpt.webp",
        type: "Chatbots",
        tags: ["Most Popular"],
        price: 20,
        rating: 4.8,
        users: "100M+",
        growth: "+45%",
    },
    {
        id: 2,
        name: "Midjourney",
        url: "/",
        avatar: "/tools/midjourney.webp",
        type: "Image Generation",
        tags: ["Creative"],
        price: 20,
        rating: 4.8,
        users: "15M+",
        growth: "+38%",
    },
    {
        id: 3,
        name: "GitHub Copilot",
        url: "/",
        avatar: "/tools/githubcopilot.webp",
        type: "Developer Tools",
        tags: ["Developer"],
        price: 20,
        rating: 4.8,
        users: "10M+",
        growth: "+35%",
    },
    {
        id: 4,
        name: "DALL·E 3",
        url: "/",
        avatar: "/tools/dalle.webp",
        type: "Image Generation",
        tags: ["Open AI"],
        price: 20,
        rating: 4.8,
        users: "5M+",
        growth: "+58%",
    },
    {
        id: 5,
        name: "Perplexity AI",
        url: "/",
        avatar: "/tools/perplexity.webp",
        type: "Search & Research",
        tags: ["Search"],
        price: 20,
        rating: 4.8,
        users: "25M+",
        growth: "+29%",
    },
    {
        id: 6,
        name: "Claude 3.5",
        url: "/",
        avatar: "/tools/claude.webp",
        type: "AI Assistant",
        tags: ["New"],
        price: 20,
        rating: 4.8,
        users: "8M+",
        growth: "+43%",
    },
    {
        id: 7,
        name: "Jasper AI",
        url: "/",
        avatar: "/tools/jasperai.webp",
        type: "Writing & Content",
        tags: ["Writing"],
        price: 20,
        rating: 4.8,
        users: "3M+",
        growth: "+35%",
    },
    {
        id: 8,
        name: "Runway ML",
        url: "/",
        avatar: "/tools/runwayml.webp",
        type: "Video & Animation",
        tags: ["Creative"],
        price: 20,
        rating: 4.8,
        users: "12M+",
        growth: "+40%",
    },
    {
        id: 9,
        name: "ChatGPT",
        url: "/",
        avatar: "/tools/chatgpt.webp",
        type: "Chatbots",
        tags: ["Most Popular"],
        price: 20,
        rating: 4.8,
        users: "50M+",
        growth: "+15%",
    },
    {
        id: 10,
        name: "ChatGPT",
        url: "/",
        avatar: "/tools/chatgpt.webp",
        type: "Chatbots",
        tags: ["Most Popular"],
        price: 20,
        rating: 4.8,
        users: "28M+",
        growth: "+23%",
    },
];


export default function TopAITools() {
    return (
        <section className="px-4 sm:px-6 lg:px-10 py-12 bg-slate-950">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Top AI Tools
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Discover the most popular AI tools that are transforming industries worldwide.
                    </p>
                </div>


                <div className="overflow-x-auto">
                    <div className="min-w-full rounded-2xl lg:border border-gray-700 overflow-hidden">
                        <div className="hidden lg:grid grid-cols-[160px_1fr_160px_160px_200px] gap-0 bg-gray-800/50 p-4 text-slate-300 text-sm">
                            <div className="pl-4">Rank</div>
                            <div>Tool</div>
                            <div className="text-center">Users</div>
                            <div className="text-center">Growth</div>
                            <div></div>
                        </div>

                        <div className="lg:divide-y divide-neutral-800">
                            {TOP_TOOLS.map((tool, idx) => (
                                <div
                                    key={tool.id}
                                    className="px-4 py-4 lg:px-6 bg-gray-800/20 hover:bg-gray-800/40 transition"
                                >
                                    {/* MOBILE CARD */}
                                    <div className="lg:hidden rounded-2xl border border-white/10 bg-gray-800/30 p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex  gap-3 ">
                                                <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-sm text-white">
                                                    {idx + 1}
                                                </span>

                                                <div className="flex flex-col gap-2">
                                                    <div className="flex  items-center gap-2">
                                                        <div className="w-10 h-10 rounded-md overflow-hidden bg-slate-900">
                                                            <Image
                                                                src={tool.avatar}
                                                                alt={tool.name}
                                                                width={48}
                                                                height={48}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>

                                                        <h3 className="text-white font-semibold">
                                                            {tool.name}
                                                        </h3>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center gap-1 text-yellow-400">
                                                            <Star size={14} fill="currentColor" />
                                                            <span className="text-white font-medium">
                                                                {tool.rating}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                                            {tool.type}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                            <Link
                                                href="/"
                                                className="text-slate-300 hover:text-white"
                                                aria-label={`Open ${tool.name}`}
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        </div>

                                        <div className="mt-4 flex items-center justify-between text-sm border-t border-white/10 pt-2">
                                            <div className="flex flex-col gap-1 text-slate-300">
                                                <span className="text-xs text-gray-400">Users</span>
                                                <span>{tool.users}</span>
                                            </div>

                                            <div className="flex flex-col gap-1 text-green-400">
                                                <span className="text-xs text-gray-400">Users</span>
                                                <div className="flex items-center gap-2">
                                                    <TrendingUp size={14} />
                                                    <span>{tool.growth}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* DESKTOP ROW */}
                                    <div className="hidden lg:grid grid-cols-[140px_1fr_160px_160px_160px]  gap-4 items-center">
                                        <div className="flex items-center">
                                            <div className="text-lg pl-4 font-semibold text-white">
                                                {idx + 1}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-md overflow-hidden shrink-0">
                                                <Image
                                                    src={tool.avatar}
                                                    alt={tool.name}
                                                    width={72}
                                                    height={72}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-sm sm:text-base font-semibold text-white">
                                                        {tool.name}
                                                    </h3>

                                                </div>

                                                <div className="flex items-center gap-5 text-xs sm:text-sm">
                                                    <div className="flex items-center gap-1 text-yellow-400">
                                                        <Star size={14} fill="currentColor" />
                                                        <span className="text-white font-medium">
                                                            {tool.rating}
                                                        </span>
                                                        <span className="text-xs px-2 py-1 ml-2 rounded-full bg-cyan-400/20 
                                                        border border-cyan-400/20 text-cyan-400">
                                                            {tool.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <div className=" text-slate-200 text-sm">
                                                <span className="font-medium">{tool.users}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <div className="inline-flex items-center gap-2 text-green-400 font-semibold">
                                                <TrendingUp size={16} />
                                                <span>{tool.growth}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-end">
                                            <Link
                                                href="/"
                                                className="text-slate-300 hover:text-white p-2 rounded-md"
                                                aria-label={`Open ${tool.name}`}
                                            >
                                                <ExternalLink size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
