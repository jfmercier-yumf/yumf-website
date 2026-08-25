import { ExperienceHero } from "@/components/experience/ExperienceHero";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ExperienceClub } from "@/components/experience/ExperienceClub";
import { ExperiencePrograms } from "@/components/experience/ExperiencePrograms";
import { ExperienceProgress } from "@/components/experience/ExperienceProgress";
import { ExperienceFinalCTA } from "@/components/experience/ExperienceFinalCTA";

import { experienceContentEn } from "@/content/experience/en";
import { experienceContentFr } from "@/content/experience/fr";

type ExperiencePageProps = {
  params: Promise<{
    lang: "fr" | "en";
  }>;
};

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { lang } = await params;

  const content = lang === "fr" ? experienceContentFr : experienceContentEn;

  return (
    <main>
      <ExperienceHero content={content.hero} language={lang} />
      <ExperienceCard content={content.card} language={lang} />
      <ExperienceClub content={content.clubs} />
      <ExperiencePrograms content={content.programs} language={lang} />
      <ExperienceProgress content={content.progress} language={lang} />
      <ExperienceFinalCTA content={content.finalCta} language={lang} />
    </main>
  );
}
