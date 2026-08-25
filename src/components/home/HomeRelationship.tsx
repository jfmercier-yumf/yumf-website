import { FeatureRow } from "@/components/content/FeatureRow";
import { PageContainer } from "@/components/layout/PageContainer";
import { homeAssets } from "@/content/home/assets";

type HomeRelationshipContent = {
  title: string;
  description: string;
  cards: readonly {
    title: string;
    description: string;
  }[];
};

type HomeRelationshipProps = {
  content: HomeRelationshipContent;
};

export function HomeRelationship({ content }: HomeRelationshipProps) {
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
            image={homeAssets.relationship.product}
            title={content.cards[0].title}
            description={content.cards[0].description}
          />

          <FeatureRow
            image={homeAssets.relationship.encounter}
            imagePosition="right"
            title={content.cards[1].title}
            description={content.cards[1].description}
          />

          <FeatureRow
            image={homeAssets.relationship.loyalty}
            title={content.cards[2].title}
            description={content.cards[2].description}
          />
        </div>
      </PageContainer>
    </section>
  );
}
