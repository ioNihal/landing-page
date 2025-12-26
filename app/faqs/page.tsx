

import AccordionSection from "@/components/FAQSPage/AccordionSection";
import { Award, Clock3, Info, MessageCircle, Shield } from "lucide-react";
import Link from "next/link";

const TABS = ["General", "AI Tools", "Pricing & Deals", "Account"];

const FAQS: Record<string, { q: string; a: string }[]> = {
    General: [
        {
            q: "What is AI Tool Tracker?",
            a: "AI Tool Tracker is a comprehensive platform that helps professionals discover, compare, and track the best AI tools for their specific needs. We provide reviews, pricing information, deals, and detailed comparisons to help you make informed decisions about AI tools.",
        },
        {
            q: "Who created AI Tool Tracker?",
            a: "AI Tool Tracker was created by a team of AI enthusiasts and professionals who recognized the need for a centralized platform to help people navigate the rapidly growing AI tools landscape.",
        },
        {
            q: "How often is the database updated?",
            a: "Our database is updated daily with new tools, pricing changes, and deal updates. We continuously monitor the AI tools market to ensure our information is current and accurate.",
        },
        {
            q: "Can I trust the reviews on AI Tool Tracker?",
            a: "Yes, our reviews are written by experienced professionals who actually use the tools. We have a strict editorial process and don't accept payment for positive reviews. Our goal is to provide honest, unbiased information.",
        },
        {
            q: "Is AI Tool Tracker free to use?",
            a: "Yes, AI Tool Tracker is completely free to use. You can browse our database, read reviews, compare tools, and access deals without any cost. We may introduce premium features in the future, but our core service will always remain free.",
        },
    ],
    "AI Tools": [
        {
            q: "How many AI tools are in your database?",
            a: "We currently track over 30,000 AI tools across various categories including writing, image generation, code assistance, productivity, and more. We add new tools regularly as the market evolves."
        },
        {
            q: "How do I find the right AI tool for my needs?",
            a: "Use our search function with specific keywords related to your use case. You can also browse by category or use our AI-powered recommendation engine that suggests tools based on your requirements."
        },
        {
            q: "What categories of AI tools do you cover?",
            a: "We cover all major AI tool categories including: Writing & Content Creation, Image & Video Generation, Code Assistance, Data Analysis, Customer Service, Marketing Automation, Design Tools, and many more."
        },
        {
            q: "Do you provide integration guides for AI tools?",
            a: "Yes, for popular tools we provide detailed integration guides, tutorials, and best practices. These are available in our guides section and are regularly updated."
        },
        {
            q: "How do you evaluate and rate AI tools?",
            a: "Our team of AI experts evaluates tools based on multiple criteria including functionality, ease of use, pricing, customer support, integration capabilities, and user feedback. Each tool receives a detailed review and rating from 1-5 stars across different categories."
        },
    ],
    "Pricing & Deals": [
        {
            q: "Do you offer exclusive deals on AI tools? [AI Generated]",
            a: "Yes, we partner with various AI tool providers to offer exclusive discounts and deals to our users. Check our Deals section regularly for the latest offers."
        },
        {
            q: "How often do you update pricing information? [AI Generated]",
            a: "We update pricing information daily to ensure accuracy. However, prices may change frequently, so we recommend checking the tool's official website for the most current pricing."
        },
        {
            q: "Are there any hidden fees with the AI tools listed? [AI Generated]",
            a: "We strive to provide transparent pricing information. However, some tools may have additional fees for premium features or enterprise plans. Always review the pricing details on the tool's official website."
        },
        {
            q: "Can I find free AI tools on AI Tool Tracker? [AI Generated]",
            a: "Yes, we list many free AI tools as well as freemium options that offer basic features for free with the option to upgrade for more advanced capabilities."
        },
        {
            q: "How do I redeem deals found on AI Tool Tracker? [AI Generated]",
            a: "To redeem deals, simply click on the deal link provided in our Deals section. This will take you to the tool's official website where the discount will be automatically applied at checkout."
        },
    ],
    Account: [
        {
            q: "How do I create an account on AI Tool Tracker? [AI Generated]",
            a: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. You can sign up using your email address or through social media accounts like Google or LinkedIn."
        },
        {
            q: "What are the benefits of having an account? [AI Generated]",
            a: "Having an account allows you to save your favorite tools, write reviews, participate in community discussions, and receive personalized tool recommendations based on your preferences."
        },
        {
            q: "How do I reset my password? [AI Generated]",
            a: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password."
        },
        {
            q: "Can I delete my account? [AI Generated]",
            a: "Yes, you can delete your account at any time by going to your account settings and selecting the 'Delete Account' option. Please note that this action is irreversible and will remove all your data from our platform."
        },
        {
            q: "How do I update my profile information? [AI Generated]",
            a: "To update your profile information, log in to your account and navigate to the 'Profile' section in your account settings. Here, you can update your personal details, preferences, and notification settings."
        },
    ],
};

export default function FAQSPage() {


    return (
        <main className="relative isolate bg-slate-950 text-white ">
            {/* bg grid */}
            <div className="absolute inset-0 -z-10 bg-grid" />
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-500/20 to-green-400/20" />


            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                {/* badge text */}
                <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/50 to-purple-400/50 rounded-full
                     p-4 py-3 backdrop-blur-sm text-sm font-medium shadow-gradient">
                    <Info className="text-cyan-400" size={22} />
                    <span>FAQ&apos;s</span>

                </div>

                <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-semibold lg:leading-18">
                    How can we<br />
                    <span className=" bg-linear-to-r from-cyan-400 to-purple-400
                    bg-clip-text text-transparent">help you?</span>
                </h1>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Find answers to common questions about AI Tool Tracker.
                </p>
            </div>


            <div className="relative bg-slate-950 text-white py-20">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl sm:text-4xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 text-center text-slate-400">
                        Find answers organized by topic to quickly locate the information you need.
                    </p>

                    {/* FAQS sections with tabs */}
                    <AccordionSection tabs={TABS} faqs={FAQS} />

                    {/* Support Card */}
                    <section className="mt-16 rounded-2xl bg-linear-to-br from-slate-700 to-indigo-950 p-8 text-center">
                        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white/30">
                            <MessageCircle />
                        </div>

                        <h3 className="mt-4 text-3xl font-semibold">
                            Still have questions?
                        </h3>

                        <p className="mt-2 text-slate-300 mx-auto text-sm max-w-lg">
                            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help. <br />
                            Reach out and we&apos;ll get back to you as soon as possible.
                        </p>


                        <ul className="mt-6  space-y-2 text-sm text-slate-300 text-left max-w-sm mx-auto">
                            <li className="flex items-center gap-2"><Clock3 /> Response within 24 hours</li>
                            <li className="flex items-center gap-2"><Shield /> Expert AI tool specialists</li>
                            <li className="flex items-center gap-2"><Award /> Comprehensive knowledge base</li>
                        </ul>

                        <Link href={"/"} className="block w-full max-w-sm mx-auto mt-8 px-12 py-2 rounded-md
                         bg-linear-to-br from-cyan-400 to-blue-600 hover:bg-cyan-400
                         font-medium transition">
                            Contact Support
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    )
}
