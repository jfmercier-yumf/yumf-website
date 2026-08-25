import type { SubheadingBlock as SubheadingBlockType } from "@/types/documentation";

type SubheadingBlockProps = {
  block: SubheadingBlockType;
};

export function SubheadingBlock({ block }: SubheadingBlockProps) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-semibold leading-snug tracking-tight text-slate-950 first:mt-0 sm:text-xl">
      {block.text}
    </h3>
  );
}
