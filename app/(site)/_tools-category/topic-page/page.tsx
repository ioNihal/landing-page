import Searchbox from "@/components/Hero/Searchbox";
import ExploreCategories from "@/components/Shared/ExploreCategories";
import FAQSection from "@/components/Shared/FAQSection";
import FeaturedTools from "@/components/Shared/FeaturedTools";
import Newsletter from "@/components/Shared/Newsletter";
import ReviewSection from "@/components/Shared/ReviewSection";
import ToolCardTopicPage from "@/components/TopicPage/ToolCardTopicPage";
import DropDownSelect from "@/components/ui/DropDownSelect";
import { Check, ChevronRight, FileText, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SELECT_OPTIONS = [
    { title: "Show All", value: "all" },
    { title: "Free", value: "free" },
    { title: "Freemium", value: "freemium" },
    { title: "Free Trial", value: "free-trial" },
]

export const tools = [
    {
        id: 1,
        name: "Claude 3.5",
        desc: "ChatGPT is a powerful conversational AI by OpenAI, designed to assist with writing, brainstorming, coding, research, and problem-solving. It delivers human-like responses and adapts to long conversations.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "Popular", "API"],
        rating: 4.8,
        url: "https://www.anthropic.com/claude",
        toolUrl: "/products/claude"
    },
    {
        id: 2,
        name: "Claude 2",
        desc: "A capable large language model focused on safety and reasoning. Useful for summarization, coding help, and long-form content generation.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "API"],
        rating: 4.8,
        url: "https://www.anthropic.com/claude",
        toolUrl: "/products/claude"
    },
    {
        id: 3,
        name: "Cohere Command",
        desc: "Enterprise-grade language model optimized for text generation, classification, and embeddings with strong API support.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "Popular", "API"],
        rating: 4.8,
        url: "https://cohere.com",
        toolUrl: "/products/claude"
    },
    {
        id: 4,
        name: "HuggingFace Chat",
        desc: "Open-source friendly chat interface providing access to multiple community and research-backed language models.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "Open Source"],
        rating: 4.8,
        url: "https://huggingface.co/chat",
        toolUrl: "/products/claude"
    },
    {
        id: 5,
        name: "Bard AI",
        desc: "Google's conversational AI focused on real-time information, search-backed answers, and productivity use cases.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "Popular"],
        rating: 4.8,
        url: "https://gemini.google.com",
        toolUrl: "/products/claude"
    },
    {
        id: 6,
        name: "GPT-4 Turbo",
        desc: "A high-performance version of GPT-4 optimized for speed, cost-efficiency, and large context windows via API.",
        img: "/tools/chatgpt.webp",
        tags: ["Paid", "API", "Popular"],
        rating: 4.8,
        url: "https://openai.com",
        toolUrl: "/products/claude"
    },
    {
        id: 7,
        name: "Claude 2",
        desc: "Focused on constitutional AI principles, offering reliable responses for analysis, coding, and structured writing.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "API"],
        rating: 4.8,
        url: "https://www.anthropic.com/claude",
        toolUrl: "/products/claude"
    },
    {
        id: 8,
        name: "Cohere Command",
        desc: "Designed for developers building AI-powered applications with text generation, search, and embeddings.",
        img: "/tools/chatgpt.webp",
        tags: ["Free", "API"],
        rating: 4.8,
        url: "https://cohere.com",
        toolUrl: "/products/claude"
    },
];


export default function TopicPage() {
    return (
        <main className="relative isolate bg-slate-950 text-white">
            {/* bg grid */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs ">
                <Link href={"/"}>Home</Link>&nbsp;<ChevronRight size={16} />
                <Link href="/tools-category">AI&nbsp;Tool&nbsp;Category</Link>&nbsp;<ChevronRight size={16} />
                &nbsp;Topic&nbsp;Page
            </div>


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                     p-4 py-2 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <FileText className="text-cyan-400" size={22} />
                    <span>AI Companions</span>
                    <Send className="text-purple-400" size={22} />
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold
                    bg-linear-to-r from-cyan-400 to-purple-400
                    bg-clip-text text-transparent">
                    Best AI Chatbots & <br /> Companions Directory 2025
                </h1>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Compare 156 AI chatbot tools. Find free trials, pricing, and real user reviews.
                </p>

                {/* Searchbox */}
                <Searchbox />


                <ul className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-3 text-sm">
                    <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />Updated Weekly</li>
                    <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />50k+ Users Trust Us</li>
                    <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />Verified Reviews</li>
                </ul>

                <div className=" flex flex-col lg:flex-row items-center justify-center mt-10 gap-6">
                    <div className="flex -space-x-3">
                        <Image src={'/avatars/1.png'} alt="avatar-one" height={64} width={64} className="w-10 h-10" />
                        <Image src={'/avatars/2.png'} alt="avatar-two" height={64} width={64} className="w-10 h-10" />
                        <Image src={'/avatars/3.png'} alt="avatar-three" height={64} width={64} className="w-10 h-10" />
                    </div>
                    <p className="text-sm lg:text-xl bg-linear-to-r from-amber-400 to-red-300 bg-clip-text text-transparent font-bold">&ldquo;Join 50,000+ AI enthusiasts finding better tools&rdquo;</p>
                </div>

            </div>

            <div className="bg-slate-950 py-10">
                <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0">
                        <h2 className="text-lg lg:text-2xl font-semibold">Best AI Chatbot Tools to Explore in 2025</h2>
                        <DropDownSelect options={SELECT_OPTIONS} />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    {/* main content */}
                    <div className="space-y-6">
                        <div className="space-y-6">
                            {tools.map((tool) => (
                                <ToolCardTopicPage key={tool.id} tool={tool} />
                            ))}
                        </div>

                        {/* faq */}
                        <FAQSection />

                        {/* review */}
                        <ReviewSection />
                    </div>

                    {/* sidebar */}
                    <aside className="space-y-6">
                        {/* newsletter */}
                        <Newsletter />

                        {/* featured tools */}
                        <FeaturedTools />
                    </aside>
                </div>
            </div>

            {/* Explore tools categories */}
            <section className="bg-slate-950 border-t border-white/30">
                <ExploreCategories />
            </section>

        </main>
    )
}
