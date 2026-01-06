
import FAQAccordion from "@/components/SubmitAITools/FAQAccordion";
import { Award, ChevronRight, Circle, CircleCheck, Rocket, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const FAQS = [
    {
        q: "What are the benefits of listing with AI Tool Tracker?",
        a: (
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <strong>Massive Exposure:</strong> Reach millions of AI enthusiasts
                    actively searching for tools like yours.
                </li>
                <li>
                    <strong>SEO Boost:</strong> Benefit from our high domain authority
                    and targeted AI traffic.
                </li>
                <li>
                    <strong>Qualified Traffic:</strong> Connect with users actively
                    seeking AI solutions.
                </li>
                <li>
                    <strong>Growth Platform:</strong> Join the fastest-growing AI tools
                    directory.
                </li>
            </ul>
        ),
    },
    {
        q: "What types of tools qualify for listing?",
        a: (
            <>
                <p>
                    We focus exclusively on AI-powered tools and applications. Your tool should:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        Incorporate AI/ML features.
                    </li>
                    <li>
                        Be fully functional and accessible.
                    </li>
                    <li>
                        Provide clear value to users.
                    </li>

                </ul>
            </>
        ),
    },
    {
        q: "How quickly will my tool be listed?",
        a: (
            <>
                <p className="mb-3">
                    Fast Track listings go live within 24-48 hours after submission. Our review process ensures quality while maintaining quick turnaround:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                    <li>Submit your tool details.</li>
                    <li>Quick review by our team.</li>
                    <li>Live on our platform.</li>
                    <li>Request any revisions or mondifications.</li>
                </ol>
            </>
        ),
    },
    {
        q: "How can I maximize my tool's exposure?",
        a: (
            <>
                <p>
                    Optimize your listing for maximum visibility:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Clear Description:</strong> Focus on use cases and key benefits
                    </li>
                    <li>
                        <strong>Quality Screenshots:</strong> Showcase your UI and main features
                    </li>
                    <li>
                        <strong>Task-Focused:</strong> Highlight specific problems your tool solves
                    </li>
                    <li>
                        <strong>Choose Boosted Listing:</strong> Get featured placement and priority visibility
                    </li>

                </ul>
            </>
        ),
    },
];


export default function SubmitAIToolPage() {
    return (
        <main className="relative isolate bg-slate-950 text-white">
            {/* Breadcrumb */}
            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>Submit AI Tools</span>
            </div>

            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

            {/* Hero */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400/50 to-purple-400/50 
                     px-4 py-2 text-sm font-medium backdrop-blur">
                    <Rocket size={14} className="text-cyan-400" />
                    Grow Your AI Tool
                    <Zap size={14} className="text-purple-400" />
                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold">
                    List Your AI Tool on
                    <span className="block bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI Tool Tracker
                    </span>

                </h1>

                <p className="mt-4 max-w-3xl mx-auto text-slate-300">
                    Submit your tool and reach 2M+ qualified users actively searching for AI tools like yours every month.
                </p>
                <p className="mt-2 max-w-3xl mx-auto bg-linear-to-r from-green-300 to-sky-400
                   bg-clip-text text-transparent font-semibold">
                    Get discovered by the right audience and accelerate your growth.
                </p>

                <Link href={'#'} className="inline-block mt-8 py-2 px-8 rounded-md border border-white/50 bg-slate-950">Explore Directory</Link>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                    {[
                        { value: "2M+", label: "Monthly Visitors", color: "from-cyan-400 to-purple-400/80" },
                        { value: "10K+", label: "Listed Tools", color: "from-fuchsia-400 to-pink-400" },
                        { value: "85%", label: "Growth Rate", color: "from-emerald-400 to-emerald-400" },
                        { value: "48h", label: "Go Live", color: "from-orange-400 to-orange-700" },
                    ].map(({ value, label, color }) => (
                        <div key={label}>
                            <div className={`text-4xl font-semibold bg-linear-to-r bg-clip-text text-transparent ${color}`}>
                                {value}
                            </div>
                            <p className="mt-2 text-lg text-slate-400">{label}</p>
                        </div>
                    ))}
                </div>
            </section>


            <div className="bg-slate-950 px-4 lg:px-0">
                {/* Pricing Plans */}
                <section className="flex flex-col lg:flex-row gap-20 px-4 sm:px-6 lg:px-20 pt-16 pb-24">
                    <div>
                        <h2 className="text-3xl">
                            Choose Your <br />
                            <span className="font-semibold bg-linear-to-r from-cyan-400 to-purple-600
                            bg-clip-text text-transparent">Growth Plan</span>
                        </h2>
                        <p className="mt-2 text-slate-400">
                            One-time investment, lasting impact.<br /> No recurring fees, no hidden costs.
                        </p>

                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-2">
                                <span className="bg-emerald-400/30 text-emerald-400 rounded-full p-1.5">
                                    <CircleCheck size={20} />
                                </span>
                                24/7 listing visibility
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="bg-fuchsia-500/30 text-fuchsia-500 rounded-full p-1.5">
                                    <CircleCheck size={20} />
                                </span>
                                SEO-optimized tool pages
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="bg-cyan-500/30 text-cyan-500 rounded-full p-1.5">
                                    <CircleCheck size={20} />
                                </span>
                                Community reviews & ratings
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 grid gap-6 md:grid-cols-2">
                        {/* Fast Listing */}
                        <div className="rounded-xl border border-white/15 bg-slate-950 p-4
                             flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold bg-linear-to-r from-emerald-500
                                to-cyan-500 bg-clip-text text-transparent">Fast Listing</h3>
                                <span className="text-xs bg-emerald-400/30 text-emerald-400 
                                      px-3 py-0.5 rounded-2xl ring">
                                    Popular
                                </span>
                            </div>

                            <div className=" text-3xl font-semibold">
                                $47 <span className="text-sm text-slate-400">One Time</span>
                            </div>

                            <ul className=" space-y-3 text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={20} className="text-emerald-400" />
                                    Live within 48 hours
                                </li>
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={20} className="text-emerald-400" />
                                    home page visibility (just landing section)
                                </li>
                            </ul>

                            <Link href={'/submit-tool/submit-tool-form'} className="mt-auto w-full rounded-md py-2 text-sm font-medium 
                                    bg-linear-to-r from-emerald-500 to-cyan-500 cursor-pointer text-center
                                    transition hover:opacity-90">
                                SUBMIT NOW
                            </Link>
                        </div>

                        {/* Premium Listing */}
                        <div className="rounded-xl border border-purple-400/40 bg-slate-950 p-4
                             flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold bg-linear-to-r from-fuchsia-400
                                  to-pink-500 bg-clip-text text-transparent">Premium Listing</h3>
                                <span className="text-xs bg-purple-400/30 text-purple-400 
                                      px-3 py-0.5 rounded-2xl ring">
                                    Best Value
                                </span>
                            </div>

                            <div className="text-3xl font-semibold">
                                $229 <span className="text-sm text-slate-400">One Time</span>
                            </div>

                            <ul className=" space-y-3 text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={20} className="text-fuchsia-400" />
                                    Live within 48 hours
                                </li>
                                <li className="flex items-center gap-2">
                                    <CircleCheck size={20} className="text-fuchsia-400" />
                                    home page visibility (just landing section)
                                </li>
                            </ul>

                            <Link href={'/submit-tool/submit-tool-form'} className="mt-auto w-full rounded-md bg-linear-to-r from-fuchsia-400 to-purple-600 
                                    py-2 text-sm font-medium hover:opacity-90 transition text-center">
                                GET BOOSTED
                            </Link>
                        </div>
                    </div>
                </section>


                <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
                    <h3 className="text-3xl font-semibold text-center">
                        Why AIToolTracker Drives Growth
                    </h3>
                    <p className="mt-2 text-center text-slate-400">
                        Join 10k+ AI tools already growing thier user base through our platform
                    </p>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl bg-linear-to-r from-teal-950/50 to-slate-800/40 p-6">
                            <div className="flex items-center gap-3">
                                <span className="bg-cyan-400/30 p-3 rounded-full">
                                    <TrendingUp className="text-cyan-400" />
                                </span>
                                <div>
                                    <h4 className="text-lg">
                                        Proven Traffic Engine
                                    </h4>
                                    <p className="text-sm text-gray-400">Consistent growth in qualified traffic</p>
                                </div>
                            </div>
                            <p className="mt-4 text-xl font-semibold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                                2M+ Monthly Visitors
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-100">
                                <li className="flex items-center gap-2">
                                    <Circle className="text-cyan-400" size={6} fill="currentColor" />
                                    Millions of monthly AI tool seekers
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-cyan-400" size={6} fill="currentColor" />
                                    Top 3 AI tools directories by traffic
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-cyan-400" size={6} fill="currentColor" />
                                    20k+ outbound link clicks per day
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-xl bg-linear-to-r from-purple-500/10 to-pink-600/10 p-6">
                            <div className="flex items-center gap-3">
                                <span className="bg-fuchsia-500/30 p-3 rounded-full">
                                    <Target className="text-fuchsia-500" />
                                </span>
                                <div>
                                    <h4 className="text-lg">
                                        Quality Lead Generation
                                    </h4>
                                    <p className="text-sm text-gray-400">Reach real AI tool user</p>
                                </div>
                            </div>
                            <p className="mt-4 text-xl font-semibold bg-linear-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                                Active AI Community
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <Circle className="text-fuchsia-500" size={6} fill="currentColor" />
                                    100k+ high intent searches daily
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-fuchsia-500" size={6} fill="currentColor" />
                                    3.5 min average time on site
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-fuchsia-500" size={6} fill="currentColor" />
                                    Global reach with focus on tech hubs
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-xl bg-linear-to-r  from-emerald-500/10 to-teal-600/10 p-6">
                            <div className="flex items-center gap-3">
                                <span className="bg-teal-500/30 p-3 rounded-full">
                                    <Award className="text-teal-500" />
                                </span>
                                <div>
                                    <h4 className="text-lg">
                                        Lasting ROI
                                    </h4>
                                    <p className="text-sm text-gray-400">One-time fee, lasting benefits</p>
                                </div>
                            </div>
                            <p className="mt-4 text-xl font-semibold bg-linear-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                                Lifetime Value
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <Circle className="text-emerald-400" size={6} fill="currentColor" />
                                    100k+ high intent searches daily
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-emerald-400" size={6} fill="currentColor" />
                                    3.5 min average time on site
                                </li>
                                <li className="flex items-center gap-2">
                                    <Circle className="text-emerald-400" size={6} fill="currentColor" />
                                    Global reach with focus on tech hubs
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32">
                    <h2 className="text-3xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 text-center text-slate-400">
                        Everything you need to know about growing your AI tool with our platform.
                    </p>

                    <div className="mt-10">
                        {/* faq accordian */}
                        <FAQAccordion faqs={FAQS} />
                    </div>
                </section>

            </div>

        </main>
    )
}
