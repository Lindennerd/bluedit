import { signIn } from "next-auth/react";

export function UnauthenticatedNavbar() {
  return (
    <>
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="outline-secondary_light outline-offset-0 border py-1 px-4 rounded-full w-full hover:border-secondary_light"
        />
      </div>
      <div>
        <button className="border rounded-full px-4 py-1 bg-secondary_light text-white font-semibold hover:shadow-md">
          Sign In
        </button>
      </div>
    </>
  );
}
