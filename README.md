# CookingBuddy

CookingBuddy est une application Angular 19+ permettant de découvrir, filtrer et visualiser des recettes de cuisine grâce à l’API publique TheMealDB.  
Le projet utilise Angular Material et les signaux Angular pour la gestion d’état.

## Fonctionnalités

- **Inscription utilisateur** avec validation avancée (mot de passe fort, confirmation, conditions d’utilisation)
- **Authentification simulée** (stockage localStorage)
- **Redirection automatique** si l’utilisateur n’est pas connecté (AuthGuard)
- **Layout standardisé** avec barre de navigation (Material Toolbar)
- **Affichage des catégories de recettes** (API TheMealDB)
- **Affichage des recettes par catégorie**
- **Composants réutilisables** pour les catégories et les recettes
- **Utilisation des signaux Angular** pour la gestion des données (pas de RxJS)

## Structure du projet

- `src/app/core/` : services, guards, modèles, validators
- `src/app/features/` : pages et composants fonctionnels (register, home, recipes)
- `src/app/shared/layouts/` : layouts réutilisables (PageLayout)
- `src/app/app.routes.ts` : configuration des routes et guards

## Démarrage

```sh
npm install
npm start
```

Accédez à [http://localhost:4200](http://localhost:4200).

## Dépendances principales

- Angular 19+
- Angular Material
- TheMealDB API
- package @angular/localize

## Auteurs

- Projet réalisé dans le cadre d’un exercice EPSI - mattheo coppin
