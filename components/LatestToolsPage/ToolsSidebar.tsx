import { Check, Star } from "lucide-react";
import Image from "next/image";


const SUBCATEGORIES = [
    ["Customer Support Chatbots", 42, "Tools for automated customer service & helpdesks."],
    ["Website & E-commerce Chatbots", 35, "Bots for sales, lead generation, and checkout assistance."],
    ["Social Media & Messaging Bots", 28, "Bots for WhatsApp, Instagram, Telegram, Messenger, etc."],
    ["Voice-enabled Chatbots", 19, "Conversational AI with speech recognition & voice replies."],
    ["AI Companions & Assistants", 24, "Friendly, conversational AI for personal use."],
    ["Internal Team Bots", 15, "Slack, Teams, or workplace automation bots."],
    ["Custom Bot Builders", 30, "Low-code/no-code chatbot builders."],
]

const FEATURED = [
    {
        id: 0,
        name: "GPT-4",
        desc: "OpenAI's most advanced language model for complex reasoning",
        img: "/tools/chatgpt.webp",
        tag: "Most Advanced"
    },
    {
        id: 1,
        name: "Midjourney",
        desc: "Leading AI image generation with artistic style control",
        img: "/tools/midjourney.webp",
        tag: "Image Generation"
    },
    {
        id: 2,
        name: "Github Copilot",
        desc: "Ai pair programmer that writes code with you.",
        img: "/tools/githubcopilot.webp",
        tag: "Developer Tool"
    },
]


export default function ToolsSidebar() {
    return (
        <aside className="space-y-6">
            {/* Subcategories */}
            <div>
                <h3 className="text-sm font-semibold mb-3">Subcategories</h3>
                <ul className="space-y-4 text-sm">
                    <li
                        className="flex justify-between items-center px-3 py-2 rounded-md 
                            bg-slate-950 cursor-pointer border border-white/30 hover:border-white/50"
                    >
                        <span>All Tools</span>
                        <span className="text-xs text-gray-200 bg-neutral-700 py-0.5 px-1.5 rounded-sm">193</span>
                    </li>
                    {SUBCATEGORIES.map(([label, count, desc]) => (
                        <li
                            key={label as string}
                            className="flex flex-col justify-between gap-2 px-3 py-2 rounded-md
                            bg-slate-950 cursor-pointer border border-white/30 hover:border-white/50"
                        >
                            <div className="flex items-center justify-between">
                                <span>{label}</span>
                                <span className="text-xs text-gray-200 bg-neutral-700 py-0.5 px-1.5 rounded-sm">{count}</span>
                            </div>
                            <p className="text-xs text-gray-300">{desc}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-linear-to-br from-slate-700 to-indigo-950 px-4 py-2">

                <Image src={'/bliss.svg'} alt="bliss-icon-svg" width={80} height={80}
                    className="mx-auto w-12 h-12" />

                <h4 className="font-semibold text-center">Stay Updated!</h4>
                <p className="text-xs text-slate-300 mt-1 text-center">
                    Get the latest AI tools, updates, and insights delivered to your inbox weekly.
                </p>
                <input
                    placeholder="Enter your email"
                    className="mt-3 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm"
                />
                <button className="mt-3 w-full rounded-md py-2 cursor-pointer
                bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-medium">
                    Subscribe Now
                </button>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-300">
                    <span className="inline-flex items-center gap-2"><Check size={16} className="text-green-600" />No Spam</span>
                    <span className="inline-flex items-center gap-2"><Check size={16} className="text-green-600" />Unsubscribe anytime</span>
                </div>
                <p className="mt-6 text-xs text-center text-slate-400">
                    Join <span className="text-cyan-400">50k+ AI enthusiasts</span>
                </p>
            </div>

            {/* Featured */}
            <div className="rounded-xl border border-white/10 bg-slate-950 p-4">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Star color="yellow" size={16} />
                    Featured AI Tools
                </h4>
                {FEATURED.map((item) => (
                    <div key={item.id} className="mt-2 flex gap-4 text-sm border border-white/20 p-2 rounded-lg hover:border-white/40 transition">
                        <Image src={item.img} alt="chatgpt-logo" height={100} width={100}
                            className="h-10 w-10 object-cover rounded-md" />
                        <div className="flex flex-col gap-2">
                            <h5 className="flex items-center gap-3 font-semibold">{item.name}
                                <span className="bg-yellow-600 px-2 py-0.5 text-[11px] font-normal rounded-sm inline-flex items-center gap-1">
                                    <Star size={10} fill="orange" color="orange" />
                                    Featured
                                </span>
                            </h5>
                            <p className="text-xs text-gray-400">{item.desc}</p>
                            <span className="text-xs text-gray-300 border border-white/20 w-max px-2 py-0.5 rounded-sm">{item.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
