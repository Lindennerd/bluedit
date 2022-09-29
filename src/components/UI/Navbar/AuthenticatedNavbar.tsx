import { signOut } from "next-auth/react";
import { FaReddit } from "react-icons/fa";
import { Search } from "./Search";

export function AuthenticatedNavbar() {
  return (
    <>
      <nav
        className="flex justify-between items-center fixed top-0 px-4 py-2 h-12 border-b z-10 w-full
     bg-white dark:border-b-slate-600 dark:bg-gray-800"
      >
        <div
          className="font-semibold flex items-center gap-2 border-0 px-2 py-1 rounded-full
        hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer"
        >
          <FaReddit className="text-primary_light text-2xl dark:text-white" />
          <span>Bluedit</span>
        </div>
        <div className="w-1/2">
          <Search />
        </div>
        <div className="flex">
          <div>User Actions</div>
          <div>
            <button onClick={(e) => signOut()}>Logout</button>
          </div>
        </div>
      </nav>
    </>
  );
}
