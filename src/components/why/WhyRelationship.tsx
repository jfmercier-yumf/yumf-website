import { FeatureRow } from "@/components/content/FeatureRow";
import { PageContainer } from "@/components/layout/PageContainer";
import { whyAssets } from "@/content/why/assets";

type WhyRelationshipItem = {
  number: number;
  eyebrow: string;
  title: string;
  description: readonly string[];
};

type WhyRelationshipContent = {
  title: string;
  description: string;
  items: {
    choice: WhyRelationshipItem;
    link: WhyRelationshipItem;
    observation: WhyRelationshipItem;
  };
};

type WhyRelationshipProps = {
  content: WhyRelationshipContent;
};

export function WhyRelationship({ content }: WhyRelationshipProps) {
  return (
    <section className="border-t border-black/10 bg-white">
      <PageContainer className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight font-bold tracking-tight text-neutral-950 md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-8 text-base leading-7 text-neutral-900 md:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-24 lg:space-y-28">
          <FeatureRow
            image={whyAssets.relationship.choice}
            marker={{
              type: "index",
              value: content.items.choice.number,
              label: content.items.choice.eyebrow,
            }}
            title={content.items.choice.title}
            description={content.items.choice.description.join("\n\n")}
          />

          <FeatureRow
            image={whyAssets.relationship.link}
            imagePosition="right"
            marker={{
              type: "index",
              value: content.items.link.number,
              label: content.items.link.eyebrow,
            }}
            title={content.items.link.title}
            description={content.items.link.description.join("\n\n")}
          />

          <FeatureRow
            image={whyAssets.relationship.observation}
            marker={{
              type: "index",
              value: content.items.observation.number,
              label: content.items.observation.eyebrow,
            }}
            title={content.items.observation.title}
            description={content.items.observation.description.join("\n\n")}
          />
        </div>
      </PageContainer>
    </section>
  );
}
