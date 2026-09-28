# Jour 8 — Calcul de puissance

## Ce qu'on a fait

Le pseudocode de l'exercice (3.4) est dans [Algorithmes/calculPuissance.txt](../Algorithmes/calculPuissance.txt ':ignore').

L'implémentation JS est dans [js/algos/boucles/calculPuissance.js](../js/algos/boucles/calculPuissance.js ':ignore'), déjà présente au menu ([js/menu.js](../js/menu.js ':ignore')).

## Un bug retrouvé et corrigé

En reprenant ce fichier, le calcul était faux : `2` puissance `3` renvoyait `6` au lieu de `8`. Le code d'origine faisait ceci :

```js
let resultat;
for (let i = 0; i <= nombre; i++) {
  resultat = nombre * exposant;
}
console.log(`la puissance de ${nombre} est:  ${resultat}`);
```

Deux erreurs cumulées :

1. **La boucle tourne sur `nombre`, pas sur `exposant`** — donc la boucle "compte" le mauvais nombre de fois, alors que c'est l'exposant qui doit piloter le nombre de multiplications.
2. **`resultat = nombre * exposant`** est une multiplication, pas une puissance — à chaque itération, la valeur est réécrite avec le même calcul (une seule multiplication), au lieu d'accumuler `resultat = resultat * nombre`.

La version corrigée applique le pseudocode à la lettre : partir de `resultat = 1`, puis multiplier `exposant` fois par `nombre` :

```js
let resultat = 1;
for (let i = 1; i <= exposant; i++) {
  resultat *= nombre;
}
displayConsole(`${nombre} puissance ${exposant} = ${resultat}`);
```

Vérifié : `2` puissance `3` donne maintenant `8`.

## Notion : calculer une puissance par multiplications successives

`nombre` élevé à la puissance `exposant`, c'est multiplier `nombre` par lui-même `exposant` fois. Une boucle qui part d'un accumulateur neutre (`resultat = 1`, l'élément neutre de la multiplication) et qui le multiplie à chaque tour est le patron classique pour ce genre de calcul — le même patron qu'une somme qui part de `0` et additionne à chaque tour.

## À retenir

- Toujours vérifier qu'une boucle compte sur la **bonne** variable : ici, c'est `exposant` qui doit borner la boucle, pas `nombre`.
- Un accumulateur doit démarrer à l'**élément neutre** de l'opération : `0` pour une addition, `1` pour une multiplication.
- Un code qui "tourne" sans planter n'est pas forcément un code juste — tester avec un exemple connu (`2^3 = 8`) aurait immédiatement révélé le bug.
