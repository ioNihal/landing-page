"use client";

import { useState, useMemo } from "react";

export function usePagination<T>(items: T[], itemsPerPage = 6) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }, [page, items, itemsPerPage]);

    return {
        page,
        setPage,
        totalPages,
        paginatedItems,
    };
}
