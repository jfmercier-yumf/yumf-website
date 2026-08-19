import Image from "next/image";
import Link from "next/link";

import type { Language } from "@/i18n/config";
import { externalLinks } from "@/config/externalLinks";
import { routes } from "@/config/routes";
import { sharedAssets } from "@/content/shared/assets";
import { sharedContentEn } from "@/content/shared/en";
import { sharedContentFr } from "@/content/shared/fr";

import { PageContainer } from "@/components/layout/PageContainer";

type MobileFooterProps = {
  language: Language;
};

export function MobileFooter({ language }: MobileFooterProps) {
  const content =
    language === "fr" ? sharedContentFr.footer : sharedContentEn.footer;

  const stores = sharedAssets.stores[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <PageContainer className="py-8">
        <div className="flex flex-col items-center gap-7">
          <Link
            href={`/${language}${routes.home}`}
            aria-label="Yumf"
            className="flex items-center gap-3"
          >
            <Image
              src={sharedAssets.brand.logo}
              alt="Yumf"
              width={40}
              height={40}
              className="size-10 object-contain"
            />

            <span className="text-xl font-bold text-neutral-900">Yumf</span>
          </Link>

          <div className="flex items-center justify-center gap-3">
            <Link
              href={externalLinks.stores.appStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.stores.appStore}
            >
              <Image
                src={stores.appStore}
                alt="App Store"
                width={126}
                height={42}
                className="h-10.5 w-auto"
              />
            </Link>
            <Link
              href={externalLinks.stores.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.stores.googlePlay}
            >
              <Image
                src={stores.googlePlay}
                alt="Google Play"
                width={142}
                height={42}
                className="h-10.5 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={sharedAssets.language}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="size-4"
              />

              <Link
                href={`/${language === "fr" ? "en" : "fr"}`}
                className="inline-flex h-9 items-center rounded-lg border border-black/15 px-3 text-sm font-medium text-neutral-800 transition-colors hover:border-black/30"
              >
                {content.language}
              </Link>
            </div>

            <Link href={externalLinks.social.facebook} aria-label="Facebook">
              <Image
                src={sharedAssets.facebook}
                alt="Facebook"
                width={22}
                height={22}
                className="size-5.5"
              />
            </Link>

            <Link href={externalLinks.social.linkedIn} aria-label="LinkedIn">
              <Image
                src={sharedAssets.linkedIn}
                alt="LinkedIn"
                width={22}
                height={22}
                className="size-5.5"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 text-center text-sm text-neutral-600">
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <Link
                href={`/${language}${routes.legal.privacyPolicy}`}
                className="transition-colors hover:text-primary"
              >
                {content.privacyPolicy}
              </Link>

              <span aria-hidden="true">|</span>

              <Link
                href={`/${language}${routes.legal.termsOfUse}`}
                className="transition-colors hover:text-primary"
              >
                {content.termsOfUse}
              </Link>
            </div>

            <p>
              {content.corporation} {currentYear} - {content.copyright}
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
