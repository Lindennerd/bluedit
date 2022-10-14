import React from "react";
import { useSession } from "next-auth/react";
import { AuthenticatedNavbar } from "../UI/Navbar/AuthenticatedNavbar";
import { UnauthenticatedNavbar } from "../UI/Navbar/UnauthenticatedNavbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { status } = useSession();

  return (
    <main className="bg-slate-100 min-h-screen dark:bg-black transition-colors">
      {status === "authenticated" ? (
        <AuthenticatedNavbar />
      ) : (
        <UnauthenticatedNavbar />
      )}
      <main className="mt-12">{children}</main>
    </main>
  );
}
