import Link from "next/link";
import { Circle, MoveRight, RocketIcon, Sparkles, Star, Zap } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative isolate bg-slate-950 text-white">
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-30% from-green-400/20 to-purple-500/20" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-20 text-center">
                <div className="relative inline-flex flex-wrap justify-center items-center gap-3 mb-8 sm:mb-10 px-2">
                    {/* Glow layer */}
                    <span
                        aria-hidden
                        className="absolute inset-0 blur-xl opacity-20
                        bg-linear-to-r from-cyan-400 to-purple-400"
                    />

                    {/* Text */}
                    <p className="relative inline-flex flex-wrap items-center justify-center gap-2
                        text-base sm:text-xl font-medium text-center bg-linear-to-r from-cyan-400 to-purple-400
                        bg-clip-text text-transparent " >
                        <RocketIcon className="text-cyan-400" />
                        Ready to Transform Your AI Workflow?
                        <Zap className="text-purple-400" />
                    </p>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-6xl tracking-tight">

                    Join the
                    <span className="block bg-linear-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mt-2 font-bold">
                        AI Revolution
                    </span>
                </h2>

                <p className="mt-4 text-lg sm:text-2xl text-slate-300">
                    Start Today, Lead Tomorrow
                </p>

                <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-slate-400">
                    Don&apos;t get left behind in the AI transformation. Join over
                    100,000 professionals who trust AIToolTracker to stay ahead
                    of the curve.
                </p>

                <p className="mt-3 text-cyan-400 font-medium">
                    Your competitive advantage starts here.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md
                        bg-linear-to-r from-cyan-400 via-blue-600 to-purple-600
                        hover:from-cyan-500 hover:to-blue-700
                        font-medium transition">
                        <Sparkles fill="white" /> Start Exploring Free <MoveRight />
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 rounded-md
                        border border-white/20 text-white bg-black/20
                        hover:bg-white/10 transition">
                        Submit Your Tool
                    </Link>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-sm text-slate-300">
                    <div className="flex items-center justify-center gap-2">
                        {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={16} fill="gold" className="text-yellow-400" />
                        ))}
                        <span>4.9/5 rating</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-emerald-400">
                        <Circle size={16} fill={"#43D2A4"} /> <span className="text-slate-300">100k+ satisfied users</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-cyan-400">
                        <Zap size={16} /> <span className="text-slate-300">Free Forever Plan</span>
                    </div>
                </div>
                <div className="relative mx-auto max-w-6xl px-4 mt-10">
                    <div className="rounded-xl bg-slate-950/20 px-6 py-4 text-sm text-slate-300 text-center">
                        <strong className="text-white">Limited Time:</strong>{" "}
                        Get early access to our upcoming AI tool recommendation
                        engine.&nbsp;
                        <Link href="/" className="bg-linear-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent hover:underline">
                            Join now and be among the first to experience the future of AI
                            discovery.
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
