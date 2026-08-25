import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { whyYumfExistsFr } from "@/content/documentation/why-yumf-exists/fr";
import { whyYumfExistsEn } from "@/content/documentation/why-yumf-exists/en";

type WhyYumfExistsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function WhyYumfExistsPage({
  params,
}: WhyYumfExistsPageProps) {
  const { lang } = await params;

  if (lang === "fr") {
    return <DocumentLayout document={whyYumfExistsFr} />;
  }

  if (lang === "en") {
    return <DocumentLayout document={whyYumfExistsEn} />;
  }

  notFound();
}
