import { CommunityInputSchema } from "../../schemas/community.schema";
import { trpc } from "../../utils/trpc";
import { SimpleCard } from "../UI/Card/SimpleCard";
import { CommunityForm } from "./Form";

export function NewComNewmunity() {
  const createCommunityMutation = trpc.useMutation(["community.create"]);

  function saveCommunity(input: CommunityInputSchema): void {
    createCommunityMutation.mutate(input);
  }

  return (
    <SimpleCard>
      <CommunityForm
        onSubmit={saveCommunity}
        error={createCommunityMutation.error?.message}
        loading={createCommunityMutation.isLoading}
      />
    </SimpleCard>
  );
}
