import { HomeHero } from "@/components/home/HomeHero";
import { HomeRelationship } from "@/components/home/HomeRelationship";
import { HomeJourney } from "@/components/home/HomeJourney";
import { HomeNetwork } from "@/components/home/HomeNetwork";
import { HomeFinalCTA } from "@/components/home/HomeFinalCTA";

import { homeContentEn } from "@/content/home/en";
import { homeContentFr } from "@/content/home/fr";

import type { Language } from "@/i18n/config";

type HomePageProps = {
  params: Promise<{
    lang: Language;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  const content = lang === "fr" ? homeContentFr : homeContentEn;

  return (
    <>
      <HomeHero language={lang} content={content.hero} />

      <HomeRelationship content={content.relationship} />

      <HomeJourney content={content.journey} />

      <HomeNetwork content={content.network} />

      <HomeFinalCTA language={lang} content={content.finalCta} />
    </>
  );
}
