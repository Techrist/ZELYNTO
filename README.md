# Zelynto — Site vitrine

Landing page de présentation de **Zelynto**, le copilote d'administration Microsoft 365.

L'IA Zelynto est développée en interne ; ce dépôt contient uniquement le site marketing.

## Stack

- React 19 + TypeScript
- Vite 6
- lucide-react (icônes)
- CSS natif

## Lancer en local

```bash
npm install
npm run dev
```

Le site démarre sur `http://127.0.0.1:5173`.

## Scripts

- `npm run dev` — serveur de dev avec hot reload
- `npm run build` — build de production dans `dist/`
- `npm run preview` — sert le build de prod localement
- `npm run typecheck` — vérification TypeScript

## Déploiement

Le projet est configuré pour Vercel via [vercel.json](vercel.json).
