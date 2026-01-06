"use client";

import {
    ChevronDown,
    LogIn,
    MoveRight,
    Menu,
    X,
    Home,
    Bot,
    CheckSquare,
    Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);

    const closeDrawer = () => {
        setOpen(false);
        setToolsOpen(false);
    };


    return (
        <>
            <header className="sticky top-0 z-50 bg-slate-950 backdrop-blur border-b border-white/10">
                <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
                    <Link href={"/"}>
                        <Image
                            src="/header-logo.png"
                            alt="AI Tools Tracker"
                            width={120}
                            height={40}
                            priority
                        />
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm font-medium">
                            <li className="relative inline-flex items-center gap-1 cursor-pointer hover:text-cyan-400 group">
                                <span className="inline-flex items-center gap-1">
                                    All AI Tools <ChevronDown size={16} />
                                </span>

                                <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-slate-800 shadow-lg
                                    opacity-0 invisible translate-y-1
                                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                                    transition-all duration-200 z-50">
                                    <ul className="p-1.5">
                                        {["Free", "Freemium", "Free Trial"].map(i => (
                                            <li key={i}>
                                                <Link href="/" className="block px-4 py-2 text-sm hover:bg-slate-700 rounded-sm">
                                                    {i}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            <li><Link href="/all-tasks" className="hover:text-cyan-400">AI Tasks</Link></li>
                            <li><Link href="/all-deals" className="hover:text-cyan-400">AI Deals</Link></li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link href="/" aria-label="Login" className="hidden sm:block">
                            <LogIn size={20} />
                        </Link>

                        <Link href="/submit-tool"
                            className="hidden sm:inline-flex items-center gap-2 rounded-md
                            bg-linear-to-r from-cyan-400 to-blue-600
                            px-4 py-2 text-sm font-medium"
                        >
                            Submit AI Tool <MoveRight size={16} />
                        </Link>

                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden"
                            aria-label="Open menu"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Mobile Drawer */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
                bg-linear-to-b from-slate-900 to-slate-950
                transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col h-full text-white">
                    <div className="flex justify-end">
                        <button onClick={() => setOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="mt-10 space-y-6 text-lg">
                        <Link href="/" onClick={closeDrawer} className="flex items-center gap-4">
                            <Home /> Home
                        </Link>

                        <div>
                            <button onClick={() => setToolsOpen(v => !v)}
                                className="flex items-center justify-between w-full">
                                <span className="flex items-center gap-4">
                                    <Bot /> All AI Tools
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`transition ${toolsOpen ? "rotate-180" : ""}`} />
                            </button>

                            {toolsOpen && (
                                <div className="mt-4 ml-6 space-y-3 text-base text-slate-300">
                                    <Link href="/" onClick={closeDrawer} className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                        Free
                                    </Link>
                                    <Link href="/" onClick={closeDrawer} className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                        Freemium
                                    </Link>
                                    <Link href="/" onClick={closeDrawer} className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                                        Free Trial
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/all-tasks" onClick={closeDrawer} className="flex items-center gap-4">
                            <CheckSquare /> AI Tasks
                        </Link>

                        <Link href="/all-deals" onClick={closeDrawer} className="flex items-center gap-4">
                            <Tag /> AI Deals
                        </Link>
                    </nav>

                    <div className="mt-auto space-y-4">
                        <Link href="/submit-tool" onClick={closeDrawer}
                            className="flex items-center justify-center gap-2 w-full rounded-md
                            bg-linear-to-r from-cyan-400 to-blue-600
                            px-4 py-3 font-medium">
                            Submit AI Tool <MoveRight size={16} />
                        </Link>

                        <Link href="/login" onClick={closeDrawer}
                            className="flex items-center justify-center gap-2 text-slate-300 bg-white/10
                            px-4 py-3 font-medium rounded-md hover:bg-white/20 transition w-full">
                            Login<LogIn size={18} />
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
