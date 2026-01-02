import { EyeOff, Mail, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — FORM */}
          <div className="w-full max-w-md">
            <header className="mb-6">
              <h1 className="text-4xl font-semibold text-cyan-400">
                Log In
              </h1>
              <p className="mt-2 text-slate-400">
                Access your AI tool discovery dashboard
              </p>
            </header>

            <form
              className="
                rounded-2xl
                bg-gradient-to-b from-slate-900/80 to-slate-950/90
                border border-white/10
                backdrop-blur
                p-6
                space-y-5
              "
            >
              {/* Email */}
              <div>
                <label className="text-sm text-slate-300">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    size={16}
                  />
                  <input
                    type="email"
                    autoComplete="off"
                    placeholder="john@example.com"
                    className="
                      w-full
                      pl-10 pr-4 py-2
                      rounded-md
                      bg-slate-100
                      text-slate-900
                      text-sm
                      outline-none
                      focus:ring-2 focus:ring-cyan-400
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-slate-300">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                    size={16}
                  />
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Create a strong password"
                    className="
                      w-full
                      pl-10 pr-10 py-2
                      rounded-md
                      bg-slate-100
                      text-slate-900
                      text-sm
                      outline-none
                      focus:ring-2 focus:ring-cyan-400
                    "
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
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  href="#"
                  className="text-cyan-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex-1 h-px bg-white/10" />
                or
                <span className="flex-1 h-px bg-white/10" />
              </div>

              {/* OAuth */}
              <button className="w-full rounded-md bg-black py-2 text-sm border border-white/10">
                Sign up with Google
              </button>

              <button className="w-full rounded-md bg-black py-2 text-sm border border-white/10">
                Sign up with Facebook
              </button>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-2 py-2 rounded-md font-medium text-white
                  bg-linear-to-r from-sky-400/80 via-blue-600/80 to-purple-600/80">
                Create Account →
              </button>

              <p className="text-center text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-cyan-400 hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT — IMAGE */}
          <aside className="hidden lg:flex justify-end">
            <div className="relative w-115 h-140">
              <Image
                src="/login-image.png"
                alt="Security illustration"
                fill
                className=""
                priority
              />
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
