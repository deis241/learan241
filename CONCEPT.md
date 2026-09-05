# Concept du projet

Ce dépôt est un espace d'apprentissage des algorithmes de base (boucles, conditions, structures de données simples, POO). La démarche suivie pour chaque exercice est :

1. **Pseudocode** — décrire l'algorithme en langage naturel/algorithmique, indépendamment de tout langage de programmation.
2. **Implémentation** — traduire ce pseudocode dans un langage réel pour le faire tourner et vérifier qu'il fonctionne.

## Objectifs

- S'entraîner à décomposer un problème en algorithme (pseudocode) avant d'écrire du code.
- Maîtriser les bases de la programmation : boucles, conditions, tableaux, fonctions, puis la POO.
- Garder une trace de chaque exercice pour pouvoir le relire et le relancer facilement plus tard.
- Progresser d'un langage à l'autre (Dart, puis JavaScript) sans repartir de zéro : les mêmes notions et les mêmes exercices sont repris, seule l'implémentation change.

## Pourquoi deux langages (Dart puis JS) ?

Les premiers exercices ont été écrits en Dart ([dart/](dart/)). Le projet passe maintenant au JavaScript ([js/](js/)) pour la suite des exercices, avec un menu interactif qui permet de relancer n'importe quel algorithme déjà écrit sans avoir à fouiller les fichiers un par un — utile pour réviser.

Le dossier `dart/` est conservé tel quel : c'est l'historique du travail déjà fait, pas du code à maintenir en parallèle du JS.

## Organisation des dossiers

- [Algorithmes/](Algorithmes/) — pseudocode des algorithmes, point de départ de chaque exercice
- [Exercices/](Exercices/) — supports de cours (PDF) servant de base aux exercices
- [dart/](dart/) — implémentations en Dart (historique)
  - `Bases/Boucles`, `Bases/Conditions` — exercices de base par notion
  - `POO/` — exercices orientés objet
  - `problems/` — mini-problèmes plus complets combinant plusieurs notions
- [js/](js/) — implémentations en JavaScript (suite du projet)
  - `algos/boucles`, `algos/conditions`, `algos/problems` — mêmes catégories qu'en Dart
  - `menu.js` — point d'entrée : affiche un menu, exécute l'algo choisi, puis revient au menu

Pour savoir comment lancer les scripts, voir [README.md](README.md).

---

**Auteur :** mapson241 ([deismapangou@gmail.com](mailto:deismapangou@gmail.com))
