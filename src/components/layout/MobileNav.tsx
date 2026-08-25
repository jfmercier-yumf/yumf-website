"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { Language } from "@/i18n/config";

import { routes } from "@/config/routes";
import { sharedAssets } from "@/content/shared/assets";
import { sharedContentEn } from "@/content/shared/en";
import { sharedContentFr } from "@/content/shared/fr";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileNavProps = {
  language: Language;
};

export function MobileNav({ language }: MobileNavProps) {
  const pathname = usePathname();
  const [documentationOpen, setDocumentationOpen] = useState(false);

  const content =
    language === "fr" ? sharedContentFr.topNav : sharedContentEn.topNav;

  const documentationPath = `/${language}/documentation`;

  const documentationIsActive =
    pathname === documentationPath ||
    pathname.startsWith(`${documentationPath}/`);

  const linkClassName = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(`${path}/`);

    return `flex min-h-14 items-center border-b border-black/10 text-lg font-semibold transition-colors ${
      isActive ? "text-primary" : "text-neutral-900 hover:text-primary"
    }`;
  };

  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label={language === "fr" ? "Ouvrir le menu" : "Open menu"}
            className="inline-flex size-10 touch-manipulation items-center justify-center rounded-md transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        }
      >
        <Image
          src="/icons/ui/hamburger-menu.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
          className="pointer-events-none size-6"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        showCloseButton={false}
        className="w-[88vw] max-w-96 gap-0 border-r border-black/10 bg-white p-0"
      >
        <SheetHeader className="flex h-18 flex-row items-center justify-between border-b border-black/10 px-6 py-0">
          <SheetTitle
            render={
              <Link
                href={`/${language}${routes.home}`}
                className="flex items-center gap-3"
              />
            }
          >
            <Image
              src={sharedAssets.brand.logo}
              alt="Yumf"
              width={40}
              height={40}
              className="size-10 object-contain"
            />

            <span className="text-xl font-bold text-neutral-900">Yumf</span>
          </SheetTitle>

          <SheetClose
            aria-label={language === "fr" ? "Fermer le menu" : "Close menu"}
            className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Image
              src="/icons/ui/close.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              className="size-6"
            />
          </SheetClose>
        </SheetHeader>

        <nav
          aria-label={
            language === "fr" ? "Navigation mobile" : "Mobile navigation"
          }
          className="overflow-y-auto px-6 py-4"
        >
          <SheetClose
            render={
              <Link
                href={`/${language}${routes.why}`}
                className={linkClassName(`/${language}${routes.why}`)}
              />
            }
          >
            {content.why}
          </SheetClose>

          <SheetClose
            render={
              <Link
                href={`/${language}${routes.experience}`}
                className={linkClassName(`/${language}${routes.experience}`)}
              />
            }
          >
            {content.experience}
          </SheetClose>

          <SheetClose
            render={
              <Link
                href={`/${language}${routes.manufacturer}`}
                className={linkClassName(`/${language}${routes.manufacturer}`)}
              />
            }
          >
            {content.manufacturer}
          </SheetClose>

          <div className="border-b border-black/10">
            <button
              type="button"
              aria-expanded={documentationOpen}
              onClick={() => setDocumentationOpen((open) => !open)}
              className={`flex min-h-14 w-full items-center justify-between text-left text-lg font-semibold transition-colors ${
                documentationIsActive
                  ? "text-primary"
                  : "text-neutral-900 hover:text-primary"
              }`}
            >
              <span>{content.documentation.label}</span>

              <Image
                src={
                  documentationOpen
                    ? "/icons/ui/arrow-collapse.svg"
                    : "/icons/ui/arrow-expand.svg"
                }
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="size-4"
              />
            </button>

            {documentationOpen && (
              <div className="pb-3 pl-4">
                <SheetClose
                  render={
                    <Link
                      href={`/${language}${routes.documentation.whyYumfExists}`}
                      className="flex min-h-11 items-center text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary"
                    />
                  }
                >
                  {content.documentation.items.whyYumfExists}
                </SheetClose>

                <SheetClose
                  render={
                    <Link
                      href={`/${language}${routes.documentation.loyaltyInTransformation}`}
                      className="flex min-h-11 items-center text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary"
                    />
                  }
                >
                  {content.documentation.items.loyaltyInTransformation}
                </SheetClose>

                <SheetClose
                  render={
                    <Link
                      href={`/${language}${routes.documentation.yumfFoundations}`}
                      className="flex min-h-11 items-center text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary"
                    />
                  }
                >
                  {content.documentation.items.yumfFoundations}
                </SheetClose>

                <SheetClose
                  render={
                    <Link
                      href={`/${language}${routes.documentation.whereYumfFits}`}
                      className="flex min-h-11 items-center text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary"
                    />
                  }
                >
                  {content.documentation.items.whereYumfFits}
                </SheetClose>
              </div>
            )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
