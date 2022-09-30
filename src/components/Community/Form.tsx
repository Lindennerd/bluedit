import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import useConvertBase64 from "../../hooks/useConverBase64";
import { CommunityInputSchema } from "../../schemas/community.schema";
import { InputImage } from "../UI/Input/InputImage";

const initialValues: CommunityInputSchema = {
  description: "",
  image: "",
  name: "",
};

export function CommunityForm() {
  const { convertBase64 } = useConvertBase64();
  const [communityForm, setCommunityForm] =
    useState<CommunityInputSchema>(initialValues);

  async function handleImage(files: FileList | null) {
    if (!files || files.length <= 0) return;
    const encoded = await convertBase64(files!.item(0)!);
    setCommunityForm((form) => {
      return { ...form, image: encoded };
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(communityForm);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-start gap-2">
        <div className="form-group w-full">
          <label>Name</label>
          <input
            placeholder="Give a cool name for your community"
            type="text"
          />
        </div>
        <div className="form-group w-full">
          <InputImage
            label="Image"
            onChange={handleImage}
            accept={"image/png, image/jpg, image/gif, image/jpeg"}
          />
          <Image src={communityForm.image} width={20} height={20} />
        </div>
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          rows={5}
          placeholder="Describe what your community is about"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
