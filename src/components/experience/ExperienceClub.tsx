import Image from "next/image";

import { experienceAssets } from "@/content/experience/assets";

type ExperienceClubContent = {
  readonly membership: {
    readonly title: string;
    readonly description: readonly string[];
  };
  readonly joining: {
    readonly title: string;
    readonly description: readonly string[];
  };
};

type ExperienceClubProps = {
  content: ExperienceClubContent;
};

export function ExperienceClub({ content }: ExperienceClubProps) {
  const sections = [
    {
      key: "membership",
      content: content.membership,
      image: experienceAssets.club.members,
      imagePosition: "right",
    },
    {
      key: "joining",
      content: content.joining,
      image: experienceAssets.club.purchase,
      imagePosition: "left",
    },
  ] as const;

  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {sections.map(({ key, content, image, imagePosition }) => {
            const imageFirst = imagePosition === "left";

            return (
              <div
                key={key}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={
                    imageFirst ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }
                >
                  <Image
                    src={image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="mx-auto h-auto w-full max-w-xl object-contain"
                  />
                </div>

                <div
                  className={[
                    "mx-auto max-w-xl text-center",
                    imageFirst ? "order-1 lg:order-2" : "order-1 lg:order-1",
                  ].join(" ")}
                >
                  <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                    {content.title}
                  </h2>

                  <div className="mt-8 space-y-6 text-lg leading-relaxed text-black sm:text-xl lg:mt-10">
                    {content.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
