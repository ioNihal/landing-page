import { DollarSign } from "lucide-react";
import DropDownSelect from "../ui/DropDownSelect";


export default function CategoryAndPricing() {
    return (
        <div className="rounded-xl border border-white/20 bg-slate-950 p-4 md:p-6">

            <div className="flex items-center gap-2 mb-6">
                <span className="text-emerald-400"><DollarSign /></span>
                <h2 className="text-lg font-semibold text-white">
                    Category & Pricing
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pricing Model */}
                <div>
                    <label className="text-sm text-slate-300 mb-1 block">
                        Pricing Model <span className="text-red-400">*</span>
                    </label>

                    <DropDownSelect options={[
                        { value: "default", title: "Select Category" },
                        { value: "free", title: "Free" },
                        { value: "paid", title: "Paid" },
                        { value: "subscription", title: "Subscription" },
                        { value: "one-time", title: "One-time Purchase" },
                    ]} />
                </div>

                {/* Primary Category */}
                <div>
                    <label className="text-sm text-slate-300 mb-3 block">
                        Primary Category <span className="text-red-400">*</span>
                    </label>

                    <div className="space-y-3">
                        {[
                            "Free",
                            "Paid",
                            "Subscription",
                            "One-time Purchase",
                        ].map((item) => (
                            <label key={item}
                                className="flex items-center gap-3 text-sm text-slate-200 cursor-pointer">
                                <input type="radio" name="primaryCategory"
                                    className="accent-emerald-500"
                                />
                                {item}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
