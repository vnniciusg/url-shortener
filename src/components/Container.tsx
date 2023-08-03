"use client";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full h-screen grid place-content-center mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};
