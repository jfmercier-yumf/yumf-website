import Image from "next/image";

import { manufacturerApplicationAssets } from "@/content/manufacturer-application/assets";

type ManufacturerApplicationProcessProps = {
  content: {
    title: string;
    paragraphs: readonly string[];
    success: {
      title: string;
      description: string;
    };
  };
};

function HighlightClub({ text }: { text: string }) {
  const [before, after] = text.split("Club");

  if (after === undefined) {
    return text;
  }

  return (
    <>
      {before}
      <span className="text-[#28CC18]">Club</span>
      {after}
    </>
  );
}

export function ManufacturerApplicationProcess({
  content,
}: ManufacturerApplicationProcessProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>

        <div className="mx-auto mt-10 max-w-4xl space-y-8 text-lg leading-relaxed text-black sm:mt-12 sm:text-xl">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-14">
          <Image
            src={manufacturerApplicationAssets.clubCreated}
            alt=""
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
          <p className="font-medium">
            <HighlightClub text={content.success.title} />
          </p>

          <p className="mt-1">{content.success.description}</p>
        </div>
      </div>
    </section>
  );
}
