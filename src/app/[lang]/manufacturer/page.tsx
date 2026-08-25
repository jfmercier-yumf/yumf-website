import { ManufacturerHero } from "@/components/manufacturer/ManufacturerHero";
import { ManufacturerClub } from "@/components/manufacturer/ManufacturerClub";
import { ManufacturerEngagement } from "@/components/manufacturer/ManufacturerEngagement";
import { ManufacturerTeam } from "@/components/manufacturer/ManufacturerTeam";
import { ManufacturerMembers } from "@/components/manufacturer/ManufacturerMembers";
import { ManufacturerPlans } from "@/components/manufacturer/ManufacturerPlans";
import { ManufacturerFAQ } from "@/components/manufacturer/ManufacturerFAQ";
import { ManufacturerFinalCTA } from "@/components/manufacturer/ManufacturerFinalCTA";

import { manufacturerContentEn } from "@/content/manufacturer/en";
import { manufacturerContentFr } from "@/content/manufacturer/fr";

type ManufacturerPageProps = {
  params: Promise<{
    lang: "fr" | "en";
  }>;
};

export default async function ManufacturerPage({
  params,
}: ManufacturerPageProps) {
  const { lang } = await params;

  const content = lang === "fr" ? manufacturerContentFr : manufacturerContentEn;

  return (
    <main>
      <ManufacturerHero content={content.hero} language={lang} />
      <ManufacturerClub content={content.club} language={lang} />
      <ManufacturerEngagement content={content.engagement} language={lang} />
      <ManufacturerTeam content={content.team} language={lang} />
      <ManufacturerMembers content={content.members} language={lang} />
      <ManufacturerPlans content={content.plans} language={lang} />
      <ManufacturerFAQ content={content.faq} />
      <ManufacturerFinalCTA content={content.finalCta} />
    </main>
  );
}
