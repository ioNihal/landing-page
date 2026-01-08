import {  Sparkles } from "lucide-react";



// const features = [
//     {
//         title: "Comprehensive Discovery",
//         desc: "Explore over 1,200+ AI tools across 50+ categories with advanced search and filtering.",
//         icon: Search,
//     },
//     {
//         title: "Smart Categorization",
//         desc: "Find exactly what you need with intelligent categorization and comparisons.",
//         icon: Filter,
//     },
//     {
//         title: "Curated Collections",
//         desc: "Access hand-picked collections for use cases, industries, and skill levels.",
//         icon: Bookmark,
//     },
//     {
//         title: "Real-time Analytics",
//         desc: "Stay updated with live rankings, reviews, and trending AI technologies.",
//         icon: BarChart3,
//     },
// ];



export default function About() {
    return (
        <section className="relative bg-slate-950 text-white px-4 sm:px-6 lg:px-10 py-24 isolate">
            {/* Top gradient wash */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-emerald-500/20 via-transparent to-slate-950" />

            <div className="max-w-7xl 2xl:max-w-7xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 mb-8 px-5 py-1.5 rounded-full text-sm
                        bg-cyan-400/30 text-cyan-400 border border-cyan-400/60">
                        <Sparkles size={16} /> About AIToolTracker
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-6xl leading-tight ">
                        Powering the<br />
                        <span className="bg-linear-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                            AI-First Future
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-sm sm:text-lg leading-relaxed">
                        We&apos;re building the world&apos;s most comprehensive AI tool discovery platform,
                        empowering millions of users to find, compare, and leverage the latest artificial intelligence technologies for their projects and businesses.
                    </p>
                </div>

                {/* Feature cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {features.map(({ title, desc, icon: Icon }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-white/15 bg-slate-950/50
                            p-8 hover:border-white/30 transition ease-in duration-200 text-center"
                        >
                            <div className="mb-4 w-12 h-12 rounded-xl bg-white/10 mx-auto
                                flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-lg font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div> */}

                {/* Core values */}
                {/* <div className="text-center mb-14">
                    <h3 className="text-2xl sm:text-5xl ">
                        Our Core Values
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
                        The principles that guide our mission to democratize AI and
                        empower global innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20
                     *:hover:scale-105 *:transition-transform *:duration-300">
                    <div className="rounded-2xl bg-linear-to-br from-teal-950 to-slate-800 p-6">
                        <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600
                            flex items-center justify-center mb-6 ">
                            <div className="w-[calc(100%-5.5px)] h-[calc(100%-6px)] rounded-xl bg-slate-950
                                flex items-center justify-center">
                                <Target size={32} />
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                            Mission-Driven
                        </h4>
                        <p className="text-sm text-slate-200">
                            We&apos;re committed to democratizing AI by making cutting-edge tools accessible to everyone,
                            from beginners to enterprise users.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-linear-to-br from-purple-500/40 to-pink-600/40 p-6">
                        <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-600
                            flex items-center justify-center mb-6 ">
                            <div className="w-[calc(100%-5.2px)] h-[calc(100%-6px)] rounded-xl bg-slate-950
                                flex items-center justify-center">
                                <Shield size={30} />
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                            Trust & Quality
                        </h4>
                        <p className="text-sm text-slate-200">
                            Every tool undergoes rigorous verification to ensure reliability, security,
                            and real-world value for our community.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-linear-to-br from-emerald-500/40 to-teal-600/40 p-6">
                        <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600
                            flex items-center justify-center mb-6 ">
                            <div className="w-[calc(100%-5.2px)] h-[calc(100%-6px)] rounded-xl bg-slate-950
                                flex items-center justify-center">
                                <Zap size={30} />
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                            Innovation First
                        </h4>
                        <p className="text-sm text-slate-200">
                            We continuously evolve our platform with the latest AI technologies to provide the best discovery experience.
                        </p>
                    </div>
                </div> */}

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "1,200+", label: "AI Tools Curated", color: "from-cyan-400 to-purple-400/80" },
                        { value: "100K+", label: "Active Users", color: "from-fuchsia-400 to-pink-400" },
                        { value: "50+", label: "Categories", color: "from-emerald-400 to-emerald-400" },
                        { value: "24/7", label: "Live Updates", color: "from-orange-400 to-orange-700" },
                    ].map(({ value, label, color }) => (
                        <div key={label}>
                            <div className={`text-4xl font-semibold bg-linear-to-r bg-clip-text text-transparent ${color}`}>
                                {value}
                            </div>
                            <p className="mt-2 text-lg text-slate-400">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
