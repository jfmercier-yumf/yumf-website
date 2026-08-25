import { FeatureCard } from "@/components/content/FeatureCard";
import type { whyContentEn } from "@/content/why/en";
import type { whyContentFr } from "@/content/why/fr";

type WhyVisionContent = typeof whyContentFr.vision | typeof whyContentEn.vision;

type WhyVisionProps = {
  content: WhyVisionContent;
  language: "fr" | "en";
};

const cards = [
  {
    key: "why",
    icon: "/icons/documentation/why-yumf-exists.svg",
    variant: "pink",
    href: "why-yumf-exists",
  },
  {
    key: "loyalty",
    icon: "/icons/documentation/loyalty-in-transformation.svg",
    variant: "yellow",
    href: "loyalty-in-transformation",
  },
  {
    key: "foundations",
    icon: "/icons/documentation/yumf-foundations.svg",
    variant: "blue",
    href: "yumf-foundations",
  },
  {
    key: "whatIsYumf",
    icon: "/icons/documentation/where-yumf-fits.svg",
    variant: "purple",
    href: "where-yumf-fits",
  },
] as const;

export function WhyVision({ content, language }: WhyVisionProps) {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-neutral-900 sm:text-lg sm:leading-8">
            {content.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2">
          {cards.map(({ key, icon, variant, href }) => {
            const card = content.cards[key];

            return (
              <FeatureCard
                key={key}
                icon={icon}
                title={card.title}
                description={card.description}
                variant={variant}
                href={`/${language}/documentation/${href}`}
                cta={card.cta}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
