import { FormEvent, useState } from "react";
import { CommunityInputSchema } from "../../schemas/community.schema";
import { FormGroup } from "../UI/Form/FormGroup";
import { Textarea } from "../UI/Form/Textarea";
import { TextInput } from "../UI/Form/TextInput";

interface CommunityFormProps {
  error?: string | null;
  loading?: boolean;
  onSubmit: (input: CommunityInputSchema) => void;
}

export function CommunityForm({
  onSubmit,
  error,
  loading,
}: CommunityFormProps) {
  const [communityForm, setCommunityForm] = useState<CommunityInputSchema>(
    {} as CommunityInputSchema
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(communityForm);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 hover:shadow-lg"
    >
      {error && <span className="text-red-600">{error}</span>}

      <FormGroup>
        <TextInput
          label="Name"
          placeholder="Give a cool name for your community"
          value={communityForm.name}
          onChange={(e) =>
            setCommunityForm((curr) => ({ ...curr, name: e.target.value }))
          }
        />
      </FormGroup>
      <FormGroup>
        <Textarea
          label="Description"
          value={communityForm.description}
          placeholder="Describe what your community is about"
          onChange={(e) =>
            setCommunityForm((curr) => ({
              ...curr,
              description: e.target.value,
            }))
          }
        />
      </FormGroup>

      <button
        disabled={loading}
        type="submit"
        className="px-4 py-2 bg-secondary_light rounded-full text-white font-semibold"
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
