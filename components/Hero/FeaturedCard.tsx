import { Link, Star } from "lucide-react";
import Image from "next/image";


export default function FeaturedCard({ tool }: {
    tool: {
        name: string;
        url: string;
        img: string;
        type: string;
        tags: string[];
        description: string;
        price: number;
        rating: number;
    }
}) {
    return (
        <Link href={tool.url} className="bg-slate-950
                        p-4 border border-gray-400 rounded-2xl hover:scale-105 
                        transition-transform duration-200">
            <div className="flex gap-3">
                <Image src={tool.img} alt={tool.name} height={100} width={100} className=" w-14 h-14 object-cover" />
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">{tool.name}</h2>
                    <span className="border border-gray-600 text-base text-gray-200 p-1 px-2 rounded-lg">{tool.type}</span>
                    <ul className="flex items-center gap-2 mt-3">
                        {tool.tags.map((tag, index) => (
                            <li key={index} className={`text-sm p-2 py-1.5 rounded-lg
                                                 ${["Free", "Premium", "Paid"].includes(tag) ? "bg-green-200 text-green-700" : "bg-neutral-700"}`}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <span
                    className="inline-flex items-center gap-2 h-max
                                  bg-amber-500 p-1 px-3 rounded-lg text-sm"><Star size={14} fill="yellow" /> Featured</span>
            </div>
            <p className="text-gray-300 mb-4">{tool.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-medium">⭐ {tool.rating}</span>
                <span className="text-green-400 font-medium">${tool.price}/mo</span>
            </div>
        </Link>
    )
}
