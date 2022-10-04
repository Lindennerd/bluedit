import { FaUserCircle } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ThemeChanger from "./ThemeChanger";
import { UserButton } from "./UserButton";
import { UserImage } from "./UserImage";

export function UserMenu() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const { data: session } = useSession();

  return (
    <Popover className="flex">
      <Popover.Button className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 outline-none">
        <UserImage width={35} height={35} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 top-12 right-3">
          <div className="p-2 border rounded-lg shadow-md w-fit bg-white dark:bg-gray-800">
            <ul>
              <li>
                <UserButton />
              </li>
              <li>
                <ThemeChanger />
              </li>
              <li>
                <button
                  className="rounded-full px-4 py-1 bg-secondary_light text-white font-semibold hover:shadow-md w-full"
                  onClick={(e) => signOut()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
