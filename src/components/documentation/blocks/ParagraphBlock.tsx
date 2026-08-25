import type { ReactNode } from "react";
import type { ParagraphBlock as ParagraphBlockType } from "@/types/documentation";

type ParagraphBlockProps = {
  block: ParagraphBlockType;
};

const referencePattern = /\[\^(\d+)\]/g;

function renderTextWithReferences(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(referencePattern)) {
    const matchIndex = match.index;
    const referenceNumber = match[1];

    if (matchIndex > lastIndex) {
      nodes.push(text.slice(lastIndex, matchIndex));
    }

    nodes.push(
      <sup key={`${matchIndex}-${referenceNumber}`} className="ml-0.5">
        <a
          href={`#reference-${referenceNumber}`}
          className="font-medium text-green-600 no-underline transition-colors hover:text-green-700"
          aria-label={`Référence ${referenceNumber}`}
        >
          [{referenceNumber}]
        </a>
      </sup>,
    );

    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function ParagraphBlock({ block }: ParagraphBlockProps) {
  return <p>{renderTextWithReferences(block.text)}</p>;
}
