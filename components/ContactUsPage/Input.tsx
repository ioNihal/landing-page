export default function Input({ label, placeholder }: { label: string; placeholder: string }) {
    return (
        <div>
            <label className="text-sm text-slate-300">{label}</label>
            <input
                placeholder={placeholder}
                className="mt-1 w-full rounded-md bg-black/60 border border-white/15 px-4 py-3 text-sm outline-none focus:border-cyan-400"
            />
        </div>
    );
}