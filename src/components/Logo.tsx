"use client";

import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className={` text-xl font-bold tracking-widest text-four rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline`}
    >
      Short URL
    </div>
  );
};
