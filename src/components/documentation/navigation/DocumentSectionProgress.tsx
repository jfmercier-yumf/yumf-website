import type { DocumentSection } from "@/types/documentation";
import { documentationFr } from "@/i18n/documentation/fr";
import { documentationEn } from "@/i18n/documentation/en";

type DocumentSectionProgressProps = {
  sections: DocumentSection[];
  currentSectionIndex: number;
  onSectionChange: (sectionId: string) => void;
  locale: "fr" | "en";
};

export function DocumentSectionProgress({
  sections,
  currentSectionIndex,
  onSectionChange,
  locale,
}: DocumentSectionProgressProps) {
  const strings = locale === "fr" ? documentationFr : documentationEn;

  const mainSections = sections.filter(
    (section) => !section.number?.includes("."),
  );

  const showSectionDots = mainSections.length <= 12;

  const currentSection = sections[currentSectionIndex];

  const currentMainSectionIndex = currentSection
    ? mainSections.findIndex((section) => {
        if (section.id === currentSection.id) {
          return true;
        }

        if (!currentSection.number || !section.number) {
          return false;
        }

        return currentSection.number.startsWith(`${section.number}.`);
      })
    : -1;

  const progressLabel = strings.header.sectionProgress(
    Math.max(currentMainSectionIndex, 0) + 1,
    mainSections.length,
  );

  if (mainSections.length === 0) {
    return null;
  }

  return (
    <div className="hidden min-w-0 shrink items-center gap-5 md:flex">
      <span className="shrink-0 font-medium text-slate-600">
        {progressLabel}
      </span>

      {showSectionDots && (
        <div
          className="flex min-w-0 items-center gap-3"
          aria-label={progressLabel}
        >
          {mainSections.map((section, index) => {
            const isActive = index === currentMainSectionIndex;

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSectionChange(section.id)}
                aria-label={strings.header.goToSection(
                  index + 1,
                  section.title,
                )}
                aria-current={isActive ? "step" : undefined}
                className="group flex size-5 shrink-0 items-center justify-center rounded-full"
              >
                <span
                  className={`size-2.5 rounded-full transition-colors ${
                    isActive
                      ? "bg-green-500"
                      : "bg-slate-100 group-hover:bg-green-200"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
