import { homeAssets } from "@/content/home/assets";

import { PageContainer } from "@/components/layout/PageContainer";
import { StepCard } from "@/components/content/StepCard";

type HomeJourneyContent = {
  title: string;
  description: string;
  steps: readonly {
    number: number;
    title: string;
    description: string;
  }[];
  footer: {
    title: string;
    description: string;
  };
};

type HomeJourneyProps = {
  content: HomeJourneyContent;
};

export function HomeJourney({ content }: HomeJourneyProps) {
  const images = [
    homeAssets.journey.purchase,
    homeAssets.journey.scan,
    homeAssets.journey.points,
    homeAssets.journey.reward,
    homeAssets.journey.fulfillment,
  ] as const;

  return (
    <section className="border-t border-black/10 bg-white py-20 md:py-28">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight font-bold tracking-tight text-neutral-950 md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-8 whitespace-pre-line text-base leading-7 text-neutral-900 md:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {content.steps.map((step, index) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              image={images[index]}
              className={
                index < 3
                  ? "lg:col-span-2"
                  : index === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2"
              }
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <h3 className="text-xl font-bold text-neutral-950">
            {content.footer.title}
          </h3>

          <p className="mt-5 text-base leading-7 text-neutral-900 md:text-lg">
            {content.footer.description}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
