"use client";
import { IconType } from "react-icons";

interface IconButtonProps {
  icon: IconType;
  size?: number;
  onClick: () => void;
  color?: string;
}

export const IconButton = ({
  icon: Icon,
  size,
  onClick,
  color,
}: IconButtonProps) => {
  return (
    <button onClick={onClick}>
      <Icon size={size} color={color} />
    </button>
  );
};
