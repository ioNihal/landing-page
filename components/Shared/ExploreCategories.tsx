import Image from "next/image";


const CATEGORIES = [
    {
        name: "Virtual Assistants",
        count: 150,
        type: "AI Companions",
        desc: "Conversational AI and virtual assistants for customer support and automation.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
    {
        name: "Developer Tools",
        count: 150,
        type: "Other AI",
        desc: "Code generation, debugging, and development assistance powered by AI.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
    {
        name: "Productivity",
        count: 150,
        type: "Productivity AI",
        desc: "Streamline workflows and boost efficiency with intelligent automation tools.",
        img: "/tools/chatgpt.webp",
        url: "/"
    },
]


export default function ExploreCategories() {
    return (
        <div className="p-10  max-w-7xl mx-auto">
            <h3 className="bg-linear-to-r from-blue-500 to-fuchsia-300 bg-clip-text text-transparent font-bold text-xl w-full text-center">Explore AI Tool Categories</h3>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {CATEGORIES.map((cat, i) => (
                    <div key={i} className=" rounded-xl border border-slate-800
                         bg-slate-950 overflow-hidden hover:border-slate-700 transition" >
                        {/* Image */}
                        <div className="relative h-40 w-full rounded-t-lg">
                            <Image
                                src={cat.img}
                                alt={`${cat.name}-thumbnail`}
                                fill
                                className="object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-4 space-y-2 p-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-white">
                                    {cat.name}
                                </h3>
                                <span className="text-xs px-2 py-0.5 rounded-sm border border-white/20 text-slate-300">
                                    {cat.count}+ Tools
                                </span>
                            </div>

                            <p className="text-xs uppercase tracking-wide bg-neutral-700 w-max px-2 py-0.5 rounded-sm">
                                {cat.type}
                            </p>

                            <p className="text-sm text-slate-400 leading-relaxed">
                                {cat.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
