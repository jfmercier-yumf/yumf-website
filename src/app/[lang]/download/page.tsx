import { notFound } from "next/navigation";

import { DownloadHero } from "@/components/download/DownloadHero";
import { downloadContentEn } from "@/content/download/en";
import { downloadContentFr } from "@/content/download/fr";

type Language = "fr" | "en";

type DownloadPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const downloadContent = {
  fr: downloadContentFr,
  en: downloadContentEn,
} as const;

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { lang } = await params;

  if (lang !== "fr" && lang !== "en") {
    notFound();
  }

  const language: Language = lang;
  const content = downloadContent[language];

  return (
    <main>
      <DownloadHero content={content} language={language} />
    </main>
  );
}
