import type { LegalDoc } from "./types";
import { withFallback } from "./types";

const en: LegalDoc = {
  title: "Data Processing Agreement",
  updated: "2026-09-10",
  summary:
    "The terms under which Zelynto processes personal data on behalf of Customer, including sub-processors, international transfers and security measures.",
  intro: [
    {
      type: "p",
      text: "This Data Processing Agreement (“DPA”) supplements the Terms of Service between Zelynto (“Zelynto”, “Processor”) and the Customer (“Controller”). It applies whenever Zelynto processes personal data on Customer’s behalf in connection with the Service and is entered into by Customer accepting the Terms of Service."
    },
    {
      type: "p",
      text: "Where there is a conflict, the order of precedence is: the Standard Contractual Clauses, then this DPA, then the Terms of Service."
    }
  ],
  sections: [
    {
      id: "definitions",
      heading: "Definitions",
      blocks: [
        {
          type: "p",
          text: "“Data Protection Laws” means Regulation (EU) 2016/679 (“GDPR”), the UK GDPR, and any other applicable law relating to the protection of personal data. “Controller”, “Processor”, “Data Subject”, “Personal Data”, “Processing” and “Personal Data Breach” have the meanings given in the GDPR."
        },
        {
          type: "p",
          text: "“Customer Personal Data” means personal data contained in Customer’s Microsoft 365 tenant or otherwise provided by Customer that Zelynto processes on Customer’s behalf. “Sub-Processor” means a third party engaged by Zelynto to process Customer Personal Data. “Standard Contractual Clauses” or “SCCs” means the clauses annexed to Commission Implementing Decision (EU) 2021/914."
        }
      ]
    },
    {
      id: "roles-and-processing",
      heading: "Roles and processing",
      blocks: [
        {
          type: "p",
          text: "For Customer Personal Data, Customer is the Controller and Zelynto is the Processor. Zelynto processes Customer Personal Data only on documented instructions from Customer, including as set out in this DPA, the Terms of Service, and Customer’s use of the Service (for example the natural-language requests and actions Customer submits)."
        },
        {
          type: "p",
          text: "Customer is responsible for the accuracy, quality and lawfulness of Customer Personal Data and for the lawful basis of its collection, and for having the authority to instruct the processing. Zelynto will inform Customer if, in its opinion, an instruction infringes Data Protection Laws (without obligation to perform a legal review)."
        },
        {
          type: "p",
          text: "Zelynto ensures that personnel authorised to process Customer Personal Data are bound by confidentiality and receive appropriate data-protection training."
        }
      ]
    },
    {
      id: "sub-processors",
      heading: "Sub-Processors",
      blocks: [
        {
          type: "p",
          text: "Customer authorises Zelynto to engage the Sub-Processors listed in Annex 2. Zelynto imposes on each Sub-Processor data-protection obligations no less protective than those in this DPA and remains liable for its Sub-Processors’ performance."
        },
        {
          type: "p",
          text: "Zelynto will give Customer at least 30 days’ notice of any intended addition or replacement of a Sub-Processor. Customer may object on reasonable data-protection grounds within that period; the parties will work in good faith to resolve the objection, failing which Customer may terminate the affected part of the Service and receive a pro-rata refund of prepaid fees."
        }
      ]
    },
    {
      id: "security",
      heading: "Security of processing",
      blocks: [
        {
          type: "p",
          text: "Zelynto implements and maintains the technical and organisational measures described in Annex 3, taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing, as well as the risk to Data Subjects. Zelynto may update these measures provided the level of protection is not reduced."
        }
      ]
    },
    {
      id: "international-transfers",
      heading: "International transfers",
      blocks: [
        {
          type: "p",
          text: "Zelynto processes Customer Personal Data in the European Union. If Zelynto or a Sub-Processor transfers Customer Personal Data outside the EEA or the UK, the transfer is subject to an adequacy decision or to the SCCs (Module Two, Controller to Processor, and Module Three where onward transfer to a Sub-Processor occurs), which are incorporated by reference and completed by the information in Annexes 1 and 2. Zelynto applies supplementary measures, including encryption in transit and at rest, and a policy of challenging disproportionate government access requests."
        }
      ]
    },
    {
      id: "data-subject-requests",
      heading: "Data Subject requests",
      blocks: [
        {
          type: "p",
          text: "Taking into account the nature of the processing, Zelynto assists Customer by appropriate technical and organisational measures, insofar as possible, to respond to requests to exercise Data Subject rights. If Zelynto receives such a request directly, it will not respond other than to acknowledge receipt and will promptly forward the request to Customer."
        }
      ]
    },
    {
      id: "assistance",
      heading: "Assistance to the Controller",
      blocks: [
        {
          type: "p",
          text: "Zelynto assists Customer, taking into account the nature of processing and the information available to Zelynto, with data-protection impact assessments and prior consultations with supervisory authorities, and with Customer’s obligations to keep Customer Personal Data secure."
        }
      ]
    },
    {
      id: "breach-notification",
      heading: "Personal Data Breach",
      blocks: [
        {
          type: "p",
          text: "Zelynto notifies Customer without undue delay, and in any event within 72 hours, after becoming aware of a Personal Data Breach affecting Customer Personal Data. The notification describes the nature of the breach, the categories and approximate number of Data Subjects and records concerned, the likely consequences, and the measures taken or proposed. Zelynto provides reasonable cooperation to help Customer meet its own notification obligations."
        }
      ]
    },
    {
      id: "audits",
      heading: "Records and audits",
      blocks: [
        {
          type: "p",
          text: "Zelynto maintains records of its processing activities and makes available to Customer the information necessary to demonstrate compliance with Article 28 GDPR, including through up-to-date certifications and third-party audit reports (such as SOC 2 or ISO 27001) where available."
        },
        {
          type: "p",
          text: "Where such reports are insufficient, Customer may conduct an audit no more than once per year (or following a Personal Data Breach), on 30 days’ notice, during business hours, subject to confidentiality, and without accessing another customer’s data or compromising the security of the Service. Zelynto retains compliance records for three years after termination."
        }
      ]
    },
    {
      id: "return-and-deletion",
      heading: "Return and deletion",
      blocks: [
        {
          type: "p",
          text: "On termination of the Service, Zelynto deletes or returns Customer Personal Data at Customer’s choice, and deletes existing copies within 30 days, unless retention is required by law. Backups are overwritten in the ordinary course within a further 90 days."
        }
      ]
    },
    {
      id: "zelynto-as-controller",
      heading: "Zelynto as a Controller",
      blocks: [
        {
          type: "p",
          text: "Zelynto is an independent Controller for account, authentication, billing and aggregated usage data, which it processes to provide and secure the Service, prevent fraud and abuse, comply with law and improve the Service. That processing is described in the Privacy Policy."
        }
      ]
    },
    {
      id: "annex-1",
      heading: "Annex 1 — Details of processing",
      blocks: [
        { type: "h3", text: "Subject matter and duration" },
        {
          type: "p",
          text: "Processing of Customer Personal Data to provide the Service for the duration of the subscription and until deletion in accordance with this DPA."
        },
        { type: "h3", text: "Nature and purpose" },
        {
          type: "p",
          text: "Reading configuration and directory metadata from Customer’s tenant via Microsoft Graph; interpreting natural-language requests; generating reports and recommendations; executing administrative actions that Customer approves; and logging those operations for audit."
        },
        { type: "h3", text: "Categories of Data Subjects" },
        {
          type: "ul",
          items: [
            "Customer’s administrators and authorised Zelynto users",
            "Customer’s employees, contractors and other tenant users referenced in directory and configuration data",
            "External guests present in Customer’s tenant"
          ]
        },
        { type: "h3", text: "Categories of Personal Data" },
        {
          type: "ul",
          items: [
            "Identifiers and directory attributes (name, work email, user principal name, job title, group and role membership)",
            "Licence and service assignment data",
            "Sign-in, audit and alert metadata",
            "Sharing, retention and device configuration referencing individuals",
            "Content of natural-language requests and approved actions, and operation logs"
          ]
        },
        { type: "h3", text: "Special categories" },
        {
          type: "p",
          text: "Not intentionally processed. Customer should not submit special-category data through natural-language requests."
        }
      ]
    },
    {
      id: "annex-2",
      heading: "Annex 2 — Sub-Processors",
      blocks: [
        {
          type: "p",
          text: "The following Sub-Processors are authorised. The current list, including any updates, is published in the Service documentation."
        },
        {
          type: "table",
          head: ["Sub-Processor", "Purpose", "Location"],
          rows: [
            ["Microsoft (Azure)", "Cloud hosting and platform infrastructure", "European Union"],
            ["Microsoft (Graph API)", "Execution of requests against Customer’s tenant", "Operated by Customer’s Microsoft tenant"],
            ["[Payment provider — to be confirmed]", "Billing and payment processing", "European Union"],
            ["[Error monitoring / logging provider — to be confirmed]", "Operational monitoring and diagnostics", "European Union"],
            ["[Transactional email provider — to be confirmed]", "Account and service notifications", "European Union"]
          ]
        }
      ]
    },
    {
      id: "annex-3",
      heading: "Annex 3 — Technical and organisational measures",
      blocks: [
        {
          type: "ul",
          items: [
            "Encryption of Customer Personal Data in transit (TLS 1.2+) and at rest (AES-256).",
            "Least-privilege, role-based access control with multi-factor authentication for all administrative access; access reviewed at least quarterly.",
            "Network segmentation, managed firewalls and no direct public access to data stores.",
            "Centralised, tamper-evident logging of administrative and data-access events, retained for audit.",
            "Secure software development lifecycle with peer review, dependency scanning and a documented vulnerability-management process.",
            "Encrypted backups with tested restoration procedures.",
            "Formal incident-response plan with defined severities and 72-hour breach notification.",
            "Personnel confidentiality commitments, background checks where lawful, and annual security and data-protection training.",
            "Vendor due diligence and contractual data-protection terms for all Sub-Processors.",
            "Business continuity and disaster-recovery planning with defined recovery objectives."
          ]
        }
      ]
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: "Questions about this DPA or to submit a Sub-Processor objection: dpo@zelynto.com."
        }
      ]
    }
  ]
};

const fr: LegalDoc = {
  title: "Accord de traitement des données",
  updated: "2026-09-10",
  summary:
    "Les conditions dans lesquelles Zelynto traite des données à caractère personnel pour le compte du Client, y compris les sous-traitants ultérieurs, les transferts internationaux et les mesures de sécurité.",
  intro: [
    {
      type: "p",
      text: "Le présent Accord de traitement des données (« DPA ») complète les Conditions d’utilisation conclues entre Zelynto (« Zelynto », « Sous-traitant ») et le Client (« Responsable de traitement »). Il s’applique chaque fois que Zelynto traite des données à caractère personnel pour le compte du Client dans le cadre du Service ; il est conclu du fait de l’acceptation des Conditions d’utilisation par le Client."
    },
    {
      type: "p",
      text: "En cas de contradiction, l’ordre de priorité est : les clauses contractuelles types, puis le présent DPA, puis les Conditions d’utilisation."
    }
  ],
  sections: [
    {
      id: "definitions",
      heading: "Définitions",
      blocks: [
        {
          type: "p",
          text: "« Législation relative à la protection des données » désigne le règlement (UE) 2016/679 (« RGPD »), le UK GDPR et toute autre loi applicable relative à la protection des données. « Responsable de traitement », « Sous-traitant », « Personne concernée », « Données à caractère personnel », « Traitement » et « Violation de données » ont le sens que leur donne le RGPD."
        },
        {
          type: "p",
          text: "« Données personnelles du Client » désigne les données à caractère personnel contenues dans le tenant Microsoft 365 du Client ou autrement fournies par lui, que Zelynto traite pour son compte. « Sous-traitant ultérieur » désigne un tiers engagé par Zelynto pour traiter les Données personnelles du Client. « Clauses contractuelles types » ou « CCT » désigne les clauses annexées à la décision d’exécution (UE) 2021/914 de la Commission."
        }
      ]
    },
    {
      id: "roles-and-processing",
      heading: "Rôles et traitement",
      blocks: [
        {
          type: "p",
          text: "Pour les Données personnelles du Client, le Client est Responsable de traitement et Zelynto est Sous-traitant. Zelynto ne traite les Données personnelles du Client que sur instructions documentées du Client, y compris telles qu’énoncées dans le présent DPA, les Conditions d’utilisation, et l’utilisation du Service par le Client (par exemple les requêtes et actions en langage naturel soumises par le Client)."
        },
        {
          type: "p",
          text: "Le Client est responsable de l’exactitude, de la qualité et de la licéité des Données personnelles du Client et de la base légale de leur collecte, ainsi que de son pouvoir d’instruire le traitement. Zelynto informe le Client si, selon lui, une instruction enfreint la législation applicable (sans obligation de procéder à une analyse juridique)."
        },
        {
          type: "p",
          text: "Zelynto veille à ce que le personnel autorisé à traiter les Données personnelles du Client soit soumis à une obligation de confidentialité et reçoive une formation appropriée à la protection des données."
        }
      ]
    },
    {
      id: "sub-processors",
      heading: "Sous-traitants ultérieurs",
      blocks: [
        {
          type: "p",
          text: "Le Client autorise Zelynto à recourir aux Sous-traitants ultérieurs listés à l’Annexe 2. Zelynto impose à chacun d’eux des obligations de protection des données au moins aussi protectrices que celles du présent DPA et demeure responsable de leur exécution."
        },
        {
          type: "p",
          text: "Zelynto informe le Client au moins 30 jours à l’avance de tout ajout ou remplacement envisagé d’un Sous-traitant ultérieur. Le Client peut s’y opposer pour un motif raisonnable lié à la protection des données pendant ce délai ; les parties s’efforcent de bonne foi de résoudre l’objection, à défaut de quoi le Client peut résilier la partie concernée du Service et obtenir un remboursement au prorata des sommes prépayées."
        }
      ]
    },
    {
      id: "security",
      heading: "Sécurité du traitement",
      blocks: [
        {
          type: "p",
          text: "Zelynto met en œuvre et maintient les mesures techniques et organisationnelles décrites à l’Annexe 3, compte tenu de l’état de l’art, des coûts de mise en œuvre et de la nature, de la portée, du contexte et des finalités du traitement, ainsi que du risque pour les Personnes concernées. Zelynto peut faire évoluer ces mesures à condition de ne pas réduire le niveau de protection."
        }
      ]
    },
    {
      id: "international-transfers",
      heading: "Transferts internationaux",
      blocks: [
        {
          type: "p",
          text: "Zelynto traite les Données personnelles du Client dans l’Union européenne. Si Zelynto ou un Sous-traitant ultérieur transfère des Données personnelles du Client hors de l’EEE ou du Royaume-Uni, le transfert est soumis à une décision d’adéquation ou aux CCT (Module Deux, responsable à sous-traitant, et Module Trois en cas de transfert ultérieur vers un Sous-traitant ultérieur), incorporées par référence et complétées par les informations des Annexes 1 et 2. Zelynto applique des mesures supplémentaires, notamment le chiffrement en transit et au repos et une politique de contestation des demandes d’accès disproportionnées d’autorités publiques."
        }
      ]
    },
    {
      id: "data-subject-requests",
      heading: "Demandes des Personnes concernées",
      blocks: [
        {
          type: "p",
          text: "Compte tenu de la nature du traitement, Zelynto aide le Client, par des mesures techniques et organisationnelles appropriées et dans la mesure du possible, à répondre aux demandes d’exercice des droits des Personnes concernées. Si Zelynto reçoit directement une telle demande, il n’y répond pas autrement qu’en en accusant réception et la transmet sans délai au Client."
        }
      ]
    },
    {
      id: "assistance",
      heading: "Assistance au Responsable de traitement",
      blocks: [
        {
          type: "p",
          text: "Zelynto assiste le Client, compte tenu de la nature du traitement et des informations à sa disposition, pour les analyses d’impact relatives à la protection des données et les consultations préalables des autorités de contrôle, ainsi que pour les obligations du Client de garantir la sécurité des Données personnelles du Client."
        }
      ]
    },
    {
      id: "breach-notification",
      heading: "Violation de données",
      blocks: [
        {
          type: "p",
          text: "Zelynto notifie le Client sans délai injustifié, et en tout état de cause dans les 72 heures, après avoir eu connaissance d’une violation de données affectant les Données personnelles du Client. La notification décrit la nature de la violation, les catégories et le nombre approximatif de Personnes concernées et d’enregistrements, les conséquences probables et les mesures prises ou proposées. Zelynto apporte une coopération raisonnable pour aider le Client à respecter ses propres obligations de notification."
        }
      ]
    },
    {
      id: "audits",
      heading: "Registres et audits",
      blocks: [
        {
          type: "p",
          text: "Zelynto tient un registre de ses activités de traitement et met à la disposition du Client les informations nécessaires pour démontrer le respect de l’article 28 du RGPD, y compris au moyen de certifications à jour et de rapports d’audit tiers (tels que SOC 2 ou ISO 27001) lorsqu’ils sont disponibles."
        },
        {
          type: "p",
          text: "Lorsque ces rapports sont insuffisants, le Client peut réaliser un audit au maximum une fois par an (ou à la suite d’une violation de données), moyennant un préavis de 30 jours, pendant les heures ouvrées, sous confidentialité, et sans accéder aux données d’un autre client ni compromettre la sécurité du Service. Zelynto conserve les preuves de conformité pendant trois ans après la résiliation."
        }
      ]
    },
    {
      id: "return-and-deletion",
      heading: "Restitution et suppression",
      blocks: [
        {
          type: "p",
          text: "À la fin du Service, Zelynto supprime ou restitue les Données personnelles du Client au choix de celui-ci, et supprime les copies existantes dans les 30 jours, sauf conservation imposée par la loi. Les sauvegardes sont écrasées dans le cours normal des opérations dans un délai supplémentaire de 90 jours."
        }
      ]
    },
    {
      id: "zelynto-as-controller",
      heading: "Zelynto en tant que Responsable de traitement",
      blocks: [
        {
          type: "p",
          text: "Zelynto est responsable de traitement indépendant pour les données de compte, d’authentification, de facturation et d’usage agrégé, qu’il traite pour fournir et sécuriser le Service, prévenir la fraude et les abus, respecter la loi et améliorer le Service. Ce traitement est décrit dans la Politique de confidentialité."
        }
      ]
    },
    {
      id: "annex-1",
      heading: "Annexe 1 — Détails du traitement",
      blocks: [
        { type: "h3", text: "Objet et durée" },
        {
          type: "p",
          text: "Traitement des Données personnelles du Client pour fournir le Service pendant la durée de l’abonnement et jusqu’à leur suppression conformément au présent DPA."
        },
        { type: "h3", text: "Nature et finalité" },
        {
          type: "p",
          text: "Lecture de métadonnées de configuration et d’annuaire du tenant du Client via Microsoft Graph ; interprétation des requêtes en langage naturel ; production de rapports et de recommandations ; exécution des actions d’administration validées par le Client ; et journalisation de ces opérations à des fins d’audit."
        },
        { type: "h3", text: "Catégories de Personnes concernées" },
        {
          type: "ul",
          items: [
            "Les administrateurs du Client et les utilisateurs Zelynto autorisés",
            "Les salariés, prestataires et autres utilisateurs du tenant du Client référencés dans les données d’annuaire et de configuration",
            "Les invités externes présents dans le tenant du Client"
          ]
        },
        { type: "h3", text: "Catégories de Données à caractère personnel" },
        {
          type: "ul",
          items: [
            "Identifiants et attributs d’annuaire (nom, e-mail professionnel, UPN, fonction, appartenance à des groupes et rôles)",
            "Données d’affectation des licences et des services",
            "Métadonnées de connexion, d’audit et d’alerte",
            "Configurations de partage, de rétention et d’appareils référençant des personnes",
            "Contenu des requêtes en langage naturel et des actions validées, et journaux d’opérations"
          ]
        },
        { type: "h3", text: "Catégories particulières" },
        {
          type: "p",
          text: "Non traitées intentionnellement. Le Client ne doit pas soumettre de données sensibles via des requêtes en langage naturel."
        }
      ]
    },
    {
      id: "annex-2",
      heading: "Annexe 2 — Sous-traitants ultérieurs",
      blocks: [
        {
          type: "p",
          text: "Les Sous-traitants ultérieurs suivants sont autorisés. La liste à jour, y compris ses mises à jour, est publiée dans la documentation du Service."
        },
        {
          type: "table",
          head: ["Sous-traitant ultérieur", "Finalité", "Localisation"],
          rows: [
            ["Microsoft (Azure)", "Hébergement cloud et infrastructure de plateforme", "Union européenne"],
            ["Microsoft (API Graph)", "Exécution des demandes sur le tenant du Client", "Opéré par le tenant Microsoft du Client"],
            ["[Prestataire de paiement — à confirmer]", "Facturation et traitement des paiements", "Union européenne"],
            ["[Prestataire de supervision / journalisation — à confirmer]", "Supervision opérationnelle et diagnostic", "Union européenne"],
            ["[Prestataire d’e-mails transactionnels — à confirmer]", "Notifications de compte et de service", "Union européenne"]
          ]
        }
      ]
    },
    {
      id: "annex-3",
      heading: "Annexe 3 — Mesures techniques et organisationnelles",
      blocks: [
        {
          type: "ul",
          items: [
            "Chiffrement des Données personnelles du Client en transit (TLS 1.2+) et au repos (AES-256).",
            "Contrôle d’accès basé sur les rôles au moindre privilège, avec authentification multifacteur pour tout accès d’administration ; accès revus au moins chaque trimestre.",
            "Segmentation réseau, pare-feux gérés et absence d’accès public direct aux magasins de données.",
            "Journalisation centralisée et infalsifiable des événements d’administration et d’accès aux données, conservée à des fins d’audit.",
            "Cycle de développement logiciel sécurisé avec revue par les pairs, analyse des dépendances et processus documenté de gestion des vulnérabilités.",
            "Sauvegardes chiffrées avec procédures de restauration testées.",
            "Plan formel de réponse aux incidents avec niveaux de gravité définis et notification des violations sous 72 heures.",
            "Engagements de confidentialité du personnel, vérifications d’antécédents lorsque la loi le permet, et formation annuelle à la sécurité et à la protection des données.",
            "Diligence raisonnable sur les fournisseurs et clauses contractuelles de protection des données pour tous les Sous-traitants ultérieurs.",
            "Plans de continuité d’activité et de reprise après sinistre avec objectifs de rétablissement définis."
          ]
        }
      ]
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          type: "p",
          text: "Questions sur le présent DPA ou pour formuler une objection à un Sous-traitant ultérieur : dpo@zelynto.com."
        }
      ]
    }
  ]
};

export const dpa = withFallback({ en, fr });
