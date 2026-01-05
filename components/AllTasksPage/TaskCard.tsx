import type { Task } from "@/data/tasks";
import { Flame, Heart } from "lucide-react";

export default function TaskCard({ task }: { task: Task }) {
    return (
        <article
            className="rounded-xl border border-white/10 p-5
             hover:border-white/20 transition flex flex-col justify-between gap-4"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-md flex items-center justify-center ${task.iconBg}`}>
                    <task.Icon size={16} className={task.iconColor} />
                </div>

                <span className="text-xs text-orange-400 flex items-center gap-1">
                    <Flame size={12} /> Trending
                </span>
            </div>

            {/* Body */}
            <h3 className="font-medium">{task.title}</h3>

            <p className="text-sm text-slate-400 leading-relaxed">
                {task.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs">
                {task.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded bg-neutral-700 border border-white/10">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <span className="text-xs border border-white/20 p-0.5 px-2 rounded-sm text-slate-200">
                    {task.tools} tools
                </span>

                <button className="text-slate-400 hover:text-white">
                    <Heart />
                </button>
            </div>
        </article>
    );
}
