import { Plus, Star } from "lucide-react";


export default function FeaturesAndTags() {
    return (
        <div className="rounded-xl border border-white/20 slate-950 p-4 md:p-6">

            <div className="flex items-center gap-2 mb-6">
                <span className="text-yellow-400"><Star /></span>
                <h2 className="text-lg font-semibold text-white">
                    Features & Tags
                </h2>
            </div>

            <div className="space-y-6">
                {/* Key Features */}
                <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                        Key Features
                    </label>

                    <div className="flex gap-3">
                        <input type="text" placeholder="Add a key feature"
                            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 
                            text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />

                        <button type="button" className="h-10 w-10 rounded-md bg-cyan-900/40
                            border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/70 transition
                            flex items-center justify-center">
                            <Plus size={16} />
                        </button>
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                        Tags
                    </label>

                    <div className="flex gap-3">
                        <input type="text" placeholder="Add a tag"
                            className="flex-1 rounded-md bg-black/40 border border-white/10
                            px-3 py-2 text-sm text-white placeholder:text-slate-500
                            focus:outline-none focus:ring-1 focus:ring-purple-500"
                        />

                        <button type="button" className="h-10 w-10 rounded-md bg-purple-900/40
                            border border-purple-500/30 text-purple-400 hover:bg-purple-900/70 transition
                            flex items-center justify-center">
                            <Plus size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
