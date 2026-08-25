export const documentationEn = {
  navigation: {
    label: "Documentation",
    previous: "Previous",
    continue: "Continue",
    continueTo: "Continue to",
    documentNavigation: "Document navigation",
    pageNavigation: "Navigation between document pages",
    part: "Part",
  },

  header: {
    sectionProgress: (current: number, total: number) =>
      `Section ${current} of ${total}`,
    goToSection: (sectionNumber: number, sectionTitle: string) =>
      `Go to section ${sectionNumber}: ${sectionTitle}`,
  },
} as const;
