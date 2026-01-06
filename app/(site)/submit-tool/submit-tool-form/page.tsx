import SubmitForm from "@/components/SubmitToolFormPage/SubmitForm";
import { ChevronRight, FileText, Send } from "lucide-react";
import Link from "next/link";


export default function SubmitToolFormPage() {
  return (
    <main className="relative isolate bg-slate-950 text-white">
      {/* Breadcrumb */}
      <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs">
        <Link href="/">Home</Link>
        <ChevronRight size={14} />
        <Link href={'/submit-tool'}>Submit AI Tools</Link>
        <ChevronRight size={14} />
        <span>Submit AI Tool Form</span>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400/50 to-purple-400/50 
                     px-4 py-2 text-sm font-medium backdrop-blur">
          <FileText size={14} className="text-cyan-400" />
          Tool Submission Form
          <Send size={14} className="text-purple-400" />
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Submit Your
          <span className="block bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Tool
          </span>

        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-slate-300">
          Fill out the form below to submit your AI tool to our platform.
        </p>
        <p className="mt-2 max-w-3xl mx-auto bg-linear-to-r from-green-300 to-sky-400
                   bg-clip-text text-transparent font-semibold">
          All fields marked with * are required.
        </p>
      </section>

      <div className="bg-slate-950 px-4 sm:px-6 lg:px-8 py-10">
        <SubmitForm />
      </div>
    </main>
  )
}
