
import { ChevronDown, LogIn, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-950 backdrop-blur border-b border-white/10">
            <div className=" px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">

                <Image
                    src="/header-logo.png"
                    alt="AI Tools Tracker"
                    width={120}
                    height={40}
                    priority
                />

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        <li className="inline-flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                            All AI Tools <ChevronDown size={16} />
                        </li>
                        <li><Link href="/" className="hover:text-cyan-400">AI Tasks</Link></li>
                        <li><Link href="/" className="hover:text-cyan-400">AI Deals</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="Login">
                        <LogIn size={20} />
                    </Link>

                    <Link href="/" className="hidden sm:inline-flex items-center gap-2 rounded-md
                                    bg-linear-to-r from-cyan-400 to-blue-600
                                    px-4 py-2 text-sm font-medium"
                    >
                        Submit AI Tool <MoveRight size={16} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
