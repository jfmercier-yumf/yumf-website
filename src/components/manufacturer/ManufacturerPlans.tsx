import Image from "next/image";

import { PlanCard } from "@/components/content/PlanCard";
import { manufacturerAssets } from "@/content/manufacturer/assets";
import {
  planIcons,
  planLimitIcons,
  planProgramPictograms,
  type PlanLimitKey,
  type PlanProgramKey,
} from "@/content/manufacturer/planAssets";

import subscriptionPlansFixture from "@/content/manufacturer/fixtures/retrieveSubscriptionPlans.json";
import planLimitsFixture from "@/content/manufacturer/fixtures/retrievePlanLimits.json";
import planProgramsFixture from "@/content/manufacturer/fixtures/retrievePlanPrograms.json";

type Language = "fr" | "en";

type LimitTranslation = {
  singular: string;
  plural: string;
};

type ManufacturerPlansProps = {
  content: {
    title: string;
    description: string;
    monthly: string;
    free: string;
    start: string;
    upTo: string;
    programs: {
      singular: string;
      plural: string;
    };
    limits: Record<string, LimitTranslation>;
    note: string;
    custom: {
      title: string;
      description: readonly string[];
      cta: string;
    };
  };
  language: Language;
};

type ProgramFixture = {
  id: number;
  name: string;
  translationKey: string;
  displayOrder: number;
  programType: string;
  translations: readonly {
    translationKey: string;
    value: string;
  }[];
};

const limitOrder: readonly PlanLimitKey[] = [
  "MEMBER_MAX_COUNT",
  "USER_MAX_COUNT",
  "POINT_OF_SALE_MAX_COUNT",
  "PRODUCT_MAX_COUNT",
  "PRODUCT_FORMAT_MAX_PRODUCT_FORMAT_PER_PRODUCT",
  "BONUS_POINTS_MAX_MONTHLY_BONUS_POINTS",
];

/*
 * Temporary presentation data.
 *
 * The backend will eventually become the source of truth for
 * plan names and prices.
 */
const temporaryPlanMetadata = {
  1: {
    name: {
      fr: "J’y goûte",
      en: "I Taste It",
    },
    monthlyPrice: null,
    accentColor: "#28CC18",
  },

  2: {
    name: {
      fr: "J’aime ça",
      en: "I Like It",
    },
    monthlyPrice: 69.99,
    accentColor: "#F5B400",
  },

  3: {
    name: {
      fr: "J’adore ça",
      en: "I Love It",
    },
    monthlyPrice: 149.99,
    accentColor: "#2647FF",
  },

  4: {
    name: {
      fr: "J’en raffole!",
      en: "I'm Crazy About It!",
    },
    monthlyPrice: 249.99,
    accentColor: "#F72585",
  },
} as const;

function HighlightClub({ text }: { text: string }) {
  const [before, after] = text.split("Club");

  if (after === undefined) {
    return text;
  }

  return (
    <>
      {before}
      <span className="text-[#28CC18]">Club</span>
      {after}
    </>
  );
}

function formatNumber(value: number, language: Language) {
  return new Intl.NumberFormat(language === "fr" ? "fr-CA" : "en-CA").format(
    value,
  );
}

function formatPrice(
  value: number | null,
  language: Language,
  freeLabel: string,
) {
  if (value === null) {
    return freeLabel;
  }

  const formattedPrice = new Intl.NumberFormat(
    language === "fr" ? "fr-CA" : "en-CA",
    {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  ).format(value);

  return `${formattedPrice}`;
}

function flattenLimits(limits: Record<string, Record<string, number>>) {
  return Object.entries(limits).flatMap(([entity, entityLimits]) =>
    Object.entries(entityLimits).map(([limit, value]) => ({
      key: `${entity}_${limit}`,
      value,
    })),
  );
}

function formatLimitLabel({
  key,
  value,
  content,
  language,
}: {
  key: PlanLimitKey;
  value: number;
  content: ManufacturerPlansProps["content"];
  language: Language;
}) {
  const translation = content.limits[key];

  if (!translation) {
    return `${formatNumber(value, language)} ${key}`;
  }

  const label = value === 1 ? translation.singular : translation.plural;

  const formattedValue = formatNumber(value, language);

  if (key === "MEMBER_MAX_COUNT") {
    return `${content.upTo} ${formattedValue} ${label}`;
  }

  return `${formattedValue} ${label}`;
}

function getProgramTranslation(program: ProgramFixture, language: Language) {
  /*
   * Temporary behavior matching the current fixture/backend response:
   * translations[0] = EN
   * translations[1] = FR
   *
   * Once the backend resolves translations using language directly,
   * this helper can disappear.
   */
  const translationIndex = language === "fr" ? 1 : 0;

  return program.translations[translationIndex]?.value ?? program.name;
}

function getSubscriptionPlanDisplayOrder(subscriptionPlanId: number) {
  const plan = subscriptionPlansFixture.plans.find(
    (item) => Number(item.subscriptionPlanId) === subscriptionPlanId,
  );

  return plan?.displayOrder ?? subscriptionPlanId;
}

function getCumulativePrograms(subscriptionPlanId: number) {
  const currentDisplayOrder =
    getSubscriptionPlanDisplayOrder(subscriptionPlanId);

  const programs = planProgramsFixture.plans
    .filter((plan) => {
      const planDisplayOrder = getSubscriptionPlanDisplayOrder(
        Number(plan.subscriptionPlanId),
      );

      return planDisplayOrder <= currentDisplayOrder;
    })
    .flatMap((plan) => plan.programs as ProgramFixture[])
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return Array.from(
    new Map(programs.map((program) => [program.id, program])).values(),
  );
}

export function ManufacturerPlans({
  content,
  language,
}: ManufacturerPlansProps) {
  const plans = subscriptionPlansFixture.plans
    .filter((plan) => Number(plan.subscriptionPlanId) <= 4)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((plan) => {
      const subscriptionPlanId = Number(
        plan.subscriptionPlanId,
      ) as keyof typeof temporaryPlanMetadata;

      const metadata = temporaryPlanMetadata[subscriptionPlanId];

      const limitFixture = planLimitsFixture.plans.find(
        (item) => Number(item.subscriptionPlanId) === subscriptionPlanId,
      );

      const flattenedLimits = flattenLimits(
        (limitFixture?.limits ?? {}) as Record<string, Record<string, number>>,
      );

      const limits = limitOrder.flatMap((key) => {
        const limit = flattenedLimits.find((item) => item.key === key);

        if (!limit || limit.value === 0) {
          return [];
        }

        return [
          {
            key,
            value: limit.value,
            label: formatLimitLabel({
              key,
              value: limit.value,
              content,
              language,
            }),
            icon: planLimitIcons[key],
          },
        ];
      });

      const programs = getCumulativePrograms(subscriptionPlanId).flatMap(
        (program) => {
          const programType = program.programType as PlanProgramKey;

          const icon = planProgramPictograms[programType];

          if (!icon) {
            return [];
          }

          return [
            {
              programType,
              label: getProgramTranslation(program, language),
              icon,
            },
          ];
        },
      );

      return {
        subscriptionPlanId,
        name: metadata.name[language],
        price: formatPrice(metadata.monthlyPrice, language, content.free),
        accentColor: metadata.accentColor,
        icon: planIcons[subscriptionPlanId],
        limits,
        programs,
      };
    });

  return (
    <section className="border-t border-black/10 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            <HighlightClub text={content.title} />
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black sm:text-xl">
            {content.description}
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.subscriptionPlanId}
              name={plan.name}
              price={plan.price}
              monthlyLabel={
                plan.subscriptionPlanId === 1 ? undefined : content.monthly
              }
              icon={plan.icon}
              accentColor={plan.accentColor}
              limits={plan.limits}
              programs={plan.programs}
              programsLabel={
                plan.programs.length === 1
                  ? content.programs.singular
                  : content.programs.plural
              }
              cta={
                plan.subscriptionPlanId === 1
                  ? {
                      label: content.start,
                      href: `/${language}/manufacturer/apply`,
                    }
                  : undefined
              }
            />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="h-5 w-5 shrink-0 bg-[#28CC18]"
            style={{
              WebkitMaskImage: "url(/icons/info.svg)",
              maskImage: "url(/icons/info.svg)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />

          <p className="text-center text-sm leading-relaxed text-black sm:text-base">
            {content.note}
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl items-center gap-12 sm:mt-24 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={manufacturerAssets.plans.custom}
              alt=""
              width={900}
              height={700}
              className="h-auto w-full max-w-xl object-contain"
            />
          </div>

          <div className="mx-auto max-w-xl text-center">
            <h3 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
              {content.custom.title}
            </h3>

            <div className="mt-8 space-y-2 text-lg leading-relaxed text-black">
              {content.custom.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <a
              href="#"
              className="mx-auto mt-10 flex min-h-12 w-full max-w-xs items-center justify-center rounded-full border-2 border-[#28CC18] px-6 text-center text-base font-semibold text-[#28CC18] transition-colors hover:bg-[#28CC18] hover:text-white"
            >
              {content.custom.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
