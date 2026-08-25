import Image from "next/image";

import type { Language } from "@/i18n/config";

import { routes } from "@/config/routes";
import { homeAssets } from "@/content/home";
import { PageContainer } from "@/components/layout/PageContainer";
import { CTAButton } from "@/components/content/CTAButton";

type HomeHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

type HomeHeroProps = {
  language: Language;
  content: HomeHeroContent;
};

export function HomeHero({ language, content }: HomeHeroProps) {
  return (
    <section className="bg-white">
      <PageContainer className="flex flex-col items-center py-12 text-center md:py-16 lg:py-20">
        <h1 className="max-w-5xl text-4xl leading-tight font-bold tracking-tight text-neutral-950 md:text-5xl lg:text-6xl">
          {content.title}
        </h1>

        <p className="mt-4 text-3xl leading-tight font-normal italic text-neutral-950 md:text-4xl lg:text-5xl">
          {content.subtitle}
        </p>

        <div className="mt-8 w-full max-w-4xl md:mt-10">
          <Image
            src={homeAssets.hero}
            alt=""
            width={1200}
            height={800}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <p className="mt-8 max-w-xl whitespace-pre-line text-base leading-7 text-neutral-900 md:text-lg">
          {content.description}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <CTAButton href={`/${language}${routes.download}`} variant="primary">
            {content.primaryCta}
          </CTAButton>

          <CTAButton
            href={`/${language}${routes.documentation.whyYumfExists}`}
            variant="secondary"
          >
            {content.secondaryCta}
          </CTAButton>
        </div>
      </PageContainer>
    </section>
  );
}
