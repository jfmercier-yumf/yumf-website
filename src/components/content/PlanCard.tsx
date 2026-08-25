import Image from "next/image";

import type { PlanLimitKey } from "@/content/manufacturer/planAssets";

type PlanCardLimit = {
  key: PlanLimitKey;
  value: number;
  label: string;
  icon: string;
};

type PlanCardProgram = {
  programType: string;
  label: string;
  icon: string;
};

type PlanCardProps = {
  name: string;
  price: string;
  monthlyLabel?: string;
  icon: string;
  accentColor: string;
  limits: readonly PlanCardLimit[];
  programs: readonly PlanCardProgram[];
  programsLabel: string;
  cta?: {
    label: string;
    href: string;
  };
};

export function PlanCard({
  name,
  price,
  monthlyLabel,
  icon,
  accentColor,
  limits,
  programs,
  programsLabel,
  cta,
}: PlanCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-black/10 bg-white px-6 py-8 sm:px-7 sm:py-9">
      <div className="flex flex-col items-center text-center">
        <Image
          src={icon}
          alt=""
          width={64}
          height={64}
          className="h-14 w-14 object-contain"
        />

        <h3 className="mt-5 text-xl font-bold text-black">{name}</h3>

        <p
          className="mt-4 text-xl font-bold sm:text-2xl"
          style={{ color: accentColor }}
        >
          {price}
          {monthlyLabel ? (
            <span className="ml-2 text-[0.65em] font-normal">
              {monthlyLabel}
            </span>
          ) : null}
        </p>
      </div>

      <div className="my-8 h-px bg-black/10" />

      <div className="space-y-4 lg:min-h-56">
        {limits.map((limit) => (
          <div key={limit.key} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-6 w-6 shrink-0 bg-[#28CC18]"
              style={{
                WebkitMaskImage: `url(${limit.icon})`,
                maskImage: `url(${limit.icon})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />

            <span className="text-base leading-snug text-black">
              {limit.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-base font-bold text-black">{programsLabel}</h4>

        <div className="mt-5 space-y-4">
          {programs.map((program) => (
            <div key={program.programType} className="flex items-start gap-3">
              <Image
                src={program.icon}
                alt=""
                width={24}
                height={24}
                className="mt-0.5 h-6 w-6 shrink-0 object-contain"
              />

              <span className="text-base leading-snug text-black">
                {program.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {cta ? (
        <a href={cta.href} className="mt-auto pt-10">
          <span className="flex min-h-11 items-center justify-center rounded-full border-2 border-[#28cc18] px-5 text-center text-base font-semibold text-[#28cc18] transition-colors hover:bg-[#28cc18] hover:text-white">
            {cta.label}
          </span>
        </a>
      ) : null}
    </article>
  );
}
