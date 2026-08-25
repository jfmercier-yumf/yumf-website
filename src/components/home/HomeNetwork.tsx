import Image from "next/image";

import { FeatureCard } from "@/components/content/FeatureCard";
import { homeAssets } from "@/content/home/assets";

type HomeNetworkContent = {
  title: string;
  description: string;
  secondaryDescription: string;
  features: readonly {
    title: string;
    description: string;
  }[];
};

type HomeNetworkProps = {
  content: HomeNetworkContent;
};

const featureAssets = [
  {
    icon: "/icons/features/account.svg",
    variant: "pink",
  },
  {
    icon: "/icons/features/card.svg",
    variant: "yellow",
  },
  {
    icon: "/icons/features/explore.svg",
    variant: "blue",
  },
  {
    icon: "/icons/features/community.svg",
    variant: "purple",
  },
] as const;

export function HomeNetwork({ content }: HomeNetworkProps) {
  return (
    <section className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {content.title}
          </h2>

          <div className="mt-8 space-y-4 text-base leading-7 text-muted-foreground sm:text-lg">
            <p>{content.description}</p>
            <p>{content.secondaryDescription}</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <Image
            src={homeAssets.network}
            alt=""
            width={1200}
            height={900}
            className="h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-16 md:grid-cols-2">
          {content.features.map((feature, index) => {
            const asset = featureAssets[index];

            if (!asset) {
              return null;
            }

            return (
              <FeatureCard
                key={feature.title}
                icon={asset.icon}
                title={feature.title}
                description={feature.description}
                variant={asset.variant}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
