import Image from "next/image";
import Link from "next/link";

import type { Language } from "@/i18n/config";

import { routes } from "@/config/routes";
import { sharedAssets } from "@/content/shared/assets";
import { sharedContentEn } from "@/content/shared/en";
import { sharedContentFr } from "@/content/shared/fr";

import { DocumentationDropdown } from "@/components/layout/DocumentationDropdown";
import { MobileNav } from "@/components/layout/MobileNav";
import { PageContainer } from "@/components/layout/PageContainer";
import { TopNavLink } from "@/components/layout/TopNavLink";
import { LaunchNotice } from "@/components/layout/LaunchNotice";

type TopNavProps = {
  language: Language;
};

export function TopNav({ language }: TopNavProps) {
  const content =
    language === "fr" ? sharedContentFr.topNav : sharedContentEn.topNav;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <LaunchNotice language={language} />

      <PageContainer className="flex h-18 items-center">
        <div className="mr-3 min-[950px]:hidden">
          <MobileNav language={language} />
        </div>

        <Link
          href={`/${language}${routes.home}`}
          aria-label="Yumf"
          className="flex items-center gap-4"
        >
          <Image
            src={sharedAssets.brand.logo}
            alt="Yumf"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />

          <span className="text-2xl font-bold text-neutral-900">Yumf</span>
        </Link>

        <nav
          className="ml-12 hidden items-stretch self-stretch min-[950px]:flex"
          aria-label={
            language === "fr" ? "Navigation principale" : "Main navigation"
          }
        >
          <div className="px-5">
            <TopNavLink
              href={`/${language}${routes.why}`}
              label={content.why}
            />
          </div>

          <div className="px-5">
            <TopNavLink
              href={`/${language}${routes.experience}`}
              label={content.experience}
            />
          </div>

          <div className="px-5">
            <TopNavLink
              href={`/${language}${routes.manufacturer}`}
              label={content.manufacturer}
            />
          </div>

          <div className="px-5">
            <DocumentationDropdown
              language={language}
              content={content.documentation}
            />
          </div>
        </nav>

        <Link
          href={`/${language}${routes.download}`}
          className="ml-auto inline-flex h-10 items-center justify-center rounded-full border border-primary bg-white px-6 text-[14px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          {content.download}
        </Link>
      </PageContainer>
    </header>
  );
}
