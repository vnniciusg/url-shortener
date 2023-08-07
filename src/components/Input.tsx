"use client";

import { useShortUrlModal } from "@/shared/hooks/useShortUrl";
import { Button } from "./Button";
import axios from "axios";
import { ShortUrlModal } from "./Modal/shortUrlModal";
import { useState } from "react";
import { toast } from "react-toastify";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  label: string;
}

export const Input = ({ value, label, setValue, placeholder }: InputProps) => {
  const useShortUrl = useShortUrlModal();

  const [responseData, setResponseData] = useState("");

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`/api/short-url`, {
        url: value,
      });
      setResponseData(response.data.message.urlShorter);
      useShortUrl.onOpen();
      setValue("");
    } catch (err: any) {
      toast(err.response.data.message, { autoClose: 2000, type: "error" });
    }
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
        <Button label="Encurtar" onClick={handleSubmit} />
      </div>
      <ShortUrlModal url={responseData} />
    </div>
  );
};
