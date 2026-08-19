import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { TopNav } from "@/components/layout/TopNav";
import { isLanguage, type Language } from "@/i18n/config";

type LanguageLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const language: Language = lang;

  return (
<div
  data-language={language}
  className="flex min-h-screen flex-col"
>
  <TopNav language={language} />

  <main className="flex-1">{children}</main>

  <Footer language={language} />
</div>
  );
}
