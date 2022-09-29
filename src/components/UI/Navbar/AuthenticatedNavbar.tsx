import { signOut } from "next-auth/react";

export function AuthenticatedNavbar() {
  return (
    <>
      <div>User Actions</div>
      <div>
        <button onClick={(e) => signOut()}>Logout</button>
      </div>
    </>
  );
}
