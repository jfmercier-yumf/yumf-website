export const manufacturerApplicationContentFr = {
  hero: {
    eyebrow: "Rejoignez Yumf",
    title: "Pourquoi une candidature ?",
    paragraphs: [
      "Yumf est conçu exclusivement pour les artisans et les PME agroalimentaires.",
      "Notre mission est d’aider les consommateurs à découvrir les producteurs et à créer des relations durables avec eux. Nous voulons offrir une vitrine où les entreprises artisanales peuvent se démarquer, être découvertes et fidéliser leur clientèle.",
      "Chaque candidature est donc évaluée afin de préserver cet écosystème. Cette démarche nous permet de nous assurer que chaque nouveau Fabricant partage cette vision et contribue à faire de Yumf une communauté dédiée aux artisans et aux PME agroalimentaires.",
      "En rejoignant Yumf, vous intégrez une communauté d’artisans et de PME agroalimentaires qui partagent la même volonté de faire découvrir leurs produits et de bâtir des relations durables avec leurs clients.",
    ],
  },

  process: {
    title: "Comment fonctionne la candidature ?",
    paragraphs: [
      "Déposer une candidature ne prend que quelques minutes.",
      "Notre équipe analyse chaque demande afin de s’assurer que l’entreprise correspond à la mission de Yumf et répond aux critères d’admissibilité réservés aux artisans et aux PME agroalimentaires.",
      "Vous recevrez ensuite une réponse par courriel vous informant de notre décision.",
      "Lorsqu’une candidature est acceptée, votre Club est automatiquement créé dans Yumf. Le membre ayant soumis la demande devient le premier administrateur du Club et peut immédiatement commencer à le personnaliser, créer ses Programmes de fidélité, ajouter les membres de son équipe et configurer ses Produits participants ainsi que ses Récompenses.",
      "Votre Club demeure privé pendant toute cette étape. Il sera publié dans l’application uniquement lorsque sa configuration sera terminée et qu’il sera prêt à accueillir ses premiers Membres.",
    ],

    success: {
      title: "Votre Club est maintenant accessible.",
      description: "Vous pouvez commencer sa configuration.",
    },
  },

  application: {
    title: "Déposez votre candidature",
    description:
      "Quelques minutes suffisent pour présenter votre entreprise. Notre équipe analysera votre candidature et vous répondra par courriel.",

    fields: {
      memberNumber: {
        label: "Numéro de membre Yumf",
        placeholder: "YUMF-123-456-789",
      },

      companyName: {
        label: "Nom de l’entreprise",
        placeholder: "Saisissez le nom de l’entreprise",
      },

      email: {
        label: "Adresse de courriel de l’entreprise",
        placeholder: "Saisissez l’adresse courriel de l’entreprise",
      },

      phone: {
        label: "Téléphone de l’entreprise",
        placeholder: "Saisissez votre numéro de téléphone entreprise",
      },

      address: {
        label: "Adresse complète de l’entreprise",
        placeholder: "Saisissez l’adresse complète de votre entreprise",
      },

      about: {
        label: "Parlez-nous de votre entreprise",
        placeholder:
          "Décrivez votre entreprise, vos produits et ce qui vous motive à rejoindre Yumf.",
      },

      referral: {
        label: "Comment avez-vous entendu parler de Yumf ?",
        optional: "(optionnel)",
        placeholder: "Sélectionnez une option",
      },

      security: {
        label: "Vérification de sécurité",
        placeholder: "Vérifiez que vous êtes un humain",
      },
    },

    memberNumberHelp: {
      text: "Vous n’avez pas encore de numéro de membre Yumf ?",
      cta: "Téléchargez Yumf",
    },

    submit: "Déposer ma candidature",

    consent: {
      prefix: "En soumettant ce formulaire, vous acceptez les",
      terms: "Conditions d’utilisation",
      middle: "et la",
      privacy: "Politique de confidentialité",
      suffix:
        "applicables aux Fabricants, et vous autorisez Yumf à communiquer avec vous par courriel au sujet de votre candidature et, le cas échéant, de la création et de la gestion de votre Club.",
    },

    confidentiality: {
      title: "Votre candidature demeure confidentielle.",
      description:
        "Les renseignements transmis servent uniquement à l’analyse de votre candidature. Ils ne seront jamais communiqués à des tiers sans votre consentement.",
    },
  },
} as const;
