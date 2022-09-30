import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export function UserActions() {
  return (
    <Popover className="flex">
      <Popover.Button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600">
        <AiOutlinePlus className="text-2xl" />
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
              <li className="p-2 hover:dark:bg-gray-600 hover:bg-slate-100 rounded-md">
                <a>New Post</a>
              </li>
              <li className="p-2 hover:dark:bg-gray-600 hover:bg-slate-100 rounded-md">
                <Link href="community/new">
                  <a>New Community</a>
                </Link>
              </li>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
