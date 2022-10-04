import { Search } from "./Search";
import { SignInButton } from "./SignInButon";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";
import { FaReddit } from "react-icons/fa";
import { HomeButton } from "./HomeButton";
import { signOut } from "next-auth/react";

export function UnauthenticatedNavbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <nav
        className="flex justify-between items-center fixed top-0 px-4 py-2 h-12 border-b z-10 w-full
     bg-white dark:border-b-slate-600 dark:bg-gray-800"
      >
        <HomeButton />
        <div className="w-1/2">
          <Search />
        </div>
        <div>
          <div className="hidden sm:flex gap-4 items-center">
            <ThemeChanger />
            <SignInButton />
          </div>
          <div className="flex sm:hidden max-w-sm items-center">
            <button onClick={(e) => setToggleSidebar(!toggleSidebar)}>
              {toggleSidebar && <BiMenuAltRight className="text-xl" />}
              {!toggleSidebar && <BiMenu className="text-xl" />}
            </button>
          </div>
          <div
            onClick={(e) => setToggleSidebar(!toggleSidebar)}
            className={`fixed h-screen top-12 right-0 bg-gray-200 dark:bg-slate-700 opacity-90 ${
              toggleSidebar ? "w-screen" : "w-0"
            }`}
          >
            <div
              className={`fixed h-screen top-12 bg-white dark:bg-black right-0 w-1/2 shadow-lg border-l transition-all ease-in-out opacity-100 ${
                toggleSidebar ? "w-screen sm:w-1/2" : "w-0"
              }`}
            >
              <ul className="w-full">
                <li className="p-2 border-b">
                  <SignInButton />
                </li>
                <li className="p-2 border-b">
                  <ThemeChanger />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
