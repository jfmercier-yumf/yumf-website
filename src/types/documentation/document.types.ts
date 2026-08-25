import type { DocumentBlock } from "./documentBlock.types";

export type DocumentSlug =
  | "why-yumf-exists"
  | "yumf-philosophy"
  | "yumf-foundations"
  | "where-yumf-stands"
  | "loyalty-in-transformation"
  | "terms-of-use"
  | "privacy-policy";

export type DocumentCategory = "VISION" | "FOUNDATION" | "RESEARCH" | "LEGAL";

export type DocumentLocale = "fr" | "en";

export interface DocumentDefinition {
  slug: DocumentSlug;
  category: DocumentCategory;
  versions: DocumentVersion[];
}

export type DocumentVersion = StandardDocumentVersion | LegalDocumentVersion;

export interface StandardDocumentVersion {
  type: "STANDARD";
  publishedAt?: string;
  locales: LocalizedDocuments;
}

export interface LegalDocumentVersion {
  type: "LEGAL";
  effectiveDate: string;
  publishedAt?: string;
  locales: LocalizedDocuments;
}

export interface LocalizedDocuments {
  fr: LocalizedDocument;
  en: LocalizedDocument;
}

export type LocalizedLegalDocument = LocalizedDocument & {
  version: string;
  effectiveDate: string;
  updatedAt: string | null;
};

export interface LocalizedDocumentBase {
  title: string;
  subtitle?: string;
  introductionTitle?: string;
  introduction?: DocumentBlock[];
}

export interface SectionedDocument extends LocalizedDocumentBase {
  sections: DocumentSection[];
  parts?: never;
}

export interface PartedDocument extends LocalizedDocumentBase {
  sections?: never;
  parts: DocumentPart[];
  concludingSections?: DocumentSection[];
}

export type LocalizedDocument = SectionedDocument | PartedDocument;

export interface DocumentPart {
  id: string;
  number?: string;
  title: string;
  introduction?: DocumentBlock[];
  sections: DocumentSection[];
}

export interface DocumentSection {
  id: string;
  number?: string;
  title: string;
  content?: DocumentBlock[];
  children?: DocumentSection[];
}

export interface LocalizedDocumentBase {
  title: string;
  subtitle?: string;
  introductionTitle?: string;
  introduction?: DocumentBlock[];
}

export interface DocumentSection {
  id: string;
  number?: string;
  title: string;
  content?: DocumentBlock[];
  children?: DocumentSection[];
}

export type DocumentPage =
  | {
      type: "introduction";
    }
  | {
      type: "section";
      part?: DocumentPart;
      section: DocumentSection;
    };
