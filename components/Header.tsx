import { ChevronDown, LogIn, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
    return (
        <header className="flex items-center justify-between px-12 py-4 bg-slate-950 text-white">
            <Image src={'/header-logo.png'} alt="header-logo-image" width={120} height={80} />

            {/* desktop nav */}
            <nav>
                <ul className="flex gap-6">
                    <li className="inline-flex gap-2">All AI Tools <ChevronDown /></li>
                    <li><Link href="/">All Tasks</Link></li>
                    <li><Link href="/">All Deals</Link></li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                <Link href={'/'} className="">
                    <LogIn />
                </Link>
                <Link href={"/"} className="flex items-center justify-center gap-2 bg-linear-to-r from-cyan-400 to-blue-600
                px-6 py-2 rounded-sm text-sm">Submit AI Tool <MoveRight /></Link>
            </div>
        </header>
    )
}
