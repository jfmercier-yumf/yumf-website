"use client";

import Image from "next/image";
import Link from "next/link";

import type { Language } from "@/i18n/config";
import { externalLinks } from "@/config/externalLinks";

import { routes } from "@/config/routes";
import { sharedAssets } from "@/content/shared/assets";
import { sharedContentEn } from "@/content/shared/en";
import { sharedContentFr } from "@/content/shared/fr";
import { MobileFooter } from "@/components/layout/MobileFooter";
import { LanguageSelect } from "@/components/content/LanguageSelect";

import { PageContainer } from "@/components/layout/PageContainer";

type FooterProps = {
  language: Language;
};

export function Footer({ language }: FooterProps) {
  const content =
    language === "fr" ? sharedContentFr.footer : sharedContentEn.footer;

  const stores = sharedAssets.stores[language];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="hidden min-[780px]:block">
        <footer className="border-t border-black/10 bg-white">
          <PageContainer className="py-10">
            <div className="flex items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <Link
                  href={`/${language}${routes.home}`}
                  aria-label="Yumf"
                  className="flex items-center gap-3"
                >
                  <Image
                    src={sharedAssets.brand.logo}
                    alt="Yumf"
                    width={36}
                    height={36}
                    className="size-9 object-contain"
                  />

                  <span className="text-xl font-bold text-neutral-900">
                    Yumf
                  </span>
                </Link>
                {false && (
                  <div className="flex items-center gap-4">
                    <Link
                      href={externalLinks.stores.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={content.stores.appStore}
                    >
                      <Image
                        src={stores.appStore}
                        alt=""
                        width={126}
                        height={42}
                        className="h-auto w-auto"
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
                        alt=""
                        width={142}
                        height={42}
                        className="h-auto w-auto"
                      />
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <Image
                    src={sharedAssets.language}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="size-4"
                  />

                  <LanguageSelect language={language} />
                </div>

                <Link
                  href={externalLinks.social.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={sharedAssets.facebook}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </Link>
                {false && (
                  <Link
                    href={externalLinks.social.linkedIn}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={sharedAssets.linkedIn}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </Link>
                )}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-8 text-sm text-neutral-600">
              <p>
                {content.corporation} {currentYear} - {content.copyright}
              </p>

              <div className="flex items-center gap-2">
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
            </div>
          </PageContainer>
        </footer>
      </div>

      <div className="min-[780px]:hidden">
        <MobileFooter language={language} />
      </div>
    </>
  );
}
