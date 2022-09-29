import React from "react";
import { Navbar } from "../UI/Navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mt-12">{children}</main>
    </>
  );
}
