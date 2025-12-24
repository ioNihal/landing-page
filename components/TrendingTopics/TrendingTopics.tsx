import {
    MessageSquare,
    Brain,
    Image as ImageIcon,
    Video,
    FileText,
    Code,
    BarChart3,
    Music,
    Palette,
    Target,
    Headphones,
    Zap
} from "lucide-react";

const topics = [
    { title: "Chatbots", count: "180+ tools", tag: "AI Companions", icon: MessageSquare },
    { title: "Machine Learning", count: "240+ tools", tag: "Other AI", icon: Brain },
    { title: "Image Generation", count: "150+ tools", tag: "Creative AI", icon: ImageIcon },
    { title: "Video & Animation", count: "95+ tools", tag: "Creative AI", icon: Video },
    { title: "Writing & Content", count: "220+ tools", tag: "Creative AI", icon: FileText },
    { title: "Developer Tools", count: "130+ tools", tag: "Other AI", icon: Code },
    { title: "Analytics", count: "85+ tools", tag: "Productivity AI", icon: BarChart3 },
    { title: "Audio & Music", count: "65+ tools", tag: "Creative AI", icon: Music },
    { title: "Design", count: "110+ tools", tag: "Creative AI", icon: Palette },
    { title: "Marketing", count: "90+ tools", tag: "Productivity AI", icon: Target },
    { title: "Voice & Speech", count: "55+ tools", tag: "AI Companions", icon: Headphones },
    { title: "Automation", count: "75+ tools", tag: "Productivity AI", icon: Zap }
];

export default function TrendingTopics() {
    return (
        <section className="bg-slate-950 text-white px-4 sm:px-6 lg:px-10 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-semibold">
                        Trending Topics
                    </h2>
                    <p className="mt-3 text-slate-400 text-sm sm:text-base">
                        Browse AI tools organized by use case and industry to find exactly what you need.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map(({ title, count, tag, icon: Icon }) => (
                        <div key={title} className="rounded-2xl border border-white/20
                                        bg-slate-950 hover:border-white/40 transition p-8 text-center group" >
                            <div className="mx-auto mb-6 w-14 h-14 rounded bg-neutral-700 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-white/90" />
                            </div>

                            <h3 className="text-lg mb-2">
                                {title}
                            </h3>

                            <span className="inline-block mb-3 text-xs px-3 py-1 rounded-md bg-neutral-700 text-white/90">
                                {count}
                            </span>

                            <p className="text-sm text-slate-400">
                                {tag}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
