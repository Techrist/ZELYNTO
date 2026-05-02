# Architecture

## Vue d'ensemble

Zelynto est organisé autour d'un orchestrateur de langage naturel qui transforme les prompts en intentions métier. Chaque intention est routée vers un service spécialisé.

```mermaid
flowchart LR
  UI["Interface chat"] --> API["API Zelynto"]
  API --> NLU["Intent router"]
  NLU --> Explore["Exploration M365"]
  NLU --> Security["Sécurité"]
  NLU --> Provision["Provisioning"]
  NLU --> Audit["Audit continu"]
  Explore --> Graph["Microsoft Graph"]
  Security --> Graph
  Provision --> Graph
  Audit --> Graph
  Provision --> AuditLog["Journal d'audit"]
  API --> AuditLog
```

## Modules

- `src/api/server.ts` expose l'API HTTP.
- `src/api/core/natural-language.ts` détecte les intentions MVP.
- `src/api/m365/graph-client.ts` encapsule Microsoft Graph.
- `src/api/features/exploration.ts` répond aux questions d'inventaire.
- `src/api/features/security.ts` synthétise les alertes.
- `src/api/features/provisioning.ts` prépare et exécute les actions.
- `src/api/features/audit.ts` calcule les écarts et recommandations.
- `src/` contient l'interface conversationnelle et les composants web.

## Passage en production

Les points à durcir avant une vraie mise en production :

- authentification utilisateur et consentement admin Entra ID ;
- permissions Graph minimales par fonctionnalité ;
- chiffrement des secrets ;
- journal d'audit append-only ;
- rate limiting et garde-fous sur actions sensibles ;
- mode lecture seule par défaut pour les nouveaux tenants ;
- mapping des règles d'audit sur CIS, ORCA et référentiels internes.
