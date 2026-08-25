import Image from "next/image";

import { BenefitItem } from "@/components/content/BenefitItem";
import { downloadAssets } from "@/content/download/assets";
import { sharedAssets } from "@/content/shared/assets";

type Language = "fr" | "en";

type DownloadHeroProps = {
  content: {
    hero: {
      title: string;
      brand: string;
      description: string;
      availability: string;
    };
    features: {
      scanReceipts: {
        title: string;
        description: readonly string[];
      };
      discoverArtisans: {
        title: string;
        description: readonly string[];
      };
      rewards: {
        title: string;
        description: readonly string[];
      };
      progress: {
        title: string;
        description: readonly string[];
      };
    };
    movement: {
      title: string;
      tagline: string;
    };
  };
  language: Language;
};

export function DownloadHero({ content, language }: DownloadHeroProps) {
  const features = [
    {
      key: "scanReceipts",
      icon: "/icons/features/scan.svg",
      content: content.features.scanReceipts,
    },
    {
      key: "discoverArtisans",
      icon: "/icons/features/discover.svg",
      content: content.features.discoverArtisans,
    },
    {
      key: "rewards",
      icon: "/icons/features/rewards.svg",
      content: content.features.rewards,
    },
    {
      key: "progress",
      icon: "/icons/features/progression.svg",
      content: content.features.progress,
    },
  ] as const;

  return (
    <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contenu */}
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
              {content.hero.title}

              <span className="mt-2 block text-[#28cc18]">
                {content.hero.brand}
              </span>
            </h1>

            <p className="mt-10 text-lg leading-relaxed text-black sm:text-xl">
              {content.hero.description}
            </p>

            {/* <p className="mt-8 text-lg font-semibold text-black sm:text-xl">
              {content.hero.availability}
            </p>

            
            <div className="mt-6 flex items-start justify-center gap-8 lg:justify-start">
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={sharedAssets.stores[language].appStore}
                  alt="App Store"
                  width={180}
                  height={54}
                  className="h-11 w-40 object-contain"
                />

                <Image
                  src={downloadAssets.qrCodes.appStore}
                  alt=""
                  width={120}
                  height={120}
                  className="h-24 w-24 sm:h-28 sm:w-28"
                />
              </div>

              <div className="flex flex-col items-center gap-5">
                <Image
                  src={sharedAssets.stores[language].googlePlay}
                  alt="Google Play"
                  width={180}
                  height={54}
                  className="h-11 w-40 object-contain"
                />

                <Image
                  src={downloadAssets.qrCodes.googlePlay}
                  alt=""
                  width={120}
                  height={120}
                  className="h-24 w-24 sm:h-28 sm:w-28"
                />
              </div>
            </div> 
            */}

            <div className="mt-8">
              <p className="text-lg font-semibold text-black sm:text-xl">
                {language === "fr"
                  ? "Bientôt disponible gratuitement"
                  : "Coming soon — free to download"}
              </p>

              <p className="mt-2 text-base leading-relaxed text-neutral-500 sm:text-lg">
                {language === "fr"
                  ? "Yumf sera bientôt disponible sur l’App Store et Google Play."
                  : "Yumf will soon be available on the App Store and Google Play."}
              </p>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={downloadAssets.hero}
              alt=""
              width={1200}
              height={1200}
              priority
              className="h-auto w-full max-w-2xl object-contain"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-x-20 gap-y-14 sm:mt-24 sm:grid-cols-2 lg:mt-28">
          {features.map((feature) => (
            <BenefitItem
              key={feature.key}
              icon={feature.icon}
              title={feature.content.title}
              description={feature.content.description}
            />
          ))}
        </div>

        {/* Mouvement */}
        <div className="mx-auto mt-20 flex max-w-xl items-center justify-center gap-6 sm:mt-24">
          <Image
            src={sharedAssets.brand.logo}
            alt="Yumf"
            width={160}
            height={160}
            className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
          />

          <div className="text-left">
            <p className="text-xl font-bold leading-snug text-black sm:text-2xl">
              {content.movement.title}
            </p>

            <p className="mt-1 text-xl font-bold leading-snug text-[#28cc18] sm:text-2xl">
              {content.movement.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
