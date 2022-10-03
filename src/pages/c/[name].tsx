import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Loading from "react-loading";
import { Community } from "../../schemas/community.schema";
import { trpc } from "../../utils/trpc";

export default function CommunityPage() {
  const { query } = useRouter();
  const [community, setCommunity] = useState<Community>();

  const communityQuery = trpc.useQuery(
    ["community.findByName", { name: query.name as string }],
    { refetchOnWindowFocus: false }
  );

  if (communityQuery.isLoading) return <Loading />;

  return <div>Community {communityQuery.data?.name}</div>;
}
