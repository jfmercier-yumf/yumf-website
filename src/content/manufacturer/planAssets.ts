export const planIcons = {
  1: "/images/plans/plan-free.webp",
  2: "/images/plans/plan-i-like-it.webp",
  3: "/images/plans/plan-i-adore-it.webp",
  4: "/images/plans/plan-crazy-about-it.webp",
} as const;

export const planLimitIcons = {
  MEMBER_MAX_COUNT: "/icons/plan-limits/members.svg",
  USER_MAX_COUNT: "/icons/plan-limits/users.svg",
  POINT_OF_SALE_MAX_COUNT: "/icons/plan-limits/point-of-sale.svg",
  PRODUCT_MAX_COUNT: "/icons/plan-limits/product.svg",
  PRODUCT_FORMAT_MAX_PRODUCT_FORMAT_PER_PRODUCT:
    "/icons/plan-limits/product-format.svg",
  BONUS_POINTS_MAX_MONTHLY_BONUS_POINTS: "/icons/plan-limits/bonus-points.svg",
} as const;

export const planProgramPictograms = {
  GIFT: "/images/programs/program-gift.webp",
  TOMBOLA: "/images/programs/program-tombola.webp",
  BONUS_POINTS_DIRECT_SALE:
    "/images/programs/program-bonus-points-direct-sale.webp",
  BONUS_POINTS_BIRTHDAY: "/images/programs/program-bonus-points-birthday.webp",
  PRODUCT_CARD: "/images/programs/program-product-card.webp",
  LEADERBOARD: "/images/programs/program-leaderboard.webp",
  DISCOUNT_CODE: "/images/programs/program-discount-code.webp",
  GIFT_CARD: "/images/programs/program-gift-card.webp",
  STAMP: "/images/programs/program-stamp.webp",
} as const;

export type PlanKey = keyof typeof planIcons;
export type PlanLimitKey = keyof typeof planLimitIcons;
export type PlanProgramKey = keyof typeof planProgramPictograms;
