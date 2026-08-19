import type { Language } from "@/i18n/config";

type LocalizedAsset = Record<Language, string>;

export const experienceAssets = {
  hero: {
    fr: "/images/experience/hero/fr.webp",
    en: "/images/experience/hero/en.webp",
  } satisfies LocalizedAsset,

  card: {
    fr: "/images/experience/card/fr.webp",
    en: "/images/experience/card/en.webp",
  } satisfies LocalizedAsset,

  club: {
    members: "/images/experience/club/members.webp",
    purchase: "/images/experience/club/purchase.webp",
  },

  programs: {
    overview: "/images/experience/programs/overview.webp",

    productCard: {
      fr: "/images/experience/programs/product-card/fr.webp",
      en: "/images/experience/programs/product-card/en.webp",
    } satisfies LocalizedAsset,

    leaderboard: {
      fr: "/images/experience/programs/leaderboard/fr.webp",
      en: "/images/experience/programs/leaderboard/en.webp",
    } satisfies LocalizedAsset,

    programIcons: "/images/experience/programs/program-icons.webp",

    collection: "/images/experience/programs/collection.webp",
  },

  progress: {
    badges: {
      interface: {
        fr: "/images/experience/progress/badges/fr.webp",
        en: "/images/experience/progress/badges/en.webp",
      } satisfies LocalizedAsset,

      pictogram: "/images/experience/progress/badges/pictogram.webp",
    },

    levels: {
      interface: {
        fr: "/images/experience/progress/levels/fr.webp",
        en: "/images/experience/progress/levels/en.webp",
      } satisfies LocalizedAsset,

      pictogram: "/images/experience/progress/levels/pictogram.webp",
    },

    embellishments: "/images/experience/progress/embellishments.webp",
  },
} as const;
