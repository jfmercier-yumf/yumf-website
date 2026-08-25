type ManufacturerApplicationComingSoonProps = {
  language: "fr" | "en";
};

export function ManufacturerApplicationComingSoon({
  language,
}: ManufacturerApplicationComingSoonProps) {
  const content =
    language === "fr"
      ? {
          title: "Les candidatures ouvriront bientôt",
          description:
            "Yumf se prépare au lancement. Le formulaire de candidature des fabricants sera disponible prochainement.",
        }
      : {
          title: "Applications are opening soon",
          description:
            "Yumf is preparing for launch. The manufacturer application form will be available soon.",
        };

  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black">
          {content.description}
        </p>
      </div>
    </section>
  );
}
