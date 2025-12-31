"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export default function ShareExperienceCard() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");

    return (
        <div className="mt-10 rounded-xl border border-white/20 bg-slate-950 py-3 px-4 lg:py-5 lg:px-6">
            <h3 className="text-2xl font-semibold">
                Share Your Experience
            </h3>

            <p className="mt-2 text-slate-400">
                Have you used Claude 3.5? Rate your experience:
            </p>

            {/* Stars */}
            <div className="mt-4 flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(0)}
                        aria-label={`Rate ${value} stars`}
                        className="transition"
                    >
                        <Star
                            size={24}
                            className={`transition-colors
                                ${(hover || rating) >= value
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-500"
                                }`}
                        />
                    </button>
                ))}
            </div>

            {/* Review Input */}
            <textarea
                rows={4}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Add a short review..."
                className="mt-6 w-full rounded-xl max-h-72  bg-black/70 border border-white/15
                px-5 py-4 text-sm text-white  placeholder:text-slate-500  
                outline-none focus:border-cyan-400 transition" />

            {/* Submit */}
            <button
                disabled={rating === 0}
                className="mt-6 inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-medium
                bg-linear-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition
                disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer" >
                Submit My Rating
            </button>
        </div>
    );
}
