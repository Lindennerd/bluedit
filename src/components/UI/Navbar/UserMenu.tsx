import { FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export function UserMenu() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="flex">
      <button
        onClick={(e) => setToggleSidebar(!toggleSidebar)}
        className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600"
      >
        <FaUserCircle className="text-xl" />
      </button>
      <div
        className={`fixed h-screen top-12 bg-white dark:bg-black w-1/2 shadow-lg border-l transition-all ease-in-out opacity-100 ${
          toggleSidebar ? "w-1/3 right-0" : "w-0 right-[-100px]"
        }`}
      >
        <div className="p-2 flex-col gap-2">
          <div>User information</div>
          <button
            className="rounded-full px-4 py-1 bg-secondary_light text-white font-semibold hover:shadow-md w-full"
            onClick={(e) => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
