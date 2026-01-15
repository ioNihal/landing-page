import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Tool = {
  id: number;
  name: string;
  desc: string;
  img: string;
  tags: string[];
  rating: number;
  url: string;
  toolUrl: string;
};

export default function ToolCardTopicPage({ tool }: { tool: Tool }) {
  return (
    <div className=" overflow-hidden rounded-2xl border border-white/10 hover:border-white/30
        bg-inset-950 p-4 transition flex flex-col gap-4 sm:flex-row sm:justify-between">

      <div className="flex flex-col gap-3 flex-1">

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-semibold text-white">
            {tool.name}
          </h3>

          <span className="flex items-center gap-1 text-sm text-slate-300 font-semibold">
            <Star size={14} className="text-yellow-400" fill="currentColor" />
            {tool.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed sm:max-w-[85%]">
          {tool.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tool.tags.map((t) => (
            <span key={t} className={` text-xs px-2 py-1 rounded flex items-center justify-center
                ${["Free", "Paid", "Premium"].includes(t)
                ? "bg-green-200 text-green-800"
                : "border border-white/20 text-slate-300"} `} >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* IMAGE */}
        <Link href={tool.toolUrl}>
          <div className=" relative h-32 w-full sm:h-32 sm:w-32 sm:shrink-0 overflow-hidden rounded-xl
          border border-white/10 bg-white/5">
            <Image src={tool.img} alt={`${tool.name}-preview`} fill className="object-cover opacity-80" />
          </div>
        </Link>
        <Link href={tool.url} target="_blank" className="flex justify-center items-center gap-2 rounded-md
              bg-cyan-500 px-3 py-1.5 text-sm font-medium hover:bg-cyan-600 transition">
          Visit <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}
