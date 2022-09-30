import { ReactNode } from "react";

interface SimpleCardProps {
  children: ReactNode;
}

export function SimpleCard({ children }: SimpleCardProps) {
  return (
    <div className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-800">
      {children}
    </div>
  );
}
