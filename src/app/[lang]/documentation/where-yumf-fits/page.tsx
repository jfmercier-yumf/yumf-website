import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { whereYumfFitsFr } from "@/content/documentation/where-yumf-fits/fr";
import { whereYumfFitsEn } from "@/content/documentation/where-yumf-fits/en";

type WhereYumfFitsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function WhereYumfFitsPage({
  params,
}: WhereYumfFitsPageProps) {
  const { lang } = await params;

  if (lang === "fr") {
    return <DocumentLayout document={whereYumfFitsFr} />;
  }

  if (lang === "en") {
    return <DocumentLayout document={whereYumfFitsEn} />;
  }

  notFound();
}
