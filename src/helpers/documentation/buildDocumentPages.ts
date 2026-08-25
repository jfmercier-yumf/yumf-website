import type {
  DocumentPage,
  DocumentSection,
  LocalizedDocument,
} from "@/types/documentation";

function parseSectionNumber(sectionNumber?: string) {
  if (!sectionNumber) {
    return null;
  }

  const match = sectionNumber.match(/^(\d+)(?:\.(\d+))?$/);

  if (!match) {
    return null;
  }

  return {
    main: Number(match[1]),
    sub: match[2] ? Number(match[2]) : 0,
  };
}

function sortSections(sections: DocumentSection[]) {
  return sections
    .map((section, originalIndex) => ({
      section,
      originalIndex,
      number: parseSectionNumber(section.number),
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
}

export function buildDocumentPages(
  document: LocalizedDocument,
): DocumentPage[] {
  const pages: DocumentPage[] = [];

  if (
    document.subtitle ||
    document.introductionTitle ||
    document.introduction?.length
  ) {
    pages.push({
      type: "introduction",
    });
  }

  if (document.parts) {
    const sectionsWithParts = document.parts.flatMap((part) =>
      part.sections.map((section) => ({
        part,
        section,
      })),
    );

    const sortedSections = sortSections(
      sectionsWithParts.map(({ section }) => section),
    );

    sortedSections.forEach((section) => {
      const entry = sectionsWithParts.find(
        ({ section: candidate }) => candidate.id === section.id,
      );

      if (!entry) {
        return;
      }

      pages.push({
        type: "section",
        part: entry.part,
        section: entry.section,
      });
    });

    document.concludingSections?.forEach((section) => {
      pages.push({
        type: "section",
        section,
      });
    });

    return pages;
  }

  sortSections(document.sections).forEach((section) => {
    pages.push({
      type: "section",
      section,
    });
  });

  return pages;
}
