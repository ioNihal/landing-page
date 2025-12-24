import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users, TrendingUp, Star } from "lucide-react";

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
        avatar: "/tools/chatgpt.png",
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
        avatar: "/tools/midjourney.png",
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
        avatar: "/tools/githubcopilot.png",
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
        avatar: "/tools/dalle.png",
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
        avatar: "/tools/perplexity.png",
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
        avatar: "/tools/claude.png",
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
        avatar: "/tools/jasperai.png",
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
        avatar: "/tools/runwayml.png",
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
        avatar: "/tools/chatgpt.png",
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
        avatar: "/tools/chatgpt.png",
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
            <div className="mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">
                        Top AI Tools
                    </h2>
                    <p className="mt-2 text-sm text-slate-400">
                        Most popular AI tools based on user engagement and growth.
                    </p>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <select
                            className="bg-slate-900 text-slate-200 text-sm sm:text-base
                            px-3 sm:px-4 py-2.5 rounded-md border border-slate-800
                            outline-none hover:bg-slate-800 transition">
                            <option value="default">Select Category</option>
                            <option value="ai-companions">AI Companions</option>
                            <option value="productivity-ai">Productivity AI</option>
                            <option value="creative-ai">Creative AI</option>
                            <option value="other-ai">Other AI</option>
                            <option value="gpt">GPT</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-full rounded-2xl lg:border border-neutral-800 overflow-hidden">
                        <div className="hidden lg:grid grid-cols-[160px_1fr_160px_160px_200px] gap-0 bg-neutral-800 p-4 text-slate-300 text-sm">
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
                                    className="px-4 py-4 lg:px-6"
                                >
                                    {/* MOBILE CARD */}
                                    <div className="lg:hidden rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-sm text-white">
                                                    {idx + 1}
                                                </span>

                                                <div className="w-10 h-10 rounded-md overflow-hidden bg-slate-900">
                                                    <Image
                                                        src={tool.avatar}
                                                        alt={tool.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-white font-semibold">
                                                        {tool.name}
                                                    </h3>
                                                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                                                        {tool.type}
                                                    </span>
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

                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-sm">
                                                <div className="flex items-center gap-1 text-yellow-400">
                                                    <Star size={14} fill="currentColor" />
                                                    <span className="text-white font-medium">
                                                        {tool.rating}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-1 text-slate-300">
                                                    <Users size={14} />
                                                    <span>{tool.users}</span>
                                                </div>

                                                <div className="flex items-center gap-1 text-green-400">
                                                    <TrendingUp size={14} />
                                                    <span>{tool.growth}</span>
                                                </div>
                                            </div>

                                            <span className="text-white font-semibold">
                                                ${tool.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* DESKTOP ROW */}
                                    <div className="hidden lg:grid grid-cols-[140px_1fr_160px_160px_160px] gap-4 items-center">
                                        <div className="flex items-center">
                                            <div className="text-lg pl-4 font-semibold text-white">
                                                {idx + 1}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="w-12 h-12 rounded-md overflow-hidden bg-slate-900 shrink-0">
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
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {tool.name}
                                                    </h3>
                                                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                                                        {tool.type}
                                                    </span>
                                                </div>

                                                <div className="mt-2 flex items-center gap-5 text-sm">
                                                    <div className="flex items-center gap-1 text-yellow-400">
                                                        <Star size={14} fill="currentColor" />
                                                        <span className="text-white font-medium">
                                                            {tool.rating}
                                                        </span>
                                                    </div>

                                                    {tool.tags?.length > 0 && (
                                                        <div className="flex gap-2">
                                                            {tool.tags.map(t => (
                                                                <span
                                                                    key={t}
                                                                    className="text-xs px-2 py-1 rounded-md bg-slate-700 text-slate-100"
                                                                >
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="mt-2 text-white font-semibold">
                                                    ${tool.price}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center">
                                            <div className="inline-flex items-center gap-2 text-slate-200 text-sm">
                                                <Users size={16} />
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
