import type { DocumentSection } from "@/types/documentation";
import { DocumentNavigationItem } from "@/components/documentation/navigation/DocumentNavigationItem";
import { documentationFr } from "@/i18n/documentation/fr";
import { documentationEn } from "@/i18n/documentation/en";

type DocumentNavigationProps = {
  sections: DocumentSection[];
  currentSectionIndex?: number;
  onSectionChange: (sectionId: string) => void;
  locale: "fr" | "en";
};

function parseSectionNumber(sectionNumber: string) {
  const match = sectionNumber.match(/^(\d+)(?:\.(\d+))?$/);

  if (!match) {
    return null;
  }

  return {
    main: Number(match[1]),
    sub: match[2] ? Number(match[2]) : 0,
  };
}

export function DocumentNavigation({
  sections,
  currentSectionIndex = 0,
  onSectionChange,
  locale,
}: DocumentNavigationProps) {
  const strings = locale === "fr" ? documentationFr : documentationEn;

  if (sections.length === 0) {
    return null;
  }

  const currentSectionId = sections[currentSectionIndex]?.id;

  const sortedSections = sections
    .map((section, originalIndex) => ({
      section,
      originalIndex,
      number: section.number ? parseSectionNumber(section.number) : null,
    }))
    .sort((a, b) => {
      if (a.number && b.number) {
        if (a.number.main !== b.number.main) {
          return a.number.main - b.number.main;
        }

        return a.number.sub - b.number.sub;
      }

      if (a.number) {
        return -1;
      }

      if (b.number) {
        return 1;
      }

      return a.originalIndex - b.originalIndex;
    })
    .map(({ section }) => section);

  return (
    <nav
      aria-label={strings.navigation.documentNavigation}
      className="sticky top-35.5 hidden w-72 shrink-0 self-start lg:block"
    >
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          {strings.navigation.label}
        </p>

        <ol className="space-y-1">
          {sortedSections.map((section) => (
            <li key={section.id}>
              <DocumentNavigationItem
                section={section}
                isActive={section.id === currentSectionId}
                onSectionChange={onSectionChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
