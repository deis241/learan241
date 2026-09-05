# Guide de lancement

Ce guide explique comment lancer les scripts du projet. Le fonctionnement et les objectifs du projet seront détaillés dans un autre README.

## Structure

- [dart/](dart/) — algorithmes en Dart (version historique)
- [js/](js/) — algorithmes en JavaScript, avec un menu interactif pour les lancer
- [Algorithmes/](Algorithmes/) — pseudocode des algorithmes
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

## Lancer un script Dart

Prérequis : le [SDK Dart](https://dart.dev/get-dart) (ou Flutter, qui l'inclut) installé.

Chaque fichier `.dart` se lance individuellement avec `dart run` :

```bash
dart run dart/Bases/Boucles/tableMultiplication.dart
dart run dart/Bases/Conditions/moyenne.dart
dart run dart/problems/moyenne_eleve.dart
```

Remplace le chemin par le fichier que tu veux exécuter.
