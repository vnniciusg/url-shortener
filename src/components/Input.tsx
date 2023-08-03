"use client";

import { Button } from "./Button";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  label: string;
}

export const Input = ({ value, label, setValue, placeholder }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor="search" className="text-lg font-semibold ">
        {label}
      </label>
      <div className="relative w-[300px] md:w-[600px]">
        <input
          type="search"
          id="search"
          className="block w-full p-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          required
        />
        <Button label="Encurtar" />
      </div>
    </div>
  );
};
