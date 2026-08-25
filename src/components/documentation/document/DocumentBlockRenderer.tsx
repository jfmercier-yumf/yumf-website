import type { DocumentBlock } from "@/types/documentation";
import { ParagraphBlock } from "@/components/documentation/blocks/ParagraphBlock";
import { SubheadingBlock } from "@/components/documentation/blocks/SubheadingBlock";
import { HeadingBlock } from "@/components/documentation/blocks/HeadingBlock";
import { ListBlock } from "@/components/documentation/blocks/ListBlock";
import { CalloutBlock } from "@/components/documentation/blocks/CalloutBlock";
import { TableBlock } from "@/components/documentation/blocks/TableBlock";
import { DiagramBlock } from "@/components/documentation/blocks/DiagramBlock";
import { ReferencesBlock } from "@/components/documentation/blocks/ReferencesBlock";

type DocumentBlockRendererProps = {
  block: DocumentBlock;
};

export function DocumentBlockRenderer({ block }: DocumentBlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return <ParagraphBlock block={block} />;

    case "list":
      return <ListBlock block={block} />;

    case "callout":
      return <CalloutBlock block={block} />;

    case "diagram":
      return <DiagramBlock block={block} />;

    case "references":
      return <ReferencesBlock block={block} />;

    case "table":
      return <TableBlock block={block} />;

    case "heading":
      return <HeadingBlock block={block} />;

    case "subheading":
      return <SubheadingBlock block={block} />;

    default: {
      const exhaustiveCheck: never = block;
      return exhaustiveCheck;
    }
  }
}
