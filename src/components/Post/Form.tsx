import { TextInput } from "../UI/Form/TextInput";
import { InputImage } from "../UI/Form/InputImage";
import { FormGroup } from "../UI/Form/FormGroup";
import { Textarea } from "../UI/Form/Textarea";
import { trpc } from "../../utils/trpc";
import { InputSelect } from "../UI/Form/InputSelect";
import { useState } from "react";
import { CommunityInputSchema } from "../../schemas/community.schema";
import { PostInputSchema } from "../../schemas/post.schema";

export function PostForm() {
  const {
    data: communities,
    isLoading,
    error,
  } = trpc.useQuery(["community.findUsersCommunity"], {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [post, setPost] = useState<PostInputSchema>({} as PostInputSchema);

  return (
    <div>
      <form className="w-full flex flex-col gap-2">
        <FormGroup>
          {isLoading && <div>loading communities</div>}
          {communities && (
            <InputSelect
              label="Communities"
              onChange={(option) =>
                setPost((post) => ({ ...post, communityId: option.value }))
              }
              options={communities?.map((comm) => ({
                name: comm.name,
                value: comm.id,
              }))}
            />
          )}
        </FormGroup>
        <FormGroup>
          <TextInput
            label="Title"
            onChange={(e) =>
              setPost((post) => ({ ...post, title: e.target.value }))
            }
          />
        </FormGroup>
        <FormGroup>
          <Textarea
            label="Content"
            onChange={(e) =>
              setPost((post) => ({ ...post, content: e.target.value }))
            }
          />
        </FormGroup>
        <FormGroup>
          <InputImage
            label="Add an image to your post"
            accept="*"
            onChange={(e) =>
              setPost((post) => ({ ...post, image: e?.item(0)!.name }))
            }
            className="p-2 rounded-full bg-secondary_light"
          />
        </FormGroup>
        <button type="submit">Save</button>

        {JSON.stringify(post)}
      </form>
    </div>
  );
}
