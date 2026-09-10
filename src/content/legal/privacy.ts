import type { LegalDoc } from "./types";
import { withFallback } from "./types";

const en: LegalDoc = {
  title: "Privacy Policy",
  updated: "2026-09-10",
  summary:
    "How Zelynto collects, uses, shares and protects personal data when you visit our website or use the Zelynto Microsoft 365 administration copilot.",
  intro: [
    {
      type: "p",
      text: "Zelynto (“Zelynto”, “we”, “us”) provides a Microsoft 365 administration copilot that connects to your Microsoft 365 tenant through an Entra ID application you create and control. This Privacy Policy explains what personal data we process, why, on what legal basis, and the rights you have."
    },
    {
      type: "p",
      text: "When we act as a processor for personal data contained in your Microsoft 365 tenant, that processing is governed first by our Data Processing Agreement. This Policy describes the processing for which Zelynto is the controller, principally account, billing, support and website data."
    },
    {
      type: "p",
      text: "By using the Zelynto website or service you acknowledge the practices described here. If you do not agree, do not use the service."
    }
  ],
  sections: [
    {
      id: "scope",
      heading: "What this Policy covers",
      blocks: [
        {
          type: "p",
          text: "This Policy covers personal data we process as a controller in connection with: (a) the Zelynto marketing website; (b) account creation, authentication and administration of the Zelynto service; (c) billing and collections; (d) customer support and communications; and (e) security, fraud prevention and product analytics."
        },
        {
          type: "p",
          text: "It does not cover: personal data your organisation stores in its Microsoft 365 tenant and that Zelynto accesses on your instructions (covered by the Data Processing Agreement); or third-party websites and services we link to."
        }
      ]
    },
    {
      id: "data-we-process",
      heading: "Personal data we process",
      blocks: [
        { type: "h3", text: "Account and identity data" },
        {
          type: "p",
          text: "Name, professional email address, job title, organisation name, the Microsoft 365 tenant identifier you connect, authentication events and the roles assigned to your Zelynto user. Authentication is delegated to Microsoft Entra ID; we do not receive or store your Microsoft password."
        },
        { type: "h3", text: "Tenant configuration metadata" },
        {
          type: "p",
          text: "To answer your questions and prepare reports, Zelynto reads configuration and directory metadata from your tenant via Microsoft Graph, using the permissions your administrator grants to the Entra ID application. This may include user and group listings, licence assignments, sign-in and audit signals, sharing and retention settings, and device inventory. Zelynto stores the minimum required to render results and, where you enable it, to show historical trends."
        },
        { type: "h3", text: "Prompts, actions and logs" },
        {
          type: "p",
          text: "The natural-language requests you submit, the actions you approve, and technical logs of those operations (timestamp, actor, target object, outcome). These are retained so that you and your auditors can review what was done."
        },
        { type: "h3", text: "Billing data" },
        {
          type: "p",
          text: "Company billing details, purchase order or plan selection, and invoicing history. Card payments are processed by our payment provider; Zelynto does not store full card numbers."
        },
        { type: "h3", text: "Support and communications" },
        {
          type: "p",
          text: "The content of messages you send us, demo requests, and metadata about our correspondence."
        },
        { type: "h3", text: "Website and device data" },
        {
          type: "p",
          text: "IP address, browser and device type, pages viewed, referring page, and approximate location derived from IP. See “Cookies and analytics” below."
        }
      ]
    },
    {
      id: "purposes",
      heading: "Purposes and legal bases",
      blocks: [
        {
          type: "p",
          text: "We process personal data on the following bases under the GDPR:"
        },
        {
          type: "ul",
          items: [
            "Performance of a contract: to create and operate your account, execute the requests you make, provide support, and bill you.",
            "Legitimate interests: to secure the service, prevent abuse and fraud, understand product usage in aggregate, and communicate about material changes. We balance these against your rights and you may object at any time.",
            "Consent: for non-essential cookies and for optional marketing emails. You can withdraw consent at any time without affecting prior processing.",
            "Legal obligation: to keep accounting records and to respond to lawful requests from authorities."
          ]
        }
      ]
    },
    {
      id: "sharing",
      heading: "How we share personal data",
      blocks: [
        {
          type: "p",
          text: "We do not sell personal data. We share it only with:"
        },
        {
          type: "ul",
          items: [
            "Sub-processors that host and support the service, under written contracts that impose confidentiality and security obligations (see “Sub-processors and international transfers”).",
            "Microsoft: requests to your tenant are transmitted to Microsoft Graph to be executed; Microsoft acts as your data processor under your Microsoft agreement, not ours.",
            "Professional advisers: lawyers, auditors and insurers, where necessary and subject to confidentiality.",
            "Authorities: where required by law, and after review of the request; we notify you unless legally prohibited.",
            "A successor entity: in connection with a merger, acquisition or asset sale, subject to this Policy or a policy at least as protective."
          ]
        }
      ]
    },
    {
      id: "subprocessors",
      heading: "Sub-processors and international transfers",
      blocks: [
        {
          type: "p",
          text: "Zelynto is hosted on Microsoft Azure in the European Union. A current list of sub-processors, their location and their role is maintained in Annex 2 of our Data Processing Agreement. We give customers advance notice of new sub-processors and an opportunity to object on reasonable data-protection grounds."
        },
        {
          type: "p",
          text: "Where a transfer of personal data outside the European Economic Area is necessary, we rely on an adequacy decision or on the European Commission’s Standard Contractual Clauses together with supplementary technical measures such as encryption in transit and at rest."
        }
      ]
    },
    {
      id: "retention",
      heading: "Data security and retention",
      blocks: [
        {
          type: "p",
          text: "We apply technical and organisational measures appropriate to the risk, including encryption in transit and at rest, least-privilege access controls, network segmentation, logging, and regular review. No method of transmission or storage is completely secure, and we cannot guarantee absolute security."
        },
        {
          type: "p",
          text: "We retain account and tenant metadata for the duration of your subscription. On termination, we delete or anonymise it within 30 days, except where a longer period is required by law (for example, accounting records kept for the statutory retention period). Operation logs are retained for the period you configure, up to a maximum we publish in the service documentation."
        }
      ]
    },
    {
      id: "your-rights",
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Subject to the conditions in the GDPR, you have the right to access your personal data, to rectify it, to erase it, to restrict or object to processing, to data portability, and to withdraw consent. Where Zelynto processes data on behalf of your organisation, please direct requests to that organisation; we will assist it in responding."
        },
        {
          type: "p",
          text: "To exercise a right, contact us using the details below. You also have the right to lodge a complaint with your supervisory authority. In France, this is the Commission nationale de l’informatique et des libertés (CNIL)."
        }
      ]
    },
    {
      id: "cookies",
      heading: "Cookies and analytics",
      blocks: [
        {
          type: "p",
          text: "The website uses strictly necessary cookies to remember your theme and language preferences and to keep you signed in. With your consent, we use privacy-friendly analytics to measure aggregate traffic. We do not use advertising cookies or cross-site trackers. You can manage your choice through the cookie banner or your browser settings."
        }
      ]
    },
    {
      id: "children",
      heading: "Personal data of children",
      blocks: [
        {
          type: "p",
          text: "Zelynto is a business tool that is not directed to children and we do not knowingly collect personal data from anyone under 16. If you believe a child has provided us personal data, contact us and we will delete it."
        }
      ]
    },
    {
      id: "changes",
      heading: "Changes to this Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Policy to reflect changes to the service or the law. When we make a material change we will update the date above and, where appropriate, notify you by email or in the service. Continued use after the effective date constitutes acceptance."
        }
      ]
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: "For privacy questions or to exercise a right: privacy@zelynto.com. Our Data Protection Officer can be reached at dpo@zelynto.com."
        },
        {
          type: "p",
          text: "Postal address: Zelynto, [legal entity name, registered address and company registration number to be completed]."
        }
      ]
    }
  ]
};

const fr: LegalDoc = {
  title: "Politique de confidentialité",
  updated: "2026-09-10",
  summary:
    "Comment Zelynto collecte, utilise, partage et protège les données à caractère personnel lorsque vous visitez notre site ou utilisez le copilote d’administration Microsoft 365 Zelynto.",
  intro: [
    {
      type: "p",
      text: "Zelynto (« Zelynto », « nous ») édite un copilote d’administration Microsoft 365 qui se connecte à votre tenant Microsoft 365 via une application Entra ID que vous créez et contrôlez. La présente politique explique quelles données à caractère personnel nous traitons, pourquoi, sur quelle base légale, et quels sont vos droits."
    },
    {
      type: "p",
      text: "Lorsque nous agissons en tant que sous-traitant pour des données contenues dans votre tenant Microsoft 365, ce traitement est régi en priorité par notre Accord de traitement des données. La présente politique décrit les traitements pour lesquels Zelynto est responsable de traitement, principalement les données de compte, de facturation, de support et de navigation."
    },
    {
      type: "p",
      text: "En utilisant le site ou le service Zelynto, vous reconnaissez avoir pris connaissance des pratiques décrites ici. Si vous n’y adhérez pas, n’utilisez pas le service."
    }
  ],
  sections: [
    {
      id: "scope",
      heading: "Champ d’application",
      blocks: [
        {
          type: "p",
          text: "La présente politique couvre les données à caractère personnel que nous traitons en tant que responsable de traitement dans le cadre : (a) du site vitrine Zelynto ; (b) de la création de compte, de l’authentification et de l’administration du service ; (c) de la facturation et du recouvrement ; (d) du support et des communications client ; (e) de la sécurité, de la prévention de la fraude et de la mesure d’audience produit."
        },
        {
          type: "p",
          text: "Elle ne couvre pas : les données que votre organisation stocke dans son tenant Microsoft 365 et auxquelles Zelynto accède sur vos instructions (régies par l’Accord de traitement des données) ; ni les sites et services tiers vers lesquels nous renvoyons."
        }
      ]
    },
    {
      id: "data-we-process",
      heading: "Données que nous traitons",
      blocks: [
        { type: "h3", text: "Données de compte et d’identité" },
        {
          type: "p",
          text: "Nom, adresse e-mail professionnelle, fonction, nom de l’organisation, identifiant du tenant Microsoft 365 connecté, événements d’authentification et rôles attribués à votre utilisateur Zelynto. L’authentification est déléguée à Microsoft Entra ID ; nous ne recevons ni ne stockons votre mot de passe Microsoft."
        },
        { type: "h3", text: "Métadonnées de configuration du tenant" },
        {
          type: "p",
          text: "Pour répondre à vos questions et produire des rapports, Zelynto lit des métadonnées de configuration et d’annuaire de votre tenant via Microsoft Graph, avec les permissions que votre administrateur accorde à l’application Entra ID. Cela peut inclure les listes d’utilisateurs et de groupes, l’affectation des licences, les signaux de connexion et d’audit, les paramètres de partage et de rétention, et l’inventaire des appareils. Zelynto ne conserve que le minimum nécessaire pour afficher les résultats et, si vous l’activez, pour montrer des tendances historiques."
        },
        { type: "h3", text: "Requêtes, actions et journaux" },
        {
          type: "p",
          text: "Les demandes en langage naturel que vous soumettez, les actions que vous validez, et les journaux techniques de ces opérations (horodatage, auteur, objet ciblé, résultat). Ils sont conservés afin que vous et vos auditeurs puissiez vérifier ce qui a été fait."
        },
        { type: "h3", text: "Données de facturation" },
        {
          type: "p",
          text: "Coordonnées de facturation de l’entreprise, bon de commande ou choix de formule, et historique des factures. Les paiements par carte sont traités par notre prestataire de paiement ; Zelynto ne stocke pas les numéros de carte complets."
        },
        { type: "h3", text: "Support et communications" },
        {
          type: "p",
          text: "Le contenu des messages que vous nous adressez, les demandes de démonstration, et les métadonnées de nos échanges."
        },
        { type: "h3", text: "Données de navigation et d’appareil" },
        {
          type: "p",
          text: "Adresse IP, type de navigateur et d’appareil, pages consultées, page de provenance et localisation approximative déduite de l’IP. Voir « Cookies et mesure d’audience » ci-dessous."
        }
      ]
    },
    {
      id: "purposes",
      heading: "Finalités et bases légales",
      blocks: [
        { type: "p", text: "Nous traitons les données sur les bases suivantes au titre du RGPD :" },
        {
          type: "ul",
          items: [
            "Exécution d’un contrat : créer et exploiter votre compte, exécuter vos demandes, fournir le support et vous facturer.",
            "Intérêts légitimes : sécuriser le service, prévenir les abus et la fraude, comprendre l’usage du produit de manière agrégée, et communiquer sur les changements importants. Nous les mettons en balance avec vos droits et vous pouvez vous y opposer à tout moment.",
            "Consentement : pour les cookies non essentiels et les e-mails marketing facultatifs. Vous pouvez le retirer à tout moment, sans effet sur les traitements antérieurs.",
            "Obligation légale : tenir la comptabilité et répondre aux demandes légales des autorités."
          ]
        }
      ]
    },
    {
      id: "sharing",
      heading: "Partage des données",
      blocks: [
        { type: "p", text: "Nous ne vendons pas de données à caractère personnel. Nous les partageons uniquement avec :" },
        {
          type: "ul",
          items: [
            "Les sous-traitants qui hébergent et exploitent le service, sous contrat écrit imposant des obligations de confidentialité et de sécurité (voir « Sous-traitants et transferts internationaux »).",
            "Microsoft : les demandes vers votre tenant sont transmises à Microsoft Graph pour exécution ; Microsoft agit comme votre sous-traitant au titre de votre contrat Microsoft, pas du nôtre.",
            "Les conseils professionnels : avocats, auditeurs et assureurs, lorsque nécessaire et sous confidentialité.",
            "Les autorités : lorsque la loi l’exige, après examen de la demande ; nous vous en informons sauf interdiction légale.",
            "Un repreneur : dans le cadre d’une fusion, acquisition ou cession d’actifs, sous réserve de la présente politique ou d’une politique au moins aussi protectrice."
          ]
        }
      ]
    },
    {
      id: "subprocessors",
      heading: "Sous-traitants et transferts internationaux",
      blocks: [
        {
          type: "p",
          text: "Zelynto est hébergé sur Microsoft Azure dans l’Union européenne. La liste à jour des sous-traitants, de leur localisation et de leur rôle figure à l’Annexe 2 de notre Accord de traitement des données. Nous informons les clients à l’avance de tout nouveau sous-traitant et leur laissons la possibilité de s’y opposer pour un motif raisonnable lié à la protection des données."
        },
        {
          type: "p",
          text: "Lorsqu’un transfert hors de l’Espace économique européen est nécessaire, nous nous appuyons sur une décision d’adéquation ou sur les clauses contractuelles types de la Commission européenne, assorties de mesures techniques supplémentaires telles que le chiffrement en transit et au repos."
        }
      ]
    },
    {
      id: "retention",
      heading: "Sécurité et durée de conservation",
      blocks: [
        {
          type: "p",
          text: "Nous appliquons des mesures techniques et organisationnelles adaptées au risque : chiffrement en transit et au repos, contrôles d’accès au moindre privilège, segmentation réseau, journalisation et revues régulières. Aucun mode de transmission ou de stockage n’est totalement sûr et nous ne pouvons garantir une sécurité absolue."
        },
        {
          type: "p",
          text: "Nous conservons les données de compte et les métadonnées du tenant pendant la durée de votre abonnement. À la résiliation, nous les supprimons ou les anonymisons sous 30 jours, sauf durée plus longue imposée par la loi (par exemple, les pièces comptables conservées pendant la durée légale). Les journaux d’opérations sont conservés pour la durée que vous configurez, dans la limite d’un maximum publié dans la documentation du service."
        }
      ]
    },
    {
      id: "your-rights",
      heading: "Vos droits",
      blocks: [
        {
          type: "p",
          text: "Dans les conditions prévues par le RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité, et du droit de retirer votre consentement. Lorsque Zelynto traite des données pour le compte de votre organisation, adressez vos demandes à celle-ci ; nous l’assistons pour y répondre."
        },
        {
          type: "p",
          text: "Pour exercer un droit, contactez-nous aux coordonnées ci-dessous. Vous avez également le droit d’introduire une réclamation auprès de votre autorité de contrôle. En France, il s’agit de la Commission nationale de l’informatique et des libertés (CNIL)."
        }
      ]
    },
    {
      id: "cookies",
      heading: "Cookies et mesure d’audience",
      blocks: [
        {
          type: "p",
          text: "Le site utilise des cookies strictement nécessaires pour mémoriser vos préférences de thème et de langue et pour vous maintenir connecté. Avec votre consentement, nous utilisons une mesure d’audience respectueuse de la vie privée pour évaluer le trafic de manière agrégée. Nous n’utilisons pas de cookies publicitaires ni de traceurs inter-sites. Vous pouvez gérer votre choix via le bandeau cookies ou les paramètres de votre navigateur."
        }
      ]
    },
    {
      id: "children",
      heading: "Données des mineurs",
      blocks: [
        {
          type: "p",
          text: "Zelynto est un outil professionnel qui ne s’adresse pas aux mineurs ; nous ne collectons pas sciemment de données concernant une personne de moins de 16 ans. Si vous pensez qu’un mineur nous a communiqué des données, contactez-nous et nous les supprimerons."
        }
      ]
    },
    {
      id: "changes",
      heading: "Modifications",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour la présente politique pour refléter des évolutions du service ou de la loi. En cas de changement important, nous mettons à jour la date ci-dessus et, le cas échéant, vous informons par e-mail ou dans le service. Toute utilisation après la date d’effet vaut acceptation."
        }
      ]
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: "Pour toute question relative à la confidentialité ou pour exercer un droit : privacy@zelynto.com. Notre délégué à la protection des données est joignable à dpo@zelynto.com."
        },
        {
          type: "p",
          text: "Adresse postale : Zelynto, [dénomination sociale, siège social et numéro d’immatriculation à compléter]."
        }
      ]
    }
  ]
};

export const privacy = withFallback({ en, fr });
