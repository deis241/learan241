# Jour 15 — Suite de Fibonacci (fin du challenge)

## Ce qu'on a fait

Le pseudocode de l'exercice (4.6) est dans [Algorithmes/fibonacci.txt](../Algorithmes/fibonacci.txt).

L'implémentation JS est dans [js/algos/boucles/fibonacci.js](../js/algos/boucles/fibonacci.js), ajoutée au menu ([js/menu.js](../js/menu.js)).

## Notion : suite définie par récurrence

Chaque terme est la somme des deux précédents : `F(n) = F(n-1) + F(n-2)`, avec `F(0) = 0` et `F(1) = 1`. Même logique que le triangle de Pascal (jour 13) — de la programmation dynamique — mais sur une seule dimension au lieu de deux : ici on garde juste les deux derniers termes en mémoire au lieu d'une ligne entière.

## Itératif plutôt que récursif naïf

```js
const construireFibonacci = (n) => {
  const suite = [0];
  let precedent = 0;
  let actuel = 1;

  for (let i = 2; i <= n; i++) {
    suite.push(actuel);
    const suivant = precedent + actuel;
    precedent = actuel;
    actuel = suivant;
  }

  return suite;
}
```

La récursion naïve (`F(n) = F(n-1) + F(n-2)`, appelée telle quelle) recalcule les mêmes valeurs des dizaines de fois : pour calculer `F(10)`, elle recalcule `F(8)` deux fois, `F(6)` trois fois, etc. — un coût exponentiel. La version itérative ne garde que les deux derniers termes (`precedent`, `actuel`) et avance une seule fois par terme : un coût linéaire.

## Bilan du challenge (15/15)

Trois façons différentes de construire une solution étape par étape à partir de résultats déjà calculés, vues sur les trois derniers jours :

- **Glouton** (jour 12, chiffres romains) : le meilleur choix local à chaque étape, sans retour en arrière.
- **Programmation dynamique 2D** (jour 13, triangle de Pascal) : chaque ligne réutilise la ligne précédente entière.
- **Programmation dynamique 1D** (jour 15, Fibonacci) : chaque terme ne dépend que des deux précédents.

## À retenir

- Dès qu'un calcul récursif redemande plusieurs fois le même résultat, passer à une version itérative (ou à la mémoïsation) pour éviter l'explosion du nombre d'appels.
- Une suite définie par récurrence (`F(n)` dépend de termes précédents) se prête naturellement à une boucle qui n'a besoin de garder en mémoire que le strict minimum de termes passés.
