import type { ListBlock as ListBlockType } from "@/types/documentation";

type ListBlockProps = {
  block: ListBlockType;
};

export function ListBlock({ block }: ListBlockProps) {
  const isNumbered = block.style === "numbered";
  const List = isNumbered ? "ol" : "ul";

  return (
    <List
      className={`my-5 space-y-2.5 pl-6 text-base leading-7 text-slate-700 sm:text-[17px] sm:leading-8 ${
        isNumbered ? "list-decimal" : "list-disc"
      }`}
    >
      {block.items.map((item, index) => (
        <li
          key={`${index}-${item}`}
          className="pl-1.5 marker:font-semibold marker:text-slate-400"
        >
          {item}
        </li>
      ))}
    </List>
  );
}
