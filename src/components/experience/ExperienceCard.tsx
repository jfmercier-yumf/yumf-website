import Image from "next/image";
import { experienceAssets } from "@/content/experience/assets";
import type { experienceContentEn } from "@/content/experience/en";
import type { experienceContentFr } from "@/content/experience/fr";

type ExperienceCardContent =
  typeof experienceContentFr.card | typeof experienceContentEn.card;

type ExperienceCardProps = {
  content: ExperienceCardContent;
  language: "fr" | "en";
};

export function ExperienceCard({ content, language }: ExperienceCardProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="relative">
          <Image
            src={experienceAssets.card[language]}
            alt=""
            width={1000}
            height={1000}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h2 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
            {content.title}
            <span className="mt-1 block">{content.subtitle}</span>
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-black sm:text-xl lg:mt-12">
            {content.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
