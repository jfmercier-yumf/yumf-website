import type { LocalizedDocument } from "@/types/documentation";
import { DocumentBlockRenderer } from "@/components/documentation/document/DocumentBlockRenderer";

type DocumentIntroductionProps = {
  document: LocalizedDocument;
};

export function DocumentIntroduction({ document }: DocumentIntroductionProps) {
  const introduction = document.introduction ?? [];

  if (introduction.length === 0) {
    return null;
  }

  return (
    <section className="mb-14">
      <header className="mb-10">
        {document.subtitle && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-green-600">
            {document.subtitle}
          </p>
        )}

        {document.introductionTitle && (
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            {document.introductionTitle}
          </h1>
        )}
      </header>

      <div className="max-w-4xl space-y-6 text-slate-700">
        {introduction.map((block, index) => (
          <DocumentBlockRenderer key={index} block={block} />
        ))}
      </div>
    </section>
  );
}
