"use client";
import { Search } from "lucide-react"; // Pastikan sudah install lucide-react

export const SearchButton = () => {
  return (
    <button
      onClick={() => console.log("Open Search Modal")} // Nanti kita ganti trigger modal
      className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Search className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      <span className="hidden sm:inline">Search</span>

      {/* Keyboard Shortcut Hint */}
      <kbd className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono border rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400">
        <span>⌘</span>K
      </kbd>
    </button>
  );
};
