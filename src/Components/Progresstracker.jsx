export default function Progresstracker({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  if (totalTasks === 0) return null;

  const isAllDone = completedTasks === totalTasks && totalTasks > 0;

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3.5 sm:p-4 shadow-sm space-y-2.5 sm:space-y-3">
      {/* Top Header & Percentage */}
      <div className="flex items-center justify-between text-xs font-medium">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-zinc-500 dark:text-zinc-400 text-xs">Progress</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
              isAllDone
                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/60"
                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            }`}
          >
            {completedTasks} of {totalTasks} completed
          </span>
        </div>

        <span
          className={`font-mono text-xs sm:text-sm font-semibold ${
            isAllDone
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-zinc-900 dark:text-zinc-100"
          }`}
        >
          {progress}%
        </span>
      </div>

      {/* Progress Bar Track */}
      <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-200/40 dark:border-zinc-700/40">
        <div
          className={`h-full transition-all duration-300 ease-out rounded-full ${
            isAllDone
              ? "bg-emerald-600 dark:bg-emerald-500"
              : "bg-zinc-900 dark:bg-zinc-100"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Completion Banner */}
      {isAllDone && (
        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium pt-0.5 flex items-center gap-1">
          <span>🎉</span> All tasks completed! Great job.
        </p>
      )}
    </div>
  );
}