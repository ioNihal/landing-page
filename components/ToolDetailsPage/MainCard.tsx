import { Bookmark, Heart, Plus, Share2, Star, Users, Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function MainCard() {
    return (
        <article className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2 rounded-2xl border border-gray-800 p-3 lg:p-8 bg-gray-900">
                <div className="flex items-start gap-4">
                    <Image
                        src="/tools/chatgpt.webp"
                        alt="Claude 3.5 logo"
                        height={100} width={100}
                        className="w-14 h-14 rounded-sm bg-black/40"
                    />

                    <div className="flex-1">
                        <h1 className="text-xl lg:text-3xl font-semibold flex items-center gap-2 bg-linear-to-r
                        from-cyan-400 to-20% to-purple-400 bg-clip-text text-transparent">
                            Claude 3.5
                            <span>
                                <Verified className="text-black" fill="blue" />
                            </span>
                        </h1>

                        <p className="text-xs border border-gray-600 w-max px-2 py-1 rounded-sm mt-1">
                            Chatbots
                        </p>


                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xl lg:text-3xl font-semibold">$20</span>
                        <span className="hover:text-cyan-400 text-gray-400 cursor-pointer"><Bookmark size={24} /></span>
                    </div>
                </div>
                <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                        {["Free", "New", "AI Assistant", "Popular"].map(t => (
                            <span key={t} className={` text-[10px] px-0.5 py-px sm:px-2 sm:py-1 rounded flex items-center justify-center
                                        ${["Free", "Paid", "Premium"].includes(t)
                                    ? "bg-green-200 text-green-800"
                                    : "bg-gray-600"} `} >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className=" inline-flex items-center gap-1 text-sm text-gray-400">
                        <Star size={14} className="text-yellow-400" fill="currentColor" />
                        4.5 (8,921 reviews)
                        <span className="ml-2 inline-flex items-center">
                            <Users size={14} className="mr-1" /> 8M<Plus size={12} />
                        </span>
                    </div>
                </div>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-3xl">
                    Claude 3.5 is a next-gen AI assistant built for advanced reasoning, creativity,
                    and productivity. It helps with writing, coding, research, and problem-solving while maintaining
                    context in long conversations. Trusted by millions for reliable and human-like responses.
                </p>

                <div className="flex items-center gap-4 mt-6">
                    <Link href="#" className="px-8 py-2 rounded-md font-medium bg-linear-to-r
                    from-cyan-400 to-blue-600 text-lg cursor-pointer">
                        Try Claude 3.5
                    </Link>

                    <button className="p-3 rounded-md border border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white cursor-pointer">
                        <Heart />
                    </button>
                    <button className="p-3 rounded-md border border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white cursor-pointer">
                        <Share2 />
                    </button>
                </div>
            </div>

            {/* Preview image */}
            <div className="relative rounded-2xl lg:rounded-2xl bg-black/40 p-0 lg:p-4 h-80 sm:h-96 lg:h-auto w-full">
                <Image
                    src="/screenshots/claude.png"
                    alt="Claude preview"
                    fill
                    className="rounded-none lg:rounded-md object-cover"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
        </article>
    )
}
