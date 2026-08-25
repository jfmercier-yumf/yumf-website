import Image from "next/image";

import { manufacturerAssets } from "@/content/manufacturer/assets";

type ManufacturerEngagementProps = {
  content: {
    title: string;
    description: string;
  };
  language: "fr" | "en";
};

export function ManufacturerEngagement({
  content,
  language,
}: ManufacturerEngagementProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl items-end justify-center sm:mt-20 lg:mt-24 lg:gap-20">
          <div className="flex flex-1 justify-center lg:justify-end">
            <Image
              src={manufacturerAssets.engagement.basket[language]}
              alt=""
              width={800}
              height={1400}
              className="h-auto w-full max-w-90 object-contain sm:max-w-100 lg:max-w-105"
            />
          </div>

          <div className="hidden flex-1 justify-center lg:flex lg:justify-start">
            <Image
              src={manufacturerAssets.engagement.consumer}
              alt=""
              width={800}
              height={1200}
              className="h-auto w-full max-w-100 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
