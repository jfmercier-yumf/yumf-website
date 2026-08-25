import { CTAButton } from "@/components/content/CTAButton";

type HomeFinalCTAContent = {
  title: string;
  description: string;
  consumerCta: string;
  manufacturerCta: string;
};

type HomeFinalCTAProps = {
  content: HomeFinalCTAContent;
  language: string;
};

export function HomeFinalCTA({ content, language }: HomeFinalCTAProps) {
  return (
    <section className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-8 lg:px-10">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {content.title}
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-foreground sm:text-lg lg:text-xl">
          {content.description}
        </p>

        <div className="mt-12 flex w-full flex-col items-center gap-5">
          <CTAButton href={`/${language}/download`} variant="primary">
            {content.consumerCta}
          </CTAButton>

          <CTAButton href={`/${language}/manufacturer`} variant="secondary">
            {content.manufacturerCta}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
