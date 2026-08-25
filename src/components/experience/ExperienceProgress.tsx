import Image from "next/image";

import { InfoCard } from "@/components/content/InfoCard";
import { experienceAssets } from "@/content/experience/assets";
import type { Language } from "@/i18n/config";

type ExperienceProgressContent = {
  readonly title: string;
  readonly description: readonly string[];
  readonly examples: {
    readonly badge: {
      readonly title: string;
      readonly description: string;
    };
    readonly level: {
      readonly title: string;
      readonly description: string;
    };
  };
  readonly footer: string;
};

type ExperienceProgressProps = {
  content: ExperienceProgressContent;
  language: Language;
};

export function ExperienceProgress({
  content,
  language,
}: ExperienceProgressProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-black sm:text-xl lg:mt-10">
            {content.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-10">
            <div className="flex min-w-0 flex-col gap-6">
              <Image
                src={experienceAssets.progress.badges.interface[language]}
                alt=""
                width={800}
                height={1200}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />

              <InfoCard
                icon={experienceAssets.progress.badges.pictogram}
                title={content.examples.badge.title}
                description={content.examples.badge.description}
              />
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <Image
                src={experienceAssets.progress.levels.interface[language]}
                alt=""
                width={800}
                height={1200}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />

              <InfoCard
                icon={experienceAssets.progress.levels.pictogram}
                title={content.examples.level.title}
                description={content.examples.level.description}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[35%] hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <Image
              src={experienceAssets.progress.embellishments}
              alt=""
              width={240}
              height={675}
              className="h-auto w-40 object-contain xl:w-44"
            />
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-relaxed text-black sm:mt-16 sm:text-xl">
          {content.footer}
        </p>
      </div>
    </section>
  );
}
