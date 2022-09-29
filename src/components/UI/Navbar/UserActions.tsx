import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

export function UserActions() {
  return (
    <Popover className="flex">
      <Popover.Button className="p-2 rounded-lg hover:bg-slate-100">
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
          <div className="p-2 border rounded-lg shadow-md w-fit bg-white">
            <ul>
              <li>
                <a>New Post</a>
              </li>
              <li>
                <a>New Community</a>
              </li>
            </ul>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}