import type { LucideIcon } from "lucide-react";

export default function Categories({
    categories,
    active,
    onChange,
}: {
    categories: {
        Icon: LucideIcon;
        title: string;
        value: string;
    }[];
    active: string;
    onChange: (value: string) => void;
}) {
    return (
        <section>
            <h3 className="text-sm font-semibold text-slate-300 mb-4">
                Categories
            </h3>

            <ul className="space-y-2 text-sm">
                <li
                    onClick={() => onChange("all")}
                    className={`px-3 py-2 rounded-md cursor-pointer flex items-center gap-2
            ${active === "all"
                            ? "bg-white/20 text-white"
                            : "text-slate-300 hover:bg-white/10"
                        }`}
                >
                    All Tasks
                </li>

                {categories.map((item) => (
                    <li
                        key={item.value}
                        onClick={() => onChange(item.value)}
                        className={`px-3 py-2 rounded-md cursor-pointer flex items-center gap-2
              ${active === item.value
                                ? "bg-white/20 text-white"
                                : "text-slate-300 hover:bg-white/10"
                            }`}
                    >
                        <item.Icon size={18} />
                        {item.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}
