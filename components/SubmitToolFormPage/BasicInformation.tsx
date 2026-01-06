import { Globe } from "lucide-react";


export default function BasicInformation() {
    return (
        <div className="rounded-xl border border-white/20 bg-slate-950 p-4 md:p-6">

            <div className="flex items-center gap-2 mb-6">
                <span className="text-cyan-400"><Globe /></span>
                <h2 className="text-lg font-semibold text-white">
                    Basic Information
                </h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Tool Name */}
                <div>
                    <label className="text-sm text-slate-300 mb-1 block">
                        Tool Name <span className="text-red-400">*</span>
                    </label>
                    <input type="text" placeholder="Enter your AI tool name"
                        className="w-full rounded-md bg-black/40 border border-white/10
                        px-3 py-2 text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>

                {/* Website URL */}
                <div>
                    <label className="text-sm text-slate-300 mb-1 block">
                        Website URL <span className="text-red-400">*</span>
                    </label>
                    <input type="url" placeholder="https://yourtool.com"
                        className="w-full rounded-md bg-black/40 border border-white/10
                        px-3 py-2 text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>

                {/* Short Description */}
                <div className="md:col-span-2">
                    <label className="text-sm text-slate-300 mb-1 block">
                        Short Description <span className="text-red-400">*</span>
                    </label>
                    <input type="text" placeholder="Brief one-line description of your tool"
                        className="w-full rounded-md bg-black/40 border border-white/10
                        px-3 py-2 text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                </div>

                {/* Detailed Description */}
                <div className="md:col-span-2">
                    <label className="text-sm text-slate-300 mb-1 block">
                        Detailed Description <span className="text-red-400">*</span>
                    </label>
                    <textarea rows={4}
                        placeholder="Provide a comprehensive description of your AI tool, its capabilities, and use cases..."
                        className="w-full rounded-md bg-black/40 border border-white/10
                        px-3 py-2 text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                    />
                </div>
            </div>
        </div>
    )
}
