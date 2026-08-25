import Image from "next/image";

import { InfoCard } from "@/components/content/InfoCard";
import { experienceAssets } from "@/content/experience/assets";
import type { Language } from "@/i18n/config";

type ExperienceProgramsContent = {
  readonly title: string;
  readonly description: readonly string[];
  readonly examples: {
    readonly productCard: {
      readonly title: string;
      readonly description: readonly string[];
    };
    readonly leaderboard: {
      readonly title: string;
      readonly description: readonly string[];
    };
  };
  readonly collection: {
    readonly title: string;
    readonly description: readonly string[];
  };
};

type ExperienceProgramsProps = {
  content: ExperienceProgramsContent;
  language: Language;
};

export function ExperiencePrograms({
  content,
  language,
}: ExperienceProgramsProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-xl text-center lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-black sm:text-xl lg:mt-10">
              {content.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={experienceAssets.programs.overview}
              alt=""
              width={1000}
              height={1000}
              className="mx-auto h-auto w-full max-w-xl object-contain"
            />
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-10">
            <div className="flex min-w-0 flex-col gap-6">
              <Image
                src={experienceAssets.programs.productCard.interface[language]}
                alt=""
                width={800}
                height={1200}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />

              <InfoCard
                icon={experienceAssets.programs.productCard.pictogram}
                title={content.examples.productCard.title}
                description={content.examples.productCard.description}
              />
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <Image
                src={experienceAssets.programs.leaderboard.interface[language]}
                alt=""
                width={800}
                height={1200}
                className="mx-auto h-auto w-full max-w-md object-contain"
              />

              <InfoCard
                icon={experienceAssets.programs.leaderboard.pictogram}
                title={content.examples.leaderboard.title}
                description={content.examples.leaderboard.description}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[35%] hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <Image
              src={experienceAssets.programs.programIcons}
              alt=""
              width={320}
              height={900}
              className="h-auto w-56 object-contain xl:w-64"
            />
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 sm:mt-24 lg:mt-32 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-xl text-center lg:mx-0">
            <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
              {content.collection.title}
            </h3>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-black sm:text-xl">
              {content.collection.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src={experienceAssets.programs.collection}
              alt=""
              width={1000}
              height={1000}
              className="mx-auto h-auto w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
