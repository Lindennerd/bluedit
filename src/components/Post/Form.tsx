import { TextInput } from "../UI/Form/TextInput";
import { InputImage } from "../UI/Form/InputImage";
import { FormGroup } from "../UI/Form/FormGroup";
import { Textarea } from "../UI/Form/Textarea";
import QueryCellComponent from "../Utils/QueryCell";
import { inferQueryOutput } from "../../utils/trpc";

export function PostForm() {
  return (
    <div>
      <form className="w-full flex flex-col gap-2">
        <div className="w-full">
          <QueryCellComponent
            query="community.findUsersCommunity"
            success={(
              communities: inferQueryOutput<"community.findUsersCommunity">
            ) => (
              <>
                {communities.map((community) => (
                  <div key={community.id}>{community.name}</div>
                ))}
              </>
            )}
          />

          <QueryCellComponent
            query="community.findBySlug"
            parameters={{ name: "teste" }}
            success={(community: inferQueryOutput<"community.findBySlug">) => (
              <div>{community?.name}</div>
            )}
          />
        </div>
        <FormGroup>
          <TextInput label="Title" />
        </FormGroup>
        <FormGroup>
          <Textarea label="Content" />
        </FormGroup>
        <FormGroup>
          <InputImage
            label="Add an image to your post"
            accept="*"
            onChange={(e) => {}}
            className="p-2 rounded-full bg-secondary_light"
          />
        </FormGroup>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
