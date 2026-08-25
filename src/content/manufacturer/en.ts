export const manufacturerContentEn = {
  hero: {
    title: "Your products create customers. Your Club creates members.",
    description:
      "Every product sold is an opportunity to welcome a new member into your Club. Yumf then turns that relationship into lasting loyalty.",
    cta: "Submit my application",

    benefits: {
      salesChannels: {
        title: "All your sales channels",
        description: [
          "Recognize purchases made at retailers or directly at your points of sale.",
        ],
      },

      programs: {
        title: "Programs that build loyalty",
        description: [
          "Choose the programs that reflect how you want to reward and engage your members.",
        ],
      },

      members: {
        title: "Members you get to know",
        description: [
          "Understand your members’ purchasing habits and get to know them better.",
        ],
      },

      team: {
        title: "A team that works together",
        description: [
          "Invite your team and manage your Club together, with access tailored to each person’s role.",
        ],
      },
    },
  },

  club: {
    title: "Bring your Club to life",
    description:
      "Add your products, create your programs, and choose the rewards that will bring your Club to life.",

    features: {
      products: {
        title: "Your products",
        description: [
          "Define the products you want to feature and have recognized in your Club.",
          "Associate each format with the retailers that carry it. Yumf also lets you create these associations at the banner or chain level to simplify configuration.",
        ],
      },

      programs: {
        title: "Your programs",
        description: [
          "Create loyalty experiences that match your goals and the way you want to reward your members.",
          "Every program is fully configurable. Define its duration, rules, notifications, and how it works to create an experience perfectly suited to your community.",
        ],
      },

      rewards: {
        title: "Your rewards",
        description: [
          "Reward your members with benefits that give them a reason to come back.",
          "Add products, gifts, gift cards, discounts, experiences, or other benefits, then define the available quantities and the criteria required to earn them.",
        ],
      },
    },

    footer:
      "Your Club is ready to turn every purchase into a lasting relationship.",
  },

  engagement: {
    title:
      "Every purchase becomes an opportunity to strengthen the relationship",
    description:
      "Yumf turns every purchase into a lasting relationship through purchase recognition, the application of your programs, and reward management.",
  },

  team: {
    title: "Your team, one Club",
    description:
      "Invite your employees, assign them roles, and delegate day-to-day operations. Everyone gets access suited to their responsibilities.",
  },

  members: {
    title: "Get to know your members",
    description:
      "Discover who your members are, follow the growth of your Club, and explore dashboards that help you make better decisions.",

    features: {
      directory: {
        title: "Your members",
        description: [
          "Identify your most engaged members and discover their level of appreciation and their progress.",
        ],
      },

      club: {
        title: "Your Club",
        description: [
          "Discover which products generate the most interest and explore insights that help you better understand your community.",
        ],
      },

      member: {
        title: "Every member",
        description: [
          "Access each member’s complete profile, including their purchases, rewards, history, and progress, to provide a more personalized experience.",
        ],
      },
    },
  },

  plans: {
    title: "Your Club evolves. Your plan does too.",
    description:
      "Start for free. Move to the next level only when your Club grows. Each plan increases your capacity and unlocks new loyalty programs.",
    monthly: "/ month",

    free: "Free",
    start: "Start",
    upTo: "Up to",

    programs: {
      singular: "Included program",
      plural: "Included programs",
    },
    limits: {
      MEMBER_MAX_COUNT: {
        singular: "member",
        plural: "members",
      },
      USER_MAX_COUNT: {
        singular: "user",
        plural: "users",
      },
      POINT_OF_SALE_MAX_COUNT: {
        singular: "point of sale",
        plural: "points of sale",
      },
      PRODUCT_MAX_COUNT: {
        singular: "product",
        plural: "products",
      },
      PRODUCT_FORMAT_MAX_PRODUCT_FORMAT_PER_PRODUCT: {
        singular: "format per product",
        plural: "formats per product",
      },
      PRODUCT_FORMAT_PROMOTION_MAX_ACTIVE_PRODUCT_FORMAT_PROMOTION: {
        singular: "active promotion",
        plural: "active promotions",
      },
      BONUS_POINTS_MAX_MONTHLY_BONUS_POINTS: {
        singular: "bonus point",
        plural: "bonus points",
      },
    },
    note: "Bonus points renew every month.",

    custom: {
      title: "Have specific needs?",
      description: [
        "Do you have more members, multiple brands, or specific requirements?",
        "We’ll be happy to build a plan tailored to your business.",
      ],
      cta: "Contact us",
    },
  },

  faq: {
    title: "Still have a few questions?",
    items: [
      {
        question: "Who can join Yumf?",
        answer:
          "Yumf is designed for producers, artisans, and food businesses that want to build lasting relationships with the people who choose their products.",
      },
      {
        question: "Why do I need to submit an application?",
        answer:
          "Yumf is designed for artisans and small and medium-sized food businesses. Each application is reviewed to ensure the business aligns with this mission and contributes to building a community dedicated to artisans and food SMEs that want to introduce people to their products and build lasting relationships with their customers.",
      },
      {
        question: "Can I start for free?",
        answer: "Yes. Every Club starts on the Free plan, with no time limit.",
      },
      {
        question: "Can I change plans later?",
        answer:
          "Yes. You can change your plan at any time as your Club’s needs evolve.",
      },
      {
        question: "Do I need to sell online?",
        answer:
          "No. Yumf works just as well for products sold through retailers as it does for direct sales.",
      },
      {
        question: "How long does it take to open a Club?",
        answer:
          "It only takes a few minutes to submit your application. Once approved, your Club is ready to be configured before publication.",
      },
    ],
  },

  community: {
    title: "They’re already growing their communities",
    description:
      "Artisanal food businesses are already growing their communities with Yumf.",
  },

  finalCta: {
    title: "Start building your Club today",
    description:
      "Join a network where every purchase helps build a lasting relationship with the people who truly choose your products.",
    cta: "Submit my application",
  },
} as const;
