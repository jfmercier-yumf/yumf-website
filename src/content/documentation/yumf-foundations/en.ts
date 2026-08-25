import type { LocalizedDocument } from "@/types/documentation";

export const yumfFoundationsEn: LocalizedDocument = {
  title: "The Foundations of Yumf",
  subtitle: "Architectural Principles",
  introductionTitle: "The Foundations of Yumf",
  introduction: [
    {
      type: "paragraph",
      text: "The previous documents presented the vision that gave rise to Yumf and the philosophy that guides its development.",
    },
    {
      type: "paragraph",
      text: "This document represents the next step.",
    },
    {
      type: "paragraph",
      text: "It translates that philosophy into a set of fundamental principles that govern the entire Platform.",
    },
    {
      type: "paragraph",
      text: "These principles describe neither features nor implementation choices.",
    },
    {
      type: "paragraph",
      text: "They represent the design laws to which every evolution of Yumf must remain faithful.",
    },
    {
      type: "paragraph",
      text: "They explain why the architecture is organized this way, why some concepts are permanent while others are temporary, where the relationship between a Manufacturer and a Consumer begins, and how that relationship can evolve without losing its coherence.",
    },
    {
      type: "paragraph",
      text: "They therefore form the intellectual framework of Yumf.",
    },
  ],
  parts: [
    {
      id: "lois-fondamentales",
      number: "1",
      title: "The Fundamental Laws",
      introduction: [
        {
          type: "paragraph",
          text: "The principles presented in this first part constitute the fundamental laws on which Yumf’s architecture is built.",
        },
        {
          type: "paragraph",
          text: "They describe neither features, screens, nor implementation choices. They define the design rules that govern the entire Platform.",
        },
        {
          type: "paragraph",
          text: "Every data model, every service, every existing or future feature, and every architectural decision should be explainable through these principles.",
        },
        {
          type: "paragraph",
          text: "They form the intellectual framework that ensures Yumf remains coherent as it evolves.",
        },
        {
          type: "paragraph",
          text: "The principles that follow therefore do not describe what the Platform does.",
        },
        {
          type: "paragraph",
          text: "They explain why it is designed this way.",
        },
      ],
      sections: [
        {
          id: "relation-appartient-club",
          number: "1",
          title: "The Relationship Belongs to the Club",
          content: [
            {
              type: "paragraph",
              text: "Every lasting relationship between a Manufacturer and the Consumers who choose its products belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "This relationship does not begin with a Program.",
            },
            {
              type: "paragraph",
              text: "It begins when a Consumer discovers a product, places their trust in it, and completes a first Eligible Purchase.",
            },
            {
              type: "paragraph",
              text: "It exists before a Program is created and can continue to develop long after a Program has ended.",
            },
            {
              type: "paragraph",
              text: "That is why, in Yumf, the relationship belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "The Club is the permanent space where this relationship can begin, grow, and evolve over time. It brings Members together, hosts Participating Products, and preserves the history of this relationship independently of the initiatives that animate it.",
            },
            {
              type: "paragraph",
              text: "Programs, by contrast, exist only to recognize, encourage, or animate certain behaviours for a given period. They can be created, modified, or withdrawn without calling into question the existence of the Club or the relationship that connects a Manufacturer with its Community.",
            },
            {
              type: "paragraph",
              text: "This distinction is fundamental.",
            },
            {
              type: "paragraph",
              text: "If the relationship belonged to Programs, each new Program would create a new relationship and each completed Program would bring part of that relationship to an end.",
            },
            {
              type: "paragraph",
              text: "By contrast, when the relationship belongs to the Club, Programs become temporary expressions of a relationship that existed before them and will outlast them.",
            },
            {
              type: "paragraph",
              text: "The Club therefore becomes the permanent element of Yumf’s architecture.",
            },
            {
              type: "paragraph",
              text: "It is the relationship infrastructure that enables a Manufacturer to reconnect with the people who choose its products and continue developing that relationship over time.",
            },
            {
              type: "paragraph",
              text: "This first principle guides Yumf’s entire architecture.",
            },
            {
              type: "paragraph",
              text: "Everything that contributes to building a lasting relationship belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "Everything else follows from it.",
            },
          ],
        },
        {
          id: "produits-participants-point-ancrage-relation",
          number: "2",
          title: "Participating Products Are the Anchor of the Relationship",
          content: [
            {
              type: "paragraph",
              text: "Every relationship between a Manufacturer and a Consumer begins with a first choice.",
            },
            {
              type: "paragraph",
              text: "That choice is not a Program.",
            },
            {
              type: "paragraph",
              text: "It is not a Reward.",
            },
            {
              type: "paragraph",
              text: "It is not a promotion.",
            },
            {
              type: "paragraph",
              text: "It is a product.",
            },
            {
              type: "paragraph",
              text: "Before a Consumer can become a Member of a Club, participate in a Program, or receive any form of recognition, they must first discover a product, trust it, and decide to purchase it.",
            },
            {
              type: "paragraph",
              text: "The product is therefore the true starting point of the relationship.",
            },
            {
              type: "paragraph",
              text: "Without a chosen product, no relationship can begin.",
            },
            {
              type: "paragraph",
              text: "Without a relationship, no lasting Community can be built.",
            },
            {
              type: "paragraph",
              text: "In Yumf, Participating Products represent the products through which a Manufacturer chooses to invite Consumers into its world. They are the first points of contact between the business and the people who discover, appreciate, and choose its products.",
            },
            {
              type: "paragraph",
              text: "This principle has a profound influence on the Platform’s architecture.",
            },
            {
              type: "paragraph",
              text: "The relationship never begins in the abstract. It always begins when a Participating Product is part of an Eligible Purchase recognized in accordance with the rules defined by the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Programs therefore do not create the relationship.",
            },
            {
              type: "paragraph",
              text: "They build on a relationship that already exists.",
            },
            {
              type: "paragraph",
              text: "This distinction is essential.",
            },
            {
              type: "paragraph",
              text: "In many loyalty systems, the product is simply a means of obtaining a reward.",
            },
            {
              type: "paragraph",
              text: "In Yumf, it represents much more.",
            },
            {
              type: "paragraph",
              text: "It represents the first act of trust a Consumer places in a Manufacturer.",
            },
            {
              type: "paragraph",
              text: "And it is precisely this trust that the Club then seeks to transform into a lasting relationship.",
            },
            {
              type: "paragraph",
              text: "Thus, if the Club is the place where the relationship develops, Participating Products are its anchor.",
            },
            {
              type: "paragraph",
              text: "Everything begins with a product that was chosen.",
            },
          ],
        },
        {
          id: "fabricant-definit-regles",
          number: "3",
          title: "The Manufacturer Defines the Rules",
          content: [
            {
              type: "paragraph",
              text: "Every Manufacturer has its own story, its own products, its own objectives, and its own way of developing a relationship with the Consumers who choose to place their trust in it.",
            },
            {
              type: "paragraph",
              text: "No platform can understand that reality better than the Manufacturer itself.",
            },
            {
              type: "paragraph",
              text: "That is why, in Yumf, the Manufacturer remains responsible for the decisions that shape its Club.",
            },
            {
              type: "paragraph",
              text: "It defines the Participating Products it wishes to highlight.",
            },
            {
              type: "paragraph",
              text: "It chooses the Programs it wishes to offer in order to animate its Community.",
            },
            {
              type: "paragraph",
              text: "It determines the Rewards it wishes to offer, the conditions for obtaining them, and the rules governing their allocation.",
            },
            {
              type: "paragraph",
              text: "It also decides which objectives it wishes to pursue, whether that means introducing a new product, encouraging repeat purchases, thanking its Members, or strengthening the relationship with its Community.",
            },
            {
              type: "paragraph",
              text: "This freedom is a fundamental principle of Yumf.",
            },
            {
              type: "paragraph",
              text: "Because Yumf is a relationship infrastructure rather than a standardized loyalty program, each Manufacturer determines how it wishes to develop the relationship with the people who choose its products.",
            },
            {
              type: "paragraph",
              text: "The Platform does not seek to impose a single strategy.",
            },
            {
              type: "paragraph",
              text: "It provides a common framework that enables each Manufacturer to build a relationship true to its identity, products, and vision.",
            },
            {
              type: "paragraph",
              text: "Two Manufacturers using Yumf can therefore offer very different experiences while relying on the same architectural foundations.",
            },
            {
              type: "paragraph",
              text: "This distinction is essential.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer makes the business decisions.",
            },
            {
              type: "paragraph",
              text: "It defines the rules of its Club.",
            },
            {
              type: "paragraph",
              text: "Yumf then ensures that those rules are applied.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer’s role is to define what it wishes to recognize.",
            },
            {
              type: "paragraph",
              text: "Yumf’s role is to ensure that this recognition is applied consistently, securely, and with integrity.",
            },
          ],
        },
        {
          id: "yumf-applique-regles",
          number: "4",
          title: "Yumf Applies the Rules",
          content: [
            {
              type: "paragraph",
              text: "If the Manufacturer defines the rules of its Club, Yumf ensures that they are applied.",
            },
            {
              type: "paragraph",
              text: "The Platform does not intervene in the Manufacturer’s business decisions.",
            },
            {
              type: "paragraph",
              text: "It does not choose the Participating Products.",
            },
            {
              type: "paragraph",
              text: "It does not determine the Rewards.",
            },
            {
              type: "paragraph",
              text: "It does not decide the objectives pursued by Programs.",
            },
            {
              type: "paragraph",
              text: "Its role is different.",
            },
            {
              type: "paragraph",
              text: "Yumf transforms the Manufacturer’s intentions into relationship mechanisms that are applied consistently, securely, and in a verifiable manner.",
            },
            {
              type: "paragraph",
              text: "To that end, the Platform handles, among other things, the validation of Eligible Purchases, the generation of Loyalty Data, the execution of the rules specific to each Program, and the processing of Rewards.",
            },
            {
              type: "paragraph",
              text: "It also safeguards data integrity, processing security, traceability, and automation so that the rules are applied consistently to all Members of a Club.",
            },
            {
              type: "paragraph",
              text: "This principle is fundamental.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer remains responsible for the decisions that shape the relationship with its Community.",
            },
            {
              type: "paragraph",
              text: "Yumf remains responsible for how those decisions are applied.",
            },
            {
              type: "paragraph",
              text: "This division of responsibilities allows each party to fully play its role.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer can evolve its Participating Products, Programs, and Rewards according to its objectives without having to concern itself with the mechanisms that make them work.",
            },
            {
              type: "paragraph",
              text: "Yumf, for its part, ensures that these mechanisms remain consistent, reliable, and compliant with the established rules.",
            },
            {
              type: "paragraph",
              text: "This distinction also allows the Platform to evolve without calling into question the foundations of each Club.",
            },
            {
              type: "paragraph",
              text: "Relationship decisions belong to the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Their implementation belongs to Yumf.",
            },
            {
              type: "paragraph",
              text: "It is this balance that allows the Platform to provide both the freedom Manufacturers need and the rigour required of a trustworthy relationship infrastructure.",
            },
          ],
        },
      ],
    },
    {
      id: "proprietes-architecture",
      number: "2",
      title: "The Properties of the Architecture",
      introduction: [
        {
          type: "paragraph",
          text: "The fundamental laws presented in the first part define how Yumf conceives the relationship between a Manufacturer and the Consumers who choose its products.",
        },
        {
          type: "paragraph",
          text: "From these laws, several properties naturally emerge.",
        },
        {
          type: "paragraph",
          text: "They do not result from arbitrary decisions or implementation preferences.",
        },
        {
          type: "paragraph",
          text: "They follow directly from the way Yumf is designed.",
        },
        {
          type: "paragraph",
          text: "Understanding these properties makes it possible to understand why certain architectural decisions now seem self-evident.",
        },
        {
          type: "paragraph",
          text: "They are not additional rules.",
        },
        {
          type: "paragraph",
          text: "They are the natural consequences of the fundamental laws that precede them.",
        },
      ],
      sections: [
        {
          id: "programmes-evoluent-relation-demeure",
          number: "5",
          title: "Programs Evolve. The Relationship Remains.",
          content: [
            {
              type: "paragraph",
              text: "If the relationship belongs to the Club, then Programs are not intended to be permanent.",
            },
            {
              type: "paragraph",
              text: "They exist to serve a particular objective, for a given period, within a relationship that predates them.",
            },
            {
              type: "paragraph",
              text: "A Manufacturer may wish to introduce a new product, encourage repeat purchases, celebrate an anniversary, organize a contest, or thank its Community in different ways over time.",
            },
            {
              type: "paragraph",
              text: "These objectives naturally evolve with the business.",
            },
            {
              type: "paragraph",
              text: "Its Programs must be able to evolve with them.",
            },
            {
              type: "paragraph",
              text: "In Yumf, a Program is never considered the heart of the relationship.",
            },
            {
              type: "paragraph",
              text: "It is a temporary expression of that relationship.",
            },
            {
              type: "paragraph",
              text: "It serves a specific intention for a certain period, then naturally gives way to other Programs while the Club continues to exist.",
            },
            {
              type: "paragraph",
              text: "The Members remain.",
            },
            {
              type: "paragraph",
              text: "The Participating Products remain.",
            },
            {
              type: "paragraph",
              text: "The memory of the relationship remains.",
            },
            {
              type: "paragraph",
              text: "The trust built over time remains.",
            },
            {
              type: "paragraph",
              text: "This distinction gives Manufacturers considerable freedom.",
            },
            {
              type: "paragraph",
              text: "They can renew their Programs as often as they wish without having to rebuild their Community.",
            },
            {
              type: "paragraph",
              text: "Thus, stability belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "Change belongs to Programs.",
            },
            {
              type: "paragraph",
              text: "The relationship remains.",
            },
            {
              type: "paragraph",
              text: "Programs evolve around it.",
            },
          ],
        },
        {
          id: "ce-qui-construit-relation-appartient-club",
          number: "6",
          title: "Everything That Builds the Relationship Belongs to the Club",
          content: [
            {
              type: "paragraph",
              text: "The Club is the permanent infrastructure of the relationship.",
            },
            {
              type: "paragraph",
              text: "It is therefore natural that everything contributing to that relationship over time belongs to it.",
            },
            {
              type: "paragraph",
              text: "Members belong to the Club.",
            },
            {
              type: "paragraph",
              text: "Participating Products belong to the Club.",
            },
            {
              type: "paragraph",
              text: "The Loyalty Data that forms the lasting memory of the relationship also belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "More fundamentally, the relationship itself belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "It is built progressively through purchases, interactions, recognition, and the trust that develops between a Manufacturer and its Community.",
            },
            {
              type: "paragraph",
              text: "It extends across Programs without ever depending on them.",
            },
            {
              type: "paragraph",
              text: "This organization provides great stability to the architecture.",
            },
            {
              type: "paragraph",
              text: "Programs can appear, evolve, or disappear without calling into question the foundations of the relationship.",
            },
            {
              type: "paragraph",
              text: "Thus, everything that contributes to building a lasting relationship naturally belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "It is this permanence that allows a Manufacturer to build a genuine Community year after year.",
            },
          ],
        },
        {
          id: "programmes-animent-relation",
          number: "7",
          title: "Programs Bring the Relationship to Life",
          content: [
            {
              type: "paragraph",
              text: "If the Club is the permanent space of the relationship, Programs are the mechanisms that bring it to life.",
            },
            {
              type: "paragraph",
              text: "They allow the Manufacturer to offer different experiences tailored to its objectives, products, seasonality, or strategy.",
            },
            {
              type: "paragraph",
              text: "Each Program serves a particular intention.",
            },
            {
              type: "paragraph",
              text: "Introduce a product.",
            },
            {
              type: "paragraph",
              text: "Encourage repeat purchases.",
            },
            {
              type: "paragraph",
              text: "Recognize loyalty.",
            },
            {
              type: "paragraph",
              text: "Celebrate an event.",
            },
            {
              type: "paragraph",
              text: "Create a distinctive experience.",
            },
            {
              type: "paragraph",
              text: "Rewards therefore belong to Programs.",
            },
            {
              type: "paragraph",
              text: "Stamps belong to Programs.",
            },
            {
              type: "paragraph",
              text: "Product Cards belong to Programs.",
            },
            {
              type: "paragraph",
              text: "Leaderboards, contests, and other distinctive experiences also belong to Programs.",
            },
            {
              type: "paragraph",
              text: "All of these mechanisms can evolve freely because they do not form the foundations of the relationship.",
            },
            {
              type: "paragraph",
              text: "They represent different ways of bringing it to life.",
            },
            {
              type: "paragraph",
              text: "This distinction gives the Manufacturer considerable freedom.",
            },
            {
              type: "paragraph",
              text: "It can continually renew the experiences offered to its Community while maintaining a single Club, a single Community, and a single lasting relationship.",
            },
            {
              type: "paragraph",
              text: "Programs are therefore never an end in themselves.",
            },
            {
              type: "paragraph",
              text: "They are the means through which a Manufacturer chooses to bring its relationship with its Community to life.",
            },
          ],
        },
        {
          id: "donnees-fidelite-racontent-relation",
          number: "8",
          title: "Loyalty Data Tells the Story of the Relationship",
          content: [
            {
              type: "paragraph",
              text: "In Yumf, Loyalty Data is never created arbitrarily.",
            },
            {
              type: "paragraph",
              text: "It always represents the memory of a relationship that has been built over time.",
            },
            {
              type: "paragraph",
              text: "Points.",
            },
            {
              type: "paragraph",
              text: "Stamps.",
            },
            {
              type: "paragraph",
              text: "Punches on a Product Card.",
            },
            {
              type: "paragraph",
              text: "Entries.",
            },
            {
              type: "paragraph",
              text: "Leaderboard positions.",
            },
            {
              type: "paragraph",
              text: "All of this Loyalty Data represents the consequences of recognized interactions.",
            },
            {
              type: "paragraph",
              text: "It tells the story of the relationship between a Manufacturer and its Community.",
            },
            {
              type: "paragraph",
              text: "It does not seek to create that relationship.",
            },
            {
              type: "paragraph",
              text: "It documents it.",
            },
            {
              type: "paragraph",
              text: "This approach profoundly influences Yumf’s architecture.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data has no independent existence.",
            },
            {
              type: "paragraph",
              text: "It always results from an event recognized in accordance with the rules defined by the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "This design provides several advantages.",
            },
            {
              type: "paragraph",
              text: "It ensures consistency in processing.",
            },
            {
              type: "paragraph",
              text: "It makes corrections easier when they become necessary.",
            },
            {
              type: "paragraph",
              text: "It also allows Programs to evolve without calling into question the history of the relationship.",
            },
            {
              type: "paragraph",
              text: "More fundamentally, it reflects the very philosophy of Yumf.",
            },
            {
              type: "paragraph",
              text: "A relationship cannot simply be declared.",
            },
            {
              type: "paragraph",
              text: "It is built.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data simply becomes its memory.",
            },
          ],
        },
        {
          id: "reconnaissance-evenement-verifiable",
          number: "9",
          title: "Every Recognition Is Based on a Verifiable Event",
          content: [
            {
              type: "paragraph",
              text: "A relationship can only be recognized over time if the events that build it can be demonstrated.",
            },
            {
              type: "paragraph",
              text: "In Yumf, no Loyalty Data is produced unless an event can justify its existence.",
            },
            {
              type: "paragraph",
              text: "In most cases, that event is an Eligible Purchase.",
            },
            {
              type: "paragraph",
              text: "As the Platform evolves, it may take other forms, provided that the event can be observed, validated, and processed in accordance with the rules defined by the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Before any recognition is granted, the event from which it results is always subject to the necessary verification.",
            },
            {
              type: "paragraph",
              text: "Depending on the circumstances, this validation may be fully automated, require additional checks, or involve a review.",
            },
            {
              type: "paragraph",
              text: "This requirement safeguards the integrity of the Platform.",
            },
            {
              type: "paragraph",
              text: "Every piece of Loyalty Data can be traced back to the event that gave rise to it.",
            },
            {
              type: "paragraph",
              text: "Every decision can be explained.",
            },
            {
              type: "paragraph",
              text: "Every correction can be applied consistently.",
            },
            {
              type: "paragraph",
              text: "Trust rests on this ability to demonstrate why a recognition exists.",
            },
            {
              type: "paragraph",
              text: "In Yumf, Loyalty Data is never an isolated piece of information.",
            },
            {
              type: "paragraph",
              text: "It is always the verifiable consequence of an event recognized in accordance with the Manufacturer’s rules.",
            },
            {
              type: "paragraph",
              text: "When an error is detected, fraud is identified, or an event must be corrected, the Platform can review the consequences arising from it while preserving the integrity of the system as a whole.",
            },
            {
              type: "paragraph",
              text: "Thus, in Yumf, Loyalty Data never consists of isolated information.",
            },
            {
              type: "paragraph",
              text: "It always represents the verifiable consequence of an event recognized in accordance with the Manufacturer’s rules and the Platform’s validation mechanisms.",
            },
            {
              type: "paragraph",
              text: "It is this requirement that enables Yumf to provide a loyalty system that is transparent, reliable, and worthy of the trust of Manufacturers and their Members alike.",
            },
          ],
        },
      ],
    },
    {
      id: "garanties-confiance",
      number: "3",
      title: "The Guarantees of Trust",
      introduction: [
        {
          type: "paragraph",
          text: "The fundamental laws define how Yumf is designed.",
        },
        {
          type: "paragraph",
          text: "The properties that follow from them explain how this architecture works.",
        },
        {
          type: "paragraph",
          text: "One essential question remains, however.",
        },
        {
          type: "paragraph",
          text: "How can we ensure that this relationship remains worthy of trust over time?",
        },
        {
          type: "paragraph",
          text: "A relational infrastructure must not only remain coherent under ideal circumstances.",
        },
        {
          type: "paragraph",
          text: "It must continue to do so as Programs evolve, when errors need to be corrected, when exceptional events occur, or when the rules of a Club change.",
        },
        {
          type: "paragraph",
          text: "The principles presented in this part describe the safeguards that enable Yumf to preserve that trust.",
        },
        {
          type: "paragraph",
          text: "They ensure that the relationship between a Manufacturer and its Community remains coherent, explainable, and respectful of the people who are part of it.",
        },
      ],
      sections: [
        {
          id: "yumf-preserve-coherence-relation",
          number: "10",
          title: "Yumf Preserves the Coherence of the Relationship",
          content: [
            {
              type: "paragraph",
              text: "A relationship of trust can exist only if the rules that govern it are applied consistently.",
            },
            {
              type: "paragraph",
              text: "For this reason, Yumf does not simply seek to handle normal situations correctly.",
            },
            {
              type: "paragraph",
              text: "The Platform is designed to prevent situations that are incompatible with its principles from occurring.",
            },
            {
              type: "paragraph",
              text: "A Member cannot receive a Reward when the conditions defined by the Manufacturer are no longer satisfied.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data from one Club can never be used in another.",
            },
            {
              type: "paragraph",
              text: "A Program that has ended cannot continue to produce new recognition.",
            },
            {
              type: "paragraph",
              text: "A Product Card cannot continue to progress once it has reached its objective or is no longer applicable.",
            },
            {
              type: "paragraph",
              text: "More generally, every mechanism of the Platform helps preserve the coherence of the relationship between the Manufacturer and its Community.",
            },
            {
              type: "paragraph",
              text: "This approach protects both Manufacturers and Members.",
            },
            {
              type: "paragraph",
              text: "Manufacturers can trust the results produced by their Clubs.",
            },
            {
              type: "paragraph",
              text: "Members can trust that the rules will be applied fairly.",
            },
            {
              type: "paragraph",
              text: "Yumf’s robustness therefore does not rest solely on its ability to correct errors.",
            },
            {
              type: "paragraph",
              text: "It rests first and foremost on its ability to prevent inconsistencies from arising.",
            },
          ],
        },
        {
          id: "chaque-relation-demeure-explicable",
          number: "11",
          title: "Every Relationship Remains Explainable",
          content: [
            {
              type: "paragraph",
              text: "A lasting relationship does not rest on trust alone.",
            },
            {
              type: "paragraph",
              text: "It also rests on the ability to explain why each recognition exists.",
            },
            {
              type: "paragraph",
              text: "In Yumf, no significant event is treated as isolated.",
            },
            {
              type: "paragraph",
              text: "Every recognized Eligible Purchase.",
            },
            {
              type: "paragraph",
              text: "Every piece of Loyalty Data produced.",
            },
            {
              type: "paragraph",
              text: "Every Reward granted.",
            },
            {
              type: "paragraph",
              text: "Every significant decision leaves a trace that makes it possible to understand its origin.",
            },
            {
              type: "paragraph",
              text: "This traceability is a fundamental principle of the architecture.",
            },
            {
              type: "paragraph",
              text: "It makes it possible to reconstruct the history of the relationship between a Manufacturer and its Community.",
            },
            {
              type: "paragraph",
              text: "It facilitates verification when a situation needs to be reviewed.",
            },
            {
              type: "paragraph",
              text: "It makes it possible to apply corrections when necessary.",
            },
            {
              type: "paragraph",
              text: "It also contributes to the Platform’s audit capabilities.",
            },
            {
              type: "paragraph",
              text: "More fundamentally, it makes it possible to explain the decisions that have been made.",
            },
            {
              type: "paragraph",
              text: "Recognition must never appear arbitrary.",
            },
            {
              type: "paragraph",
              text: "It must always be possible to trace it back to the event that justified it and to the rules that led to it being granted.",
            },
            {
              type: "paragraph",
              text: "Trust rests as much on the soundness of decisions as on the ability to explain their origin.",
            },
            {
              type: "paragraph",
              text: "In Yumf, every relationship has a memory.",
            },
            {
              type: "paragraph",
              text: "And that memory always remains explainable.",
            },
          ],
        },

        {
          id: "confiance-appartient-personnes",
          number: "12",
          title: "Trust Belongs to People",
          content: [
            {
              type: "paragraph",
              text: "The relationship a Manufacturer develops with its Community is one of the greatest assets of its Club.",
            },
            {
              type: "paragraph",
              text: "That relationship, however, never gives the Manufacturer ownership over the people who are part of it.",
            },
            {
              type: "paragraph",
              text: "In Yumf, a Member always remains free to make their own choices.",
            },
            {
              type: "paragraph",
              text: "They choose the Manufacturers they wish to support.",
            },
            {
              type: "paragraph",
              text: "They choose the products they wish to purchase.",
            },
            {
              type: "paragraph",
              text: "And they remain free to continue that relationship over time or not.",
            },
            {
              type: "paragraph",
              text: "This distinction is fundamental.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer builds a Community.",
            },
            {
              type: "paragraph",
              text: "It never owns that Community.",
            },
            {
              type: "paragraph",
              text: "Likewise, Members’ Personal Information never belongs to the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Yumf ensures that each Manufacturer can access only the information necessary to administer its Club and develop the relationship with its Members, in accordance with their choices and applicable laws.",
            },
            {
              type: "paragraph",
              text: "This approach makes it possible to reconcile two essential objectives.",
            },
            {
              type: "paragraph",
              text: "Allow the Manufacturer to understand its Community and develop a genuine relationship with its Members.",
            },
            {
              type: "paragraph",
              text: "Preserve the rights, freedom, and trust of the people who make up that Community by limiting access to their Personal Information to what is truly necessary.",
            },
            {
              type: "paragraph",
              text: "This safeguard goes beyond data protection alone.",
            },
            {
              type: "paragraph",
              text: "It directly reflects Yumf’s philosophy.",
            },
            {
              type: "paragraph",
              text: "A lasting relationship can exist only when it is freely chosen and built on trust.",
            },
            {
              type: "paragraph",
              text: "That trust does not depend solely on the quality of the Products, Programs, or Rewards.",
            },
            {
              type: "paragraph",
              text: "It also rests on the assurance that information entrusted to the Platform is used respectfully, transparently, and in the interests of the people concerned.",
            },
            {
              type: "paragraph",
              text: "Thus, in Yumf, the relationship belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "Business decisions belong to the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Personal Information remains protected.",
            },
            {
              type: "paragraph",
              text: "It is this balance that allows everyone to fully play their role while preserving the trust on which the entire ecosystem rests.",
            },
          ],
        },
      ],
    },
    {
      id: "cascade-architecturale",
      number: "4",
      title: "Yumf’s Architectural Cascade",
      introduction: [
        {
          type: "paragraph",
          text: "The fundamental laws presented in this document are not a succession of independent principles.",
        },
        {
          type: "paragraph",
          text: "They describe an architecture in which each concept makes the next one possible.",
        },
        {
          type: "paragraph",
          text: "This progression can be represented as an architectural cascade.",
        },
        {
          type: "paragraph",
          text: "Each level provides the context required by the one that follows.",
        },
        {
          type: "paragraph",
          text: "No element exists in isolation.",
        },
        {
          type: "paragraph",
          text: "They all contribute to the same purpose: enabling a Manufacturer to develop a lasting relationship with the people who choose its products.",
        },
      ],
      sections: [
        {
          id: "intention-reconnaissance",
          number: "13",
          title: "From Intention to Recognition",
          content: [
            {
              type: "paragraph",
              text: "Yumf’s relational architecture can be represented as a cascade in which each level makes the next one possible.",
            },
            {
              type: "diagram",
              variant: "flow",
              items: [
                "Manufacturer",
                "Club",
                "Participating Products",
                "Eligible Purchases",
                "Validation",
                "Loyalty Data",
                "Programs",
                "Rewards",
              ],
            },
            {
              type: "paragraph",
              text: "This representation describes neither an organizational chart nor a data model.",
            },
            {
              type: "paragraph",
              text: "It illustrates the logical order through which Yumf’s relational infrastructure takes shape.",
            },
            {
              type: "paragraph",
              text: "This representation describes neither an organizational chart nor a data model.",
            },
            {
              type: "paragraph",
              text: "It illustrates the logical order through which Yumf’s relational infrastructure takes shape.",
            },
            {
              type: "paragraph",
              text: "Everything begins with the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer chooses the Participating Products, defines the rules of its Club, and decides how it wishes to develop the relationship with its Community.",
            },
            {
              type: "paragraph",
              text: "The Club then provides the permanent space in which this relationship can exist.",
            },
            {
              type: "paragraph",
              text: "Participating Products become the points of connection between the Manufacturer and Consumers.",
            },
            {
              type: "paragraph",
              text: "When a Participating Product is the subject of an Eligible Purchase, that event can be recognized by the Platform.",
            },
            {
              type: "paragraph",
              text: "This recognition goes through a validation process that ensures the conditions defined by the Manufacturer have actually been satisfied.",
            },
            {
              type: "paragraph",
              text: "Only after this validation can Loyalty Data be produced.",
            },
            {
              type: "paragraph",
              text: "This data becomes the memory of the relationship being built between the Club and its Members.",
            },
            {
              type: "paragraph",
              text: "Programs then use this memory to animate the relationship according to the objectives pursued by the Manufacturer.",
            },
            {
              type: "paragraph",
              text: "Finally, Rewards recognize the behaviours or achievements that these Programs seek to encourage.",
            },
            {
              type: "paragraph",
              text: "This progression shows that each level derives its meaning from those that precede it.",
            },
            {
              type: "paragraph",
              text: "Rewards are offered within the context of Programs.",
            },
            {
              type: "paragraph",
              text: "Programs use Loyalty Data to recognize the behaviours a Manufacturer wishes to encourage.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data results from events recognized by the Platform.",
            },
            {
              type: "paragraph",
              text: "This recognition is based on the validation of an Eligible Purchase or, as Yumf evolves, another verifiable event.",
            },
            {
              type: "paragraph",
              text: "Eligible Purchases allow Participating Products to become points of connection between the Manufacturer and Consumers.",
            },
            {
              type: "paragraph",
              text: "Participating Products belong within the Club.",
            },
            {
              type: "paragraph",
              text: "And the Club exists because a Manufacturer chooses to build a relationship with its Community there.",
            },
            {
              type: "paragraph",
              text: "But this cascade also expresses a deeper idea.",
            },
            {
              type: "paragraph",
              text: "As we move down through the architecture, each level becomes more concrete.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer expresses an intention.",
            },
            {
              type: "paragraph",
              text: "The Club creates a relational space.",
            },
            {
              type: "paragraph",
              text: "Participating Products make that relationship possible.",
            },
            {
              type: "paragraph",
              text: "Eligible Purchases bring it into existence.",
            },
            {
              type: "paragraph",
              text: "Validation ensures its integrity.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data preserves its memory.",
            },
            {
              type: "paragraph",
              text: "Programs bring it to life.",
            },
            {
              type: "paragraph",
              text: "Rewards recognize it.",
            },
            {
              type: "paragraph",
              text: "In other words, everything that appears at the bottom of this cascade originates in the decisions made at its top.",
            },
            {
              type: "paragraph",
              text: "Rewards therefore never constitute the starting point of the architecture.",
            },
            {
              type: "paragraph",
              text: "They represent one of its final expressions.",
            },
            {
              type: "paragraph",
              text: "The relationship itself, however, is present at every level.",
            },
            {
              type: "paragraph",
              text: "It begins with a first purchase.",
            },
            {
              type: "paragraph",
              text: "It develops within the Club.",
            },
            {
              type: "paragraph",
              text: "It is documented through Loyalty Data.",
            },
            {
              type: "paragraph",
              text: "It is animated through Programs.",
            },
            {
              type: "paragraph",
              text: "It is recognized through Rewards.",
            },
            {
              type: "paragraph",
              text: "This cascade therefore describes more than the organization of Yumf.",
            },
            {
              type: "paragraph",
              text: "It summarizes its entire philosophy.",
            },
            {
              type: "paragraph",
              text: "Every design decision, every feature, and every evolution of the Platform must be able to find its natural place within it.",
            },
          ],
        },
      ],
    },
    {
      id: "principes-evolution",
      number: "5",
      title: "Principles for Evolution",
      introduction: [
        {
          type: "paragraph",
          text: "Yumf’s architecture was not designed solely to meet the Platform’s current needs.",
        },
        {
          type: "paragraph",
          text: "It was designed to remain coherent as new features, new Programs, and new uses emerge.",
        },
        {
          type: "paragraph",
          text: "This ability to evolve does not rest solely on code quality or technological choices.",
        },
        {
          type: "paragraph",
          text: "It rests first and foremost on respecting the principles presented in the preceding documents.",
        },
        {
          type: "paragraph",
          text: "A feature can be innovative.",
        },
        {
          type: "paragraph",
          text: "It can address a real need.",
        },
        {
          type: "paragraph",
          text: "It can even be an excellent idea.",
        },
        {
          type: "paragraph",
          text: "If it contradicts the foundations of the architecture, it gradually weakens the coherence of the whole.",
        },
        {
          type: "paragraph",
          text: "Conversely, when an evolution respects Yumf’s founding principles, it integrates naturally into the product, regardless of its complexity.",
        },
        {
          type: "paragraph",
          text: "Yumf’s evolution must therefore be guided by a few simple rules.",
        },
      ],
      sections: [
        {
          id: "evolution-renforce-relation",
          number: "14",
          title: "Every Evolution Must Strengthen the Relationship",
          content: [
            {
              type: "paragraph",
              text: "The relationship between a Manufacturer and the people who choose its products remains the Platform’s reason for being.",
            },
            {
              type: "paragraph",
              text: "Every new feature should contribute to creating, developing, recognizing, or enriching this relationship.",
            },
            {
              type: "paragraph",
              text: "If an evolution contributes nothing to this relationship, its place within Yumf should be reconsidered.",
            },
            {
              type: "paragraph",
              text: "The relationship is the primary criterion for evaluating every product decision.",
            },
          ],
        },
        {
          id: "concepts-precedent-fonctionnalites",
          number: "15",
          title: "Concepts Precede Features",
          content: [
            {
              type: "paragraph",
              text: "In Yumf, features are never the starting point.",
            },
            {
              type: "paragraph",
              text: "They are always the concrete expression of a concept already present in the architecture.",
            },
            {
              type: "paragraph",
              text: "Before adding a new feature, a more fundamental question must therefore be answered:",
            },
            {
              type: "paragraph",
              text: "What concept does this feature serve?",
            },
            {
              type: "paragraph",
              text: "When no existing concept can explain it, there are two possibilities.",
            },
            {
              type: "paragraph",
              text: "Either the feature has no place within Yumf.",
            },
            {
              type: "paragraph",
              text: "Or the conceptual architecture must evolve before the feature is implemented.",
            },
            {
              type: "paragraph",
              text: "This discipline prevents the product from becoming an accumulation of independent features.",
            },
          ],
        },
        {
          id: "responsabilites-demeurent-claires",
          number: "16",
          title: "Responsibilities Must Remain Clear",
          content: [
            {
              type: "paragraph",
              text: "Each concept has a single purpose.",
            },
            {
              type: "paragraph",
              text: "The Club builds the relationship.",
            },
            {
              type: "paragraph",
              text: "The Program animates it.",
            },
            {
              type: "paragraph",
              text: "The Participating Product creates the point of connection.",
            },
            {
              type: "paragraph",
              text: "Loyalty Data preserves its memory.",
            },
            {
              type: "paragraph",
              text: "The Manufacturer defines the rules.",
            },
            {
              type: "paragraph",
              text: "Yumf applies them.",
            },
            {
              type: "paragraph",
              text: "An evolution should never blur these responsibilities.",
            },
            {
              type: "paragraph",
              text: "When a single concept begins to serve multiple purposes, the architecture gradually loses clarity.",
            },
          ],
        },
        {
          id: "permanence-doit-etre-preservee",
          number: "17",
          title: "Permanence Must Be Preserved",
          content: [
            {
              type: "paragraph",
              text: "Permanent elements provide Yumf with stability.",
            },
            {
              type: "paragraph",
              text: "Temporary elements allow it to evolve.",
            },
            {
              type: "paragraph",
              text: "This distinction should never disappear.",
            },
            {
              type: "paragraph",
              text: "An evolution should not transform a Program into a permanent element.",
            },
            {
              type: "paragraph",
              text: "Nor should it make temporary a concept that belongs to the Club.",
            },
            {
              type: "paragraph",
              text: "Preserving this boundary protects the architecture as a whole.",
            },
          ],
        },

        {
          id: "infrastructure-precede-interface",
          number: "18",
          title: "Infrastructure Precedes the Interface",
          content: [
            {
              type: "paragraph",
              text: "Interfaces will evolve.",
            },
            {
              type: "paragraph",
              text: "User journeys will evolve.",
            },
            {
              type: "paragraph",
              text: "Technologies will evolve.",
            },
            {
              type: "paragraph",
              text: "The relational infrastructure, however, must remain stable.",
            },
            {
              type: "paragraph",
              text: "Interface decisions should never lead to changes in fundamental concepts merely to simplify an implementation.",
            },
            {
              type: "paragraph",
              text: "In Yumf, the user experience is built on the architecture.",
            },
            {
              type: "paragraph",
              text: "It does not define it.",
            },
          ],
        },
        {
          id: "architecture-precede-code",
          number: "19",
          title: "Architecture Precedes Code",
          content: [
            {
              type: "paragraph",
              text: "Product architecture is the final conceptual level before implementation.",
            },
            {
              type: "paragraph",
              text: "Code is not where Yumf decides what it is.",
            },
            {
              type: "paragraph",
              text: "It is simply the translation of that definition into software.",
            },
            {
              type: "paragraph",
              text: "When a significant evolution is being considered, its place should be explainable within the architecture documents before it is integrated into the software.",
            },
            {
              type: "paragraph",
              text: "This approach ensures that the Platform’s evolution remains faithful to the vision that gave rise to it.",
            },
          ],
        },
      ],
    },
  ],
  concludingSections: [
    {
      id: "conclusion",
      title: "Conclusion",
      content: [
        {
          type: "paragraph",
          text: "The principles presented in this document are not independent rules.",
        },
        {
          type: "paragraph",
          text: "They form a coherent system in which each principle follows naturally from the one before it and contributes to a shared vision of the relationship between a Manufacturer and the people who choose its products.",
        },
        {
          type: "paragraph",
          text: "This coherence is not intended solely to ensure the Platform’s quality today.",
        },
        {
          type: "paragraph",
          text: "It also provides the framework that will guide its evolution over time.",
        },
        {
          type: "paragraph",
          text: "From these foundations, it becomes possible to define a product architecture in which each concept has a clear purpose, each responsibility has its place, and each new feature can be evaluated in light of the principles that precede it.",
        },
        {
          type: "paragraph",
          text: "The next document continues this progression.",
        },
        {
          type: "paragraph",
          text: "It no longer seeks to explain why Yumf is designed this way.",
        },
        {
          type: "paragraph",
          text: "It shows how this philosophy takes shape in the product architecture through its fundamental concepts, their relationships, their journeys, and the principles that will guide their evolution.",
        },
        {
          type: "paragraph",
          text: "Thus, vision becomes philosophy.",
        },
        {
          type: "paragraph",
          text: "Philosophy becomes principles.",
        },
        {
          type: "paragraph",
          text: "Principles become architecture.",
        },
        {
          type: "paragraph",
          text: "And architecture can then become software without ever losing the coherence from which it originated.",
        },
      ],
    },
  ],
} satisfies LocalizedDocument;
