import { WhyHero } from "@/components/why/WhyHero";
import { WhyRelationship } from "@/components/why/WhyRelationship";
import { WhyCommunity } from "@/components/why/WhyCommunity";
import { WhyVision } from "@/components/why/WhyVision";

import { whyContentEn } from "@/content/why/en";
import { whyContentFr } from "@/content/why/fr";

import type { Language } from "@/i18n/config";

type WhyPageProps = {
  params: Promise<{
    lang: Language;
  }>;
};

export default async function WhyPage({ params }: WhyPageProps) {
  const { lang } = await params;

  const content = lang === "fr" ? whyContentFr : whyContentEn;

  return (
    <>
      <WhyHero content={content.hero} language={lang} />
      <WhyRelationship content={content.relationship} />
      <WhyCommunity content={content.community} />
      <WhyVision content={content.vision} language={lang} />
    </>
  );
}
