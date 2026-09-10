import type { LegalDoc } from "./types";
import { withFallback } from "./types";

const en: LegalDoc = {
  title: "Acceptable Use Policy",
  updated: "2026-09-10",
  summary:
    "The rules that govern how you may use Zelynto, including its AI features and its access to Microsoft 365 tenants.",
  intro: [
    {
      type: "p",
      text: "This Acceptable Use Policy (“AUP”) governs use of the Zelynto service, including its AI features, and is incorporated into the Terms of Service. The organisation that subscribes is responsible for ensuring that everyone it allows to use Zelynto complies with this AUP."
    },
    {
      type: "p",
      text: "Capitalised terms have the meaning given in the Terms of Service. We may update this AUP from time to time; changes take effect when posted."
    }
  ],
  sections: [
    {
      id: "compliance-with-laws",
      heading: "Compliance with laws",
      blocks: [
        {
          type: "p",
          text: "You must use Zelynto in compliance with all applicable laws, including data-protection, employment, export-control and sanctions laws. You must not use Zelynto if you or your organisation are subject to sanctions that would prohibit it, or to enable a sanctioned party."
        }
      ]
    },
    {
      id: "authorised-administration",
      heading: "Authorised administration only",
      blocks: [
        {
          type: "p",
          text: "You may connect Zelynto only to a Microsoft 365 tenant that your organisation is authorised to administer. You must not use Zelynto to:"
        },
        {
          type: "ul",
          items: [
            "access, enumerate or modify a tenant without the authorisation of that tenant’s owner",
            "grant the Entra ID application permissions broader than needed for your intended use",
            "circumvent, disable or test the Microsoft 365 security controls of any tenant except your own, with authorisation",
            "exfiltrate directory or configuration data for a purpose unrelated to administering your tenant"
          ]
        }
      ]
    },
    {
      id: "prohibited-activities",
      heading: "Prohibited activities",
      blocks: [
        {
          type: "p",
          text: "You must not, and must not allow anyone to:"
        },
        {
          type: "ul",
          items: [
            "probe, scan or test the vulnerability of the Service, or breach or circumvent its authentication or rate limits",
            "introduce malware, or use the Service to distribute malware or unlawful content",
            "reverse engineer, decompile or attempt to extract the source code or models of the Service, except to the extent this restriction is prohibited by law",
            "scrape or harvest data from the Service other than through its documented interfaces",
            "resell, sublicense or provide the Service to a third party without our written consent",
            "use the Service to build or train a competing product or model",
            "use the Service to harass, defame or infringe the rights of others"
          ]
        }
      ]
    },
    {
      id: "ai-use",
      heading: "Use of AI features",
      blocks: [
        {
          type: "p",
          text: "Zelynto’s AI features assist administration; they do not replace your judgement. You must:"
        },
        {
          type: "ul",
          items: [
            "review AI-generated findings, recommendations and drafts before relying on them",
            "keep a human in the loop for any change to security, identity, licensing or data-governance configuration — Zelynto executes such actions only after you approve them, and you must not build automation that removes that review",
            "not present AI output as professional (legal, security-certification, financial) advice without independent review by a qualified person",
            "not use the AI features to generate disinformation, to impersonate a person or organisation, or to deceive people about whether they are interacting with AI",
            "not attempt to bypass the Service’s safety controls or extract its system instructions"
          ]
        }
      ]
    },
    {
      id: "sensitive-data",
      heading: "Sensitive data",
      blocks: [
        {
          type: "p",
          text: "You must not submit into natural-language requests any data that requires heightened legal protection — for example health data subject to specific regimes, payment card data subject to PCI DSS, or government identifiers — unless we have agreed in writing that the Service may be used for that purpose. Zelynto reads such data only where it already exists in your tenant configuration and is necessary to answer your request."
        }
      ]
    },
    {
      id: "anti-abuse",
      heading: "Anti-abuse",
      blocks: [
        {
          type: "p",
          text: "You must not operate multiple accounts to obtain trial credits you are not entitled to, to circumvent usage limits, or to evade a suspension. You must not share credentials across organisations."
        }
      ]
    },
    {
      id: "reporting",
      heading: "Reporting violations",
      blocks: [
        {
          type: "p",
          text: "Report suspected security vulnerabilities or violations of this AUP to security@zelynto.com. We investigate all reports and do not pursue good-faith security research conducted in accordance with a coordinated disclosure."
        }
      ]
    },
    {
      id: "enforcement",
      heading: "Enforcement",
      blocks: [
        {
          type: "p",
          text: "If we reasonably believe you have violated this AUP, we may remove offending content, throttle or suspend affected functionality, or suspend or terminate access — with notice where practical, and immediately where necessary to protect the Service, Microsoft 365 or another customer. We may report unlawful activity to the competent authorities."
        }
      ]
    },
    {
      id: "relationship-to-agreement",
      heading: "Relationship to the Agreement",
      blocks: [
        {
          type: "p",
          text: "This AUP supplements the Terms of Service. If there is a conflict, the Terms of Service control except where this AUP is more specific about permitted use."
        }
      ]
    }
  ]
};

const fr: LegalDoc = {
  title: "Politique d’utilisation acceptable",
  updated: "2026-09-10",
  summary:
    "Les règles qui encadrent votre utilisation de Zelynto, y compris ses fonctionnalités d’IA et son accès aux tenants Microsoft 365.",
  intro: [
    {
      type: "p",
      text: "La présente Politique d’utilisation acceptable (« PUA ») encadre l’utilisation du service Zelynto, y compris ses fonctionnalités d’IA, et est intégrée aux Conditions d’utilisation. L’organisation abonnée est responsable de veiller à ce que toute personne qu’elle autorise à utiliser Zelynto respecte la présente PUA."
    },
    {
      type: "p",
      text: "Les termes en majuscules ont le sens que leur donnent les Conditions d’utilisation. Nous pouvons mettre à jour la présente PUA ; les modifications prennent effet dès leur publication."
    }
  ],
  sections: [
    {
      id: "compliance-with-laws",
      heading: "Respect des lois",
      blocks: [
        {
          type: "p",
          text: "Vous devez utiliser Zelynto dans le respect de toutes les lois applicables, notamment en matière de protection des données, de droit du travail, de contrôle des exportations et de sanctions. Vous ne devez pas utiliser Zelynto si vous ou votre organisation faites l’objet de sanctions qui l’interdiraient, ni pour bénéficier à une partie sanctionnée."
        }
      ]
    },
    {
      id: "authorised-administration",
      heading: "Administration autorisée uniquement",
      blocks: [
        {
          type: "p",
          text: "Vous ne pouvez connecter Zelynto qu’à un tenant Microsoft 365 que votre organisation est autorisée à administrer. Vous ne devez pas utiliser Zelynto pour :"
        },
        {
          type: "ul",
          items: [
            "accéder à un tenant, l’énumérer ou le modifier sans l’autorisation du propriétaire de ce tenant",
            "accorder à l’application Entra ID des permissions plus larges que nécessaire pour votre usage prévu",
            "contourner, désactiver ou tester les contrôles de sécurité Microsoft 365 d’un tenant autre que le vôtre, avec autorisation",
            "extraire des données d’annuaire ou de configuration à une fin étrangère à l’administration de votre tenant"
          ]
        }
      ]
    },
    {
      id: "prohibited-activities",
      heading: "Activités interdites",
      blocks: [
        {
          type: "p",
          text: "Vous ne devez pas, et ne devez laisser personne :"
        },
        {
          type: "ul",
          items: [
            "sonder, scanner ou tester la vulnérabilité du Service, ni violer ou contourner son authentification ou ses quotas",
            "introduire des logiciels malveillants, ni utiliser le Service pour diffuser des logiciels malveillants ou des contenus illicites",
            "désosser, décompiler ou tenter d’extraire le code source ou les modèles du Service, sauf dans la mesure où cette restriction est interdite par la loi",
            "collecter ou aspirer des données du Service autrement que via ses interfaces documentées",
            "revendre, sous-licencier ou fournir le Service à un tiers sans notre accord écrit",
            "utiliser le Service pour créer ou entraîner un produit ou modèle concurrent",
            "utiliser le Service pour harceler, diffamer ou porter atteinte aux droits d’autrui"
          ]
        }
      ]
    },
    {
      id: "ai-use",
      heading: "Utilisation des fonctionnalités d’IA",
      blocks: [
        {
          type: "p",
          text: "Les fonctionnalités d’IA de Zelynto assistent l’administration ; elles ne remplacent pas votre jugement. Vous devez :"
        },
        {
          type: "ul",
          items: [
            "vérifier les constats, recommandations et brouillons générés par l’IA avant de vous y fier",
            "maintenir une intervention humaine pour toute modification de configuration de sécurité, d’identité, de licences ou de gouvernance des données — Zelynto n’exécute de telles actions qu’après votre validation, et vous ne devez pas mettre en place d’automatisation supprimant cette revue",
            "ne pas présenter les résultats de l’IA comme un conseil professionnel (juridique, de certification de sécurité, financier) sans revue indépendante par une personne qualifiée",
            "ne pas utiliser les fonctionnalités d’IA pour produire de la désinformation, usurper l’identité d’une personne ou d’une organisation, ou tromper des personnes sur le fait qu’elles interagissent avec une IA",
            "ne pas tenter de contourner les contrôles de sécurité du Service ni d’extraire ses instructions système"
          ]
        }
      ]
    },
    {
      id: "sensitive-data",
      heading: "Données sensibles",
      blocks: [
        {
          type: "p",
          text: "Vous ne devez pas soumettre dans les requêtes en langage naturel des données nécessitant une protection juridique renforcée — par exemple des données de santé soumises à des régimes spécifiques, des données de carte de paiement soumises à la norme PCI DSS, ou des identifiants d’État — sauf accord écrit de notre part pour un tel usage. Zelynto ne lit de telles données que lorsqu’elles existent déjà dans la configuration de votre tenant et sont nécessaires pour répondre à votre demande."
        }
      ]
    },
    {
      id: "anti-abuse",
      heading: "Lutte contre les abus",
      blocks: [
        {
          type: "p",
          text: "Vous ne devez pas exploiter plusieurs comptes pour obtenir des crédits d’essai auxquels vous n’avez pas droit, contourner des limites d’usage ou échapper à une suspension. Vous ne devez pas partager d’identifiants entre organisations."
        }
      ]
    },
    {
      id: "reporting",
      heading: "Signaler une violation",
      blocks: [
        {
          type: "p",
          text: "Signalez toute vulnérabilité de sécurité présumée ou toute violation de la présente PUA à security@zelynto.com. Nous enquêtons sur tous les signalements et n’engageons pas de poursuites contre la recherche de sécurité de bonne foi menée dans le cadre d’une divulgation coordonnée."
        }
      ]
    },
    {
      id: "enforcement",
      heading: "Mise en œuvre",
      blocks: [
        {
          type: "p",
          text: "Si nous estimons raisonnablement que vous avez enfreint la présente PUA, nous pouvons retirer les contenus en cause, brider ou suspendre les fonctionnalités concernées, ou suspendre ou résilier l’accès — avec préavis lorsque cela est possible, et immédiatement lorsque cela est nécessaire pour protéger le Service, Microsoft 365 ou un autre client. Nous pouvons signaler toute activité illicite aux autorités compétentes."
        }
      ]
    },
    {
      id: "relationship-to-agreement",
      heading: "Articulation avec le contrat",
      blocks: [
        {
          type: "p",
          text: "La présente PUA complète les Conditions d’utilisation. En cas de contradiction, les Conditions d’utilisation prévalent, sauf lorsque la présente PUA est plus précise quant à l’usage autorisé."
        }
      ]
    }
  ]
};

export const acceptableUse = withFallback({ en, fr });
