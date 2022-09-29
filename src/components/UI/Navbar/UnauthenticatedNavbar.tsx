import { Search } from "./Search";
import { SignInButton } from "./SignInButon";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

export function UnauthenticatedNavbar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <div className="w-1/2">
        <Search />
      </div>
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
        className={`fixed h-screen top-12 right-0 bg-gray-200 opacity-90 ${
          toggleSidebar ? "w-screen" : "w-0"
        }`}
      >
        <div
          className={`fixed h-screen top-12 bg-white right-0 w-1/2 shadow-lg border-l transition-all ease-in-out opacity-100 ${
            toggleSidebar ? "w-1/2" : "w-0"
          }`}
        >
          <ul className="w-full">
            <li className="p-2 border-b">
              <SignInButton />
            </li>
            <li>
              <ThemeChanger />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
