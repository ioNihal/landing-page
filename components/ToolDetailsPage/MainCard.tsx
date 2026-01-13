import { Bookmark, Heart, Plus, Share2, Star, Users, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function MainCard() {
    return (
        <article className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-2 rounded-2xl ring-2 ring-white/50 p-4 bg-linear-to-br from-slate-950 to-neutral-500/50">
                <div className="flex items-start gap-4">
                    <Image
                        src="/tools/chatgpt.webp"
                        alt="Claude 3.5 logo"
                        height={100} width={100}
                        className="w-14 h-14 rounded-sm bg-black/40"
                    />

                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold flex items-center gap-2">
                            Claude 3.5
                            <span>
                                <Verified className="text-black" fill="blue" />
                            </span>
                        </h1>

                        <p className="text-sm bg-neutral-700 w-max px-2 py-0.5 rounded-sm mt-1">
                            Chatbots
                        </p>

                        <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-4">
                            <div className="flex flex-wrap gap-2">
                                {["Free", "New", "AI Assistant", "Popular"].map(t => (
                                    <span key={t} className={` text-xs px-2 py-1 rounded flex items-center justify-center
                                        ${["Free", "Paid", "Premium"].includes(t)
                                            ? "bg-green-200 text-green-800"
                                            : "border border-white/20 text-slate-300"} `} >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className=" inline-flex items-center gap-1 text-xs text-slate-400">
                                <Star size={14} className="text-yellow-400" fill="currentColor" />
                                4.5 (8,921 reviews)
                                <span className="ml-2 inline-flex items-center">
                                    <Users size={14} className="mr-1" /> 8M<Plus size={12} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-semibold">$20</span>
                        <span className="hover:text-cyan-400"><Bookmark size={36} /></span>
                    </div>
                </div>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-3xl">
                    Claude 3.5 is a next-gen AI assistant built for advanced reasoning, creativity,
                    and productivity. It helps with writing, coding, research, and problem-solving while maintaining
                    context in long conversations. Trusted by millions for reliable and human-like responses.
                </p>

                <div className="flex items-center gap-4 mt-6">
                    <Link href="#" className="px-6 py-2 rounded-md font-medium bg-linear-to-r
                    from-cyan-400 to-blue-600">
                        Try Claude 3.5
                    </Link>

                    <button className="px-4 py-2 rounded-md border border-white/15">
                        <Heart />
                    </button>
                    <button className="px-4 py-2 rounded-md border border-white/15">
                        <Share2 />
                    </button>
                </div>
            </div>

            {/* Preview image */}
            <div className="h-64 lg:h-auto lg:flex-1 relative rounded-2xl bg-black/40 p-4">
                <Image
                    src="/screenshots/claude.png"
                    alt="Claude preview"
                    fill
                    className="rounded-md w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
        </article>
    )
}
