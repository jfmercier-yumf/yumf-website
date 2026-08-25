"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Language = "fr" | "en";

type LanguageSelectProps = {
  language: Language;
};

const languageLabels: Record<Language, string> = {
  fr: "Français",
  en: "English",
};

export function LanguageSelect({ language }: LanguageSelectProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLanguageChange(nextLanguage: Language | null) {
    if (nextLanguage === null) {
      return;
    }

    if (nextLanguage === language) {
      return;
    }

    const segments = pathname.split("/");

    if (segments[1] === "fr" || segments[1] === "en") {
      segments[1] = nextLanguage;
    } else {
      segments.splice(1, 0, nextLanguage);
    }

    router.push(segments.join("/") || `/${nextLanguage}`);
  }

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger
        aria-label={language === "fr" ? "Changer de langue" : "Change language"}
        className="h-9 w-auto min-w-0 gap-2 rounded-lg border-black/15 bg-white px-3 text-sm font-medium text-neutral-800 shadow-none"
      >
        <SelectValue>{languageLabels[language]}</SelectValue>
      </SelectTrigger>

      <SelectContent align="start">
        <SelectItem
          value="fr"
          className="rounded-md data-highlighted:bg-black/5 data-selected:bg-transparent data-selected:text-black"
        >
          Français
        </SelectItem>
        <SelectItem
          value="en"
          className="rounded-md data-highlighted:bg-black/5 data-selected:bg-transparent data-selected:text-black"
        >
          English
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
