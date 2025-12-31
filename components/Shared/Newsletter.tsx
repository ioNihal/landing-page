import { Check } from "lucide-react";
import Image from "next/image";


export default function Newsletter() {
    return (
        <div className="rounded-xl bg-linear-to-br from-slate-700 to-indigo-950 px-4 py-2">

            <Image src={'/bliss.svg'} alt="bliss-icon-svg" width={80} height={80}
                className="mx-auto w-12 h-12" />

            <h4 className="font-semibold text-center">Stay Updated!</h4>
            <p className="text-xs text-slate-300 mt-1 text-center">
                Get the latest AI tools, updates, and insights delivered to your inbox weekly.
            </p>
            <input
                placeholder="Enter your email"
                className="mt-3 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-sm"
            />
            <button className="mt-3 w-full rounded-md py-2 cursor-pointer
                bg-linear-to-r from-cyan-400 to-blue-600 text-sm font-medium">
                Subscribe Now
            </button>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2"><Check size={16} className="text-green-600" />No Spam</span>
                <span className="inline-flex items-center gap-2"><Check size={16} className="text-green-600" />Unsubscribe anytime</span>
            </div>
            <p className="mt-6 text-xs text-center text-slate-400">
                Join <span className="text-cyan-400">50k+ AI enthusiasts</span>
            </p>
        </div>
    )
}
