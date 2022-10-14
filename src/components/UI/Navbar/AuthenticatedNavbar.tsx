import { HomeButton } from "./HomeButton";
import { Navigation } from "./Navigation";
import { Search } from "./Search";
import { UserActions } from "./UserActions";
import { UserMenu } from "./UserMenu";

export function AuthenticatedNavbar() {
  return (
    <>
      <nav
        className="flex justify-between items-center fixed top-0 px-4 py-2 h-12 z-10 w-full
     bg-white dark:border-b-slate-600 dark:bg-gray-800"
      >
        <div className="flex items-center gap-4">
          <Navigation />
          <HomeButton />
        </div>
        <div className="w-1/2">
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <UserActions />
          <UserMenu />
        </div>
      </nav>
    </>
  );
}
