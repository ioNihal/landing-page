import { ChevronDown } from "lucide-react";
import ToolCard from "./ToolCard";

type Tool = {
    id: number;
    name: string;
    desc: string;
    type: string;
    img: string;
    tags: string[];
    rating: number;
    price: number;
    url: string;
}

export default function ToolGrid({ tools }: { tools: Tool[] }) {
    return (
        <>
            <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                {tools.map((tool) => (
                    <ToolCard tool={tool} key={tool.id} />
                ))}
            </div>

            <div className="mt-10 text-center">
                <button className="inline-flex  items-center gap-3 px-6 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-sm">
                    Load More Tools <ChevronDown size={16} />
                </button>
            </div>
        </>
    );
}
