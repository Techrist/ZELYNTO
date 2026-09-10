import type { LegalDoc } from "./types";
import { withFallback } from "./types";

const en: LegalDoc = {
  title: "Terms of Service",
  updated: "2026-09-10",
  summary:
    "The agreement that governs your access to and use of the Zelynto Microsoft 365 administration copilot.",
  intro: [
    {
      type: "p",
      text: "These Terms of Service (the “Terms”) are a contract between Zelynto (“Zelynto”, “we”) and the organisation you represent (“Customer”, “you”) that governs access to and use of the Zelynto service and website (together, the “Service”)."
    },
    {
      type: "p",
      text: "You accept these Terms by creating an account, connecting a Microsoft 365 tenant, or by signing an order that references them. The person accepting represents that they are authorised to bind the Customer."
    },
    {
      type: "p",
      text: "If you do not agree to these Terms, do not use the Service."
    }
  ],
  sections: [
    {
      id: "the-service",
      heading: "The Service",
      blocks: [
        {
          type: "p",
          text: "Zelynto is a cloud service that lets authorised Microsoft 365 administrators explore their tenant, understand alerts, prepare reports and carry out governed administrative actions using natural language. Zelynto connects to your tenant through an Entra ID application that you create; no agent or connector is installed in your environment."
        },
        {
          type: "p",
          text: "We may improve, change or discontinue features. If we make a change that materially reduces core functionality of a paid plan, we will give you at least 30 days’ notice and, at your option, a pro-rata refund of prepaid fees for the affected period."
        },
        {
          type: "p",
          text: "Zelynto and all related intellectual property remain our exclusive property. These Terms grant you a non-exclusive, non-transferable right to use the Service during your subscription, and nothing more."
        }
      ]
    },
    {
      id: "accounts-and-access",
      heading: "Accounts, authority and permissions",
      blocks: [
        {
          type: "p",
          text: "You are responsible for configuring the Entra ID application and for the scope of Microsoft Graph permissions you grant to it. You represent that each individual you allow to use Zelynto is authorised by your organisation to administer the connected tenant, and that granting Zelynto access does not breach your internal policies or any agreement with Microsoft."
        },
        {
          type: "p",
          text: "You are responsible for all activity under your accounts, for keeping credentials confidential, and for promptly disabling access for users who leave your organisation. You must tell us without undue delay if you suspect unauthorised use."
        }
      ]
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      blocks: [
        {
          type: "p",
          text: "Your use of the Service is subject to our Acceptable Use Policy, which is incorporated into these Terms. Among other things, you must not use the Service to access a tenant you are not authorised to administer, to circumvent Microsoft 365 security controls, to reverse engineer the Service, to resell it without our written consent, or to build a competing product."
        },
        {
          type: "p",
          text: "We may suspend access, in whole or in part, without prior notice if we reasonably believe your use threatens the security or integrity of the Service, of Microsoft 365, or of another customer, or violates law. We will restore access once the cause is resolved."
        }
      ]
    },
    {
      id: "customer-data",
      heading: "Customer data",
      blocks: [
        {
          type: "p",
          text: "As between the parties, you own the data in your Microsoft 365 tenant and the results Zelynto produces from it. You grant us the limited right to process that data solely to provide and secure the Service and to follow your instructions."
        },
        {
          type: "p",
          text: "Where we process personal data on your behalf, our Data Processing Agreement applies and forms part of these Terms. We may create aggregated, de-identified statistics about Service usage that do not identify you or any individual, and use them to operate and improve the Service."
        }
      ]
    },
    {
      id: "third-party",
      heading: "Microsoft and third-party services",
      blocks: [
        {
          type: "p",
          text: "The Service depends on Microsoft 365, Microsoft Entra ID and Microsoft Graph, which are controlled by Microsoft under your agreement with Microsoft. We are not responsible for Microsoft’s services, availability, rate limits or changes to its APIs, and an interruption or change on Microsoft’s side that affects the Service is not a breach of these Terms."
        },
        {
          type: "p",
          text: "If you enable any other third-party integration, you do so at your own risk and subject to that third party’s terms."
        }
      ]
    },
    {
      id: "fees",
      heading: "Fees and payment",
      blocks: [
        {
          type: "p",
          text: "Fees are those set out on our pricing page or in your order, stated in euros and exclusive of taxes. Unless your order says otherwise, subscriptions are billed in advance and are non-refundable except as expressly stated in these Terms."
        },
        {
          type: "p",
          text: "You authorise us (or our payment provider) to charge your selected payment method on each renewal. If a payment is more than 15 days overdue we may suspend the Service after notice. You are responsible for all applicable taxes other than taxes on our income."
        }
      ]
    },
    {
      id: "term-termination",
      heading: "Term and termination",
      blocks: [
        {
          type: "p",
          text: "These Terms run for your subscription term and renew for successive periods of the same length unless either party gives notice of non-renewal at least 30 days before the end of the current term."
        },
        {
          type: "p",
          text: "Either party may terminate for material breach that is not cured within 30 days of written notice. On termination, your right to use the Service ends, we will make your data available for export for 30 days, and we will then delete or anonymise it in accordance with the Data Processing Agreement. Provisions that by their nature should survive termination will survive."
        }
      ]
    },
    {
      id: "warranties",
      heading: "Warranties and disclaimers",
      blocks: [
        {
          type: "p",
          text: "We warrant that we will provide the Service with reasonable skill and care and will not materially decrease its security features during a paid term."
        },
        {
          type: "p",
          text: "Except as expressly stated, the Service is provided “as is”. To the maximum extent permitted by law we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the Service will be uninterrupted or error-free, or that its output is complete or accurate; you remain responsible for reviewing results before acting on them."
        }
      ]
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special or consequential damages, or for lost profits, revenue or data, arising out of these Terms."
        },
        {
          type: "p",
          text: "Each party’s total aggregate liability arising out of or related to these Terms is limited to the fees paid or payable by you for the Service in the 12 months before the event giving rise to the claim. These limits do not apply to your payment obligations, to either party’s indemnification obligations, or to liability that cannot be limited by law."
        }
      ]
    },
    {
      id: "indemnification",
      heading: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "We will defend you against a third-party claim that the Service, as provided by us and used in accordance with these Terms, infringes that third party’s intellectual property rights, and we will pay resulting costs and damages finally awarded or agreed in settlement."
        },
        {
          type: "p",
          text: "You will defend us against a third-party claim arising from your data, your configuration of the Entra ID application, or your use of the Service in breach of these Terms or the Acceptable Use Policy. The indemnified party must give prompt notice and reasonable cooperation, and the indemnifying party controls the defence and settlement (without admitting fault on the other’s behalf)."
        }
      ]
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      blocks: [
        {
          type: "p",
          text: "Each party may receive information of the other that is marked confidential or that a reasonable person would understand to be confidential. The receiving party will protect it with at least the care it uses for its own confidential information, use it only to perform under these Terms, and disclose it only to personnel and advisers who need it and are bound by confidentiality. This does not apply to information that is public, already known, independently developed, or lawfully received from a third party. A party compelled to disclose by law will give notice where permitted."
        }
      ]
    },
    {
      id: "changes-to-terms",
      heading: "Changes to these Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms. For material changes we will give at least 30 days’ notice by email or in the Service before they take effect. If you object, you may stop using the Service and terminate your subscription for the unused portion; continued use after the effective date is acceptance."
        }
      ]
    },
    {
      id: "general",
      heading: "General",
      blocks: [
        {
          type: "p",
          text: "These Terms, the Acceptable Use Policy, the Data Processing Agreement and any order form the entire agreement between the parties and supersede prior discussions. If a provision is unenforceable, the rest remains in effect. Neither party may assign these Terms without the other’s consent, except to a successor to substantially all of its business. Failure to enforce a provision is not a waiver."
        },
        {
          type: "p",
          text: "These Terms are governed by French law. The courts of [Paris, to be confirmed] have exclusive jurisdiction, without prejudice to any mandatory consumer or local-law protections that apply to you."
        },
        {
          type: "p",
          text: "Questions about these Terms: legal@zelynto.com."
        }
      ]
    }
  ]
};

const fr: LegalDoc = {
  title: "Conditions d’utilisation",
  updated: "2026-09-10",
  summary:
    "Le contrat qui régit votre accès au copilote d’administration Microsoft 365 Zelynto et son utilisation.",
  intro: [
    {
      type: "p",
      text: "Les présentes conditions d’utilisation (les « Conditions ») constituent un contrat entre Zelynto (« Zelynto », « nous ») et l’organisation que vous représentez (le « Client », « vous ») régissant l’accès au service et au site Zelynto (ensemble, le « Service ») et leur utilisation."
    },
    {
      type: "p",
      text: "Vous acceptez les présentes Conditions en créant un compte, en connectant un tenant Microsoft 365, ou en signant un bon de commande qui y renvoie. La personne qui accepte déclare être habilitée à engager le Client."
    },
    {
      type: "p",
      text: "Si vous n’acceptez pas les présentes Conditions, n’utilisez pas le Service."
    }
  ],
  sections: [
    {
      id: "the-service",
      heading: "Le Service",
      blocks: [
        {
          type: "p",
          text: "Zelynto est un service en ligne qui permet aux administrateurs Microsoft 365 autorisés d’explorer leur tenant, de comprendre les alertes, de préparer des rapports et de réaliser des actions d’administration encadrées en langage naturel. Zelynto se connecte à votre tenant via une application Entra ID que vous créez ; aucun agent ni connecteur n’est installé dans votre environnement."
        },
        {
          type: "p",
          text: "Nous pouvons améliorer, modifier ou retirer des fonctionnalités. Si une modification réduit de manière substantielle une fonctionnalité essentielle d’une formule payante, nous vous en informons au moins 30 jours à l’avance et, à votre choix, remboursons au prorata les sommes prépayées pour la période concernée."
        },
        {
          type: "p",
          text: "Zelynto et l’ensemble des droits de propriété intellectuelle associés restent notre propriété exclusive. Les présentes Conditions vous accordent un droit d’utilisation non exclusif et non transférable pendant la durée de votre abonnement, et rien de plus."
        }
      ]
    },
    {
      id: "accounts-and-access",
      heading: "Comptes, habilitations et permissions",
      blocks: [
        {
          type: "p",
          text: "Vous êtes responsable de la configuration de l’application Entra ID et de l’étendue des permissions Microsoft Graph que vous lui accordez. Vous déclarez que chaque personne que vous autorisez à utiliser Zelynto est habilitée par votre organisation à administrer le tenant connecté, et que l’octroi d’un accès à Zelynto ne contrevient pas à vos politiques internes ni à un contrat conclu avec Microsoft."
        },
        {
          type: "p",
          text: "Vous êtes responsable de toute activité effectuée sous vos comptes, de la confidentialité des identifiants et de la désactivation rapide des accès des utilisateurs quittant votre organisation. Vous devez nous informer sans délai injustifié de tout soupçon d’utilisation non autorisée."
        }
      ]
    },
    {
      id: "acceptable-use",
      heading: "Utilisation acceptable",
      blocks: [
        {
          type: "p",
          text: "Votre utilisation du Service est soumise à notre Politique d’utilisation acceptable, qui est intégrée aux présentes Conditions. Vous ne devez notamment pas utiliser le Service pour accéder à un tenant que vous n’êtes pas autorisé à administrer, contourner des contrôles de sécurité Microsoft 365, désosser le Service, le revendre sans notre accord écrit, ou développer un produit concurrent."
        },
        {
          type: "p",
          text: "Nous pouvons suspendre l’accès, en tout ou partie, sans préavis, si nous estimons raisonnablement que votre utilisation menace la sécurité ou l’intégrité du Service, de Microsoft 365 ou d’un autre client, ou enfreint la loi. Nous rétablissons l’accès une fois la cause résolue."
        }
      ]
    },
    {
      id: "customer-data",
      heading: "Données du Client",
      blocks: [
        {
          type: "p",
          text: "Entre les parties, vous êtes propriétaire des données de votre tenant Microsoft 365 et des résultats que Zelynto en produit. Vous nous accordez le droit limité de traiter ces données uniquement pour fournir et sécuriser le Service et suivre vos instructions."
        },
        {
          type: "p",
          text: "Lorsque nous traitons des données à caractère personnel pour votre compte, notre Accord de traitement des données s’applique et fait partie des présentes Conditions. Nous pouvons produire des statistiques agrégées et anonymisées sur l’usage du Service, qui n’identifient ni vous ni aucune personne, et les utiliser pour exploiter et améliorer le Service."
        }
      ]
    },
    {
      id: "third-party",
      heading: "Microsoft et services tiers",
      blocks: [
        {
          type: "p",
          text: "Le Service dépend de Microsoft 365, Microsoft Entra ID et Microsoft Graph, contrôlés par Microsoft au titre de votre contrat avec Microsoft. Nous ne sommes pas responsables des services de Microsoft, de leur disponibilité, de leurs quotas ou des modifications de leurs API ; une interruption ou une modification du côté de Microsoft qui affecte le Service ne constitue pas un manquement aux présentes Conditions."
        },
        {
          type: "p",
          text: "Si vous activez une autre intégration tierce, vous le faites à vos risques et sous réserve des conditions de ce tiers."
        }
      ]
    },
    {
      id: "fees",
      heading: "Tarifs et paiement",
      blocks: [
        {
          type: "p",
          text: "Les tarifs sont ceux indiqués sur notre page de tarification ou dans votre bon de commande, exprimés en euros et hors taxes. Sauf mention contraire de votre bon de commande, les abonnements sont facturés d’avance et non remboursables, sauf disposition expresse des présentes Conditions."
        },
        {
          type: "p",
          text: "Vous nous autorisez (ou autorisez notre prestataire de paiement) à débiter le moyen de paiement choisi à chaque renouvellement. Si un paiement accuse plus de 15 jours de retard, nous pouvons suspendre le Service après mise en demeure. Vous êtes redevable de toutes les taxes applicables autres que celles portant sur nos revenus."
        }
      ]
    },
    {
      id: "term-termination",
      heading: "Durée et résiliation",
      blocks: [
        {
          type: "p",
          text: "Les présentes Conditions s’appliquent pendant la durée de votre abonnement et se renouvellent par périodes successives de même durée, sauf préavis de non-renouvellement notifié par l’une des parties au moins 30 jours avant la fin de la période en cours."
        },
        {
          type: "p",
          text: "Chaque partie peut résilier en cas de manquement substantiel non réparé dans les 30 jours d’une mise en demeure écrite. À la résiliation, votre droit d’utiliser le Service prend fin, nous mettons vos données à disposition pour export pendant 30 jours, puis les supprimons ou les anonymisons conformément à l’Accord de traitement des données. Les stipulations qui, par nature, doivent survivre à la résiliation lui survivent."
        }
      ]
    },
    {
      id: "warranties",
      heading: "Garanties et exclusions",
      blocks: [
        {
          type: "p",
          text: "Nous garantissons fournir le Service avec un savoir-faire et un soin raisonnables et ne pas réduire de manière substantielle ses fonctions de sécurité pendant une période payante."
        },
        {
          type: "p",
          text: "Sauf stipulation expresse, le Service est fourni « en l’état ». Dans la mesure permise par la loi, nous excluons toute autre garantie, expresse ou implicite, notamment de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon. Nous ne garantissons pas que le Service sera ininterrompu ou exempt d’erreurs, ni que ses résultats sont complets ou exacts ; il vous appartient de vérifier les résultats avant d’agir."
        }
      ]
    },
    {
      id: "liability",
      heading: "Limitation de responsabilité",
      blocks: [
        {
          type: "p",
          text: "Dans la mesure permise par la loi, aucune partie n’est responsable des dommages indirects, accessoires, spéciaux ou consécutifs, ni de la perte de bénéfices, de chiffre d’affaires ou de données découlant des présentes Conditions."
        },
        {
          type: "p",
          text: "La responsabilité totale cumulée de chaque partie au titre des présentes Conditions est limitée aux sommes payées ou dues par vous pour le Service au cours des 12 mois précédant le fait générateur. Ces limites ne s’appliquent pas à vos obligations de paiement, aux obligations d’indemnisation de chaque partie, ni à la responsabilité qui ne peut être limitée par la loi."
        }
      ]
    },
    {
      id: "indemnification",
      heading: "Indemnisation",
      blocks: [
        {
          type: "p",
          text: "Nous vous défendrons contre toute réclamation d’un tiers selon laquelle le Service, tel que fourni par nous et utilisé conformément aux présentes Conditions, porte atteinte aux droits de propriété intellectuelle de ce tiers, et prendrons en charge les coûts et dommages-intérêts définitivement mis à votre charge ou convenus dans une transaction."
        },
        {
          type: "p",
          text: "Vous nous défendrez contre toute réclamation d’un tiers découlant de vos données, de votre configuration de l’application Entra ID, ou d’une utilisation du Service contraire aux présentes Conditions ou à la Politique d’utilisation acceptable. La partie indemnisée doit notifier rapidement la réclamation et coopérer raisonnablement ; la partie qui indemnise dirige la défense et la transaction (sans reconnaître de faute au nom de l’autre)."
        }
      ]
    },
    {
      id: "confidentiality",
      heading: "Confidentialité",
      blocks: [
        {
          type: "p",
          text: "Chaque partie peut recevoir des informations de l’autre marquées comme confidentielles ou qu’une personne raisonnable considérerait comme telles. La partie réceptrice les protège avec au moins le soin qu’elle apporte à ses propres informations confidentielles, les utilise uniquement pour l’exécution des présentes Conditions et ne les divulgue qu’aux personnels et conseils qui en ont besoin et sont tenus à la confidentialité. Cela ne s’applique pas aux informations publiques, déjà connues, développées de façon indépendante ou reçues licitement d’un tiers. Une partie contrainte de divulguer par la loi en informe l’autre lorsque cela est permis."
        }
      ]
    },
    {
      id: "changes-to-terms",
      heading: "Modification des Conditions",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour les présentes Conditions. Pour les changements importants, nous vous informons au moins 30 jours à l’avance par e-mail ou dans le Service. Si vous vous y opposez, vous pouvez cesser d’utiliser le Service et résilier votre abonnement pour la période non utilisée ; toute utilisation après la date d’effet vaut acceptation."
        }
      ]
    },
    {
      id: "general",
      heading: "Dispositions générales",
      blocks: [
        {
          type: "p",
          text: "Les présentes Conditions, la Politique d’utilisation acceptable, l’Accord de traitement des données et tout bon de commande constituent l’intégralité de l’accord entre les parties et remplacent les échanges antérieurs. Si une stipulation est inapplicable, le reste demeure en vigueur. Aucune partie ne peut céder les présentes Conditions sans l’accord de l’autre, sauf à un repreneur de la quasi-totalité de son activité. L’absence de mise en œuvre d’une stipulation ne vaut pas renonciation."
        },
        {
          type: "p",
          text: "Les présentes Conditions sont régies par le droit français. Les tribunaux de [Paris, à confirmer] sont seuls compétents, sans préjudice des protections impératives de consommation ou de droit local qui vous seraient applicables."
        },
        {
          type: "p",
          text: "Questions relatives aux présentes Conditions : legal@zelynto.com."
        }
      ]
    }
  ]
};

export const terms = withFallback({ en, fr });
