import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiCheck } from "react-icons/bi";

export type SelectOption = {
  displayValue: string;
  value: string;
};

interface InputSelectProps {
  label: string;
  options: SelectOption[];
}

export function InputSelect({ label, options }: InputSelectProps) {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>();

  return (
    <select
      onChange={(e) =>
        setSelectedOption({
          value: e.target.value,
          displayValue: e.target.textContent!,
        })
      }
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>
  );
}
