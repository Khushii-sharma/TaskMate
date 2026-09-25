import { useState } from "react";

export default function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTask({ text: task.trim(), priority, category, completed: false });
    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 sm:p-5 shadow-sm space-y-3.5 sm:space-y-4"
    >
      {/* Main Input Row */}
      <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-900 dark:text-zinc-100 text-sm placeholder-zinc-400 dark:placeholder-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition duration-150"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-900/20 active:scale-[0.98] shrink-0"
        >
          <span>Add Task</span>
        </button>
      </div>

      {/* Select Controls & Live Preview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
          {/* Priority Select */}
          <div className="relative w-full sm:w-auto">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-md pl-3 pr-7 py-2 sm:py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-[10px]">
              ▼
            </span>
          </div>

          {/* Category Select */}
          <div className="relative w-full sm:w-auto">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-md pl-3 pr-7 py-2 sm:py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
            >
              <option value="General">General</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-[10px]">
              ▼
            </span>
          </div>
        </div>

        {/* Dynamic Badge Preview */}
        {task.trim() && (
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 animate-fade-in self-start sm:self-auto">
            <span className="text-zinc-400 dark:text-zinc-500">Preview:</span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/60 dark:border-zinc-700/60 text-[11px]">
              {category}
            </span>
            <span
              className={`px-2 py-0.5 rounded font-medium border text-[11px] ${
                priority === "High"
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100"
                  : priority === "Medium"
                  ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-900/60"
                  : "bg-zinc-50 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
              }`}
            >
              {priority}
            </span>
          </div>
        )}
      </div>
    </form>
  );
}