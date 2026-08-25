import Image from "next/image";
import { CTAButton } from "@/components/content/CTAButton";
import type { experienceContentEn } from "@/content/experience/en";
import type { experienceContentFr } from "@/content/experience/fr";
import { experienceAssets } from "@/content/experience/assets";
import { routes } from "@/config/routes";

type ExperienceHeroProps = {
  content: ExperienceHeroContent;
  language: "fr" | "en";
};

type ExperienceHeroContent =
  typeof experienceContentFr.hero | typeof experienceContentEn.hero;

export function ExperienceHero({ content, language }: ExperienceHeroProps) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
          {content.title}
        </h1>

        <p className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
          {content.subtitle}
        </p>

        <div className="relative mt-12 w-full sm:mt-14 lg:mt-16">
          <Image
            src={experienceAssets.hero[language]}
            alt=""
            width={1400}
            height={900}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <p className="mt-10 max-w-2xl text-base leading-7 text-neutral-900 sm:text-lg sm:leading-8">
          {content.description}
        </p>

        <div className="mt-8">
          <CTAButton href={`/${language}${routes.download}`} variant="primary">
            {content.cta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
