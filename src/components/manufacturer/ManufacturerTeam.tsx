import Image from "next/image";

import { manufacturerAssets } from "@/content/manufacturer/assets";

type ManufacturerTeamProps = {
  content: {
    title: string;
    description: string;
  };
  language: "fr" | "en";
};

function HighlightClub({ text }: { text: string }) {
  const parts = text.split("Club");

  if (parts.length === 1) {
    return text;
  }

  return (
    <>
      {parts[0]}
      <span className="text-[#2bd20f]">Club</span>
      {parts.slice(1).join("Club")}
    </>
  );
}

export function ManufacturerTeam({ content, language }: ManufacturerTeamProps) {
  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Illustration + contenu */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={manufacturerAssets.team.members}
              alt=""
              width={1000}
              height={800}
              className="h-auto w-full max-w-105 object-contain sm:max-w-115 lg:max-w-125"
            />

            <div className="mt-10 max-w-xl sm:mt-12">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                <HighlightClub text={content.title} />
              </h2>

              <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-black sm:text-xl">
                {content.description}
              </p>
            </div>
          </div>

          {/* Desktop: interface à droite */}
          <div className="hidden justify-center lg:flex lg:justify-start">
            <Image
              src={manufacturerAssets.team.userManagement[language]}
              alt=""
              width={800}
              height={1400}
              className="h-auto w-full max-w-105 object-contain"
            />
          </div>
        </div>

        {/* Mobile/tablette: interface après le texte */}
        <div className="mt-16 flex justify-center lg:hidden">
          <Image
            src={manufacturerAssets.team.userManagement[language]}
            alt=""
            width={800}
            height={1400}
            className="h-auto w-full max-w-90 object-contain sm:max-w-100"
          />
        </div>
      </div>
    </section>
  );
}
