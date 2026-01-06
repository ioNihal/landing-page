import { ImageIcon, Upload } from "lucide-react";


export default function MediaAndAssets() {
    return (
        <div className="rounded-xl border border-white/10 bg-slate-950 p-4 md:p-6">

            <div className="flex items-center gap-2 mb-6">
                <span className="text-pink-400"><ImageIcon aria-hidden /></span>
                <h2 className="text-lg font-semibold text-white">
                    Media & Assets
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Logo / Icon */}
                <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                        Logo / Icon
                    </label>

                    <div className="h-44 rounded-lg border border-dashed border-white/20
                        bg-black/40 hover:border-cyan-400/60 transition flex flex-col items-center justify-center text-center
                        text-slate-400 cursor-pointer">
                        <div>
                            <Upload size={32} />
                        </div>

                        <p className="mt-2 text-sm text-slate-300">
                            Upload your tool&apos;s logo
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            PNG, JPG up to 2MB
                        </p>
                    </div>
                </div>

                {/* Screenshots */}
                <div>
                    <label className="text-sm text-slate-300 mb-2 block">
                        Screenshots
                    </label>

                    <div className="h-44 rounded-lg border border-dashed border-white/20
                        bg-black/40 hover:border-cyan-400/60 transition flex flex-col items-center justify-center text-center
                        text-slate-400 cursor-pointer">
                        <div>
                            <Upload size={32} />
                        </div>

                        <p className="mt-2 text-sm text-slate-300">
                            Upload screenshots
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                            Multiple files accepted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
