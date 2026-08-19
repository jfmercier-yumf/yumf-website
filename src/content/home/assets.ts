import type { Language } from "@/i18n/config";

type LocalizedAsset = Record<Language, string>;

export const homeAssets = {
  hero: "/images/home/hero.webp",

  relationship: {
    product: "/images/home/relationship/product.webp",
    encounter: "/images/home/relationship/encounter.webp",
    loyalty: "/images/home/relationship/loyalty.webp",
  },

  journey: {
    purchase: "/images/home/journey/purchase.webp",
    scan: "/images/home/journey/scan.webp",
    points: "/images/home/journey/points.webp",
    reward: "/images/home/journey/reward.webp",
    fulfillment: "/images/home/journey/fulfillment-collect.webp",
  },

  network: "/images/home/network.webp",

  // Exemple d'une interface contenant du texte.
  appInterface: {
    fr: "/images/home/app-interface-fr.webp",
    en: "/images/home/app-interface-en.webp",
  } satisfies LocalizedAsset,
} as const;
