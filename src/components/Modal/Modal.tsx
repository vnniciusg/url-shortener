"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  title: string;
  body: React.ReactElement;
  footer: React.ReactElement;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-2/4 lg:w-3/6 xl:w-1/4 my-6 mx-auto h-auto lg:h-auto md:h-auto">
        <div
          className={`translate duration-300 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
              <button
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                onClick={handleClose}
              >
                <IoMdClose size={18} className="text-red-600" />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            <div className="relative p-5 flex-auto">{body}</div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex flex-row items-center justify-center gap-4 w-full"></div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
