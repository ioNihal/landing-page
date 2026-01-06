import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-[#0f1623] text-slate-300">
            <div className="2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* logo */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/header-logo.png"
                                alt="AI Tool Tracker"
                                width={160}
                                height={100}
                            />

                        </div>

                        <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                            Your ultimate destination for discovering, comparing, and
                            staying updated with the latest AI tools and technologies.
                            Join thousands of professionals making smarter AI tool decisions.
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <Link href="#" className="opacity-70 hover:opacity-100 transition">
                                <Image src={"/twitter.svg"} alt="twitter-icon-footer" width={18} height={18} />
                            </Link>
                            <Link href="#" className="opacity-70 hover:opacity-100 transition">
                                <Image src={"/linkedin.svg"} alt="linkedin-icon-footer" width={18} height={18} />
                            </Link>
                            <Link href="#" className="hover:text-white transition">
                                <Mail size={18} />
                            </Link>
                            <Link href="#" className="opacity-70 hover:opacity-100 transition">
                                <Image src={"/github.svg"} alt="github-icon-footer" width={18} height={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition">Browse Tools</Link></li>
                            <li><Link href="/tools-category" className="hover:text-white transition">Categories</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Trending</Link></li>
                            <li><Link href="#" className="hover:text-white transition">New Releases</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Compare Tools</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                            <li><Link href="/contact-us" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/submit-tool" className="hover:text-white transition">Submit Tool</Link></li>
                            <li><Link href="#" className="hover:text-white transition">API Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Help Centre</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Community</Link></li>
                            <li><Link href="#" className="hover:text-white transition">Status</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6
                    flex flex-col sm:flex-row items-center justify-between gap-4
                    text-xs text-slate-400">

                    <span>
                        © 2025 AIToolTracker. All rights reserved.
                    </span>

                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
