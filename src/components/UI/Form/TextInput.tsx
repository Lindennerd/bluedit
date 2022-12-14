import React from "react";

interface TextInputProps {
  label?: string;
  className?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function TextInput({
  label,
  className,
  value,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <>
      {label && <label className="ml-4">{label}</label>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        className={`px-4 py-2 rounded-full outline-none focus:border-secondary_light focus:border
    bg-slate-200 dark:bg-gray-600 ${className}`}
      />
    </>
  );
}
