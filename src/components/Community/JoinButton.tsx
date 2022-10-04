import { useState } from "react";
import { Community } from "../../schemas/community.schema";
import { trpc } from "../../utils/trpc";

interface JoinButtonProps {
  community: Community;
  onMutate: () => void;
}

export function JoinButton({ community, onMutate }: JoinButtonProps) {
  const [loading, setLoading] = useState(false);

  const joinMutation = trpc.useMutation(["community.join"], {
    onSuccess: async () => onMutate(),
    onMutate: async () => setLoading(true),
    onSettled: async () => setLoading(false),
  });

  const leaveMutation = trpc.useMutation(["community.leave"], {
    onSuccess: async () => onMutate(),
    onMutate: async () => setLoading(true),
    onSettled: async () => setLoading(false),
  });

  function join() {
    joinMutation.mutate({
      community: community!.id,
    });
  }

  function leave() {
    leaveMutation.mutate({
      community: community!.id,
    });
  }

  if (community?.isMember) {
    if (community.isOwner)
      return (
        <button
          disabled={true}
          className="rounded-full bg-gray-700 px-4 text-center py-1 text-white flex justify-center items-center gap-1"
        >
          Owner
        </button>
      );

    return (
      <button
        disabled={loading}
        onClick={(e) => leave()}
        className="rounded-full bg-red-700 px-4 text-center py-1 text-white flex justify-center items-center gap-1"
      >
        {loading ? "Leaving..." : "Leave"}
      </button>
    );
  } else {
    return (
      <button
        disabled={loading}
        onClick={(e) => join()}
        className="rounded-full bg-secondary_light px-4 text-center py-1 text-white flex justify-center items-center gap-1"
      >
        {loading ? "Joining..." : "Join"}
      </button>
    );
  }
}
