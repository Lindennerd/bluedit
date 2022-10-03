import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CommunityInputSchema } from "../../schemas/community.schema";
import { trpc } from "../../utils/trpc";
import { SimpleCard } from "../UI/Card/SimpleCard";
import { CommunityForm } from "./Form";

export function NewComNewmunity() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const createCommunityMutation = trpc.useMutation(["community.create"], {
    onSuccess(data) {
      push(`/c/${data.slug}`);
    },
    onError(error) {
      setError(error.message);
    },
  });

  function saveCommunity(input: CommunityInputSchema) {
    createCommunityMutation.mutate(input);
  }

  return (
    <SimpleCard>
      {error && <span className="text-red-600">{error}</span>}
      <CommunityForm
        onSubmit={saveCommunity}
        error={createCommunityMutation.error?.message}
        loading={createCommunityMutation.isLoading}
      />
    </SimpleCard>
  );
}
