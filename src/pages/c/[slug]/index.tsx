import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import { RiGroup2Line } from "react-icons/ri";
import { JoinButton } from "../../../components/Community/JoinButton";
import { trpc } from "../../../utils/trpc";
import NotFoundPage from "../../404";

export default function CommunityPage() {
  const { status } = useSession();
  const { query, push } = useRouter();

  const communityQuery = trpc.useQuery(
    ["community.findBySlug", { name: query.slug as string }],
    {
      refetchOnWindowFocus: false,
    }
  );

  if (communityQuery.error) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <div className="w-full bg-secondary_light h-20"></div>
      <div className="bg-white dark:bg-gray-800 w-full flex flex-row justify-between gap-2 p-2">
        <div className="flex gap-4 mt-[-2rem] items-end py-2">
          <div className="rounded-full bg-secondary_light">
            <RiGroup2Line className="text-7xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {communityQuery.data?.name}
            </h1>
            <span className="text-slate-400 font-bold">
              c/{communityQuery.data?.slug}
            </span>
          </div>
        </div>
        <div>
          <JoinButton community={communityQuery.data!} />
        </div>
      </div>
      <div>Community Body</div>
    </div>
  );
}
