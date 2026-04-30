# Zelynto MVP

## Objectif

Construire une V1 exploitable en production qui remplace les requêtes techniques et les allers-retours entre consoles Microsoft 365 par une interface conversationnelle simple.

## Fonctionnalités principales

### 1. Exploration M365 en langage naturel

L'utilisateur pose une question. Zelynto détecte l'intention, sélectionne les sources Microsoft Graph pertinentes, exécute la requête autorisée, puis répond avec une synthèse structurée.

Exemples couverts par le MVP :

- derniers mails envoyés par un utilisateur ;
- volume de fichiers OneDrive ;
- stratégies d'accès conditionnel ;
- utilisateurs inactifs depuis 30 jours.

### 2. Sécurité et alerting

Zelynto agrège les signaux disponibles depuis Microsoft Graph Security, Identity Protection et Defender selon les permissions accordées.

Le MVP doit fournir :

- une liste des alertes critiques ;
- une explication claire d'une alerte ;
- une vue des comptes à risque ;
- une interrogation en langage naturel des signaux.

### 3. Provisioning et actions automatisées

Les actions sensibles passent par deux étapes :

1. prévisualisation du plan d'exécution ;
2. validation explicite avant appel Graph.

Le MVP cible :

- création de groupes ;
- création de sites SharePoint ;
- préparation d'une app registration ;
- application de conventions de nommage et règles de sécurité par défaut.

### 4. Audit continu et recommandations

Zelynto maintient un état d'audit du tenant avec score, catégories, criticité, justification et recommandations.

Catégories initiales :

- identité et accès ;
- messagerie ;
- collaboration Teams et SharePoint ;
- licences ;
- gouvernance ;
- conformité.

## Principes produit

- Tout doit être pilotable en langage naturel.
- Les actions destructives ou coûteuses nécessitent confirmation.
- Chaque action et chaque résultat d'audit doivent être traçables.
- Les réponses doivent être utiles à un admin, pas seulement jolies.
- L'effet wow vient de la rapidité entre question, preuve et action proposée.
