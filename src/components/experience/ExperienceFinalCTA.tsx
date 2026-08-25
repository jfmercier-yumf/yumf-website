import Link from "next/link";

type ExperienceFinalCTAProps = {
  content: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  language: string;
};

export function ExperienceFinalCTA({
  content,
  language,
}: ExperienceFinalCTAProps) {
  return (
    <section className="border-t border-black/10 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="max-w-4xl text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
          {content.title}
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-black sm:text-xl lg:mt-12">
          {content.description}
        </p>

        <div className="mt-12 flex w-full flex-col items-center gap-6 sm:mt-14">
          <Link
            href={`/${language}/download`}
            className="inline-flex min-h-14 w-full max-w-72 items-center justify-center rounded-full border-2 border-green-500 px-8 text-lg font-semibold text-green-600 transition-colors hover:bg-green-50"
          >
            {content.primaryCta}
          </Link>

          <Link
            href={`/${language}/manufacturer`}
            className="inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-full border-2 border-black px-8 text-lg font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
