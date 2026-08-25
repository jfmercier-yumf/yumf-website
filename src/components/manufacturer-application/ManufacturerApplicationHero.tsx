import Image from "next/image";

import { manufacturerApplicationAssets } from "@/content/manufacturer-application/assets";

type ManufacturerApplicationHeroProps = {
  content: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
};

function HighlightYumf({ text }: { text: string }) {
  const [before, after] = text.split("Yumf");

  if (after === undefined) {
    return text;
  }

  return (
    <>
      {before}
      <span className="text-[#28CC18]">Yumf</span>
      {after}
    </>
  );
}

export function ManufacturerApplicationHero({
  content,
}: ManufacturerApplicationHeroProps) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 xl:gap-16">
        <div className="max-w-xl">
          <p className="text-lg font-bold text-black sm:text-xl">
            <HighlightYumf text={content.eyebrow} />
          </p>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <div className="mt-10 space-y-7 text-lg leading-relaxed text-black sm:text-xl">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0 || index === content.paragraphs.length - 1
                    ? "font-bold"
                    : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src={manufacturerApplicationAssets.hero}
            alt=""
            width={1400}
            height={1400}
            priority
            className="h-auto w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
