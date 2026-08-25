import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { termsOfUseFr } from "@/content/documentation/terms-of-use/fr";
import { termsOfUseEn } from "@/content/documentation/terms-of-use/en";

type TermsOfUsePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function TermsOfUsePage({ params }: TermsOfUsePageProps) {
  const { lang } = await params;

  if (lang === "fr") {
    return <DocumentLayout document={termsOfUseFr} />;
  } else if (lang === "en") {
    return <DocumentLayout document={termsOfUseEn} />;
  } else {
    notFound();
  }
}
