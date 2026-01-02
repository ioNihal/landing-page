import ContactCard from "@/components/ContactUsPage/ContactCard";
import Input from "@/components/ContactUsPage/Input";
import SidebarItem from "@/components/ContactUsPage/SidebarItem";
import {
    Mail,
    MessageCircle,
    Phone,
    User,
    Briefcase,
    Send,
    Newspaper,
    Bug,
    MessageSquare,
    MapPin,
    Clock,
    ChevronRight,
    Globe,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="relative bg-slate-950 text-white">


            {/* Breadcrumb */}
            <div className="absolute top-10 left-10 hidden lg:inline-flex items-center text-xs ">
                <Link href="/">Home</Link>
                <ChevronRight size={14} />
                <span>Contact Us</span>
            </div>


            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-semibold">
                    Get in touch with us
                </h1>

                <p className="mt-4 max-w-3xl mx-auto text-slate-300">
                    We&apos;re here to help! Whether you have questions about AI tools,
                    Need to report and issue, Want to submit a new tool?
                    Our expert team is here to help you navigate the world of artificial intelligence.
                </p>
            </section>

            {/* Contact Methods */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
                <ContactCard
                    icon={<Mail className="text-indigo-600" />}
                    iconbg="bg-indigo-300"
                    title="Email Us"
                    subtitle="Send us a detailed message and we&apos;ll respond within 24 hours"
                    value="hello@aitooltracker.com"
                    cta="Send Email"
                />

                <ContactCard
                    icon={<MessageCircle className="text-emerald-600" />}
                    iconbg="bg-green-200"
                    title="Live Chat"
                    subtitle="Get instant help during business hours"
                    value="Available 9 AM - 6 PM IST"
                    cta="Start Chat"
                />

                <ContactCard
                    icon={<Phone className="text-purple-600" />}
                    iconbg="bg-purple-300"
                    title="Call Us"
                    subtitle="Speak directly with our support team"
                    value="+1 (555) 123-4567"
                    cta="Call Now"
                />
            </section>


            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-10 lg:grid-cols-[1fr_380px]">
                {/* Form */}
                <div>
                    <h2 className="text-2xl font-semibold">Send us a message</h2>
                    <p className="mt-2 text-slate-400">
                        Fill out the form below and we&apos;ll get back to you within
                        24 hours.
                    </p>

                    <form className="mt-8 space-y-5">
                        <div className="flex flex-col lg:flex-row *:flex-1 gap-5">
                            <Input label="Full Name" placeholder="Enter your full name" />
                            <Input label="Email Address" placeholder="Enter your email address" />
                        </div>
                        <Input label="Inquiry Type" placeholder="Enter inquiry type" />
                        <Input label="Subject" placeholder="Enter message subject" />

                        <div>
                            <label className="text-sm text-slate-300">Message</label>
                            <textarea rows={5} placeholder="Tell us how we can help you…"
                                className="mt-1 w-full rounded-md bg-black/60 border border-white/15 px-4 py-3 
                                text-sm outline-none focus:border-cyan-400" />
                        </div>

                        <button type="submit"
                            className="w-full rounded-md bg-linear-to-r from-cyan-400 to-blue-600 py-3 
                            text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition" >
                            <Send size={16} />
                            Send Message
                        </button>
                    </form>
                </div>


                <aside className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold">How can we help?</h3>

                        <ul className="mt-4 space-y-3 text-sm text-slate-300">
                            <SidebarItem icon={<User />} title="General Inquiry" desc="Get instant help during business hours" />
                            <SidebarItem icon={<Briefcase />} title="Partnership" desc="Business partnerships & collections" />
                            <SidebarItem icon={<Send />} title="Tool Submission" desc="Submit your AI tool" />
                            <SidebarItem icon={<Newspaper />} title="Press & Media" desc="Press inquiries & media requests" />
                            <SidebarItem icon={<Bug />} title="Technical Support" desc="Technical issues & bug reports" />
                            <SidebarItem icon={<MessageSquare />} title="Feedback" desc="Share your thoughts & suggestions" />
                        </ul>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-slate-950 p-5 text-sm">
                        <h4 className="font-semibold mb-3 text-base">Contact Information</h4>

                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-center gap-2">
                                <MapPin size={24} />
                                <div className="flex flex-col">
                                    <span className=" text-slate-50 text-base font-semibold">Office</span>
                                    <span>Delhi, India</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={24} />
                                <div className="flex flex-col">
                                    <span className=" text-slate-50 text-base font-semibold">Business Hours</span>
                                    <span>Mon - Fri, 9 AM - 6 PM IST</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <Globe size={24} />
                                <div className="flex flex-col">
                                    <span className=" text-slate-50 text-base font-semibold">Response Time</span>
                                    <span> Response within 24 hours</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        </main>
    );
}







