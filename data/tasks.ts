import {
    Image,
    Code,
    Music,
    BarChart,
    Video,
    Mic,
    Palette,
    LucideIcon,
} from "lucide-react";

export type Task = {
    id: number;
    title: string;
    slug: string;
    description: string;
    tools: number;
    category: string;
    tags: string[],
    trending: boolean,
    Icon: LucideIcon,
    iconBg: string;
    iconColor: string;
}

export const allTasks: Task[] = [
    {
        id: 1,
        title: "AI Image Generation",
        slug: "ai-image-generation",
        description:
            "Create stunning artwork, illustrations, and visuals from text descriptions using advanced AI models.",
        tools: 247,
        category: "Visual",
        tags: ["Creative", "Design", "Images"],
        trending: true,
        Icon: Image,
        iconBg: "bg-purple-600/20",
        iconColor: "text-purple-400",
    },
    {
        id: 2,
        title: "Content Writing",
        slug: "content-writing",
        description:
            "Generate high-quality blogs, articles, and marketing copy with AI-powered writing assistants.",
        tools: 189,
        category: "Content",
        tags: ["Writing", "Marketing", "SEO"],
        trending: true,
        Icon: PenTool,
        iconBg: "bg-cyan-600/20",
        iconColor: "text-cyan-400",
    },
    {
        id: 3,
        title: "Code Generation",
        slug: "code-generation",
        description:
            "Write, debug, and optimize code faster with AI coding assistants and automated tools.",
        tools: 156,
        category: "Development",
        tags: ["Programming", "Automation"],
        trending: true,
        Icon: Code,
        iconBg: "bg-green-600/20",
        iconColor: "text-green-400",
    },
    {
        id: 4,
        title: "Video Creation",
        slug: "video-creation",
        description:
            "Create, edit, and enhance videos using AI-powered video generation and editing tools.",
        tools: 112,
        category: "Visual",
        tags: ["Video", "Editing", "Creative"],
        trending: false,
        Icon: Video,
        iconBg: "bg-red-600/20",
        iconColor: "text-red-400",
    },
    {
        id: 5,
        title: "Music & Audio Generation",
        slug: "music-audio-generation",
        description:
            "Generate music, sound effects, and audio content using AI-driven composition tools.",
        tools: 84,
        category: "Audio",
        tags: ["Music", "Voice", "Sound"],
        trending: false,
        Icon: Music,
        iconBg: "bg-orange-600/20",
        iconColor: "text-orange-400",
    },
    {
        id: 6,
        title: "Voice & Speech AI",
        slug: "voice-speech-ai",
        description:
            "Convert text to speech, clone voices, and build conversational voice applications.",
        tools: 97,
        category: "Audio",
        tags: ["Voice", "Speech", "TTS"],
        trending: false,
        Icon: Mic,
        iconBg: "bg-amber-600/20",
        iconColor: "text-amber-400",
    },
    {
        id: 7,
        title: "Data Analysis",
        slug: "data-analysis",
        description:
            "Analyze datasets, generate insights, and visualize trends using AI-driven analytics tools.",
        tools: 131,
        category: "Analytics",
        tags: ["Data", "Insights", "Charts"],
        trending: false,
        Icon: BarChart,
        iconBg: "bg-sky-600/20",
        iconColor: "text-sky-400",
    },
    {
        id: 8,
        title: "Logo & Brand Design",
        slug: "logo-brand-design",
        description:
            "Design logos, brand identities, and visual assets using AI-assisted design platforms.",
        tools: 76,
        category: "Visual",
        tags: ["Branding", "Design"],
        trending: false,
        Icon: Palette,
        iconBg: "bg-pink-600/20",
        iconColor: "text-pink-400",
    },
];


import { PenTool, FileText, Edit3 } from "lucide-react";

export const contentTasks: Task[] = [
    {
        id: 1,
        title: "Content Writing",
        slug: "content-writing",
        description:
            "Generate high-quality blogs, articles, and marketing copy with AI-powered writing assistants.",
        tools: 189,
        category: "Content",
        tags: ["Writing", "Marketing", "SEO"],
        trending: true,
        Icon: PenTool,
        iconBg: "bg-purple-600/20",
        iconColor: "text-purple-400",
    },
    {
        id: 2,
        title: "SEO Optimization",
        slug: "seo-optimization",
        description:
            "Optimize content for search engines with keyword suggestions, meta tags, and AI-driven SEO analysis.",
        tools: 142,
        category: "Content",
        tags: ["SEO", "Keywords", "Optimization"],
        trending: true,
        Icon: FileText,
        iconBg: "bg-cyan-600/20",
        iconColor: "text-cyan-400",
    },
    {
        id: 3,
        title: "Content Editing & Proofreading",
        slug: "content-editing-proofreading",
        description:
            "Improve grammar, clarity, tone, and readability with AI-powered editing and proofreading tools.",
        tools: 97,
        category: "Content",
        tags: ["Editing", "Grammar", "Proofreading"],
        trending: false,
        Icon: Edit3,
        iconBg: "bg-green-600/20",
        iconColor: "text-green-400",
    },
];
