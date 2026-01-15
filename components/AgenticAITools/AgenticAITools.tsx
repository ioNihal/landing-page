import Image from "next/image";
import Link from "next/link";

const tools = [
    { name: "Manus AI", url: "/products/manus-ai", logo: "/agenticAI/manusai.webp", desc: "Manus is a next-generation AI agent that... Manus is a next-generation AI agent that..." },
    { name: "AiAgent.app", url: "/products/aiagent-app", logo: "/agenticAI/aiagent.webp", desc: "AI agent is a web app that allows users... Manus is a next-generation AI agent that..." },
    { name: "AgentGPT", url: "/products/agentgpt", logo: "/agenticAI/agentgpt.webp", desc: "AgentGPT is a tool that enables users to... Manus is a next-generation AI agent that..." },
    { name: "Cheat Layer Agents", url: "/products/cheat-layer-agents", logo: "/agenticAI/cheatlayeragents.webp", desc: "Cheat Layers is an AI tool that users... Manus is a next-generation AI agent that..." },
    { name: "TaskingAI", url: "/products/taskingai", logo: "/agenticAI/taskingai.webp", desc: "TaskingAI is an innovative AI app.. Manus is a next-generation AI agent that... " },
    { name: "Agency Swarm", url: "/products/agency-swarm", logo: "/agenticAI/agencyswarm.webp", desc: "Agency Swarm is an AI-powered framework... Manus is a next-generation AI agent that..." },
    { name: "Teammately", url: "/products/teammately", logo: "/agenticAI/teammately.webp", desc: "Teammately is an autonomous AI agent... Manus is a next-generation AI agent that..." },
    { name: "Botonomous", url: "/products/botonomous", logo: "/agenticAI/botonomousai.webp", desc: "Botonomous is an AI-powered platform... Manus is a next-generation AI agent that..." },
    { name: "Agentic", url: "/products/agentic", logo: "/agenticAI/agentic.webp", desc: "Agentic Mission Control Blog is an AI... Manus is a next-generation AI agent that..." },
    { name: "AgentHub", url: "/products/agenthub", logo: "/agenticAI/agenthub.webp", desc: "Gumloop is an AI automation framework... Manus is a next-generation AI agent that..." },
];

export default function AgenticAITools() {
    return (
        <section className="bg-slate-950 text-white px-4 sm:px-6 lg:px-10 py-20 select-none">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                    Agentic AI in Action
                </h2>

                <p className="text-slate-300 text-base sm:text-lg max-w-4xl mx-auto">
                    Explore the rise of autonomous AI agents capable of executing complex tasks with minimal human intervention.
                </p>
            </div>

            {/* Scroll container */}
            <div className="overflow-hidden mt-20  max-w-7xl mx-auto
                mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
                <div className="flex w-max animate-logo-scroll">
                    {[...tools, ...tools].map((tool, i) => (
                        <Link href={tool.url} key={tool.name + i}>
                            <div key={tool.name + i} className=" flex gap-3 shrink-0 mr-10 max-w-xs
                        bg-gray-700/80 hover:bg-gray-700 transition backdrop-blur-sm rounded-2xl p-5 text-left hover:border-white/30">
                                <div className="w-10 h-10 rounded-md shrink-0">

                                    <Image
                                        src={tool.logo}
                                        alt={tool.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />

                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-semibold">
                                        {tool.name}
                                    </h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {tool.desc}
                                    </p>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
