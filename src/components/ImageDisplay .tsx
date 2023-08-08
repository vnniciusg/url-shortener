"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "pexels";

interface ImageDisplayProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const ImageDisplay = ({ loading, setLoading }: ImageDisplayProps) => {
  const [photos, setPhoto] = useState<string | null>(null);

  const key = process.env.NEXT_PUBLIC_PEXELS_API;

  useEffect(() => {
    const fetchRandomPhoto = async () => {
      const client = await createClient(key as string);
      try {
        const response = await client.photos.random();
        if ("src" in response && "landscape" in response.src) {
          setPhoto(response.src.landscape);
        } else {
          console.error(
            "Resposta inválida ou ausente da propriedade 'src.landscape'.",
            response
          );
        }
      } catch (err: any) {
        console.error("Erro ao buscar fotos: ", err);
      }
    };

    fetchRandomPhoto();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="hidden md:block w-[75%] max-md:w-[70vw] bg-white h-screen">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="animate-spin rounded-full border-t-4 border-black border-solid h-40 w-40"></div>
        </div>
      ) : (
        <Image
          src={photos || ""}
          alt="Imagem Aleatória"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
