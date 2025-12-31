
const FAQS = [
    {
        q: "Is Claude 3.5 free to use?",
        a: "Claude 3.5 offers a free tier with limited usage. For unlimited access and advanced features, you can upgrade to the Standard plan at $20/month."
    },
    {
        q: "How does Claude compare to other AI assistants?",
        a: "Claude 3.5 excels in reasoning, safety, and maintaining context across long conversations. It's particularly strong in coding, analysis, and creative writing tasks."
    },
    {
        q: "Can I use Claude for commercial projects?",
        a: "Yes, Claude 3.5 can be used for commercial purposes. Enterprise customers get additional security features and dedicated support."
    },
    {
        q: "What are the usage limits on the free plan?",
        a: "The free plan includes limited monthly usage. Once you reach the limit, you'll need to wait for the next billing cycle or upgrade to a paid plan."
    }
]


export default function FAQSection() {
    return (
        <section className="mt-20 border border-white/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">
                Frequently Asked Questions
            </h3>
            <ul className="space-y-3">
                {FAQS.map((item, index) => (
                    <li key={index} className="border border-white/20 p-3 rounded-lg">
                        <p className="font-semibold">{item.q}</p>
                        <p className="text-slate-300 text-sm">{item.a}</p>
                    </li>
                ))}
            </ul>

        </section>
    )
}
