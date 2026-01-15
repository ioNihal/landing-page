import { Star } from "lucide-react";
import ShareExperienceCard from "./ShareExperienceCard";

const REVIEWS = [
    { stars: 5, content: "Handles complex prompts like a pro. Perfect for deep reasoning and debugging.", author: "Ravi M", role: "Developer" },
    { stars: 4, content: "Great for writing and content planning. Feels natural and accurate.", author: "Priya S", role: "Marketer" },
    { stars: 5, content: "Best conversational AI I've used. Smart, smooth, and human-like.", author: "Arjun D", role: "Tech User" },
]


export default function ReviewSection({ writeReview = false }: { writeReview?: boolean }) {
    return (
        <section className="mt-10 rounded-xl border border-white/10 bg-slate-950 p-6">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg">Reviews</h4>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-semibold">4.8 / 5</span>
                    <span className="text-xs text-slate-300">Overall Rating</span>
                </div>
            </div>

            {REVIEWS.map((item, index) => (
                <div key={index} className="mt-6 space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: item.stars }).map((_, i) => (
                            <Star key={i} fill="currentColor" className="text-orange-400" size={16} />
                        ))}
                    </div>
                    <blockquote className="italic">“{item.content}”</blockquote>
                    <div><span className="text-white">-&nbsp;{item.author},</span>&nbsp;<span>{item.role}</span></div>
                </div>
            ))}

            {writeReview && (
                <ShareExperienceCard />
            )}

        </section>
    )
}
