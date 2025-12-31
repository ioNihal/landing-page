import Newsletter from "../Shared/Newsletter";
import FeaturedTools from "../Shared/FeaturedTools";


const SUBCATEGORIES = [
    ["Customer Support Chatbots", 42, "Tools for automated customer service & helpdesks."],
    ["Website & E-commerce Chatbots", 35, "Bots for sales, lead generation, and checkout assistance."],
    ["Social Media & Messaging Bots", 28, "Bots for WhatsApp, Instagram, Telegram, Messenger, etc."],
    ["Voice-enabled Chatbots", 19, "Conversational AI with speech recognition & voice replies."],
    ["AI Companions & Assistants", 24, "Friendly, conversational AI for personal use."],
    ["Internal Team Bots", 15, "Slack, Teams, or workplace automation bots."],
    ["Custom Bot Builders", 30, "Low-code/no-code chatbot builders."],
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
            <Newsletter />

            {/* Featured */}
            <FeaturedTools />
        </aside>
    );
}
