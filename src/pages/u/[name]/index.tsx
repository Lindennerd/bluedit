import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { UserImage } from "../../../components/UI/Navbar/UserImage";

export default function UserPage() {
  const { query } = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className="bg-secondary_light flex gap-2 items-center p-2">
        <UserImage height={100} width={100} />
        <div className="font-semibold space-y-2">
          <p className="rounded-full px-2 bg-white">{session?.user?.name}</p>
          <p className="rounded-full px-2 bg-white">{session?.user?.email}</p>
          <p className="rounded-full px-2 bg-white">{`u/${session?.user?.name}`}</p>
        </div>
      </div>
    </>
  );
}
