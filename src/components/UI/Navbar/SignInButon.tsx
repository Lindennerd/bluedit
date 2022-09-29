import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={(e) => signIn("auth0")}
      className="rounded-full px-4 py-1 bg-secondary_light text-white font-semibold hover:shadow-md w-full"
    >
      Sign In
    </button>
  );
}
