# Challenge algo — 15 jours

Un algorithme par jour, du pseudocode à l'implémentation en code, pendant 15 jours. L'idée : s'entraîner à décomposer un problème avant de coder, et garder une trace de chaque exercice pour pouvoir le relire et le relancer plus tard.

Dépôt : [github.com/deis241/learan241](https://github.com/deis241/learan241)

## Le concept

Chaque exercice suit la même démarche en deux étapes :

1. **Pseudocode** — décrire l'algorithme en langage naturel/algorithmique, indépendamment de tout langage de programmation ([Algorithmes/](Algorithmes/)).
2. **Implémentation** — traduire ce pseudocode en JavaScript pour le faire tourner et vérifier qu'il fonctionne ([js/](js/)).

Chaque jour est aussi documenté dans [Lecons/](Lecons/) : ce qui a été fait, la notion travaillée, les bugs rencontrés et corrigés, et ce qu'il faut en retenir.

## Objectifs

- S'entraîner à décomposer un problème en algorithme (pseudocode) avant d'écrire du code.
- Maîtriser les bases de la programmation : boucles, conditions, tableaux, récursion, algorithmes gloutons, programmation dynamique.
- Garder une trace de chaque exercice pour pouvoir le relire et le relancer facilement plus tard.

Le détail de la démarche et de l'organisation des dossiers est dans [CONCEPT.md](CONCEPT.md).

## Parcourir les leçons

Le contenu du challenge (leçons, pseudocode, code) se parcourt sous forme de site avec `npm run docs`, qui sert le site sur `http://localhost:4000`.

## Structure

- [js/](js/) — algorithmes en JavaScript, avec un menu interactif pour les lancer
- [Algorithmes/](Algorithmes/) — pseudocode des algorithmes
- [Lecons/](Lecons/) — une leçon par jour de challenge (notion, bugs corrigés, à retenir)
- [Exercices/](Exercices/) — supports d'exercices (PDF)

## Lancer la version JavaScript (menu interactif)

Prérequis : [Node.js](https://nodejs.org/) installé.

```bash
npm start
```

ou directement :

```bash
node js/menu.js
```

Un menu s'affiche avec la liste des algorithmes par catégorie (Boucles, Conditions, Problèmes). Entre le numéro de l'algorithme à lancer, puis appuie sur Entrée pour revenir au menu et en choisir un autre. Entre `0` pour quitter.


