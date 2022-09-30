export function CommunityForm() {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input placeholder="Give a cool name for your community" type="text" />
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
