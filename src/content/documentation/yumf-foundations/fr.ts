import type { LocalizedDocument } from "@/types/documentation";

export const yumfFoundationsFr: LocalizedDocument = {
  title: "Les fondements de Yumf",
  subtitle: "Principes d’architecture",
  introductionTitle: "Les fondements de Yumf",
  introduction: [
    {
      type: "paragraph",
      text: "Les documents précédents ont présenté la vision qui a donné naissance à Yumf ainsi que la philosophie qui guide son développement.",
    },
    {
      type: "paragraph",
      text: "Le présent document constitue l’étape suivante.",
    },
    {
      type: "paragraph",
      text: "Il traduit cette philosophie en un ensemble de principes fondamentaux qui gouvernent l’ensemble de la Plateforme.",
    },
    {
      type: "paragraph",
      text: "Ces principes ne décrivent ni des fonctionnalités ni des choix d’implantation.",
    },
    {
      type: "paragraph",
      text: "Ils représentent les lois de conception auxquelles toute évolution de Yumf doit demeurer fidèle.",
    },
    {
      type: "paragraph",
      text: "Ils expliquent pourquoi l’architecture est organisée de cette manière, pourquoi certains concepts sont permanents tandis que d’autres sont temporaires, où naît la relation entre un fabricant et un consommateur et comment cette relation peut évoluer sans perdre sa cohérence.",
    },
    {
      type: "paragraph",
      text: "Ils constituent ainsi la charpente intellectuelle de Yumf.",
    },
  ],
  parts: [
    {
      id: "lois-fondamentales",
      number: "1",
      title: "Les lois fondamentales",
      introduction: [
        {
          type: "paragraph",
          text: "Les principes présentés dans cette première partie constituent les lois fondamentales sur lesquelles repose l’architecture de Yumf.",
        },
        {
          type: "paragraph",
          text: "Ils ne décrivent ni des fonctionnalités, ni des écrans, ni des choix d’implantation. Ils définissent les règles de conception qui gouvernent l’ensemble de la Plateforme.",
        },
        {
          type: "paragraph",
          text: "Chaque modèle de données, chaque service, chaque fonctionnalité existante ou future et chaque décision d’architecture devraient pouvoir être expliqués à partir de ces principes.",
        },
        {
          type: "paragraph",
          text: "Ils constituent le cadre intellectuel qui assure la cohérence de Yumf au fil de son évolution.",
        },
        {
          type: "paragraph",
          text: "Les principes qui suivent ne décrivent donc pas ce que fait la Plateforme.",
        },
        {
          type: "paragraph",
          text: "Ils expliquent pourquoi elle est conçue de cette manière.",
        },
      ],
      sections: [
        {
          id: "relation-appartient-club",
          number: "1",
          title: "La relation appartient au Club",
          content: [
            {
              type: "paragraph",
              text: "Toute relation durable entre un fabricant et les consommateurs qui choisissent ses produits appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Cette relation ne naît pas d’un Programme.",
            },
            {
              type: "paragraph",
              text: "Elle prend naissance lorsqu’un consommateur découvre un produit, lui accorde sa confiance et réalise un premier Achat admissible.",
            },
            {
              type: "paragraph",
              text: "Elle existe avant qu’un Programme soit créé et peut continuer à se développer longtemps après qu’un Programme ait pris fin.",
            },
            {
              type: "paragraph",
              text: "C’est pourquoi, dans Yumf, la relation appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Le Club constitue l’espace permanent où cette relation peut naître, grandir et évoluer au fil du temps. Il rassemble les Membres, accueille les Produits participants et conserve la mémoire de cette relation, indépendamment des initiatives qui l’animent.",
            },
            {
              type: "paragraph",
              text: "Les Programmes, quant à eux, n’existent que pour reconnaître, encourager ou animer certains comportements pendant une période donnée. Ils peuvent être créés, modifiés ou retirés sans remettre en question l’existence du Club ni celle de la relation qui unit un fabricant à sa communauté.",
            },
            {
              type: "paragraph",
              text: "Cette distinction est fondamentale.",
            },
            {
              type: "paragraph",
              text: "Si la relation appartenait aux Programmes, chaque nouveau Programme créerait une nouvelle relation et chaque Programme terminé mettrait fin à une partie de celle-ci.",
            },
            {
              type: "paragraph",
              text: "À l’inverse, lorsque la relation appartient au Club, les Programmes deviennent de simples expressions temporaires d’une relation qui leur est antérieure et qui leur survivra.",
            },
            {
              type: "paragraph",
              text: "Le Club devient ainsi l’élément permanent de l’architecture de Yumf.",
            },
            {
              type: "paragraph",
              text: "Il constitue l’infrastructure relationnelle qui permet à un fabricant de retrouver les personnes qui choisissent ses produits et de continuer à développer cette relation au fil du temps.",
            },
            {
              type: "paragraph",
              text: "Ce premier principe guide l’ensemble de l’architecture de Yumf.",
            },
            {
              type: "paragraph",
              text: "Tout ce qui contribue à construire une relation durable appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Tout le reste en découle.",
            },
          ],
        },
        {
          id: "produits-participants-point-ancrage-relation",
          number: "2",
          title:
            "Les Produits participants sont le point d’ancrage de la relation",
          content: [
            {
              type: "paragraph",
              text: "Toute relation entre un fabricant et un consommateur commence par un premier choix.",
            },
            {
              type: "paragraph",
              text: "Ce choix n’est pas un Programme.",
            },
            {
              type: "paragraph",
              text: "Ce n’est pas une Récompense.",
            },
            {
              type: "paragraph",
              text: "Ce n’est pas une promotion.",
            },
            {
              type: "paragraph",
              text: "C’est un produit.",
            },
            {
              type: "paragraph",
              text: "Avant qu’un consommateur puisse devenir Membre d’un Club, participer à un Programme ou recevoir une quelconque reconnaissance, il doit d’abord découvrir un produit, lui faire confiance et décider de l’acheter.",
            },
            {
              type: "paragraph",
              text: "Le produit constitue donc le véritable point de départ de la relation.",
            },
            {
              type: "paragraph",
              text: "Sans produit choisi, aucune relation ne peut naître.",
            },
            {
              type: "paragraph",
              text: "Sans relation, aucune communauté durable ne peut se construire.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, les Produits participants représentent les produits par lesquels un fabricant choisit d’inviter les consommateurs à entrer dans son univers. Ils constituent les premiers points de rencontre entre l’entreprise et les personnes qui découvrent, apprécient et choisissent ses produits.",
            },
            {
              type: "paragraph",
              text: "Ce principe influence profondément l’architecture de la Plateforme.",
            },
            {
              type: "paragraph",
              text: "La relation ne naît jamais de manière abstraite. Elle prend toujours naissance lorsqu’un Produit participant fait l’objet d’un Achat admissible reconnu conformément aux règles définies par le fabricant.",
            },
            {
              type: "paragraph",
              text: "Les Programmes ne créent donc pas la relation.",
            },
            {
              type: "paragraph",
              text: "Ils s’appuient sur une relation qui existe déjà.",
            },
            {
              type: "paragraph",
              text: "Cette distinction est essentielle.",
            },
            {
              type: "paragraph",
              text: "Dans de nombreux systèmes de fidélisation, le produit constitue simplement un moyen d’obtenir une récompense.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, il représente bien davantage.",
            },
            {
              type: "paragraph",
              text: "Il constitue le premier geste de confiance qu’un consommateur accorde à un fabricant.",
            },
            {
              type: "paragraph",
              text: "Et c’est précisément cette confiance que le Club cherche ensuite à transformer en une relation durable.",
            },
            {
              type: "paragraph",
              text: "Ainsi, si le Club constitue le lieu où la relation se développe, les Produits participants en constituent le point d’ancrage.",
            },
            {
              type: "paragraph",
              text: "Tout commence par un produit choisi.",
            },
          ],
        },
        {
          id: "fabricant-definit-regles",
          number: "3",
          title: "Le Fabricant définit les règles",
          content: [
            {
              type: "paragraph",
              text: "Chaque fabricant possède sa propre histoire, ses propres produits, ses propres objectifs et sa propre manière de développer une relation avec les consommateurs qui choisissent de lui faire confiance.",
            },
            {
              type: "paragraph",
              text: "Aucune plateforme ne peut connaître cette réalité mieux que lui.",
            },
            {
              type: "paragraph",
              text: "C’est pourquoi, dans Yumf, le fabricant demeure responsable des décisions qui façonnent son Club.",
            },
            {
              type: "paragraph",
              text: "Il définit les Produits participants qu’il souhaite mettre en valeur.",
            },
            {
              type: "paragraph",
              text: "Il choisit les Programmes qu’il désire offrir afin d’animer sa communauté.",
            },
            {
              type: "paragraph",
              text: "Il détermine les Récompenses qu’il souhaite proposer, les conditions permettant de les obtenir ainsi que les règles qui en encadrent l’attribution.",
            },
            {
              type: "paragraph",
              text: "Il décide également des objectifs qu’il poursuit, qu’il s’agisse de faire découvrir un nouveau produit, de favoriser les achats répétés, de remercier ses Membres ou de renforcer la relation avec sa communauté.",
            },
            {
              type: "paragraph",
              text: "Cette liberté constitue un principe fondamental de Yumf.",
            },
            {
              type: "paragraph",
              text: "Puisque Yumf est une infrastructure relationnelle et non un programme de fidélisation uniforme, il appartient à chaque fabricant de définir la manière dont il souhaite développer la relation avec les personnes qui choisissent ses produits.",
            },
            {
              type: "paragraph",
              text: "La Plateforme ne cherche pas à imposer une stratégie unique.",
            },
            {
              type: "paragraph",
              text: "Elle fournit un cadre commun permettant à chaque fabricant de bâtir une relation fidèle à son identité, à ses produits et à sa vision.",
            },
            {
              type: "paragraph",
              text: "Ainsi, deux fabricants utilisant Yumf peuvent proposer des expériences très différentes tout en s’appuyant sur les mêmes fondements architecturaux.",
            },
            {
              type: "paragraph",
              text: "Cette distinction est essentielle.",
            },
            {
              type: "paragraph",
              text: "Le fabricant prend les décisions d’affaires.",
            },
            {
              type: "paragraph",
              text: "Il définit les règles de son Club.",
            },
            {
              type: "paragraph",
              text: "Yumf veille ensuite à leur application.",
            },
            {
              type: "paragraph",
              text: "Le rôle du fabricant est de définir ce qu’il souhaite reconnaître.",
            },
            {
              type: "paragraph",
              text: "Le rôle de Yumf est de faire en sorte que cette reconnaissance soit appliquée avec cohérence, sécurité et intégrité.",
            },
          ],
        },

        {
          id: "yumf-applique-regles",
          number: "4",
          title: "Yumf applique les règles",
          content: [
            {
              type: "paragraph",
              text: "Si le fabricant définit les règles de son Club, Yumf veille à leur application.",
            },
            {
              type: "paragraph",
              text: "La Plateforme n’intervient jamais dans les décisions commerciales du fabricant.",
            },
            {
              type: "paragraph",
              text: "Elle ne choisit pas les Produits participants.",
            },
            {
              type: "paragraph",
              text: "Elle ne détermine pas les Récompenses.",
            },
            {
              type: "paragraph",
              text: "Elle ne décide pas des objectifs poursuivis par les Programmes.",
            },
            {
              type: "paragraph",
              text: "Son rôle est différent.",
            },
            {
              type: "paragraph",
              text: "Yumf transforme les intentions du fabricant en mécanismes relationnels appliqués de manière cohérente, sécuritaire et vérifiable.",
            },
            {
              type: "paragraph",
              text: "À cette fin, la Plateforme assure notamment la validation des Achats admissibles, la production des Données de fidélité, l’exécution des règles propres à chaque Programme ainsi que le traitement des Récompenses.",
            },
            {
              type: "paragraph",
              text: "Elle veille également à l’intégrité des données, à la sécurité des traitements, à leur traçabilité et à leur automatisation afin que les règles soient appliquées de façon uniforme pour tous les Membres d’un Club.",
            },
            {
              type: "paragraph",
              text: "Ce principe est fondamental.",
            },
            {
              type: "paragraph",
              text: "Le fabricant demeure responsable des décisions qui façonnent la relation avec sa communauté.",
            },
            {
              type: "paragraph",
              text: "Yumf demeure responsable de la manière dont ces décisions sont appliquées.",
            },
            {
              type: "paragraph",
              text: "Cette répartition des responsabilités permet à chacun de jouer pleinement son rôle.",
            },
            {
              type: "paragraph",
              text: "Le fabricant peut faire évoluer ses Produits participants, ses Programmes et ses Récompenses en fonction de ses objectifs, sans avoir à se préoccuper des mécanismes qui assurent leur fonctionnement.",
            },
            {
              type: "paragraph",
              text: "De son côté, Yumf garantit que ces mécanismes demeurent cohérents, fiables et conformes aux règles établies.",
            },
            {
              type: "paragraph",
              text: "Cette distinction permet également à la Plateforme d’évoluer sans remettre en question les fondements de chaque Club.",
            },
            {
              type: "paragraph",
              text: "Les décisions relationnelles appartiennent au fabricant.",
            },
            {
              type: "paragraph",
              text: "Leur mise en œuvre appartient à Yumf.",
            },
            {
              type: "paragraph",
              text: "C’est cet équilibre qui permet à la Plateforme d’offrir à la fois la liberté nécessaire aux fabricants et la rigueur indispensable à une infrastructure relationnelle digne de confiance.",
            },
          ],
        },
      ],
    },
    {
      id: "proprietes-architecture",
      number: "2",
      title: "Les propriétés de l’architecture",
      introduction: [
        {
          type: "paragraph",
          text: "Les lois fondamentales présentées dans la première partie définissent la manière dont Yumf conçoit la relation entre un fabricant et les consommateurs qui choisissent ses produits.",
        },
        {
          type: "paragraph",
          text: "À partir de ces lois, plusieurs propriétés apparaissent naturellement.",
        },
        {
          type: "paragraph",
          text: "Elles ne résultent pas de décisions arbitraires ni de préférences d’implantation.",
        },
        {
          type: "paragraph",
          text: "Elles découlent directement de la manière dont Yumf est conçu.",
        },
        {
          type: "paragraph",
          text: "Comprendre ces propriétés permet de comprendre pourquoi certaines décisions d’architecture semblent aujourd’hui évidentes.",
        },
        {
          type: "paragraph",
          text: "Elles ne sont pas des règles supplémentaires.",
        },
        {
          type: "paragraph",
          text: "Elles sont les conséquences naturelles des lois fondamentales qui précèdent.",
        },
      ],
      sections: [
        {
          id: "programmes-evoluent-relation-demeure",
          number: "5",
          title: "Les Programmes évoluent. La relation demeure.",
          content: [
            {
              type: "paragraph",
              text: "Si la relation appartient au Club, alors les Programmes n’ont pas vocation à être permanents.",
            },
            {
              type: "paragraph",
              text: "Ils existent pour répondre à un objectif particulier, pendant une période donnée, dans le cadre d’une relation qui leur préexiste.",
            },
            {
              type: "paragraph",
              text: "Un fabricant peut souhaiter faire découvrir un nouveau produit, encourager des achats répétés, souligner un anniversaire, organiser un concours ou remercier sa communauté d’une manière différente au fil du temps.",
            },
            {
              type: "paragraph",
              text: "Ces objectifs évoluent naturellement avec son entreprise.",
            },
            {
              type: "paragraph",
              text: "Ses Programmes doivent pouvoir évoluer avec eux.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, un Programme n’est jamais considéré comme le cœur de la relation.",
            },
            {
              type: "paragraph",
              text: "Il en constitue une expression temporaire.",
            },
            {
              type: "paragraph",
              text: "Il accompagne une intention précise pendant une certaine période, puis laisse naturellement place à d’autres Programmes tandis que le Club continue d’exister.",
            },
            {
              type: "paragraph",
              text: "Les Membres demeurent.",
            },
            {
              type: "paragraph",
              text: "Les Produits participants demeurent.",
            },
            {
              type: "paragraph",
              text: "La mémoire de la relation demeure.",
            },
            {
              type: "paragraph",
              text: "La confiance construite au fil du temps demeure.",
            },
            {
              type: "paragraph",
              text: "Cette distinction offre une grande liberté aux fabricants.",
            },
            {
              type: "paragraph",
              text: "Ils peuvent renouveler leurs Programmes aussi souvent qu’ils le souhaitent sans avoir à reconstruire leur communauté.",
            },
            {
              type: "paragraph",
              text: "Ainsi, la stabilité appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Le mouvement appartient aux Programmes.",
            },
            {
              type: "paragraph",
              text: "La relation demeure.",
            },
            {
              type: "paragraph",
              text: "Les Programmes évoluent autour d’elle.",
            },
          ],
        },
        {
          id: "ce-qui-construit-relation-appartient-club",
          number: "6",
          title: "Tout ce qui construit la relation appartient au Club",
          content: [
            {
              type: "paragraph",
              text: "Le Club constitue l’infrastructure permanente de la relation.",
            },
            {
              type: "paragraph",
              text: "Il est donc naturel que tout ce qui participe à cette relation dans la durée lui appartienne.",
            },
            {
              type: "paragraph",
              text: "Les Membres appartiennent au Club.",
            },
            {
              type: "paragraph",
              text: "Les Produits participants appartiennent au Club.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité qui constituent la mémoire durable de la relation appartiennent également au Club.",
            },
            {
              type: "paragraph",
              text: "Plus fondamentalement encore, la relation elle-même appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Elle se construit progressivement à travers les achats, les interactions, les reconnaissances et la confiance qui s’établit entre un fabricant et sa communauté.",
            },
            {
              type: "paragraph",
              text: "Elle traverse les Programmes sans jamais dépendre d’eux.",
            },
            {
              type: "paragraph",
              text: "Cette organisation procure une grande stabilité à l’architecture.",
            },
            {
              type: "paragraph",
              text: "Les Programmes peuvent apparaître, évoluer ou disparaître sans remettre en question les fondements de la relation.",
            },
            {
              type: "paragraph",
              text: "Ainsi, tout ce qui contribue à construire une relation durable appartient naturellement au Club.",
            },
            {
              type: "paragraph",
              text: "C’est cette permanence qui permet au fabricant de développer, année après année, une véritable communauté.",
            },
          ],
        },
        {
          id: "programmes-animent-relation",
          number: "7",
          title: "Les Programmes animent la relation",
          content: [
            {
              type: "paragraph",
              text: "Si le Club constitue l’espace permanent de la relation, les Programmes en constituent les mécanismes d’animation.",
            },
            {
              type: "paragraph",
              text: "Ils permettent au fabricant de proposer différentes expériences adaptées à ses objectifs, à ses produits, à sa saisonnalité ou à sa stratégie.",
            },
            {
              type: "paragraph",
              text: "Chaque Programme répond à une intention particulière.",
            },
            {
              type: "paragraph",
              text: "Faire découvrir un produit.",
            },
            {
              type: "paragraph",
              text: "Encourager des achats répétés.",
            },
            {
              type: "paragraph",
              text: "Reconnaître la fidélité.",
            },
            {
              type: "paragraph",
              text: "Souligner un événement.",
            },
            {
              type: "paragraph",
              text: "Créer une expérience particulière.",
            },
            {
              type: "paragraph",
              text: "Les Récompenses appartiennent donc aux Programmes.",
            },
            {
              type: "paragraph",
              text: "Les Timbres appartiennent aux Programmes.",
            },
            {
              type: "paragraph",
              text: "Les Cartes produit appartiennent aux Programmes.",
            },
            {
              type: "paragraph",
              text: "Les classements, concours et autres expériences particulières appartiennent également aux Programmes.",
            },
            {
              type: "paragraph",
              text: "Tous ces mécanismes peuvent évoluer librement puisqu’ils ne constituent pas les fondements de la relation.",
            },
            {
              type: "paragraph",
              text: "Ils représentent différentes façons de la faire vivre.",
            },
            {
              type: "paragraph",
              text: "Cette distinction offre au fabricant une grande liberté.",
            },
            {
              type: "paragraph",
              text: "Il peut renouveler continuellement les expériences proposées à sa communauté tout en conservant un seul Club, une seule communauté et une seule relation durable.",
            },
            {
              type: "paragraph",
              text: "Les Programmes ne sont donc jamais une finalité.",
            },
            {
              type: "paragraph",
              text: "Ils sont les moyens par lesquels un fabricant choisit d’animer la relation qu’il entretient avec sa communauté.",
            },
          ],
        },
        {
          id: "donnees-fidelite-racontent-relation",
          number: "8",
          title: "Les Données de fidélité racontent la relation",
          content: [
            {
              type: "paragraph",
              text: "Dans Yumf, une Donnée de fidélité n’est jamais créée arbitrairement.",
            },
            {
              type: "paragraph",
              text: "Elle constitue toujours la mémoire d’une relation qui s’est construite.",
            },
            {
              type: "paragraph",
              text: "Les Points.",
            },
            {
              type: "paragraph",
              text: "Les Timbres.",
            },
            {
              type: "paragraph",
              text: "Les poinçons d’une Carte produit.",
            },
            {
              type: "paragraph",
              text: "Les participations.",
            },
            {
              type: "paragraph",
              text: "Les positions dans un classement.",
            },
            {
              type: "paragraph",
              text: "Toutes ces Données de fidélité représentent les conséquences d’interactions reconnues.",
            },
            {
              type: "paragraph",
              text: "Elles racontent l’histoire de la relation entre un fabricant et sa communauté.",
            },
            {
              type: "paragraph",
              text: "Elles ne cherchent pas à créer cette relation.",
            },
            {
              type: "paragraph",
              text: "Elles la documentent.",
            },
            {
              type: "paragraph",
              text: "Cette approche influence profondément l’architecture de Yumf.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité n’ont pas d’existence indépendante.",
            },
            {
              type: "paragraph",
              text: "Elles découlent toujours d’un événement reconnu conformément aux règles définies par le fabricant.",
            },
            {
              type: "paragraph",
              text: "Cette conception présente plusieurs avantages.",
            },
            {
              type: "paragraph",
              text: "Elle garantit la cohérence des traitements.",
            },
            {
              type: "paragraph",
              text: "Elle facilite les corrections lorsqu’elles deviennent nécessaires.",
            },
            {
              type: "paragraph",
              text: "Elle permet également aux Programmes d’évoluer sans remettre en question l’histoire de la relation.",
            },
            {
              type: "paragraph",
              text: "Plus fondamentalement, elle reflète la philosophie même de Yumf.",
            },
            {
              type: "paragraph",
              text: "Une relation ne peut être déclarée.",
            },
            {
              type: "paragraph",
              text: "Elle se construit.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité en deviennent simplement la mémoire.",
            },
          ],
        },
        {
          id: "reconnaissance-evenement-verifiable",
          number: "9",
          title: "Toute reconnaissance repose sur un événement vérifiable",
          content: [
            {
              type: "paragraph",
              text: "Une relation ne peut être reconnue durablement que si les événements qui la construisent peuvent être démontrés.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, aucune Donnée de fidélité n’est produite sans qu’un événement puisse en justifier l’existence.",
            },
            {
              type: "paragraph",
              text: "Dans la majorité des cas, cet événement correspond à un Achat admissible.",
            },
            {
              type: "paragraph",
              text: "Il pourra, avec l’évolution de la Plateforme, prendre d’autres formes, pourvu qu’il puisse être observé, validé et appliqué conformément aux règles définies par le fabricant.",
            },
            {
              type: "paragraph",
              text: "Avant qu’une reconnaissance soit accordée, l’événement dont elle découle fait toujours l’objet des vérifications nécessaires.",
            },
            {
              type: "paragraph",
              text: "Selon les situations, cette validation peut être entièrement automatisée, nécessiter des contrôles supplémentaires ou faire intervenir une révision.",
            },
            {
              type: "paragraph",
              text: "Cette exigence garantit l’intégrité de la Plateforme.",
            },
            {
              type: "paragraph",
              text: "Chaque Donnée de fidélité peut être reliée à l’événement qui lui a donné naissance.",
            },
            {
              type: "paragraph",
              text: "Chaque décision peut être expliquée.",
            },
            {
              type: "paragraph",
              text: "Chaque correction peut être appliquée de manière cohérente.",
            },
            {
              type: "paragraph",
              text: "La confiance repose sur cette capacité à démontrer pourquoi une reconnaissance existe.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, une Donnée de fidélité n’est jamais une information isolée.",
            },
            {
              type: "paragraph",
              text: "Elle constitue toujours la conséquence vérifiable d’un événement reconnu conformément aux règles du fabricant.",
            },
            {
              type: "paragraph",
              text: "Lorsqu’une erreur est détectée, lorsqu’une fraude est constatée ou lorsqu’un événement doit être corrigé, la Plateforme peut revoir les conséquences qui en découlent tout en préservant l’intégrité de l’ensemble du système.",
            },
            {
              type: "paragraph",
              text: "Ainsi, dans Yumf, les Données de fidélité ne constituent jamais des informations isolées.",
            },
            {
              type: "paragraph",
              text: "Elles représentent toujours la conséquence vérifiable d’un événement reconnu conformément aux règles du fabricant et aux mécanismes de validation de la Plateforme.",
            },
            {
              type: "paragraph",
              text: "C’est cette exigence qui permet à Yumf d’offrir un système de fidélisation à la fois transparent, fiable et digne de la confiance des fabricants comme de leurs Membres.",
            },
          ],
        },
      ],
    },
    {
      id: "garanties-confiance",
      number: "3",
      title: "Les garanties de confiance",
      introduction: [
        {
          type: "paragraph",
          text: "Les lois fondamentales définissent la manière dont Yumf est conçu.",
        },
        {
          type: "paragraph",
          text: "Les propriétés qui en découlent expliquent comment cette architecture fonctionne.",
        },
        {
          type: "paragraph",
          text: "Il reste toutefois une question essentielle.",
        },
        {
          type: "paragraph",
          text: "Comment garantir que cette relation demeure digne de confiance au fil du temps ?",
        },
        {
          type: "paragraph",
          text: "Une infrastructure relationnelle ne doit pas seulement être cohérente lorsqu’une situation est idéale.",
        },
        {
          type: "paragraph",
          text: "Elle doit continuer de l’être lorsque des Programmes évoluent, lorsque des erreurs doivent être corrigées, lorsque des événements exceptionnels surviennent ou lorsque les règles d’un Club changent.",
        },
        {
          type: "paragraph",
          text: "Les principes présentés dans cette partie décrivent les garanties qui permettent à Yumf de préserver cette confiance.",
        },
        {
          type: "paragraph",
          text: "Ils assurent que la relation entre un fabricant et sa communauté demeure cohérente, explicable et respectueuse des personnes qui la composent.",
        },
      ],
      sections: [
        {
          id: "yumf-preserve-coherence-relation",
          number: "10",
          title: "Yumf préserve la cohérence de la relation",
          content: [
            {
              type: "paragraph",
              text: "Une relation de confiance ne peut exister que si les règles qui la gouvernent sont appliquées avec cohérence.",
            },
            {
              type: "paragraph",
              text: "Pour cette raison, Yumf ne cherche pas seulement à traiter correctement les situations normales.",
            },
            {
              type: "paragraph",
              text: "La Plateforme est conçue pour empêcher que des situations incompatibles avec ses principes puissent se produire.",
            },
            {
              type: "paragraph",
              text: "Un Membre ne peut recevoir une Récompense qui ne satisfait plus aux conditions définies par le fabricant.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité d’un Club ne peuvent jamais être utilisées dans un autre.",
            },
            {
              type: "paragraph",
              text: "Un Programme terminé ne peut continuer à produire de nouvelles reconnaissances.",
            },
            {
              type: "paragraph",
              text: "Une Carte produit ne peut continuer à progresser lorsqu’elle a atteint son objectif ou qu’elle n’est plus applicable.",
            },
            {
              type: "paragraph",
              text: "Plus généralement, chaque mécanisme de la Plateforme veille à préserver la cohérence de la relation entre le fabricant et sa communauté.",
            },
            {
              type: "paragraph",
              text: "Cette approche protège autant les fabricants que les Membres.",
            },
            {
              type: "paragraph",
              text: "Les fabricants peuvent avoir confiance dans les résultats produits par leurs Clubs.",
            },
            {
              type: "paragraph",
              text: "Les Membres peuvent avoir confiance dans l’application équitable des règles.",
            },
            {
              type: "paragraph",
              text: "La robustesse de Yumf ne repose donc pas uniquement sur sa capacité à corriger les erreurs.",
            },
            {
              type: "paragraph",
              text: "Elle repose d’abord sur sa capacité à empêcher que des incohérences puissent apparaître.",
            },
          ],
        },
        {
          id: "chaque-relation-demeure-explicable",
          number: "11",
          title: "Chaque relation demeure explicable",
          content: [
            {
              type: "paragraph",
              text: "Une relation durable ne repose pas uniquement sur la confiance.",
            },
            {
              type: "paragraph",
              text: "Elle repose également sur la capacité d’expliquer pourquoi chaque reconnaissance existe.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, aucun événement important n’est considéré comme isolé.",
            },
            {
              type: "paragraph",
              text: "Chaque Achat admissible reconnu.",
            },
            {
              type: "paragraph",
              text: "Chaque Donnée de fidélité produite.",
            },
            {
              type: "paragraph",
              text: "Chaque Récompense attribuée.",
            },
            {
              type: "paragraph",
              text: "Chaque décision importante laisse une trace permettant d’en comprendre l’origine.",
            },
            {
              type: "paragraph",
              text: "Cette traçabilité constitue un principe fondamental de l’architecture.",
            },
            {
              type: "paragraph",
              text: "Elle permet de reconstituer l’histoire de la relation entre un fabricant et sa communauté.",
            },
            {
              type: "paragraph",
              text: "Elle facilite les vérifications lorsqu’une situation doit être revue.",
            },
            {
              type: "paragraph",
              text: "Elle permet d’apporter des corrections lorsque cela devient nécessaire.",
            },
            {
              type: "paragraph",
              text: "Elle contribue également aux capacités d’audit de la Plateforme.",
            },
            {
              type: "paragraph",
              text: "Plus fondamentalement encore, elle permet d’expliquer les décisions prises.",
            },
            {
              type: "paragraph",
              text: "Une reconnaissance ne doit jamais apparaître comme arbitraire.",
            },
            {
              type: "paragraph",
              text: "Elle doit toujours pouvoir être reliée à l’événement qui l’a justifiée ainsi qu’aux règles qui ont conduit à son attribution.",
            },
            {
              type: "paragraph",
              text: "La confiance repose autant sur la justesse des décisions que sur la capacité d’en expliquer l’origine.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, chaque relation possède une mémoire.",
            },
            {
              type: "paragraph",
              text: "Et cette mémoire demeure toujours explicable.",
            },
          ],
        },

        {
          id: "confiance-appartient-personnes",
          number: "12",
          title: "La confiance appartient aux personnes",
          content: [
            {
              type: "paragraph",
              text: "La relation qu’un fabricant développe avec sa communauté constitue l’une des plus grandes richesses de son Club.",
            },
            {
              type: "paragraph",
              text: "Cette relation ne lui confère toutefois jamais un droit de propriété sur les personnes qui la composent.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, un Membre demeure toujours libre de ses choix.",
            },
            {
              type: "paragraph",
              text: "Il choisit les fabricants qu’il souhaite soutenir.",
            },
            {
              type: "paragraph",
              text: "Il choisit les produits qu’il souhaite acheter.",
            },
            {
              type: "paragraph",
              text: "Et il demeure libre de poursuivre ou non cette relation au fil du temps.",
            },
            {
              type: "paragraph",
              text: "Cette distinction est fondamentale.",
            },
            {
              type: "paragraph",
              text: "Le fabricant construit une communauté.",
            },
            {
              type: "paragraph",
              text: "Il ne possède jamais cette communauté.",
            },
            {
              type: "paragraph",
              text: "De la même manière, les Renseignements personnels des Membres ne lui appartiennent jamais.",
            },
            {
              type: "paragraph",
              text: "Yumf veille à ce que chaque fabricant puisse accéder uniquement aux renseignements nécessaires à l’administration de son Club et au développement de la relation avec ses Membres, conformément aux choix de ceux-ci et aux lois applicables.",
            },
            {
              type: "paragraph",
              text: "Cette approche permet de concilier deux objectifs essentiels.",
            },
            {
              type: "paragraph",
              text: "Permettre au fabricant de comprendre sa communauté et de développer une véritable relation avec ses Membres.",
            },
            {
              type: "paragraph",
              text: "Préserver les droits, la liberté et la confiance des personnes qui composent cette communauté en limitant l’accès à leurs Renseignements personnels à ce qui est réellement nécessaire.",
            },
            {
              type: "paragraph",
              text: "Cette garantie dépasse la simple protection des données.",
            },
            {
              type: "paragraph",
              text: "Elle reflète directement la philosophie de Yumf.",
            },
            {
              type: "paragraph",
              text: "Une relation durable ne peut exister que lorsqu’elle est librement choisie et qu’elle repose sur la confiance.",
            },
            {
              type: "paragraph",
              text: "Cette confiance ne dépend pas uniquement de la qualité des Produits, des Programmes ou des Récompenses.",
            },
            {
              type: "paragraph",
              text: "Elle repose également sur la certitude que les renseignements confiés à la Plateforme sont utilisés avec respect, transparence et dans l’intérêt des personnes concernées.",
            },
            {
              type: "paragraph",
              text: "Ainsi, dans Yumf, la relation appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Les décisions commerciales appartiennent au fabricant.",
            },
            {
              type: "paragraph",
              text: "Les Renseignements personnels demeurent protégés.",
            },
            {
              type: "paragraph",
              text: "C’est cet équilibre qui permet à chacun de jouer pleinement son rôle tout en préservant la confiance sur laquelle repose l’ensemble de l’écosystème.",
            },
          ],
        },
      ],
    },
    {
      id: "cascade-architecturale",
      number: "4",
      title: "La cascade architecturale de Yumf",
      introduction: [
        {
          type: "paragraph",
          text: "Les lois fondamentales présentées dans ce document ne constituent pas une succession de principes indépendants.",
        },
        {
          type: "paragraph",
          text: "Elles décrivent une architecture où chaque concept rend le suivant possible.",
        },
        {
          type: "paragraph",
          text: "Cette progression peut être représentée comme une cascade architecturale.",
        },
        {
          type: "paragraph",
          text: "Chaque niveau fournit le contexte nécessaire à celui qui lui succède.",
        },
        {
          type: "paragraph",
          text: "Aucun élément n’existe isolément.",
        },
        {
          type: "paragraph",
          text: "Tous participent à une même finalité : permettre à un fabricant de développer une relation durable avec les personnes qui choisissent ses produits.",
        },
      ],
      sections: [
        {
          id: "intention-reconnaissance",
          number: "13",
          title: "De l’intention à la reconnaissance",
          content: [
            {
              type: "paragraph",
              text: "L’architecture relationnelle de Yumf peut être représentée comme une cascade dans laquelle chaque niveau rend le suivant possible.",
            },
            {
              type: "diagram",
              variant: "flow",
              items: [
                "Fabricant",
                "Club",
                "Produits participants",
                "Achats admissibles",
                "Validation",
                "Données de fidélité",
                "Programmes",
                "Récompenses",
              ],
            },
            {
              type: "paragraph",
              text: "Cette représentation ne décrit ni un organigramme, ni un modèle de données.",
            },
            {
              type: "paragraph",
              text: "Elle illustre l’ordre logique selon lequel l’infrastructure relationnelle de Yumf prend forme.",
            },
            {
              type: "paragraph",
              text: "Cette représentation ne décrit ni un organigramme, ni un modèle de données.",
            },
            {
              type: "paragraph",
              text: "Elle illustre l’ordre logique selon lequel l’infrastructure relationnelle de Yumf prend forme.",
            },
            {
              type: "paragraph",
              text: "Tout commence avec le Fabricant.",
            },
            {
              type: "paragraph",
              text: "C’est lui qui choisit les Produits participants, définit les règles de son Club et décide de la manière dont il souhaite développer la relation avec sa communauté.",
            },
            {
              type: "paragraph",
              text: "Le Club constitue ensuite l’espace permanent où cette relation peut exister.",
            },
            {
              type: "paragraph",
              text: "Les Produits participants deviennent les points de rencontre entre le fabricant et les consommateurs.",
            },
            {
              type: "paragraph",
              text: "Lorsqu’un Produit participant fait l’objet d’un Achat admissible, cet événement peut être reconnu par la Plateforme.",
            },
            {
              type: "paragraph",
              text: "Cette reconnaissance passe par une validation, qui garantit que les conditions définies par le fabricant sont effectivement satisfaites.",
            },
            {
              type: "paragraph",
              text: "Ce n’est qu’à partir de cette validation que peuvent être produites les Données de fidélité.",
            },
            {
              type: "paragraph",
              text: "Ces données deviennent la mémoire de la relation qui se construit entre le Club et ses Membres.",
            },
            {
              type: "paragraph",
              text: "Les Programmes utilisent ensuite cette mémoire afin d’animer la relation selon les objectifs poursuivis par le fabricant.",
            },
            {
              type: "paragraph",
              text: "Enfin, les Récompenses viennent reconnaître les comportements ou les réalisations que ces Programmes cherchent à encourager.",
            },
            {
              type: "paragraph",
              text: "Cette progression montre que chaque niveau prend son sens à partir de ceux qui le précèdent.",
            },
            {
              type: "paragraph",
              text: "Les Récompenses sont proposées dans le cadre des Programmes.",
            },
            {
              type: "paragraph",
              text: "Les Programmes utilisent les Données de fidélité pour reconnaître les comportements qu’un fabricant souhaite encourager.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité découlent d’événements reconnus par la Plateforme.",
            },
            {
              type: "paragraph",
              text: "Cette reconnaissance repose sur la validation d’un Achat admissible ou, à mesure que Yumf évoluera, d’un autre événement vérifiable.",
            },
            {
              type: "paragraph",
              text: "Les Achats admissibles permettent aux Produits participants de devenir des points de rencontre entre le fabricant et les consommateurs.",
            },
            {
              type: "paragraph",
              text: "Les Produits participants prennent place dans le Club.",
            },
            {
              type: "paragraph",
              text: "Et le Club existe parce qu’un Fabricant choisit d’y construire une relation avec sa communauté.",
            },
            {
              type: "paragraph",
              text: "Mais cette cascade exprime également une idée plus profonde.",
            },
            {
              type: "paragraph",
              text: "À mesure que l’on descend dans l’architecture, chaque niveau devient plus concret.",
            },
            {
              type: "paragraph",
              text: "Le Fabricant exprime une intention.",
            },
            {
              type: "paragraph",
              text: "Le Club crée un espace relationnel.",
            },
            {
              type: "paragraph",
              text: "Les Produits participants rendent cette relation possible.",
            },
            {
              type: "paragraph",
              text: "Les Achats admissibles la font naître.",
            },
            {
              type: "paragraph",
              text: "La validation en garantit l’intégrité.",
            },
            {
              type: "paragraph",
              text: "Les Données de fidélité en conservent la mémoire.",
            },
            {
              type: "paragraph",
              text: "Les Programmes la font vivre.",
            },
            {
              type: "paragraph",
              text: "Les Récompenses la reconnaissent.",
            },
            {
              type: "paragraph",
              text: "Autrement dit, tout ce qui apparaît au bas de cette cascade trouve son origine dans les décisions prises à son sommet.",
            },
            {
              type: "paragraph",
              text: "Les Récompenses ne constituent donc jamais le point de départ de l’architecture.",
            },
            {
              type: "paragraph",
              text: "Elles en représentent l’une des dernières expressions.",
            },
            {
              type: "paragraph",
              text: "La relation, quant à elle, est présente à chaque niveau.",
            },
            {
              type: "paragraph",
              text: "Elle commence avec un premier achat.",
            },
            {
              type: "paragraph",
              text: "Elle se développe dans le Club.",
            },
            {
              type: "paragraph",
              text: "Elle est documentée par les Données de fidélité.",
            },
            {
              type: "paragraph",
              text: "Elle est animée par les Programmes.",
            },
            {
              type: "paragraph",
              text: "Elle est reconnue par les Récompenses.",
            },
            {
              type: "paragraph",
              text: "Ainsi, cette cascade ne décrit pas seulement l’organisation de Yumf.",
            },
            {
              type: "paragraph",
              text: "Elle résume l’ensemble de sa philosophie.",
            },
            {
              type: "paragraph",
              text: "Chaque décision de conception, chaque fonctionnalité et chaque évolution de la Plateforme doivent pouvoir y trouver naturellement leur place.",
            },
          ],
        },
      ],
    },
    {
      id: "principes-evolution",
      number: "5",
      title: "Les principes d’évolution",
      introduction: [
        {
          type: "paragraph",
          text: "L’architecture de Yumf n’a pas été conçue pour répondre uniquement aux besoins actuels de la Plateforme.",
        },
        {
          type: "paragraph",
          text: "Elle a été pensée pour demeurer cohérente à mesure que de nouvelles fonctionnalités, de nouveaux Programmes et de nouveaux usages apparaîtront.",
        },
        {
          type: "paragraph",
          text: "Cette capacité d’évolution ne repose pas uniquement sur la qualité du code ou des choix technologiques.",
        },
        {
          type: "paragraph",
          text: "Elle repose d’abord sur le respect des principes présentés dans les documents qui précèdent.",
        },
        {
          type: "paragraph",
          text: "Une fonctionnalité peut être innovante.",
        },
        {
          type: "paragraph",
          text: "Elle peut répondre à un besoin réel.",
        },
        {
          type: "paragraph",
          text: "Elle peut même représenter une excellente idée.",
        },
        {
          type: "paragraph",
          text: "Si elle contredit les fondements de l’architecture, elle affaiblit progressivement la cohérence de l’ensemble.",
        },
        {
          type: "paragraph",
          text: "À l’inverse, lorsqu’une évolution respecte les principes fondateurs de Yumf, elle s’intègre naturellement au produit, quelle que soit sa complexité.",
        },
        {
          type: "paragraph",
          text: "L’évolution de Yumf doit donc être guidée par quelques règles simples.",
        },
      ],
      sections: [
        {
          id: "evolution-renforce-relation",
          number: "14",
          title: "Toute évolution doit renforcer la relation",
          content: [
            {
              type: "paragraph",
              text: "La relation entre un Fabricant et les personnes qui choisissent ses produits demeure la raison d’être de la Plateforme.",
            },
            {
              type: "paragraph",
              text: "Toute nouvelle fonctionnalité devrait contribuer à créer, développer, reconnaître ou enrichir cette relation.",
            },
            {
              type: "paragraph",
              text: "Si une évolution n’apporte rien à cette relation, sa place dans Yumf doit être remise en question.",
            },
            {
              type: "paragraph",
              text: "La relation constitue le premier critère d’évaluation de toute décision produit.",
            },
          ],
        },
        {
          id: "concepts-precedent-fonctionnalites",
          number: "15",
          title: "Les concepts précèdent les fonctionnalités",
          content: [
            {
              type: "paragraph",
              text: "Dans Yumf, les fonctionnalités ne constituent jamais le point de départ.",
            },
            {
              type: "paragraph",
              text: "Elles représentent toujours l’expression concrète d’un concept déjà présent dans l’architecture.",
            },
            {
              type: "paragraph",
              text: "Avant d’ajouter une nouvelle fonctionnalité, il convient donc de répondre à une question plus fondamentale :",
            },
            {
              type: "paragraph",
              text: "Quel concept cette fonctionnalité vient-elle servir ?",
            },
            {
              type: "paragraph",
              text: "Lorsqu’aucun concept existant ne peut l’expliquer, deux possibilités existent.",
            },
            {
              type: "paragraph",
              text: "Soit la fonctionnalité n’a pas sa place dans Yumf.",
            },
            {
              type: "paragraph",
              text: "Soit l’architecture conceptuelle doit d’abord évoluer avant son implémentation.",
            },
            {
              type: "paragraph",
              text: "Cette discipline permet d’éviter que le produit ne devienne une accumulation de fonctionnalités indépendantes.",
            },
          ],
        },
        {
          id: "responsabilites-demeurent-claires",
          number: "16",
          title: "Les responsabilités doivent demeurer claires",
          content: [
            {
              type: "paragraph",
              text: "Chaque concept possède une mission unique.",
            },
            {
              type: "paragraph",
              text: "Le Club construit la relation.",
            },
            {
              type: "paragraph",
              text: "Le Programme l’anime.",
            },
            {
              type: "paragraph",
              text: "Le Produit participant crée la rencontre.",
            },
            {
              type: "paragraph",
              text: "La Donnée de fidélité en conserve la mémoire.",
            },
            {
              type: "paragraph",
              text: "Le Fabricant définit les règles.",
            },
            {
              type: "paragraph",
              text: "Yumf les applique.",
            },
            {
              type: "paragraph",
              text: "Une évolution ne devrait jamais brouiller ces responsabilités.",
            },
            {
              type: "paragraph",
              text: "Lorsqu’un même concept commence à remplir plusieurs missions, l’architecture perd progressivement en lisibilité.",
            },
          ],
        },
        {
          id: "permanence-doit-etre-preservee",
          number: "17",
          title: "La permanence doit être préservée",
          content: [
            {
              type: "paragraph",
              text: "Les éléments permanents constituent la stabilité de Yumf.",
            },
            {
              type: "paragraph",
              text: "Les éléments temporaires lui permettent d’évoluer.",
            },
            {
              type: "paragraph",
              text: "Cette distinction ne devrait jamais disparaître.",
            },
            {
              type: "paragraph",
              text: "Une évolution ne devrait pas transformer un Programme en élément permanent.",
            },
            {
              type: "paragraph",
              text: "Elle ne devrait pas davantage rendre temporaire un concept qui appartient au Club.",
            },
            {
              type: "paragraph",
              text: "Préserver cette frontière protège l’ensemble de l’architecture.",
            },
          ],
        },

        {
          id: "infrastructure-precede-interface",
          number: "18",
          title: "L’infrastructure précède l’interface",
          content: [
            {
              type: "paragraph",
              text: "Les interfaces évolueront.",
            },
            {
              type: "paragraph",
              text: "Les parcours utilisateurs évolueront.",
            },
            {
              type: "paragraph",
              text: "Les technologies évolueront.",
            },
            {
              type: "paragraph",
              text: "L’infrastructure relationnelle, elle, doit demeurer stable.",
            },
            {
              type: "paragraph",
              text: "Les choix d’interface ne devraient jamais conduire à modifier les concepts fondamentaux uniquement pour simplifier une implémentation.",
            },
            {
              type: "paragraph",
              text: "Dans Yumf, l’expérience utilisateur s’appuie sur l’architecture.",
            },
            {
              type: "paragraph",
              text: "Elle ne la définit pas.",
            },
          ],
        },
        {
          id: "architecture-precede-code",
          number: "19",
          title: "L’architecture précède le code",
          content: [
            {
              type: "paragraph",
              text: "L’architecture produit constitue le dernier niveau conceptuel avant l’implémentation.",
            },
            {
              type: "paragraph",
              text: "Le code n’est pas l’endroit où l’on décide de ce qu’est Yumf.",
            },
            {
              type: "paragraph",
              text: "Il en constitue simplement la traduction.",
            },
            {
              type: "paragraph",
              text: "Lorsqu’une évolution importante est envisagée, sa place devrait pouvoir être expliquée dans les documents d’architecture avant d’être intégrée au logiciel.",
            },
            {
              type: "paragraph",
              text: "Cette démarche garantit que l’évolution de la Plateforme demeure fidèle à la vision qui lui a donné naissance.",
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
          text: "Les principes présentés dans ce document ne constituent pas des règles indépendantes.",
        },
        {
          type: "paragraph",
          text: "Ils forment un système cohérent où chaque principe découle naturellement du précédent et contribue à une même vision de la relation entre un Fabricant et les personnes qui choisissent ses produits.",
        },
        {
          type: "paragraph",
          text: "Cette cohérence ne vise pas uniquement à assurer la qualité actuelle de la Plateforme.",
        },
        {
          type: "paragraph",
          text: "Elle constitue également le cadre qui guidera son évolution au fil du temps.",
        },
        {
          type: "paragraph",
          text: "À partir de ces fondements, il devient possible de définir une architecture produit où chaque concept possède une mission claire, où chaque responsabilité trouve sa place et où chaque nouvelle fonctionnalité peut être évaluée à la lumière des principes qui la précèdent.",
        },
        {
          type: "paragraph",
          text: "Le document suivant poursuit cette progression.",
        },
        {
          type: "paragraph",
          text: "Il ne cherche plus à expliquer pourquoi Yumf est conçu ainsi.",
        },
        {
          type: "paragraph",
          text: "Il montre comment cette philosophie prend forme dans l’architecture du produit, à travers les concepts fondamentaux, leurs relations, leurs parcours et les principes qui guideront leur évolution.",
        },
        {
          type: "paragraph",
          text: "Ainsi, la vision devient philosophie.",
        },
        {
          type: "paragraph",
          text: "La philosophie devient principes.",
        },
        {
          type: "paragraph",
          text: "Les principes deviennent architecture.",
        },
        {
          type: "paragraph",
          text: "Et l’architecture pourra ensuite devenir logiciel, sans jamais perdre la cohérence qui lui a donné naissance.",
        },
      ],
    },
  ],
} satisfies LocalizedDocument;
