"use client";

import Image from "next/image";
import { useEffect } from "react";

interface ImageDisplayProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const ImageDisplay = ({ loading, setLoading }: ImageDisplayProps) => {
  useEffect(() => {
    setLoading(false);
  }, []);

  const getRandomImageUrl = () => {
    const randomValue = Math.random();
    return `https://picsum.photos/1200/800?random=${randomValue}`;
  };

  const imageUrl = getRandomImageUrl();
  return (
    <div className="hidden md:block w-[75%] max-md:w-[70vw] bg-white h-screen">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full border-t-4 border-black border-solid h-40 w-40"></div>
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt="Imagem Aleatória"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
