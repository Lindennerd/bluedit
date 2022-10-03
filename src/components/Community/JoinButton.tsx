import { useSession } from "next-auth/react";
import { useState } from "react";
import { Community } from "../../schemas/community.schema";

interface JoinButtonProps {
  community: Community;
}

export function JoinButton({ community }: JoinButtonProps) {
  const { data: session, status } = useSession();
  const [isMember, setIsMember] = useState(
    status === "authenticated" &&
      community!.members.some((member) => member.userId === session?.user?.id)
  );
  const [isOwner, setIsOwner] = useState(
    status === "authenticated" &&
      community?.members.find(
        (member) => member.userId === session?.user?.id && member.isOwner
      ) !== undefined
  );

  if (isMember) {
    if (isOwner)
      return (
        <button
          disabled={true}
          className="rounded-full bg-gray-700 px-4 text-center py-1 flex justify-center items-center gap-1"
        >
          Owner
        </button>
      );

    return (
      <button className="rounded-full bg-red-700 px-4 text-center py-1 flex justify-center items-center gap-1">
        Leave
      </button>
    );
  } else {
    return (
      <button className="rounded-full bg-secondary_light px-4 text-center py-1 flex justify-center items-center gap-1">
        Join
      </button>
    );
  }
}
