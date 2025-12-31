import { Check, Star } from "lucide-react";

export default function PricingPlansCard() {
    return (
        <div className="grid gap-6 sm:grid-cols-3">
            {/* FREE */}
            <div className="rounded-2xl bg-gray-900 p-6 text-center flex flex-col gap-3">
                <h3 className="flex flex-col text-lg font-semibold text-cyan-300">
                    Free
                    <span className="text-sm font-normal text-slate-400">Per month</span>
                </h3>

                <ul className="space-y-3 text-sm text-slate-300 text-left">
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Limited usage
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Basic features
                    </li>
                </ul>

                <button
                    className="mt-auto w-full rounded-md bg-neutral-500/30 py-2 border border-white/10
                    text-sm text-slate-300 hover:bg-neutral-600/30 cursor-pointer transition">
                    Get Started
                </button>
            </div>

            {/* MOST POPULAR */}
            <div className="relative rounded-2xl bg-linear-to-br from-blue-900/70 to-slate-950
                border border-blue-600 p-6 text-center scale-[1.03]">

                {/* Badge */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1
                    rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    <Star size={16} className="text-yellow-400" fill="currentColor" /> Most Popular
                </span>

                <h3 className="text-lg font-semibold text-cyan-300">
                    $20/mo
                </h3>
                <p className="text-sm text-slate-300">Per month</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-200 text-left">
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Unlimited usage
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Advanced features
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Priority support
                    </li>
                </ul>

                <button className="mt-6 w-full rounded-md bg-linear-to-r from-cyan-400 to-blue-600
                    py-2 text-sm font-medium hover:opacity-90 transition">
                    Get Started
                </button>
            </div>

            {/* CUSTOM */}
            <div className="rounded-2xl bg-gray-900 p-6 text-center flex flex-col gap-3">

                <h3 className="text-lg font-semibold text-cyan-300">
                    Custom
                </h3>

                <ul className="mt-3 space-y-3 text-sm text-slate-300 text-left">
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Custom usage limits
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Advanced security
                    </li>
                    <li className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-400" />
                        Dedicated support
                    </li>
                </ul>

                <button
                    className="mt-auto w-full rounded-md bg-neutral-500/30 py-2 border border-white/10
                    text-sm text-slate-300 hover:bg-neutral-600/30 cursor-pointer transition">
                    Get Started
                </button>
            </div>
        </div>
    );
}
