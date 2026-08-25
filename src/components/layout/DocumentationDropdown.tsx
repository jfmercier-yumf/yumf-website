"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Language } from "@/i18n/config";

import { routes } from "@/config/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DocumentationContent = {
  label: string;
  items: {
    whyYumfExists: string;
    loyaltyInTransformation: string;
    yumfFoundations: string;
    whereYumfFits: string;
  };
};

type DocumentationDropdownProps = {
  language: Language;
  content: DocumentationContent;
};

export function DocumentationDropdown({
  language,
  content,
}: DocumentationDropdownProps) {
  const pathname = usePathname();
  const documentationPath = `/${language}/documentation`;

  const isActive =
    pathname === documentationPath ||
    pathname.startsWith(`${documentationPath}/`);

  const itemClassName = (path: string) => {
    const href = `/${language}${path}`;
    const itemIsActive = pathname === href;

    return `w-full rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
      itemIsActive
        ? "text-primary"
        : "text-neutral-800 hover:text-primary focus:text-primary data-highlighted:text-primary"
    }`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex h-full items-center gap-2 border-b-2 font-semibold text-neutral-800 transition-colors hover:text-primary focus-visible:outline-none ${
          isActive
            ? "border-primary text-primary"
            : "border-transparent hover:border-primary"
        }`}
      >
        <span>{content.label}</span>

        <span
          aria-hidden="true"
          className="size-3.5 bg-current mask-[url('/icons/ui/arrow-expand.svg')] mask-center mask-no-repeat mask-contain"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={8}
        className="min-w-72 rounded-xl border border-black/10 bg-white p-2 shadow-lg"
      >
        <DropdownMenuItem
          className="bg-transparent p-0 data-highlighted:bg-transparent"
          render={
            <Link
              href={`/${language}${routes.documentation.whyYumfExists}`}
              className={itemClassName(routes.documentation.whyYumfExists)}
            />
          }
        >
          {content.items.whyYumfExists}
        </DropdownMenuItem>

        <DropdownMenuItem
          className="bg-transparent p-0 data-highlighted:bg-transparent"
          render={
            <Link
              href={`/${language}${routes.documentation.loyaltyInTransformation}`}
              className={itemClassName(
                routes.documentation.loyaltyInTransformation,
              )}
            />
          }
        >
          {content.items.loyaltyInTransformation}
        </DropdownMenuItem>

        <DropdownMenuItem
          className="bg-transparent p-0 data-highlighted:bg-transparent"
          render={
            <Link
              href={`/${language}${routes.documentation.yumfFoundations}`}
              className={itemClassName(routes.documentation.yumfFoundations)}
            />
          }
        >
          {content.items.yumfFoundations}
        </DropdownMenuItem>

        <DropdownMenuItem
          className="bg-transparent p-0 data-highlighted:bg-transparent"
          render={
            <Link
              href={`/${language}${routes.documentation.whereYumfFits}`}
              className={itemClassName(routes.documentation.whereYumfFits)}
            />
          }
        >
          {content.items.whereYumfFits}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
