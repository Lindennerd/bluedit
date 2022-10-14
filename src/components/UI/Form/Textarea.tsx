import React from "react";

interface TextareaProps {
  label?: string;
  className?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: any) => void;
}

export function Textarea({
  label,
  className,
  value,
  placeholder,
  onChange,
}: TextareaProps) {
  return (
    <>
      {label && <label className="ml-4">{label}</label>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 rounded-md outline-none focus:border-secondary_light focus:border
        bg-slate-200 dark:bg-gray-600 ${className}`}
      />
    </>
  );
}
