import type { DocumentPage } from "@/types/documentation";
import { documentationFr } from "@/i18n/documentation/fr";
import { documentationEn } from "@/i18n/documentation/en";

type DocumentPaginationProps = {
  previousPage?: DocumentPage;
  nextPage?: DocumentPage;
  introductionTitle?: string;
  locale: "fr" | "en";
  onPrevious?: () => void;
  onNext?: () => void;
};

function getPageTitle(page: DocumentPage, introductionTitle?: string) {
  return page.type === "introduction"
    ? (introductionTitle ?? "")
    : page.section.title;
}

export function DocumentPagination({
  previousPage,
  nextPage,
  introductionTitle,
  locale,
  onPrevious,
  onNext,
}: DocumentPaginationProps) {
  const strings = locale === "fr" ? documentationFr : documentationEn;

  if (!previousPage && !nextPage) {
    return null;
  }

  return (
    <nav
      aria-label={strings.navigation.pageNavigation}
      className="mt-12 grid gap-4 border-t border-slate-200 pt-8 md:grid-cols-2"
    >
      {previousPage ? (
        <button
          type="button"
          onClick={onPrevious}
          className="group flex min-h-28 w-full items-center gap-4 rounded-2xl border border-slate-200 px-6 py-5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50"
        >
          <span
            aria-hidden="true"
            className="text-2xl text-slate-400 transition-transform group-hover:-translate-x-1"
          >
            ←
          </span>

          <span className="min-w-0">
            <span className="block text-sm font-semibold text-slate-950">
              {strings.navigation.previous}
            </span>

            <span className="mt-1 block text-sm leading-5 text-slate-500">
              {getPageTitle(previousPage, introductionTitle)}
            </span>
          </span>
        </button>
      ) : (
        <div className="hidden md:block" />
      )}

      {nextPage ? (
        <button
          type="button"
          onClick={onNext}
          className="group flex min-h-28 w-full items-center justify-between gap-4 rounded-2xl bg-green-500 px-6 py-5 text-left text-white transition-colors hover:bg-green-600"
        >
          <span className="min-w-0">
            <span className="block text-sm font-semibold">
              {strings.navigation.continueTo}
            </span>

            <span className="mt-1 block text-sm leading-5 text-white/80">
              {getPageTitle(nextPage, introductionTitle)}
            </span>
          </span>

          <span
            aria-hidden="true"
            className="text-2xl transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      ) : null}
    </nav>
  );
}
