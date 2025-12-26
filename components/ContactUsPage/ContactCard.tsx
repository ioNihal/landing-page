export default function ContactCard({
    icon,
    iconbg = "bg-gray-100",
    title,
    subtitle,
    value,
    cta,
}: {
    icon: React.ReactNode;
    iconbg?: string;
    title: string;
    subtitle: string;
    value: string;
    cta: string;
}) {
    return (
        <div className="rounded-xl border border-white/15 bg-slate-950 p-6 text-center 
            flex flex-col items-center justify-between gap-2">
            <div className={` w-12 h-12 rounded-full ${iconbg} flex items-center justify-center`}>
                {icon}
            </div>

            <h3 className=" font-semibold">{title}</h3>
            <p className=" text-sm text-slate-400">{subtitle}</p>
            <p className=" text-sm font-medium">{value}</p>

            <button className=" w-full rounded-md bg-linear-to-r from-cyan-400 to-blue-600 py-2 text-sm font-medium hover:opacity-90 transition">
                {cta}
            </button>
        </div>
    );
}