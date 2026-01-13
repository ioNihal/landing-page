import TasksSection from "@/components/AllTasksPage/TasksSection";
import Searchbox from "@/components/Hero/Searchbox";
import { Brain, ChevronRight, Code, Flame, ImageIcon, PenTool, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image"

const trendingTasks = [
    {
        title: "AI Image Generation",
        description:
            "Create stunning artwork, illustrations, and visuals from text descriptions using advanced AI models.",
        tools: 247,
        Icon: ImageIcon,
        iconBg: "bg-purple-600/20",
        iconColor: "text-purple-400",
    },
    {
        title: "Content Writing",
        description:
            "Generate high-quality blogs, articles, and marketing copy with AI-powered writing assistants.",
        tools: 189,
        Icon: PenTool,
        iconBg: "bg-cyan-600/20",
        iconColor: "text-cyan-400",
    },
    {
        title: "Code Generation",
        description:
            "Write, debug, and optimize code faster with AI coding assistants and automated tools.",
        tools: 156,
        Icon: Code,
        iconBg: "bg-green-600/20",
        iconColor: "text-green-400",
    },
];

export default function AllTasksPage() {
    return (
        <main className="relative isolate bg-slate-950 text-white">
            {/* Breadcrumb */}
            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>All Tasks</span>
            </div>

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            {/* bg particles */}
            <Image src={'/bgParticles.svg'} alt="background-particles" fill className="object-contain z-20" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-10 text-center">
                <div className="inline-flex items-center gap-2 rounded-full 
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50
                     px-4 py-2 text-sm font-medium backdrop-blur">
                    <Brain size={14} className="text-cyan-400" />
                    AI Tasks & Use Cases
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                    Find the perfect AI tool
                    <span className="block bg-linear-to-r from-cyan-400 to-purple-400 
                    bg-clip-text text-transparent">
                        For Any Task
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-slate-300">
                    Browse AI tools organized by what you want to accomplish.
                    From content creation to data analysis, we&apos;ve got the perfect AI solution for your needs.
                </p>

                {/* Searchbox */}
                <Searchbox text="Search tasks, tools or descriptions..." />

            </section>

            {/* trending now section */}
            <section className="py-10 px-4 sm:px-6 lg:px-10 bg-slate-950 text-left">
                <div className="flex items-center gap-3 mb-8 mx-auto max-w-7xl">
                    <TrendingUp className="text-orange-400" size={20} />
                    <h2 className="text-3xl font-semibold">Trending Now</h2>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
                    {trendingTasks.map((task) => (
                        <article
                            key={task.title}
                            className="rounded-2xl border border-white/15  bg-white/10
                            backdrop-blur p-6 flex flex-col justify-between hover:border-white/25 transition">

                            <div className="flex items-center justify-between">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${task.iconBg}`}>
                                    <task.Icon size={18} className={task.iconColor} />
                                </div>

                                <div className="flex items-center gap-1 text-xs text-orange-400">
                                    <Flame size={14} />
                                    Trending
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">{task.title}</h3>
                                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                    {task.description}
                                </p>
                            </div>

                            <div className="mt-6">
                                <span className="inline-block rounded-md bg-black/40 border border-white/10
                                    px-3 py-1 text-xs text-slate-200">
                                    {task.tools} tools
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            {/* main section */}
            <div className="px-4 sm:px-6 lg:px-10 py-10 bg-slate-950 border-t border-white/30">
                <TasksSection />
            </div>

            <div className="px-4 sm:px-6 lg:px-10 py-10 bg-slate-950">
                <section aria-labelledby="support-heading" className="rounded-2xl bg-linear-to-br from-slate-700 to-indigo-950 p-8 text-center mx-auto max-w-7xl">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/30">
                        <Target />
                    </div>

                    <h3 id="support-heading" className="mt-4 text-3xl font-semibold">
                        Can&apos;t find what you need?
                    </h3>

                    <p className="mt-2 text-slate-300 mx-auto text-sm max-w-md">
                        Submit a request and our community will help you discover the perfect AI tool for your specific task.
                    </p>




                    <Link href={"/"} className="block w-full max-w-sm mx-auto mt-8 px-12 py-2 rounded-md
                         bg-linear-to-br from-cyan-400 to-blue-600 hover:bg-cyan-400
                         font-medium transition">
                        Submit Task Request
                    </Link>
                </section>
            </div>

        </main>
    )
}
