import type { DocumentSection as DocumentSectionType } from "@/types/documentation";
import { DocumentBlockRenderer } from "@/components/documentation/document/DocumentBlockRenderer";

type DocumentSectionProps = {
  section: DocumentSectionType;
};

export function DocumentSection({ section }: DocumentSectionProps) {
  const hasNumber = Boolean(section.number);
  const isSubsection = section.number?.includes(".") ?? false;

  return (
    <section
      id={section.id}
      className="relative scroll-mt-24 py-10 first:pt-0 md:py-14"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div
          className={
            hasNumber ? "lg:grid lg:grid-cols-[11rem_minmax(0,1fr)]" : undefined
          }
        >
          {hasNumber && (
            <div
              aria-hidden="true"
              className="pointer-events-none hidden lg:flex lg:items-start lg:justify-end lg:pr-6"
            >
              <span
                className={`select-none font-semibold leading-[0.8] tracking-[-0.08em] text-green-500/10 ${
                  isSubsection
                    ? "text-[7rem] lg:text-[8rem]"
                    : "text-[10rem] lg:text-[12rem]"
                }`}
              >
                {section.number}
              </span>
            </div>
          )}

          <div className="min-w-0">
            <header className="mb-8 md:mb-10">
              {hasNumber && (
                <div
                  className={`mb-3 font-semibold tracking-tight text-green-600 lg:hidden ${
                    isSubsection ? "text-lg" : "text-xl"
                  }`}
                >
                  {section.number}
                </div>
              )}

              <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                {section.title}
              </h2>

              <div
                aria-hidden="true"
                className="mt-5 h-0.5 w-12 rounded-full bg-green-500"
              />
            </header>
          </div>
        </div>

        <div
          className={
            hasNumber ? "lg:grid lg:grid-cols-[11rem_minmax(0,1fr)]" : undefined
          }
        >
          {hasNumber && <div aria-hidden="true" className="hidden lg:block" />}

          <div className="min-w-0">
            <div className="max-w-4xl space-y-6">
              {section.content?.map((block, index) => (
                <DocumentBlockRenderer key={index} block={block} />
              ))}
            </div>

            {section.children && section.children.length > 0 && (
              <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
                {section.children.map((child) => (
                  <DocumentSection key={child.id} section={child} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
