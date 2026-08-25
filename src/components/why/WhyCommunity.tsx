import Image from "next/image";
import { CTAButton } from "@/components/content/CTAButton";
import { whyAssets } from "@/content/why/assets";
import type { whyContentFr } from "@/content/why/fr";
import type { whyContentEn } from "@/content/why/en";

type WhyCommunityContent =
  typeof whyContentFr.community | typeof whyContentEn.community;

type WhyCommunityProps = {
  content: WhyCommunityContent;
};

export function WhyCommunity({ content }: WhyCommunityProps) {
  return (
    <section className="border-b border-neutral-200 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <div className="mt-8 space-y-1 text-base leading-7 text-neutral-900 sm:text-lg sm:leading-8">
            {content.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative mt-14 w-full overflow-hidden sm:mt-16">
          <Image
            src={whyAssets.community}
            alt=""
            width={1600}
            height={900}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-10 flex max-w-2xl flex-col items-center sm:mt-12">
          <p className="text-base leading-7 text-neutral-900 sm:text-lg sm:leading-8">
            {content.footer}
          </p>

          <div className="mt-8">
            <CTAButton href="/why" variant="secondary">
              {content.cta}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
