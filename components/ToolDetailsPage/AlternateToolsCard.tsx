import { normalizeString } from "@/lib/utils";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function AlternateToolsCard({ name }: { name: string }) {
    return (
        <div className="rounded-md border border-white/20 bg-slate-950 p-4
              flex flex-col items-center justify-center gap-4"  >

            <Link href={`/products/${normalizeString(name)}`}>
                <div className="h-16 w-16 relative">
                    <Image src={'/tools/chatgpt.webp'} alt="logo" fill />
                </div>
            </Link>

            <h3 className="font-semibold flex items-center gap-2">
                {name}
                <Star size={14} className="text-yellow-400" fill="currentColor" />
                <span className="text-gray-400"> 4.5</span>
            </h3>

            <Link href={'#'} className="inline-flex items-center gap-3
             bg-cyan-500 px-6 py-2 rounded-md">
                Visit <ExternalLink size={14} />
            </Link>

            <p className="text-sm text-center text-gray-400 mt-1">
                OpenAI&apos;s conversational AI assistant with advanced reasoning capabilities...
            </p>

            <div className="mt-3 flex gap-2">
                {["Free", "Pupular", "API"].map((t) => (
                    <span key={t}
                        className={`text-xs px-3 py-1 rounded flex items-center justify-center border
                        ${["Free", "Paid", "Premium"].includes(t)
                                ? "bg-green-200 text-green-800 border-green-600/20"
                                : " border-white/20 text-slate-300"}`}>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    )
}
