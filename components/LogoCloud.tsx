import Image from "next/image";

const brands = [
    { name: "Meta", logo: "/platforms/meta.png" },
    { name: "Microsoft", logo: "/platforms/microsoft.png" },
    { name: "Stability AI", logo: "/platforms/stabilityai.png" },
    { name: "DeepMind", logo: "/platforms/deepmind.png" },
    { name: "Google", logo: "/platforms/google.png" },
    { name: "OpenAI", logo: "/platforms/openai.png" },
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

                <div className="overflow-hidden mt-20 mask-[linear-gradient(to_right,transparent_0,white_128px,white_calc(100%-128px),transparent_100%)]">
                    <div className="flex w-max animate-logo-scroll">
                        {[...brands, ...brands].map(({ name, logo }, i) => (
                            <div  key={name + i} className="relative h-14 flex items-center shrink-0 mr-10">
                                <Image
                                    src={logo}
                                    alt={name}
                                    height={56}
                                    width={160}
                                    priority
                                    loading="eager"
                                    className="object-contain opacity-80 hover:opacity-100 transition"
                                />
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
