"use client";

import type { Task } from "@/data/tasks";
import { usePagination } from "@/hooks/usePagination";
import TaskCard from "./TaskCard";

export default function TasksGrid({ tasks }: { tasks: Task[] }) {
    const {
        page,
        setPage,
        totalPages,
        paginatedItems,
    } = usePagination(tasks, 6);

    return (
        <>
            {/* GRID */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {paginatedItems.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-10 text-sm">
                    <button onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-3 py-1 text-slate-400 hover:text-white disabled:opacity-40" >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => {
                        const pageNum = i + 1;
                        return (
                            <button key={pageNum} onClick={() => setPage(pageNum)}
                                className={`px-3 py-1 rounded-md transition
                            ${page === pageNum
                                        ? "bg-white/10 text-white"
                                        : "text-slate-400 hover:text-white"
                                    }`}>
                                {pageNum}
                            </button>
                        );
                    })}

                    <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-3 py-1 text-slate-400 hover:text-white disabled:opacity-40">
                        Next
                    </button>
                </div>
            )}
        </>
    );
}
