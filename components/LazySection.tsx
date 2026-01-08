"use client";

import { useInView } from "react-intersection-observer";

export default function LazySection({
    children,
}: {
    children: React.ReactNode;
}) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return <div ref={ref}>{inView ? children : null}</div>;
}
