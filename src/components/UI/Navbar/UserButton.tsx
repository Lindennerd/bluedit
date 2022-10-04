import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export function UserButton() {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  return (
    <button
      onClick={(e) => push(`/u/${session?.user?.name}`)}
      className="rounded-full hover:bg-slate-100 py-1 px-2"
    >
      {session?.user?.name}
    </button>
  );
}
