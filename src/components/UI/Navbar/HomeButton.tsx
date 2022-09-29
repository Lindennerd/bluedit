import { FaReddit } from "react-icons/fa";

export function HomeButton() {
  return (
    <div
      className="font-semibold flex items-center gap-2 border-0 px-2 py-1 rounded-full
        hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer"
    >
      <FaReddit className="text-primary_light text-2xl dark:text-white" />
      <span>Bluedit</span>
    </div>
  );
}
