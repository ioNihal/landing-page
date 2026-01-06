import { Circle, CircleCheck } from "lucide-react";


export default function SubmissionGuidelines() {
    return (
        <div className="rounded-xl border border-white/20 bg-slate-950 p-4 md:p-6">

            <div className="flex items-center gap-3 mb-5">
                <span className="text-emerald-400">
                    <CircleCheck />
                </span>

                <h2 className="text-lg font-semibold text-white">
                    Submission Guidelines
                </h2>
            </div>

            {/* Guidelines List */}
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex items-center gap-3">
                    <span className="text-slate-400"><Circle size={6} fill="currentColor" /></span>
                    Ensure your tool is functional and publicly accessible
                </li>

                <li className="flex items-center gap-3">
                    <span className="text-slate-400"><Circle size={6} fill="currentColor" /></span>
                    Provide accurate and up-to-date information
                </li>

                <li className="flex items-center gap-3">
                    <span className="text-slate-400"><Circle size={6} fill="currentColor" /></span>
                    Include high-quality screenshots and assets
                </li>

                <li className="flex items-center gap-3">
                    <span className="text-slate-400"><Circle size={6} fill="currentColor" /></span>
                    Review will take 2-3 business days
                </li>
            </ul>
        </div>
    )
}
