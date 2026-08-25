import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { getLatestPrivacyPolicy } from "@/content/documentation/privacy-policy";

type PrivacyPolicyPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function PrivacyPolicyPage({
  params,
}: PrivacyPolicyPageProps) {
  const { lang } = await params;

  if (lang !== "fr" && lang !== "en") {
    notFound();
  }

  const document = getLatestPrivacyPolicy(lang);

  if (!document) {
    notFound();
  }

  return <DocumentLayout document={document} />;
}
