import type { Language } from "@/i18n/config";

type LaunchNoticeProps = {
  language: Language;
};

export function LaunchNotice({ language }: LaunchNoticeProps) {
  return (
    <div className="border-b border-black/10 bg-neutral-900 px-4 py-2 text-center text-sm font-medium text-white">
      {language === "fr"
        ? "Yumf se prépare au lancement. Certaines fonctionnalités de ce site sont encore en cours de déploiement."
        : "Yumf is preparing for launch. Some features of this site are still being rolled out."}
    </div>
  );
}
