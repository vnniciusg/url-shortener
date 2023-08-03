"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      className="text-white absolute right-2.5 bottom-2.5 bg-black  font-medium rounded-lg text-sm px-4 py-3"
      {...props}
    >
      {label}
    </button>
  );
};
