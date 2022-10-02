import { FormEvent, useState } from "react";
import { CommunityInputSchema } from "../../schemas/community.schema";

const initialValues: CommunityInputSchema = {
  description: "",
  image: "",
  name: "",
};

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
  const [communityForm, setCommunityForm] =
    useState<CommunityInputSchema>(initialValues);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(communityForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <span className="text-red-600">{error}</span>}
      <div className="form-group w-full">
        <label>Name</label>
        <input
          value={communityForm.name}
          placeholder="Give a cool name for your community"
          type="text"
          onChange={(e) =>
            setCommunityForm((curr) => ({ ...curr, name: e.target.value }))
          }
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          rows={5}
          value={communityForm.description}
          placeholder="Describe what your community is about"
          onChange={(e) =>
            setCommunityForm((curr) => ({
              ...curr,
              description: e.target.value,
            }))
          }
        />
      </div>
      <button disabled={loading} type="submit">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
