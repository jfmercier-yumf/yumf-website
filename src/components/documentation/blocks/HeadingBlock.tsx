import { createElement } from "react";
import type { HeadingBlock as HeadingBlockType } from "@/types/documentation";

type HeadingBlockProps = {
  block: HeadingBlockType;
};

const headingClassNames = {
  2: "mt-12 mb-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 first:mt-0 sm:text-3xl",
  3: "mt-8 mb-3 text-lg font-semibold leading-snug tracking-tight text-slate-950 first:mt-0 sm:text-xl",
  4: "mt-6 mb-2 text-base font-semibold leading-snug text-slate-950 first:mt-0 sm:text-lg",
} as const;

export function HeadingBlock({ block }: HeadingBlockProps) {
  const className =
    headingClassNames[block.level as keyof typeof headingClassNames] ??
    headingClassNames[3];

  return createElement(`h${block.level}`, { className }, block.text);
}
