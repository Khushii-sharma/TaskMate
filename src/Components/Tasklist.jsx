export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };
    updateTask(updatedTask, index);
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 sm:py-12 px-4 bg-white/50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 text-sm">
          ✓
        </div>
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          No tasks yet
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Add your first task above to get started.
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-2.5">
      {tasks.map((task, index) => {
        const isHigh = task.priority?.toLowerCase() === "high";
        const isMedium = task.priority?.toLowerCase() === "medium";

        return (
          <li
            key={index}
            className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-white dark:bg-zinc-900 border transition-all duration-150 ${
              task.completed
                ? "bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-200/60 dark:border-zinc-800/60 opacity-75"
                : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
            }`}
          >
            {/* Left Content Area */}
            <div className="flex items-start sm:items-center gap-3 min-w-0 pr-2">
              {/* Circular Checkbox */}
              <button
                type="button"
                onClick={() => toggleComplete(index)}
                className={`w-5 h-5 mt-0.5 sm:mt-0 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-150 ${
                  task.completed
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 bg-white dark:bg-zinc-950"
                }`}
                aria-label={
                  task.completed ? "Mark incomplete" : "Mark complete"
                }
              >
                {task.completed && (
                  <svg
                    className="w-3 h-3 stroke-[3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>

              {/* Task Text & Metadata Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5 min-w-0">
                <span
                  className={`text-sm break-words transition-all duration-150 ${
                    task.completed
                      ? "line-through text-zinc-400 dark:text-zinc-500"
                      : "text-zinc-800 dark:text-zinc-200 font-medium"
                  }`}
                >
                  {task.text}
                </span>

                <div className="flex items-center gap-1.5 shrink-0 mt-0.5 sm:mt-0">
                  {/* Category Tag */}
                  {task.category && (
                    <span className="px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200/60 dark:border-zinc-700/60 capitalize">
                      {task.category}
                    </span>
                  )}

                  {/* Priority Tag */}
                  {task.priority && (
                    <span
                      className={`px-2 py-0.5 text-[10px] font-medium rounded capitalize ${
                        isHigh
                          ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                          : isMedium
                          ? "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                      }`}
                    >
                      {task.priority}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center justify-end gap-1 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => toggleComplete(index)}
                className={`px-3 py-1.5 sm:px-2.5 sm:py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
                  task.completed
                    ? "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    : "text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 bg-emerald-50/50 dark:bg-emerald-950/30 sm:bg-transparent"
                }`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="px-3 py-1.5 sm:px-2.5 sm:py-1 text-xs font-medium text-zinc-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-md transition-colors duration-150"
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}