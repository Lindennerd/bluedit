import { useRef } from "react";

interface InputImageProps {
  label: string;
  accept?: string;
  className?: string;
  onChange: (files: FileList | null) => void;
}

export function InputImage({
  label,
  accept,
  onChange,
  className,
}: InputImageProps) {
  let inputRef: HTMLInputElement | null;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(e) => inputRef?.click()}
      >
        {label}
      </button>
      <input
        ref={(refParam) => (inputRef = refParam)}
        type="file"
        accept={accept}
        onChange={(e) => onChange(e.target.files)}
        className="hidden"
      />
    </>
  );
}
