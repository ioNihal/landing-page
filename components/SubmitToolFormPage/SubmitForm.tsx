"use client";

import { MoveRight } from "lucide-react";
import BasicInformation from "./BasicInformation";
import CategoryAndPricing from "./CategoryAndPricing";
import ContactInformation from "./ContactInformation";
import FeaturesAndTags from "./FeaturesAndTags";
import MediaAndAssets from "./MediaAndAssets";
import SubmissionGuidelines from "./SubmissionGuidelines";
import WhyAIToolTracker from "./WhyAIToolTracker";

export default function SubmitForm() {
    return (

        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mx-auto max-w-7xl">
            <div className="space-y-6">
                {/* basic information */}
                <BasicInformation />

                {/* Category & Pricing */}
                <CategoryAndPricing />

                {/* Features & Tags */}
                <FeaturesAndTags />

                {/* Contact Information */}
                <ContactInformation />

                {/* Media & Assets */}
                <MediaAndAssets />
            </div>

            {/* right side */}
            <div>
                {/* Submission Guidelines */}
                <SubmissionGuidelines />

                {/* Why AIToolTracker Drives Growth */}
                <WhyAIToolTracker />

                {/* Submit Button */}
                <button type="submit" className="mt-6 w-full rounded-lg py-3 text-sm font-medium text-white
                        bg-linear-to-r from-cyan-400 via-blue-600 to-purple-600 hover:opacity-90 transition flex items-center
                        justify-center gap-2">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_41_3791)">
                                <path d="M9.53181 4.52123C9.63224 4.52123 9.68249 4.46263 9.7076 4.37055C9.96706 2.97266 9.95035 2.9392 11.4068 2.66295C11.5072 2.64623 11.5658 2.58763 11.5658 2.48716C11.5658 2.38673 11.5072 2.32812 11.4068 2.31137C9.9587 2.01845 10.0006 1.98495 9.7076 0.603804C9.68249 0.511732 9.63224 0.453125 9.53181 0.453125C9.43135 0.453125 9.38113 0.511732 9.35603 0.603804C9.06306 1.98495 9.11328 2.01845 7.65681 2.31137C7.56474 2.32812 7.49778 2.38673 7.49778 2.48716C7.49778 2.58763 7.56474 2.64623 7.65681 2.66295C9.11328 2.95595 9.09653 2.97266 9.35603 4.37055C9.38113 4.46263 9.43135 4.52123 9.53181 4.52123ZM5.48049 10.2802C5.63953 10.2802 5.74835 10.1797 5.76506 10.0291C6.06642 7.79409 6.14174 7.79409 8.45203 7.35048C8.60271 7.32534 8.71149 7.22491 8.71149 7.06587C8.71149 6.9152 8.60271 6.80637 8.45203 6.78127C6.14174 6.4632 6.05803 6.38784 5.76506 4.11105C5.74835 3.96041 5.63953 3.85159 5.48049 3.85159C5.32981 3.85159 5.22099 3.96041 5.20424 4.11945C4.92803 6.36273 4.81081 6.35437 2.51731 6.78127C2.36663 6.81477 2.25781 6.9152 2.25781 7.06587C2.25781 7.23327 2.36663 7.32534 2.55078 7.35048C4.82756 7.71877 4.92803 7.77737 5.20424 10.0123C5.22099 10.1797 5.32981 10.2802 5.48049 10.2802ZM11.1557 19.5463C11.3733 19.5463 11.5324 19.3873 11.5742 19.1613C12.1685 14.5742 12.8131 13.8795 17.3499 13.3772C17.5843 13.3521 17.7433 13.1763 17.7433 12.9587C17.7433 12.7411 17.5843 12.5737 17.3499 12.5402C12.8131 12.0379 12.1685 11.3432 11.5742 6.75616C11.5324 6.53016 11.3733 6.37948 11.1557 6.37948C10.9381 6.37948 10.779 6.53016 10.7456 6.75616C10.1512 11.3432 9.49835 12.0379 4.96985 12.5402C4.72713 12.5737 4.5681 12.7411 4.5681 12.9587C4.5681 13.1763 4.72713 13.3521 4.96985 13.3772C9.48995 13.9716 10.1177 14.5826 10.7456 19.1613C10.779 19.3873 10.9381 19.5463 11.1557 19.5463Z" fill="#ffffff" />
                            </g>
                            <defs>
                                <clipPath id="clip0_41_3791">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span> Submit Tool for Review <MoveRight size={16} />
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                    By submitting, you agree to our terms and privacy policy
                </p>
            </div>
        </form>

    )
}
