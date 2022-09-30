interface InputImageProps {
  label: string;
  accept?: string;
  onChange: (files: FileList | null) => void;
}

export function InputImage({ label, accept, onChange }: InputImageProps) {
  return (
    <div className="input-file">
      <label
        htmlFor="image-id"
        className="px-2 py-2 rounded-full font-semibold bg-secondary_light"
      >
        {label}
        <input
          id="image-id"
          type="file"
          accept={accept}
          onChange={(e) => onChange(e.target.files)}
        />
      </label>
    </div>
  );
}
