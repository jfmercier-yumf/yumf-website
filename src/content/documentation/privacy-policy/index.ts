import type { LocalizedDocument } from "@/types/documentation";
import { privacyPolicyFr2026XXXX } from "@/content/documentation/privacy-policy/fr/2026-xx-xx";
import { privacyPolicyEn2026XXXX } from "@/content/documentation/privacy-policy/en/2026-xx-xx";

type PrivacyPolicyVersion = {
  effectiveDate: string;
  document: LocalizedDocument;
};

const privacyPolicies: Partial<Record<"fr" | "en", PrivacyPolicyVersion[]>> = {
  fr: [
    {
      effectiveDate: "2026-xx-xx",
      document: privacyPolicyFr2026XXXX,
    },
  ],
  en: [
    {
      effectiveDate: "2026-xx-xx",
      document: privacyPolicyEn2026XXXX,
    },
  ],
};

export function getLatestPrivacyPolicy(
  language: "fr" | "en",
): LocalizedDocument | undefined {
  const policies = privacyPolicies[language];

  if (!policies?.length) {
    return undefined;
  }

  return [...policies].sort((a, b) =>
    b.effectiveDate.localeCompare(a.effectiveDate),
  )[0]?.document;
}
