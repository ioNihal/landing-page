import { CircleCheck, EyeOff, Lock, Mail, MoveRight, Rocket, Star, TrendingUp, User, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function SignUpPage() {
    return (
        <section className="min-h-screen w-full flex items-stretch">
            <div className="w-full mx-auto px-6 lg:px-12">
                <div className="flex items-start justify-center gap-12 py-8">
                    {/* FORM */}
                    <div className="w-[45%]">
                        <header className="mb-8 text-center">
                            <div
                                className="w-max mx-auto bg-emerald-400/30 border border-emerald-400 text-emerald-400
                                flex items-center gap-2 py-1.5 px-4 rounded-full text-xs"
                            >
                                <Rocket size={14} /> Join the Community
                            </div>
                            <h1 className="mt-6 text-5xl font-bold text-white">
                                Create Your
                                <br />
                                <span className=" bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    AI Account
                                </span>
                            </h1>
                            <p className="mt-4 text-gray-400 text-base">
                                Join 50,000+ AI enthusiasts discovering the best tools for their projects
                            </p>
                        </header>

                        <form className="rounded-2xl bg-slate-950 p-8 space-y-6 text-white">
                            {/* name */}
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="flex-1">
                                    <label className="text-sm text-slate-300">First name</label>
                                    <div className="mt-2 relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="John"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-md bg-black 
                                            text-sm outline-none border border-white/20 focus:ring-2 focus:ring-cyan-400"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <label className="text-sm text-slate-300">Last name</label>
                                    <div className="mt-2 relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            placeholder="Doe"
                                            className="w-full pl-10 pr-4 py-2.5 rounded-md bg-black 
                                            text-sm outline-none border border-white/20 focus:ring-2 focus:ring-cyan-400"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div>
                                <label className="text-sm text-slate-300">Email address</label>
                                <div className="mt-2 relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                                    <input
                                        type="email"
                                        autoComplete="off"
                                        placeholder="john@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 rounded-md bg-black 
                                        text-sm outline-none border border-white/20 focus:ring-2 focus:ring-cyan-400"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-sm text-slate-300">Password</label>
                                <div className="mt-2 relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        placeholder="Create a strong password"
                                        className="w-full pl-10 pr-10 py-2.5 rounded-md bg-black border border-white/20
                                        text-sm outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                    <EyeOff
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                                        size={16}
                                    />
                                </div>
                            </div>

                            {/* confirm password */}
                            <div>
                                <label className="text-sm text-slate-300">Confirm Password</label>
                                <div className="mt-2 relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        placeholder="Confirm your password"
                                        className="w-full pl-10 pr-10 py-2.5 rounded-md bg-black border border-white/20
                                        text-sm outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                    <EyeOff
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                                        size={16}
                                    />
                                </div>
                            </div>

                            {/* Remember / Forgot */}
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-400">
                                    <input type="checkbox" />I agree to the
                                    <Link href={"#"} className="bg-linear-to-r from-green-300 to-sky-400 bg-clip-text text-transparent">
                                        Terms of Service
                                    </Link>
                                    and{" "}
                                    <Link href={"#"} className="bg-linear-to-r from-green-300 to-sky-400 bg-clip-text text-transparent">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                <span className="flex-1 h-px bg-white/10" />
                                or
                                <span className="flex-1 h-px bg-white/10" />
                            </div>

                            {/* OAuth */}
                            <button
                                className="w-full mx-auto rounded-md bg-black py-2.5 text-sm transition
                                border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.23321 6.83332V9.36666H11.8665C11.6495 10.1552 11.1727 10.8475 10.5133 11.3314C9.85394 11.8153 9.05058 12.0627 8.23321 12.0333C7.58388 12.0311 6.94468 11.8722 6.36993 11.5701C5.79518 11.2679 5.30188 10.8314 4.93196 10.2978C4.56203 9.76412 4.32642 9.14904 4.24516 8.50481C4.16389 7.86058 4.23936 7.20625 4.46517 6.59744C4.69097 5.98864 5.06042 5.44334 5.54213 5.00792C6.02383 4.57249 6.60354 4.2598 7.23199 4.09643C7.86044 3.93305 8.51904 3.92383 9.15181 4.06953C9.78459 4.21524 10.3728 4.51156 10.8665 4.93332L12.7332 3.06666C11.9324 2.33875 10.9663 1.81675 9.91861 1.54575C8.87087 1.27475 7.7729 1.26289 6.71955 1.5112C5.6662 1.75951 4.68914 2.26052 3.87276 2.97097C3.05638 3.68141 2.42522 4.57991 2.03381 5.58887C1.64241 6.59784 1.50251 7.68692 1.62622 8.76205C1.74992 9.83717 2.1335 10.866 2.74383 11.7597C3.35416 12.6534 4.17288 13.3851 5.12928 13.8916C6.08568 14.398 7.15099 14.6641 8.23321 14.6667C13.8332 14.6667 15.0665 9.43332 14.5332 6.83332H8.23321Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                                Sign up with Google
                            </button>

                            <button
                                className="w-full mx-auto rounded-md bg-black py-2.5 text-sm transition
                                border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15 8.04218C15 4.17655 11.8656 1.04218 8 1.04218C4.13438 1.04218 1 4.17655 1 8.04218C1 11.5359 3.55938 14.4319 6.90625 14.9575V10.0662H5.12844V8.04218H6.90625V6.49999C6.90625 4.74592 7.95156 3.77624 9.55031 3.77624C10.3162 3.77624 11.1175 3.91311 11.1175 3.91311V5.63593H10.2344C9.36531 5.63593 9.09344 6.1753 9.09344 6.72968V8.04218H11.0347L10.7247 10.0662H9.09375V14.9581C12.4406 14.4328 15 11.5369 15 8.04218Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>{" "}
                                Sign up with Facebook
                            </button>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full mt-4 py-2.5 rounded-md font-medium text-white
                                flex items-center justify-center gap-2 hover:opacity-90 cursor-pointer
                                bg-linear-to-r from-sky-400/80 via-blue-600/80 to-purple-600/80"
                            >
                                Create Account <MoveRight size={16} />
                            </button>

                            <p className="text-center text-sm text-slate-400">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium hover:underline"
                                >
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>

                    {/* IMAGE */}
                    <aside className="w-[40%] h-[90vh] sticky top-5">
                        <div className="relative w-full h-full">
                            <Image src="/signup.png" alt="Security illustration" fill className="object-cover rounded-3xl" priority />
                            <div className="absolute -top-5 -right-5 z-50 bg-amber-200 text-black
                                flex items-center gap-2 p-2 px-4 rounded-2xl text-xs">
                                <CircleCheck size={22} />
                                <div className="flex flex-col">
                                    Free Access
                                    <span className="text-gray-500">Discover 10,000+ AI tools for free</span>
                                </div>
                            </div>
                            <div className="absolute top-40 -left-5 z-50 bg-emerald-400 text-black
                                flex items-center gap-2 p-2 px-4 rounded-2xl text-xs">
                                <TrendingUp size={22} />
                                <div className="flex flex-col">
                                    Early Access
                                    <span className="text-gray-500">First to know about new AI tools</span>
                                </div>
                            </div>
                            <div className="absolute bottom-30 -right-5 z-50 bg-fuchsia-500 text-black
                                flex items-center gap-2 p-2 px-4 rounded-2xl text-xs">
                                <Star size={22} />
                                <div className="flex flex-col">
                                    Personalized
                                    <span className="text-gray-500">AI recommendations just for you</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -left-5 z-50 bg-cyan-500 text-black
                                flex items-center gap-2 p-2 px-4 rounded-2xl text-xs">
                                <Users size={22} />
                                <div className="flex flex-col">
                                    Community
                                    <span className="text-gray-500">Connect with 50K+ AI enthusiasts</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}
