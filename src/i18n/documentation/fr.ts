export const documentationFr = {
  navigation: {
    label: "Documentation",
    previous: "Précédent",
    continue: "Poursuivre",
    continueTo: "Poursuivre vers",
    documentNavigation: "Navigation du document",
    pageNavigation: "Navigation entre les pages du document",
    part: "Partie",
  },

  header: {
    sectionProgress: (current: number, total: number) =>
      `Section ${current} sur ${total}`,
    goToSection: (sectionNumber: number, sectionTitle: string) =>
      `Aller à la section ${sectionNumber} : ${sectionTitle}`,
  },
} as const;
