# Zelynto

Zelynto est un copilote d'administration Microsoft 365. Le MVP vise une expérience ultra simple, pilotée en langage naturel, pour explorer un tenant, comprendre les alertes de sécurité, automatiser le provisioning et auditer en continu les configurations M365.

## MVP

1. Exploration M365 via Microsoft Graph en langage naturel.
2. Sécurité et alerting avec synthèse exploitable.
3. Actions automatisées avec prévisualisation avant exécution.
4. Audit continu avec score, priorités et recommandations.

## Lancer le projet

```bash
npm install
npm run dev
```

L'interface web démarre via Vite et l'API écoute par défaut sur `http://127.0.0.1:4100`.

## Configuration

Copier `.env.example` vers `.env`, puis renseigner les identifiants d'application Entra ID nécessaires pour Microsoft Graph.

## Documents

- `docs/mvp.md` décrit le périmètre de la V1.
- `docs/architecture.md` décrit les modules techniques.
