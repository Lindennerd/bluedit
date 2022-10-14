import React from "react";

interface TextInputProps {
  className?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function TextInput({
  className,
  value,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type="text"
      className={`px-4 py-2 rounded-full outline-none focus:border-secondary_light focus:border
    bg-slate-200 dark:bg-gray-600 ${className}`}
    />
  );
}
