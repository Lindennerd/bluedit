import { useState } from "react";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";

export function Navigation() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <button
        onClick={(e) => setToggleSidebar(!toggleSidebar)}
        className="p-2 rounded-md hover:bg-slate-100"
      >
        {toggleSidebar && <AiOutlineClose className="text-xl" />}
        {!toggleSidebar && <AiFillHome className="text-xl" />}
      </button>
      <div
        className={`fixed h-screen top-12 bg-white dark:bg-black w-1/2 shadow-lg border-l transition-all ease-in-out opacity-100 ${
          toggleSidebar ? "w-1/3 left-0" : "w-0 left-[-100px]"
        }`}
      >
        <div>Sidebar</div>
      </div>
    </>
  );
}

//
