import Image from "next/image";

import { BenefitItem } from "@/components/content/BenefitItem";
import { manufacturerAssets } from "@/content/manufacturer/assets";

type ManufacturerHeroProps = {
  content: {
    title: string;
    description: string;
    cta: string;
    benefits: {
      salesChannels: {
        title: string;
        description: readonly string[];
      };
      programs: {
        title: string;
        description: readonly string[];
      };
      members: {
        title: string;
        description: readonly string[];
      };
      team: {
        title: string;
        description: readonly string[];
      };
    };
  };
};

const benefits = [
  {
    key: "salesChannels",
    icon: "/icons/manufacturer/sales-channels.svg",
  },
  {
    key: "programs",
    icon: "/icons/manufacturer/programs.svg",
  },
  {
    key: "members",
    icon: "/icons/manufacturer/members.svg",
  },
  {
    key: "team",
    icon: "/icons/manufacturer/team.svg",
  },
] as const;

function renderHeroTitle(title: string) {
  const highlightedText = title.includes("Votre Club")
    ? "Votre Club"
    : title.includes("Your Club")
      ? "Your Club"
      : null;

  if (!highlightedText) {
    return title;
  }

  const [before, after] = title.split(highlightedText);

  return (
    <>
      <span className="block">{before.trim()}</span>

      <span className="mt-2 block text-[#28cc16]">{highlightedText}</span>

      <span className="mt-2 block">{after.trim()}</span>
    </>
  );
}

export function ManufacturerHero({
  content,
  language,
}: ManufacturerHeroProps & { language: string }) {
  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
              {renderHeroTitle(content.title)}
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-black sm:text-xl lg:mx-0">
              {content.description}
            </p>

            <a
              href={`/${language}/manufacturer/apply`}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#28cc16] px-8 py-3 text-base font-semibold text-[#28cc16] transition-colors hover:bg-[#28cc16] hover:text-white sm:text-lg"
            >
              {content.cta}
            </a>
          </div>

          <div className="relative">
            <Image
              src={manufacturerAssets.hero}
              alt=""
              width={1000}
              height={1000}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-x-16 gap-y-14 md:grid-cols-2 lg:mt-20">
          {benefits.map(({ key, icon }) => {
            const benefit = content.benefits[key];

            return (
              <BenefitItem
                key={key}
                icon={icon}
                title={benefit.title}
                description={benefit.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
