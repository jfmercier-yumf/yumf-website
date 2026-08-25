type ManufacturerFinalCTAProps = {
  content: {
    title: string;
    description: string;
    cta: string;
  };
};

function HighlightClub({ text }: { text: string }) {
  const [before, after] = text.split("votre Club");

  if (after === undefined) {
    return text;
  }

  return (
    <>
      {before}
      <span className="text-[#28cc18]">votre Club</span>
      {after}
    </>
  );
}

export function ManufacturerFinalCTA({ content }: ManufacturerFinalCTAProps) {
  return (
    <section className="border-t border-black/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          <HighlightClub text={content.title} />
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-black sm:text-xl">
          {content.description}
        </p>

        <a
          href="#"
          className="mt-12 flex min-h-14 w-full max-w-md items-center justify-center rounded-full border-2 border-[#28cc18] px-8 text-center text-lg font-semibold text-[#28cc18] transition-colors hover:bg-[#28cc18] hover:text-white"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
}
