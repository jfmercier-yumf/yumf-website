export type DocumentBlock =
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | DiagramBlock
  | ReferencesBlock
  | TableBlock
  | HeadingBlock
  | SubheadingBlock;

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface ListBlock {
  type: "list";
  style: "bullet" | "numbered";
  items: string[];
}

export interface CalloutBlock {
  type: "callout";
  title?: string;
  content: DocumentBlock[];
}

export type DiagramBlock =
  | {
      type: "diagram";
      variant: "flow";
      items: string[];
    }
  | {
      type: "diagram";
      variant: "convergence";
      sources: string[];
      junction: string;
      destination: string;
    }
  | {
      type: "diagram";
      variant: "split";
      sources: string[];
      junction: string;
      branches: {
        title: string;
        outcome: string;
      }[];
      destination: string;
    };

export interface ReferencesBlock {
  type: "references";
  title?: string;
  references: DocumentReference[];
}

export interface DocumentReference {
  id: string;
  number: number;
  text: string;
  url?: string;
}

export type TableBlock = {
  type: "table";
  columns: {
    key: string;
    label: string;
  }[];
  rows: Record<string, string>[];
};

export interface HeadingBlock {
  type: "heading";
  level: 3 | 4;
  text: string;
}

export interface SubheadingBlock {
  type: "subheading";
  text: string;
}
