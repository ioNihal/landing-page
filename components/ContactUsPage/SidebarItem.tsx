

export default function SidebarItem({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <li className="flex items-start gap-3">
            <div className="mt-1 bg-neutral-400/40 p-2 rounded">{icon}</div>
            <div>
                <p className="font-medium">{title}</p>
                <p className="text-xs text-slate-400">{desc}</p>
            </div>
        </li>
    );
}