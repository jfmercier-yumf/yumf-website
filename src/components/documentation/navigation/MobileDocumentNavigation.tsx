"use client";

import { useState } from "react";
import type { DocumentSection } from "@/types/documentation";
import { documentationFr } from "@/i18n/documentation/fr";
import { documentationEn } from "@/i18n/documentation/en";

type MobileDocumentNavigationProps = {
  sections: DocumentSection[];
  currentSectionIndex?: number;
  onSectionChange: (sectionId: string) => void;
  locale: "fr" | "en";
};

export function MobileDocumentNavigation({
  sections,
  currentSectionIndex = 0,
  onSectionChange,
  locale,
}: MobileDocumentNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const strings = locale === "fr" ? documentationFr : documentationEn;

  if (sections.length === 0) {
    return null;
  }

  const currentSection = sections[currentSectionIndex];

  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      aria-label={strings.navigation.documentNavigation}
      className="mb-6 lg:hidden"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-document-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left"
      >
        <div className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {strings.navigation.label}
          </span>

          {currentSection && (
            <span className="mt-1 block truncate font-medium text-slate-950">
              {currentSection.title}
            </span>
          )}
        </div>

        <span
          aria-hidden="true"
          className={`size-5 shrink-0 bg-slate-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{
            WebkitMask:
              "url('/icons/ui/arrow-expand.svg') center / contain no-repeat",
            mask: "url('/icons/ui/arrow-expand.svg') center / contain no-repeat",
          }}
        />
      </button>

      {isOpen && (
        <div
          id="mobile-document-navigation"
          className="mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
          <ol className="divide-y divide-slate-100">
            {sections.map((section, index) => {
              const isActive = index === currentSectionIndex;

              return (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleSectionChange(section.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {section.number && (
                      <span
                        className={`shrink-0 font-semibold tabular-nums ${
                          isActive ? "text-green-600" : "text-slate-400"
                        }`}
                      >
                        {section.number}
                      </span>
                    )}

                    <span
                      className={isActive ? "font-semibold" : "font-medium"}
                    >
                      {section.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </nav>
  );
}
