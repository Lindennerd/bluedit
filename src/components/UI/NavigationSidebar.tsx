import Link from "next/link";
import Loading from "react-loading";
import { trpc } from "../../utils/trpc";

export function NavigationSidebar() {
  const {
    data: communities,
    error,
    isLoading,
  } = trpc.useQuery(["community.findUsersCommunity"]);

  if (isLoading) return <Loading />;
  if (communities)
    return (
      <div>
        {communities.map((community) => (
          <div key={community.id}>
            <Link href={`/c/${community.slug}`}>
              <a>{community.name}</a>
            </Link>
          </div>
        ))}
      </div>
    );

  return <></>;
}
