import Image from "next/image";

const brands = [
    { name: "Meta", logo: "/platforms/meta.webp" },
    { name: "Microsoft", logo: "/platforms/microsoft.webp" },
    { name: "Stability AI", logo: "/platforms/stabilityai.webp" },
    { name: "DeepMind", logo: "/platforms/deepmind.webp" },
    { name: "Google", logo: "/platforms/google.webp" },
    { name: "OpenAI", logo: "/platforms/openai.webp" },
];

export default function LogoCloud() {
    return (
        <section className="bg-slate-950 text-white px-4 sm:px-6 lg:px-10 py-20 overflow-hidden">
            <div className=" mx-auto">
                <h2 className="mb-12 text-center text-3xl sm:text-4xl font-semibold
                    bg-linear-to-r from-amber-400 to-purple-600
                    bg-clip-text text-transparent">
                    Popular Platforms
                </h2>

                <div className="relative w-full overflow-hidden mt-20
                 mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
                    <div className="flex w-max animate-logo-scroll gap-16">
                        {[...brands, ...brands].map(({ name, logo }, i) => (
                            <div
                                key={name + i}
                                className="flex items-center justify-center min-w-35"
                            >
                                <Image
                                    src={logo}
                                    alt={name}
                                    width={160}
                                    height={80}
                                    loading="eager"
                                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
