
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-slate-900 relative isolate flex items-center justify-center">
            {/* bg grid */}
            {/* <div className="absolute inset-0 -z-10 bg-grid" /> */}
            <div className="absolute inset-0 -z-10 bg-linear-to-tr from-slate-950/20 to-green-600/30" />

            {children}
        </main>
    );
}
