import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { yumfFoundationsFr } from "@/content/documentation/yumf-foundations/fr";
import { yumfFoundationsEn } from "@/content/documentation/yumf-foundations/en";

type YumfFoundationPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function YumfFoundationsPage({
  params,
}: YumfFoundationPageProps) {
  const { lang } = await params;

  if (lang === "fr") {
    return <DocumentLayout document={yumfFoundationsFr} />;
  }

  if (lang === "en") {
    return <DocumentLayout document={yumfFoundationsEn} />;
  }

  notFound();
}
