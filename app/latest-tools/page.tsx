import Link from "next/link";
import { ChevronRight, MessageSquare } from "lucide-react";
import ToolsSidebar from "@/components/LatestToolsPage/ToolsSidebar";
import ToolsToolbar from "@/components/LatestToolsPage/ToolsToolbar";
import ToolGrid from "@/components/LatestToolsPage/ToolGrid";
import FAQSection from "@/components/Shared/FAQSection";
import ReviewSection from "@/components/Shared/ReviewSection";
import ExploreCategories from "@/components/Shared/ExploreCategories";

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


export default function LatestToolsPage() {
    return (
        <main className="relative bg-slate-950 text-white">

            {/* Breadcrumb */}
            <div className="hidden lg:flex absolute top-8 left-10 text-xs text-slate-400 items-center gap-2">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>Chatbots</span>
            </div>


            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-24 pb-8">
                <div className="flex flex-col lg:flex-row items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-neutral-700 flex items-center justify-center">
                        <MessageSquare />
                    </div>
                    <div>
                        <h1 className="text-xl lg:text-3xl font-semibold">Chatbots</h1>
                        <p className="mt-1 max-w-2xl text-slate-300 text-sm lg:text-base">
                            Explore AI-powered conversational agents that can automate support, enhance customer experiences, and engage users across platforms.
                        </p>
                        <span className="inline-block mt-2 text-xs text-gray-200 bg-neutral-700 p-1 px-2 rounded-sm">
                            180+ tools
                        </span>
                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
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
                    <FAQSection />

                    {/* Reviews */}
                    <ReviewSection />
                </div>
            </div>

            {/* explore tools categories */}
            <section className="bg-slate-950 border-t border-white/30">
                <ExploreCategories />
            </section>
        </main>
    );
}
