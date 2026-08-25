import Image from "next/image";

import { CTAButton } from "@/components/content/CTAButton";
import { PageContainer } from "@/components/layout/PageContainer";
import { whyAssets } from "@/content/why/assets";
import { routes } from "@/config/routes";

type WhyHeroContent = {
  title: string;
  description: string;
  emphasis: string;
  cta: string;
};

type WhyHeroProps = {
  content: WhyHeroContent;
  language: string;
};

export function WhyHero({ content, language }: WhyHeroProps) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <PageContainer className="flex flex-col items-center py-12 text-center md:py-16 lg:py-20">
        <h1 className="max-w-5xl text-4xl leading-tight font-bold tracking-tight text-neutral-950 md:text-5xl lg:text-6xl">
          {content.title}
        </h1>

        <div className="mt-8 max-w-2xl text-base leading-7 text-neutral-900 md:text-lg">
          <p>{content.description}</p>

          <p className="mt-1 font-bold text-neutral-950">{content.emphasis}</p>
        </div>

        <div className="mt-8 w-full max-w-4xl md:mt-10">
          <Image
            src={whyAssets.hero}
            alt=""
            width={1200}
            height={800}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-8">
          <CTAButton variant="primary" href={`/${language}${routes.download}`}>
            {content.cta}
          </CTAButton>
        </div>
      </PageContainer>
    </section>
  );
}
