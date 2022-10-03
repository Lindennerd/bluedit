import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { CommunityInputSchema } from "../../schemas/community.schema";
import { trpc } from "../../utils/trpc";
import { SimpleCard } from "../UI/Card/SimpleCard";
import { CommunityForm } from "./Form";

export function NewComNewmunity() {
  const { push } = useRouter();
  const createCommunityMutation = trpc.useMutation(["community.create"]);

  function saveCommunity(input: CommunityInputSchema): void {
    createCommunityMutation.mutate(input);
    if (createCommunityMutation.error) {
      toast.error(createCommunityMutation.error.message);
    } else {
      push(`/c/${input.name}`);
    }
  }

  return (
    <SimpleCard>
      <ToastContainer />
      <CommunityForm
        onSubmit={saveCommunity}
        error={createCommunityMutation.error?.message}
        loading={createCommunityMutation.isLoading}
      />
    </SimpleCard>
  );
}
