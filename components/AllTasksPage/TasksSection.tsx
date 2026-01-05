"use client";

import { useState } from "react";
import Categories from "./Categories";
import Favorites from "./Favourites";
import TasksGrid from "./TasksGrid";
import { CATEGORIES } from "@/data/categories";
import { allTasks, contentTasks, type Task } from "@/data/tasks";

const categoriesMap: Record<string, Task[]> = {
    all: allTasks,
    content: contentTasks,
    visual: [],
    development: [],
    audio: [],
    analytics: [],
};

export default function TasksSection() {
    const [category, setCategory] = useState<string>("all");


    const selectedTasks = categoriesMap[category] ?? allTasks;

    return (
        <section className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
            {/* SIDEBAR */}
            <aside className="space-y-8">
                <Categories
                    categories={CATEGORIES}
                    active={category}
                    onChange={setCategory}
                />
                <Favorites />
            </aside>

            {/* TASKS */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold">
                        {category === "all" ?
                            "All Task" :
                            category.split("")[0].toUpperCase() + category.slice(1)}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                        {selectedTasks.length} tasks available
                    </p>
                </div>

                <TasksGrid key={category} tasks={selectedTasks} />
            </div>
        </section>
    );
}
