# Jour 10 — Multiplication d'une matrice par un réel

## Ce qu'on a fait

Le pseudocode de l'exercice (3.14) est dans [Algorithmes/matriceMultiplicationReel.txt](../Algorithmes/matriceMultiplicationReel.txt ':ignore').

L'implémentation JS est dans [js/algos/boucles/matriceMultiplicationReel.js](../js/algos/boucles/matriceMultiplicationReel.js ':ignore'), et l'algo a été ajouté au menu ([js/menu.js](../js/menu.js ':ignore')).

## Notion : multiplier une matrice par un réel

Multiplier une matrice par un réel (un scalaire), c'est simplement multiplier chaque terme de la matrice par ce réel, un par un. Le résultat garde exactement les mêmes dimensions que la matrice de départ. Exemple : la matrice `[[1, 2], [3, 4]]` multipliée par `2` donne `[[2, 4], [6, 8]]`.

## Traduction technique : une matrice comme tableau de tableaux

En JS, une matrice se représente naturellement avec un tableau de tableaux. On la construit en lisant d'abord les dimensions, puis chaque terme :

```js
const matrice = [];
for (let i = 0; i < nbLignes; i++) {
  matrice.push([]);
  for (let j = 0; j < nbColonnes; j++) {
    const valeur = parseFloat(await ask(`Terme [${i + 1}][${j + 1}] : `));
    matrice[i].push(valeur);
  }
}
```

La multiplication elle-même reprend exactement la même double boucle, mais en modifiant chaque case en place :

```js
for (let i = 0; i < nbLignes; i++) {
  for (let j = 0; j < nbColonnes; j++) {
    matrice[i][j] *= reel;
  }
}
```

## Point d'attention : `parseFloat` plutôt que `parseInt`

Les autres algos du projet (modulo, puissance) lisent des entiers avec `parseInt`. Ici, un terme de matrice ou le réel multiplicateur peuvent être décimaux (ex: `2.5`), donc `parseInt` aurait tronqué la saisie. `parseFloat` est le bon choix dès qu'une valeur numérique n'est pas garantie entière.

## Bonnes pratiques appliquées

- **Réutiliser la même structure de double boucle** pour construire la matrice, la transformer et l'afficher — le code reste lisible parce que chaque étape suit le même schéma `pour i, pour j`.
- **Choisir `parseFloat` vs `parseInt` selon la nature réelle de la donnée**, pas par habitude.

## À retenir

- Une matrice, c'est un tableau de tableaux : chaque opération "terme à terme" (ici la multiplication par un scalaire) se traduit par une double boucle `i, j`.
- Toujours vérifier si les valeurs saisies peuvent être décimales avant de choisir entre `parseInt` et `parseFloat`.
