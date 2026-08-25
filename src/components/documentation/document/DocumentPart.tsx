import type { DocumentPart as DocumentPartType } from "@/types/documentation";
import { DocumentBlockRenderer } from "@/components/documentation/document/DocumentBlockRenderer";
import { DocumentSection } from "@/components/documentation/document/DocumentSection";

type DocumentPartProps = {
  part: DocumentPartType;
};

export function DocumentPart({ part }: DocumentPartProps) {
  return (
    <section id={part.id} className="scroll-mt-24 py-10 first:pt-0 md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10 md:mb-14">
          {part.number && (
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-600">
              {part.number}
            </div>
          )}

          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            {part.title}
          </h2>

          <div
            aria-hidden="true"
            className="mt-5 h-0.5 w-12 rounded-full bg-green-500"
          />
        </header>

        {part.introduction && part.introduction.length > 0 && (
          <div className="max-w-4xl space-y-6">
            {part.introduction.map((block, index) => (
              <DocumentBlockRenderer key={index} block={block} />
            ))}
          </div>
        )}

        <div className="mt-12 md:mt-16">
          {part.sections.map((section) => (
            <DocumentSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
