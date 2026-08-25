import Image from "next/image";

import { BenefitItem } from "@/components/content/BenefitItem";
import { manufacturerAssets } from "@/content/manufacturer/assets";

type ManufacturerClubProps = {
  content: {
    title: string;
    description: string;
    features: {
      products: {
        title: string;
        description: readonly string[];
      };
      programs: {
        title: string;
        description: readonly string[];
      };
      rewards: {
        title: string;
        description: readonly string[];
      };
    };
    footer: string;
  };
  language: "fr" | "en";
};

function HighlightClub({ text }: { text: string }) {
  const [before, after] = text.split("Club");

  if (after === undefined) {
    return text;
  }

  return (
    <>
      {before}
      <span className="text-[#28cc18]">Club</span>
      {after}
    </>
  );
}

export function ManufacturerClub({ content, language }: ManufacturerClubProps) {
  const features = [
    {
      key: "products",
      number: 1,
      image: manufacturerAssets.club.products[language],
      content: content.features.products,
    },
    {
      key: "programs",
      number: 2,
      image: manufacturerAssets.club.programs[language],
      content: content.features.programs,
    },
    {
      key: "rewards",
      number: 3,
      image: manufacturerAssets.club.rewards[language],
      content: content.features.rewards,
    },
  ] as const;

  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            <HighlightClub text={content.title} />
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
            {content.description}
          </p>
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-72">
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-0">
            {features.map((feature, index) => {
              const isPrograms = index === 1;
              const isProducts = index === 0;
              const isRewards = index === 2;

              return (
                <div key={feature.key} className="flex min-w-0 flex-col">
                  <div className="flex items-end justify-center lg:h-140">
                    <Image
                      src={feature.image}
                      alt=""
                      width={800}
                      height={1400}
                      className={[
                        "h-auto w-full object-contain",
                        "max-w-90 sm:max-w-100",
                        isPrograms
                          ? "lg:z-10 lg:max-w-none lg:translate-y-8 lg:scale-[1.1]"
                          : isProducts
                            ? "lg:max-w-none lg:translate-x-10"
                            : isRewards
                              ? "lg:max-w-none lg:-translate-x-10"
                              : "lg:max-w-none",
                      ].join(" ")}
                    />
                  </div>

                  <div className="mx-auto mt-20 w-full max-w-md sm:mt-24 lg:mt-36 lg:max-w-none lg:px-5 xl:px-7">
                    <BenefitItem
                      number={feature.number}
                      title={feature.content.title}
                      description={feature.content.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-20 max-w-3xl text-center text-base leading-relaxed text-black sm:mt-24 sm:text-lg lg:mt-20">
          <HighlightClub text={content.footer} />
        </p>
      </div>
    </section>
  );
}
