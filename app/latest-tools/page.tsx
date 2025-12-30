import Link from "next/link";
import { ChevronRight, MessageSquare, Star } from "lucide-react";
import ToolsSidebar from "@/components/LatestToolsPage/ToolsSidebar";
import ToolsToolbar from "@/components/LatestToolsPage/ToolsToolbar";
import ToolGrid from "@/components/LatestToolsPage/ToolGrid";
import Image from "next/image";

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
        name: "Intercom",
        desc: "Customer messaging and AI bot for support, onboarding, and user engagement.",
        type: "Customer Support Chatbot",
        tags: ["Paid", "Customer Support", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 2,
        name: "Drift",
        desc: "Conversational marketing bot for lead generation, sales conversations, and scheduling.",
        type: "Sales Chatbot",
        tags: ["Paid", "Business"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 3,
        name: "ManyChat",
        desc: "Automation chatbot for Messenger, WhatsApp, and Instagram campaigns.",
        type: "Social Media Bots",
        tags: ["Free", "Marketing", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 4,
        name: "Tidio",
        desc: "Live chat and AI chatbot built for e-commerce websites and stores.",
        type: "Website & E-commerce Chatbots",
        tags: ["Free", "E-commerce", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 5,
        name: "Zendesk Answer Bot",
        desc: "AI-powered support bot to resolve FAQs and reduce ticket volume.",
        type: "Customer Support Chatbots",
        tags: ["Paid", "SaaS", "Popular"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 6,
        name: "MobileMonkey",
        desc: "Omnichannel chatbot for SMS, Instagram, and Facebook campaigns.",
        type: "Social Media & Messaging Bots",
        tags: ["Free", "Marketing"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 7,
        name: "Botpress",
        desc: "Open-source chatbot platform for building highly customizable bots.",
        type: "Custom Bot Builder",
        tags: ["Free", "API", "Open-source"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 8,
        name: "Replika",
        desc: "Friendly AI companion for personal conversations and wellness support.",
        type: "AI Companions & Personal Assistants",
        tags: ["Free", "Personal"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
    {
        id: 9,
        name: "Voiceflow",
        desc: "Design and prototype chatbots and voice assistants for Alexa & Google.",
        type: "Voice-enabled Chatbots",
        tags: ["Free", "Builder", "Voice"],
        img: "/tools/chatgpt.webp",
        price: 20,
        rating: 4.5,
        url: "/"
    },
]

const FAQS = [
    {
        q: "Is Claude 3.5 free to use?",
        a: "Claude 3.5 offers a free tier with limited usage. For unlimited access and advanced features, you can upgrade to the Standard plan at $20/month."
    },
    {
        q: "How does Claude compare to other AI assistants?",
        a: "Claude 3.5 excels in reasoning, safety, and maintaining context across long conversations. It's particularly strong in coding, analysis, and creative writing tasks."
    },
    {
        q: "Can I use Claude for commercial projects?",
        a: "Yes, Claude 3.5 can be used for commercial purposes. Enterprise customers get additional security features and dedicated support."
    },
    {
        q: "What are the usage limits on the free plan?",
        a: "The free plan includes limited monthly usage. Once you reach the limit, you'll need to wait for the next billing cycle or upgrade to a paid plan."
    }
]

const REVIEWS = [
    { stars: 5, content: "Handles complex prompts like a pro. Perfect for deep reasoning and debugging.", author: "Ravi M", role: "Developer" },
    { stars: 4, content: "Great for writing and content planning. Feels natural and accurate.", author: "Priya S", role: "Marketer" },
    { stars: 5, content: "Best conversational AI I've used. Smart, smooth, and human-like.", author: "Arjun D", role: "Tech User" },
]

const CATEGORIES = [
    {
        name: "Virtual Assistants",
        count: 150,
        type: "AI Companions",
        desc: "Conversational AI and virtual assistants for customer support and automation.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
    {
        name: "Developer Tools",
        count: 150,
        type: "Other AI",
        desc: "Code generation, debugging, and development assistance powered by AI.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
    {
        name: "Productivity",
        count: 150,
        type: "Productivity AI",
        desc: "Streamline workflows and boost efficiency with intelligent automation tools.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
]


export default function LatestToolsPage() {
    return (
        <main className="relative bg-slate-950 text-white">

            {/* Breadcrumb */}
            <div className="hidden lg:flex absolute top-8 left-10 text-xs text-slate-400 items-center gap-2">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>Chatbots</span>
            </div>


            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-neutral-700 flex items-center justify-center">
                        <MessageSquare />
                    </div>
                    <div>
                        <h1 className="text-3xl font-semibold">Chatbots</h1>
                        <p className="mt-1 max-w-2xl text-slate-300">
                            Explore AI-powered conversational agents that can automate support, enhance customer experiences, and engage users across platforms.
                        </p>
                        <span className="inline-block mt-2 text-xs text-gray-200 bg-neutral-700 p-1 px-2 rounded-sm">
                            180+ tools
                        </span>
                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto pb-10 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                {/* Sidebar */}
                <ToolsSidebar />

                {/* Content */}
                <div>
                    <ToolsToolbar />

                    <p className="text-xs text-slate-400 mb-4">
                        Showing 193 tools
                    </p>

                    <ToolGrid tools={TOOLS} />

                    {/* FAQ */}
                    <section className="mt-20 border border-white/20 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4">
                            Frequently Asked Questions
                        </h3>
                        <ul className="space-y-3">
                            {FAQS.map((item, index) => (
                                <li key={index} className="border border-white/20 p-3 rounded-lg">
                                    <p className="font-semibold">{item.q}</p>
                                    <p className="text-slate-300 text-sm">{item.a}</p>
                                </li>
                            ))}
                        </ul>

                    </section>

                    {/* Reviews */}
                    <section className="mt-10 rounded-xl border border-white/10 bg-slate-950 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-lg">Reviews</h4>
                            <div className="flex flex-col items-center">
                                <span className="text-xl">4.8 / 5</span>
                                <span className="text-xs text-slate-300">Overall Rating</span>
                            </div>
                        </div>

                        {REVIEWS.map((item, index) => (
                            <div key={index} className="mt-6 space-y-2 text-sm text-slate-300">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: item.stars }).map((_, i) => (
                                        <Star key={i} fill="currentColor" className="text-orange-400" size={16} />
                                    ))}
                                </div>
                                <blockquote className="italic">“{item.content}”</blockquote>
                                <div><span className="text-white">-&nbsp;{item.author},</span>&nbsp;<span>{item.role}</span></div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
            <section className="p-10 border-t border-white/30">
                <h3 className="bg-linear-to-r from-blue-500 to-fuchsia-300 bg-clip-text text-transparent font-bold text-xl w-full text-center">Explore AI Tool Categories</h3>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {CATEGORIES.map((cat, i) => (
                        <div key={i} className="p-4 rounded-xl border border-slate-800
                         bg-slate-950 overflow-hidden hover:border-slate-700 transition" >
                            {/* Image */}
                            <div className="relative h-40 w-full rounded-lg">
                                <Image
                                    src={cat.img}
                                    alt={`${cat.name}-thumbnail`}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white">
                                        {cat.name}
                                    </h3>
                                    <span className="text-xs px-2 py-0.5 rounded-sm border border-white/20 text-slate-300">
                                        {cat.count}+ Tools
                                    </span>
                                </div>

                                <p className="text-xs uppercase tracking-wide bg-neutral-700 w-max px-2 py-0.5 rounded-sm">
                                    {cat.type}
                                </p>

                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {cat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}
