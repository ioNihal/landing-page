import FAQSection from "@/components/Shared/FAQSection";
import FeaturedTools from "@/components/Shared/FeaturedTools";
import ReviewSection from "@/components/Shared/ReviewSection";
import AlternateToolsCard from "@/components/ToolDetailsPage/AlternateToolsCard";
import MainCard from "@/components/ToolDetailsPage/MainCard";
import PricingPlansCard from "@/components/ToolDetailsPage/PricingPlansCard";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const KEY_FEATURES = [
  "Advanced natural language understanding and generation",
  "Multi-language support and translation",
  "Complex reasoning and analytical capabilities",
  "Document analysis and summarization",
  "Code generation and debugging assistance",
  "Research assistance and fact-checking",
  "Creative writing and content creation"
]

//make dynamic later
export default async function ProductViewPage({ params }: PageProps<'/products/[slug]'>) {


  return (
    <main className="relative isolate bg-slate-950 text-white grow">
      {/* breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="absolute top-6 left-6 z-20"
      >
        <ol className="flex items-center gap-2 text-xs text-slate-300">
          <li>
            <Link href="/" className="hover:text-white transition" >
              Home
            </Link>
          </li>

          <li className="opacity-60">/</li>

          <Suspense fallback={<li className="text-white font-medium">
            loading...
          </li>}>
            {params.then(({ slug }) => (
              <li className="text-white font-medium">
                {slug}
              </li>
            ))}
          </Suspense>
        </ol>
      </nav>

      <div>
        {/* Main card */}
        <section className="max-w-7xl mx-auto px-4 pt-10 lg:pt-28 pb-10">
          <MainCard />
        </section>
      </div>

      <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div>
          {/* overview card */}
          <section className="rounded-xl border border-white/20 bg-slate-950 p-6">
            {/* dangerously insert html here */}
            <h2 className="text-lg font-semibold mb-3">Overview</h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Next-generation AI assistant with enhanced reasoning and creative capabilities.
              Claude 3.5 offers advanced conversational AI for text generation, analysis,
              and complex problem-solving tasks. Claude 3.5 excels at maintaining context across long conversations while providing accurate,
              helpful responses. Whether you&apos;re writing content, analyzing data, coding, or conducting research,
              Claude 3.5 adapts to your workflow and delivers high-quality results with remarkable consistency.
            </p>

            <h3 className="mt-4 font-medium mb-3">Use Cases</h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Use Cases Perfect for content creators, developers, researchers, students,
              and professionals who need an intelligent assistant for writing, coding, analysis,
              and problem-solving. Whether you&apos;re drafting emails, debugging code, or conducting research,
              Claude 3.5 adapts to your workflow.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Writing", "Coding", "Analysis", "Research"].map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-neutral-700">
                  {t}
                </span>
              ))}
            </div>
          </section>


          {/* key features card */}
          <section className="mt-6 rounded-xl border border-white/20 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold mb-4">Key Features</h2>

            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
              {KEY_FEATURES.map(f => (
                <li key={f} className="flex gap-2 items-center">
                  <Check className="text-cyan-400" size={16} />
                  {f}
                </li>
              ))}
            </ul>
          </section>


          {/* pricng plans card */}
          <section className="mt-6 rounded-xl border border-white/20 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold mb-4">Pricing Plans</h2>

            <PricingPlansCard />
          </section>


          {/* Faq section */}
          <FAQSection />

          {/* review section */}
          <ReviewSection writeReview />

          {/* Tags card */}
          <section className="mt-6 rounded-xl border border-white/20 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["Free", "New", "AI Assistant", "Popular"].map(t => (
                <span key={t}
                  className={`text-xs px-3 py-2 rounded flex items-center justify-center border
                   ${["Free", "Paid", "Premium"].includes(t)
                      ? "bg-green-200 text-green-800 border-green-600/20"
                      : " border-white/20 text-slate-300"}`}>
                  {t}
                </span>
              ))}
            </div>
          </section>


          {/* Pros and cons card */}
          <section className="mt-6 rounded-xl border border-white/20 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold mb-4">Pros & Cons</h2>

            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2 text-gray-200">
                <li className="text-green-400 text-base flex items-center gap-2"><Check /> Pros</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} /> Excellent reasoning and analytical capabilities</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} />  Maintains context across long conversations</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} />  Strong performance in coding and technical tasks</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} />  High-quality creative writing output</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} />  Safety-focused with reduced harmful outputs</li>
                <li className="flex items-center gap-2"><Check className="text-green-400" size={18} />  Supports multiple languages</li>
              </ul>

              <ul className="space-y-2 text-gray-180">
                <li className="text-red-400 text-base flex items-center gap-2"><X /> Cons</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> Limited free tier usage</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> No real-time internet access</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> May occasionally refuse harmless requests</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> Training data has a knowledge cutoff</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> No voice interaction capabilities</li>
                <li className="flex items-center gap-2"><X className="text-red-400" size={18} /> Requires subscription for heavy usage</li>
              </ul>
            </div>
          </section>

        </div>

        <aside>
          {/* featured tools */}
          <FeaturedTools />
        </aside>
      </div>


      {/* alternatice section */}
      <section className="max-w-7xl mx-auto px-4 mt-16 pb-24">
        <h2 className="text-xl font-semibold text-center mb-6 bg-linear-to-r
        from-blue-500 to-fuchsia-300 bg-clip-text text-transparent">
          AI Alternatives of Claude 3.5
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Google Gemini", "Microsoft Copilot", "Perplexity AI", "Poe by Quora", "Jasper AI", "Writesonic"].map(name => (
            <AlternateToolsCard key={name} name={name} />
          ))}
        </div>
      </section>

    </main>
  )
}
