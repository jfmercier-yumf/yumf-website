import { notFound } from "next/navigation";

import { ManufacturerApplicationHero } from "@/components/manufacturer-application/ManufacturerApplicationHero";
import { ManufacturerApplicationProcess } from "@/components/manufacturer-application/ManufacturerApplicationProcess";
// import { ManufacturerApplicationApplication } from "@/components/manufacturer-application/ManufacturerApplicationApplication";
import { manufacturerApplicationContentEn } from "@/content/manufacturer-application/en";
import { manufacturerApplicationContentFr } from "@/content/manufacturer-application/fr";
import { ManufacturerApplicationComingSoon } from "@/components/manufacturer-application/ManufacturerApplicationComingSoon";

type Language = "fr" | "en";

type ManufacturerApplicationPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const contentByLanguage = {
  fr: manufacturerApplicationContentFr,
  en: manufacturerApplicationContentEn,
} as const;

export default async function ManufacturerApplicationPage({
  params,
}: ManufacturerApplicationPageProps) {
  const { lang } = await params;

  if (lang !== "fr" && lang !== "en") {
    notFound();
  }

  const language = lang as Language;
  const content = contentByLanguage[language];

  return (
    <main>
      <ManufacturerApplicationHero content={content.hero} />
      <ManufacturerApplicationProcess content={content.process} />
      <ManufacturerApplicationComingSoon language={language} />
      {/* <ManufacturerApplicationApplication
        content={content.application}
        language={language}
      /> */}
    </main>
  );
}
