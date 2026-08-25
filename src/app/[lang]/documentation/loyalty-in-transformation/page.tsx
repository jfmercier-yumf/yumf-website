import { notFound } from "next/navigation";
import { DocumentLayout } from "@/components/documentation/DocumentLayout";
import { loyaltyInTransformationFr } from "@/content/documentation/loyalty-in-transformation/fr";
import { loyaltyInTransformationEn } from "@/content/documentation/loyalty-in-transformation/en";

type LoyaltyInTransformationPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function LoyaltyInTransformationPage({
  params,
}: LoyaltyInTransformationPageProps) {
  const { lang } = await params;

  if (lang === "fr") {
    return <DocumentLayout document={loyaltyInTransformationFr} />;
  }

  if (lang === "en") {
    return <DocumentLayout document={loyaltyInTransformationEn} />;
  }

  notFound();
}
