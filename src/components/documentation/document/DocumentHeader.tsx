import type { LocalizedDocument } from "@/types/documentation";
import { PageContainer } from "@/components/layout/PageContainer";
import { DocumentSectionProgress } from "@/components/documentation/navigation/DocumentSectionProgress";

type DocumentHeaderProps = {
  document: LocalizedDocument;
  currentSectionIndex: number | null;
  locale: "fr" | "en";
  onSectionChange: (sectionId: string) => void;
};

export function DocumentHeader({
  document,
  currentSectionIndex,
  locale,
  onSectionChange,
}: DocumentHeaderProps) {
  const navigableSections = document.parts
    ? [
        ...document.parts.flatMap((part) => part.sections),
        ...(document.concludingSections ?? []),
      ]
    : (document.sections ?? []);

  return (
    <header className="sticky top-18 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <PageContainer className="flex items-center justify-between gap-6 py-6">
        <div className="flex min-w-0 items-center gap-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6 shrink-0 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 4.5c-6.8.1-11.4 2.4-13.7 6.8-1.5 2.9-.7 5.7 1.5 7.1 2.2 1.4 5.2.8 6.9-1.6 2.5-3.5 2.7-7.7 5.3-12.3Z" />
            <path d="M5 20c1.8-4.4 5-7.5 9.6-9.5" />
          </svg>

          <span className="truncate text-base font-semibold text-slate-950 sm:text-lg">
            {document.title}
          </span>
        </div>

        {currentSectionIndex !== null && navigableSections.length > 0 && (
          <div className="shrink-0">
            <DocumentSectionProgress
              sections={navigableSections}
              currentSectionIndex={currentSectionIndex}
              onSectionChange={onSectionChange}
              locale={locale}
            />
          </div>
        )}
      </PageContainer>
    </header>
  );
}
