import { Code, FileText, Image, PenTool, TextSearch } from "lucide-react";

const FAVORITES = [
    {
        title: "AI Image Generation",
        tools: 247,
        Icon: Image,
        iconBg: "bg-purple-600/20",
        iconColor: "text-purple-400",
    },
    {
        title: "Content Writing",
        tools: 189,
        Icon: PenTool,
        iconBg: "bg-cyan-600/20",
        iconColor: "text-cyan-400",
    },
    {
        title: "Code Generation",
        tools: 89,
        Icon: Code,
        iconBg: "bg-green-600/20",
        iconColor: "text-green-400",
    },
    {
        title: "SEO Optimization",
        tools: 64,
        Icon: TextSearch,
        iconBg: "bg-sky-600/20",
        iconColor: "text-sky-400",
    },
    {
        title: "Data Analysis",
        tools: 112,
        Icon: FileText,
        iconBg: "bg-yellow-600/20",
        iconColor: "text-yellow-400",
    },
];

export default function Favorites() {
    return (
        <section>
            <h3 className="text-sm font-semibold text-slate-300 mb-4">
                Favorites
            </h3>

            <ul className="space-y-2">
                {FAVORITES.map((item) => (
                    <li
                        key={item.title}
                        className="flex items-center gap-3 rounded-lg bg-white/10 hover:bg-white/10 transition
                        px-3 py-2 cursor-pointer" >
                        {/* Icon */}
                        <div
                            className={`w-8 h-8 rounded-md flex items-center justify-center
                            ${item.iconBg}`}>
                            <item.Icon size={16} className={item.iconColor} />
                        </div>

                        {/* Text */}
                        <div className="leading-tight">
                            <p className="text-sm text-white font-medium">
                                {item.title}
                            </p>
                            <span className="text-xs text-slate-400">
                                {item.tools} tools
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
