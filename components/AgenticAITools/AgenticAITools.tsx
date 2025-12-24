import Image from "next/image";

const tools = [
    { name: "Manus AI", logo: "/agenticAI/manusai.png", desc: "Manus is a next-generation AI agent that..." },
    { name: "AiAgent.app", logo: "/agenticAI/aiagent.png", desc: "AI agent is a web app that allows users..." },
    { name: "AgentGPT", logo: "/agenticAI/agentgpt.png", desc: "AgentGPT is a tool that enables users to..." },
    { name: "Cheat Layer Agents", logo: "/agenticAI/cheatlayeragents.png", desc: "Cheat Layers is an AI tool that users..." },
    { name: "TaskingAI", logo: "/agenticAI/taskingai.png", desc: "TaskingAI is an innovative AI app..." },
    { name: "Agency Swarm", logo: "/agenticAI/agencyswarm.png", desc: "Agency Swarm is an AI-powered framework..." },
    { name: "Teammately", logo: "/agenticAI/teammately.png", desc: "Teammately is an autonomous AI agent..." },
    { name: "Botonomous", logo: "/agenticAI/botonomousai.png", desc: "Botonomous is an AI-powered platform..." },
    { name: "Agentic", logo: "/agenticAI/agentic.png", desc: "Agentic Mission Control Blog is an AI..." },
    { name: "AgentHub", logo: "/agenticAI/agenthub.png", desc: "Gumloop is an AI automation framework..." },
];

export default function AgenticAITools() {
    return (
        <section className="bg-slate-950 text-white px-4 sm:px-6 lg:px-10 py-20 select-none">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                    Agentic AI in Action
                </h2>

                <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
                    Explore the rise of autonomous AI agents capable of executing complex tasks with minimal human intervention.
                </p>
            </div>

            {/* Scroll container */}
            <div className="relative">
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide 
                mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
                    {tools.map((tool) => (
                        <div key={tool.name} className="snap-center min-w-65 sm:min-w-70 lg:min-w-75
                                bg-white/30 border border-white/15 rounded-xl p-5 text-left
                                hover:border-white/30 transition shrink-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={tool.logo}
                                        alt={tool.name}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-base font-semibold">
                                    {tool.name}
                                </h3>
                            </div>

                            <p className="text-sm text-slate-300 leading-relaxed">
                                {tool.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
