import ToolsList from "@/components/AIToolsPage/ToolsList";


export default function AiToolsPage() {
    return (
        <main className=" bg-slate-900 text-white grow">

            <div className="relative isolate flex flex-col items-center justify-center gap-3 py-30">
                {/* Background */}
                <div className="absolute inset-0 -z-10 bg-grid" />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-transparent via-cyan-400/20 to-transparent" />

                <h1 className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text 
                text-transparent font-bold text-5xl lg:text-6xl">All AI Tools</h1>
                <p className="text-gray-300 text-xl text-center">Browse all the available AI Tools across different pricing</p>
            </div>

            <section className="bg-slate-900 py-10">
                <ToolsList />
            </section>
        </main>
    )
}
