import type { ComponentPropsWithoutRef } from "react";

import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & { color?: string }
) => {
  const { className, children, color } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading text-fuchsia-500 uppercase font-extrabold tracking-wider",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className
      )}
    >
      {children}
    </button>
  );
};
