import { User } from "lucide-react";


export default function ContactInformation() {
    return (
        <div className="rounded-xl border border-white/10 bg-slate-950 p-4 md:p-6">

            <div className="flex items-center gap-2 mb-6">
                <span className="text-sky-400"><User /></span>
                <h2 className="text-lg font-semibold text-white">
                    Contact Information
                </h2>
            </div>

            <div className="space-y-6">
                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-slate-300 mb-1 block">
                            Contact Name <span className="text-red-400">*</span>
                        </label>
                        <input type="text" placeholder="Enter your AI tool name"
                            className="w-full rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-slate-300 mb-1 block">
                            Contact Email <span className="text-red-400">*</span>
                        </label>
                        <input type="email" placeholder="https://yourtool.com"
                            className="w-full rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                    </div>
                </div>

                {/* Company Name */}
                <div>
                    <label className="text-sm text-slate-300 mb-1 block">
                        Company Name <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input type="text" placeholder="Brief one-line description of your tool"
                        className="w-full rounded-md bg-black/40 border border-white/10
                        px-3 py-2 text-sm text-white placeholder:text-slate-500
                        focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                </div>

                {/* Social Links */}
                <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                        Social Links <span className="text-slate-500">(Optional)</span>
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="url" placeholder="Twitter URL"
                            className="rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />

                        <input type="url" placeholder="LinkedIn URL"
                            className="rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />

                        <input type="url" placeholder="GitHub URL"
                            className="rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
