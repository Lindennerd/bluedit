import { TextInput } from "../UI/Form/TextInput";
import { InputImage } from "../UI/Form/InputImage";

export function PostForm() {
  return (
    <div>
      <form>
        <div className="form-group w-full">
          <label htmlFor="post-title">Title</label>
          <TextInput />
        </div>
        <div className="form-group w-full">
          <label htmlFor="post-content">Content</label>
          <textarea rows={5} placeholder="The content of your post" />
        </div>
        <div className="form-group w-full">
          <InputImage
            label="Add an image to your post"
            accept="*"
            onChange={(e) => {}}
            className="p-2 rounded-full bg-secondary_light"
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
