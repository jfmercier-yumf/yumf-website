import Image from "next/image";

import { BenefitItem } from "@/components/content/BenefitItem";
import { manufacturerAssets } from "@/content/manufacturer/assets";

type ManufacturerMembersProps = {
  content: {
    title: string;
    description: string;
    features: {
      directory: {
        title: string;
        description: readonly string[];
      };
      club: {
        title: string;
        description: readonly string[];
      };
      member: {
        title: string;
        description: readonly string[];
      };
    };
  };
  language: "fr" | "en";
};

export function ManufacturerMembers({
  content,
  language,
}: ManufacturerMembersProps) {
  const features = [
    {
      key: "directory",
      image: manufacturerAssets.members.directory[language],
      icon: "/icons/features/members.svg",
      content: content.features.directory,
    },
    {
      key: "club",
      image: manufacturerAssets.members.analytics[language],
      icon: "/icons/features/dashboard.svg",
      content: content.features.club,
    },
    {
      key: "member",
      image: manufacturerAssets.members.details[language],
      icon: "/icons/features/member.svg",
      content: content.features.member,
    },
  ] as const;

  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black sm:text-xl">
            {content.description}
          </p>
        </div>

        {/* Mobile / tablette */}
        <div className="mt-16 space-y-20 lg:hidden">
          {features.map((feature) => (
            <div key={feature.key}>
              <div className="flex justify-center">
                <Image
                  src={feature.image}
                  alt=""
                  width={800}
                  height={1400}
                  className="h-auto w-full max-w-90 object-contain sm:max-w-100"
                />
              </div>

              <div className="mx-auto mt-12 w-full max-w-md">
                <BenefitItem
                  icon={feature.icon}
                  title={feature.content.title}
                  description={feature.content.description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="mt-60 hidden lg:block">
          <div className="relative mx-auto h-155 max-w-5xl">
            {/* Membres */}
            <div className="absolute bottom-0 left-0 z-10 flex w-[38%] justify-end">
              <Image
                src={manufacturerAssets.members.directory[language]}
                alt=""
                width={800}
                height={1400}
                className="h-auto w-full max-w-90 object-contain"
              />
            </div>

            {/* Analytics - téléphone principal */}
            <div className="absolute bottom-0 left-1/2 z-20 flex w-[42%] -translate-x-1/2 translate-y-8 justify-center">
              <Image
                src={manufacturerAssets.members.analytics[language]}
                alt=""
                width={800}
                height={1400}
                className="h-auto w-full max-w-102.5 object-contain"
              />
            </div>

            {/* Membre */}
            <div className="absolute bottom-0 right-0 z-10 flex w-[38%] justify-start">
              <Image
                src={manufacturerAssets.members.details[language]}
                alt=""
                width={800}
                height={1400}
                className="h-auto w-full max-w-90 object-contain"
              />
            </div>
          </div>

          <div className="mt-28 grid grid-cols-3 gap-0">
            <div className="px-5 xl:px-7">
              <BenefitItem
                icon="/icons/features/members.svg"
                title={content.features.directory.title}
                description={content.features.directory.description}
              />
            </div>

            <div className="px-5 xl:px-7">
              <BenefitItem
                icon="/icons/features/dashboard.svg"
                title={content.features.club.title}
                description={content.features.club.description}
              />
            </div>

            <div className="px-5 xl:px-7">
              <BenefitItem
                icon="/icons/features/member.svg"
                title={content.features.member.title}
                description={content.features.member.description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
