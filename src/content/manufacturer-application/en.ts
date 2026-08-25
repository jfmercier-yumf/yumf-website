export const manufacturerApplicationContentEn = {
  hero: {
    eyebrow: "Join Yumf",
    title: "Why an application?",
    paragraphs: [
      "Yumf is designed exclusively for artisans and small and medium-sized agri-food businesses.",
      "Our mission is to help consumers discover producers and build lasting relationships with them. We want to provide a place where artisanal businesses can stand out, be discovered, and build customer loyalty.",
      "Each application is therefore reviewed to preserve this ecosystem. This process allows us to ensure that every new Manufacturer shares this vision and contributes to making Yumf a community dedicated to artisans and small and medium-sized agri-food businesses.",
      "By joining Yumf, you become part of a community of artisans and small and medium-sized agri-food businesses that share the same desire to showcase their products and build lasting relationships with their customers.",
    ],
  },

  process: {
    title: "How does the application process work?",
    paragraphs: [
      "Submitting an application takes only a few minutes.",
      "Our team reviews each application to ensure that the business aligns with Yumf’s mission and meets the eligibility criteria reserved for artisans and small and medium-sized agri-food businesses.",
      "You will then receive an email informing you of our decision.",
      "Once an application is approved, your Club is automatically created in Yumf. The member who submitted the application becomes the Club’s first administrator and can immediately begin customizing it, creating Loyalty Programs, adding team members, and configuring Participating Products and Rewards.",
      "Your Club remains private throughout this process. It will only be published in the app once its configuration is complete and it is ready to welcome its first Members.",
    ],

    success: {
      title: "Your Club is now accessible.",
      description: "You can start configuring it.",
    },
  },

  application: {
    title: "Submit your application",
    description:
      "It only takes a few minutes to tell us about your business. Our team will review your application and respond by email.",

    fields: {
      memberNumber: {
        label: "Yumf member number",
        placeholder: "YUMF-123-456-789",
      },

      companyName: {
        label: "Business name",
        placeholder: "Enter your business name",
      },

      email: {
        label: "Business email address",
        placeholder: "Enter your business email address",
      },

      phone: {
        label: "Business phone number",
        placeholder: "Enter your business phone number",
      },

      address: {
        label: "Full business address",
        placeholder: "Enter your full business address",
      },

      about: {
        label: "Tell us about your business",
        placeholder:
          "Describe your business, your products, and what motivates you to join Yumf.",
      },

      referral: {
        label: "How did you hear about Yumf?",
        optional: "(optional)",
        placeholder: "Select an option",
      },

      security: {
        label: "Security verification",
        placeholder: "Verify that you are human",
      },
    },

    referral: {
      label: "How did you hear about Yumf?",
      optional: "(optional)",
      placeholder: "Select an option",
      options: [
        { value: "SOCIAL_MEDIA", label: "Social media" },
        { value: "GOOGLE_SEARCH", label: "Google search" },
        { value: "FRIEND_OR_COLLEAGUE", label: "Friend or colleague" },
        { value: "EVENT_OR_PUBLIC_MARKET", label: "Event or public market" },
        { value: "OTHER_ARTISAN", label: "Another artisan" },
        { value: "ARTICLE_OR_MEDIA", label: "Article or media" },
        { value: "OTHER", label: "Other" },
      ],
    },

    memberNumberHelp: {
      text: "Don’t have a Yumf member number yet?",
      cta: "Download Yumf",
    },

    submit: "Submit my application",

    consent: {
      prefix: "By submitting this form, you agree to the",
      terms: "Terms of Use",
      middle: "and the",
      privacy: "Privacy Policy",
      suffix:
        "applicable to Manufacturers, and you authorize Yumf to contact you by email regarding your application and, where applicable, the creation and management of your Club.",
    },

    confidentiality: {
      title: "Your application remains confidential.",
      description:
        "The information you provide is used solely to review your application. It will never be shared with third parties without your consent.",
    },
  },
} as const;
