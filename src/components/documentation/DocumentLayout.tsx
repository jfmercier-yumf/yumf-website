"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { LocalizedDocument } from "@/types/documentation";
import { PageContainer } from "@/components/layout/PageContainer";
import { DocumentHeader } from "@/components/documentation/document/DocumentHeader";
import { DocumentNavigation } from "@/components/documentation/navigation/DocumentNavigation";
import { DocumentSection } from "@/components/documentation/document/DocumentSection";
import { DocumentIntroduction } from "@/components/documentation/document/DocumentIntroduction";
import { buildDocumentPages } from "@/helpers/documentation/buildDocumentPages";
import { DocumentPagination } from "@/components/documentation/navigation/DocumentPagination";
import { MobileDocumentNavigation } from "@/components/documentation/navigation/MobileDocumentNavigation";
import { DocumentBlockRenderer } from "@/components/documentation/document/DocumentBlockRenderer";
import { documentationFr } from "@/i18n/documentation/fr";
import { documentationEn } from "@/i18n/documentation/en";

type DocumentLayoutProps = {
  document: LocalizedDocument;
};

export function DocumentLayout({ document }: DocumentLayoutProps) {
  const params = useParams<{ lang: string }>();
  const locale: "fr" | "en" = params.lang === "en" ? "en" : "fr";
  const strings = locale === "fr" ? documentationFr : documentationEn;
  const sections = useMemo(() => document.sections ?? [], [document.sections]);
  const pages = useMemo(() => buildDocumentPages(document), [document]);
  const isPaginated = Boolean(document.parts?.length);

  const paginatedSections = useMemo(
    () =>
      pages.flatMap((page) => (page.type === "section" ? [page.section] : [])),
    [pages],
  );

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = pages[currentPageIndex];

  const previousPage =
    currentPageIndex > 0 ? pages[currentPageIndex - 1] : undefined;

  const nextPage =
    currentPageIndex < pages.length - 1
      ? pages[currentPageIndex + 1]
      : undefined;

  const handlePageChange = useCallback((pageIndex: number) => {
    setCurrentPageIndex(pageIndex);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSectionChange = useCallback(
    (sectionId: string) => {
      if (isPaginated) {
        const pageIndex = pages.findIndex(
          (page) => page.type === "section" && page.section.id === sectionId,
        );

        if (pageIndex === -1) {
          return;
        }

        setCurrentPageIndex(pageIndex);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        return;
      }

      const element = window.document.getElementById(sectionId);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [isPaginated, pages],
  );

  useEffect(() => {
    if (isPaginated || sections.length === 0) {
      return;
    }

    const updateCurrentSection = () => {
      const activationOffset = 180;
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const element = window.document.getElementById(section.id);

        if (
          element &&
          element.getBoundingClientRect().top <= activationOffset
        ) {
          activeIndex = index;
        }
      });

      setCurrentSectionIndex(activeIndex);
    };

    updateCurrentSection();

    window.addEventListener("scroll", updateCurrentSection, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", updateCurrentSection);
  }, [isPaginated, sections]);

  if (isPaginated) {
    const currentPaginatedSectionIndex =
      currentPage?.type === "section"
        ? paginatedSections.findIndex(
            (section) => section.id === currentPage.section.id,
          )
        : null;

    return (
      <article>
        <DocumentHeader
          document={document}
          currentSectionIndex={currentPaginatedSectionIndex}
          locale={locale}
          onSectionChange={handleSectionChange}
        />

        <PageContainer className="flex items-start gap-12 py-10 lg:gap-16 lg:py-14 xl:gap-20">
          {currentPaginatedSectionIndex !== null &&
            paginatedSections.length > 0 && (
              <DocumentNavigation
                sections={paginatedSections}
                currentSectionIndex={currentPaginatedSectionIndex}
                onSectionChange={handleSectionChange}
                locale={locale}
              />
            )}

          <main className="min-w-0 flex-1">
            {currentPaginatedSectionIndex !== null &&
              paginatedSections.length > 0 && (
                <MobileDocumentNavigation
                  sections={paginatedSections}
                  currentSectionIndex={currentPaginatedSectionIndex}
                  onSectionChange={handleSectionChange}
                  locale={locale}
                />
              )}

            {currentPage?.type === "introduction" && (
              <DocumentIntroduction document={document} />
            )}

            {currentPage?.type === "section" && (
              <>
                {currentPage.part && (
                  <header className="mb-10">
                    {currentPage.part.number && (
                      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-green-600">
                        {strings.navigation.part} {currentPage.part.number}
                      </p>
                    )}

                    <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                      {currentPage.part.title}
                    </h2>
                  </header>
                )}

                {currentPage.part?.sections[0]?.id === currentPage.section.id &&
                  currentPage.part.introduction &&
                  currentPage.part.introduction.length > 0 && (
                    <div className="mb-12 max-w-4xl space-y-6">
                      {currentPage.part.introduction.map((block, index) => (
                        <DocumentBlockRenderer key={index} block={block} />
                      ))}
                    </div>
                  )}

                <DocumentSection section={currentPage.section} />
              </>
            )}

            <DocumentPagination
              previousPage={previousPage}
              nextPage={nextPage}
              introductionTitle={document.introductionTitle}
              locale={locale}
              onPrevious={
                previousPage
                  ? () => handlePageChange(currentPageIndex - 1)
                  : undefined
              }
              onNext={
                nextPage
                  ? () => handlePageChange(currentPageIndex + 1)
                  : undefined
              }
            />
          </main>
        </PageContainer>
      </article>
    );
  }

  return (
    <article>
      <DocumentHeader
        document={document}
        currentSectionIndex={currentSectionIndex}
        locale={locale}
        onSectionChange={handleSectionChange}
      />

      <PageContainer className="flex items-start gap-12 py-10 lg:gap-16 lg:py-14 xl:gap-20">
        {sections.length > 0 && (
          <DocumentNavigation
            sections={sections}
            currentSectionIndex={currentSectionIndex}
            onSectionChange={handleSectionChange}
            locale={locale}
          />
        )}

        <main className="min-w-0 flex-1">
          {sections.length > 0 && (
            <MobileDocumentNavigation
              sections={sections}
              currentSectionIndex={currentSectionIndex}
              onSectionChange={handleSectionChange}
              locale={locale}
            />
          )}

          <DocumentIntroduction document={document} />

          {sections.map((section) => (
            <DocumentSection key={section.id} section={section} />
          ))}
        </main>
      </PageContainer>
    </article>
  );
}
