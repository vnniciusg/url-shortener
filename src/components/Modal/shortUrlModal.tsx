"use client";

import { AiOutlineWhatsApp, AiOutlineCopy } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { FcReddit } from "react-icons/fc";

import { toast } from "react-toastify";

import { useShortUrlModal } from "@/shared/hooks/useShortUrl";

import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { IconButton } from "../iconButton";

interface shortUrlModalProps {
  url: string;
}

export const ShortUrlModal = ({ url }: shortUrlModalProps) => {
  const useShortUrl = useShortUrlModal();

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Link Copiado", {
        autoClose: 2000,
        type: "success",
      });
    } catch (err) {
      toast("Erro ao copiar a Link", {
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Ola, Compartilhe o link gerado" center />
      <h3 className="text-center font-normal text-lg">{url}</h3>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-1">
      <hr />
      <div className="text-neutral-500 text-centet mt-1 font-light flex flex-row justify-center gap-x-6 ">
        <IconButton
          icon={GrFacebook}
          size={40}
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              "_blank"
            );
          }}
          color="blue"
        />
        <IconButton
          icon={BsTwitter}
          size={40}
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?url=${url}`,
              "_blank"
            );
          }}
          color="blue"
        />
        <IconButton
          icon={FcReddit}
          size={40}
          onClick={() => {
            window.open(`https://www.reddit.com/submit?url=${url}`, "_blank");
          }}
          color="red"
        />
        <IconButton
          icon={AiOutlineWhatsApp}
          size={40}
          onClick={() => {
            window.open(`https://wa.me/?text=${url}`, "_blank");
          }}
          color="green"
        />
        <IconButton
          icon={AiOutlineCopy}
          size={40}
          onClick={handleCopyClick}
          color="black"
        />
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={useShortUrl.isOpen}
      title="Compartilhar Url"
      onClose={useShortUrl.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
