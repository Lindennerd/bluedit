import { useSession } from "next-auth/react";
import { AuthenticatedNavbar } from "./AuthenticatedNavbar";
import { UnauthenticatedNavbar } from "./UnauthenticatedNavbar";
import { FaReddit } from "react-icons/fa";

export function Navbar() {
  const { status } = useSession();
  return (
    <nav className="flex justify-between items-center fixed top-0 px-4 py-2 h-12 border-b w-full">
      <div className="font-semibold flex items-center gap-2 border-0 px-2 py-2 rounded-full hover:bg-slate-100 hover:border-secondary_light cursor-pointer">
        <FaReddit className="text-primary_light text-2xl" />
        <span>Bluedit</span>
      </div>
      {status === "authenticated" ? (
        <AuthenticatedNavbar />
      ) : (
        <UnauthenticatedNavbar />
      )}
    </nav>
  );
}
