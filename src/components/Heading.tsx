"use client";

import React from "react";

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
  uppercase?: boolean;
  big?: boolean;
}

export const Heading = ({
  title,
  subtitle,
  center,
  uppercase,
  big,
}: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div
        className={`${big ? "text-4xl" : "text-2xl"} font-bold ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {title}
      </div>
      <div
        className={`${big ? "text-2xl" : ""}font-light text-neutral-500 mt-2`}
      >
        {subtitle}
      </div>
    </div>
  );
};
