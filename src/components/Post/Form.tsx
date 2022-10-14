import { TextInput } from "../UI/Form/TextInput";
import { InputImage } from "../UI/Form/InputImage";
import { trpc } from "../../utils/trpc";
import { FormGroup } from "../UI/Form/FormGroup";
import { Textarea } from "../UI/Form/Textarea";

export function PostForm() {
  const { data: communities } = trpc.useQuery(
    ["community.findUsersCommunity"],
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      <form className="w-full flex flex-col gap-2">
        {/* <div className="w-full">
          {communities && (
            <InputSelect
              label="Where to post"
              options={communities.map((community) => ({
                displayValue: community.name,
                value: community.id,
              }))}
            />
          )}
        </div> */}
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
