import { Star } from "lucide-react";
import Image from "next/image";

const FEATURED = [
    {
        id: 0,
        name: "GPT-4",
        desc: "OpenAI's most advanced language model for complex reasoning",
        img: "/tools/chatgpt.webp",
        tag: "Most Advanced"
    },
    {
        id: 1,
        name: "Midjourney",
        desc: "Leading AI image generation with artistic style control",
        img: "/tools/midjourney.webp",
        tag: "Image Generation"
    },
    {
        id: 2,
        name: "Github Copilot",
        desc: "Ai pair programmer that writes code with you.",
        img: "/tools/githubcopilot.webp",
        tag: "Developer Tool"
    },
]


export default function FeaturedTools() {
    return (
        <div className="rounded-xl border border-white/10 bg-slate-950 p-4">
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Star color="yellow" size={16} />
                Featured AI Tools
            </h4>
            {FEATURED.map((item) => (
                <div key={item.id} className="mt-2 flex gap-4 text-sm border border-white/20 p-2 rounded-lg hover:border-white/40 transition">
                    <Image src={item.img} alt="chatgpt-logo" height={100} width={100}
                        className="h-10 w-10 object-cover rounded-md" />
                    <div className="flex flex-col gap-2">
                        <h5 className="flex items-center gap-3 font-semibold">{item.name}
                            <span className="bg-yellow-600 px-2 py-0.5 text-[11px] font-normal rounded-sm inline-flex items-center gap-1">
                                <Star size={10} fill="orange" color="orange" />
                                Featured
                            </span>
                        </h5>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                        <span className="text-xs text-gray-300 border border-white/20 w-max px-2 py-0.5 rounded-sm">{item.tag}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
