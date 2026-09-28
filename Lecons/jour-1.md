# Jour 1 — La factorielle (itératif vs récursif)

## Ce qu'on a fait

Deux implémentations de la factorielle dans [js/algos/boucles/](../js/algos/boucles/) :

- [factorielle.js](../js/algos/boucles/factorielle.js ':ignore') — version **itérative** (boucle `for`)
- [factoriellerecusive.js](../js/algos/boucles/factoriellerecusive.js ':ignore') — version **récursive**

Le pseudocode de départ est dans [Algorithmes/factorielle.txt](../Algorithmes/factorielle.txt ':ignore').

## Notion : itératif vs récursif

**Itératif** — on accumule le résultat dans une boucle :

```js
let result = 1;
for (let i = 1; i <= number; i++) {
    result *= i;
}
```

**Récursif** — la fonction s'appelle elle-même avec un problème plus petit, jusqu'à un **cas de base** :

```js
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // cas de base : arrête la récursion
    }
    return n * factorial(n - 1); // cas général
}
```

Sans cas de base (ou un cas de base qu'on ne peut jamais atteindre), la récursion ne s'arrête jamais → stack overflow.

## Erreurs repérées dans la version récursive de départ

1. **La fonction `factorial` était redéclarée à chaque tour de boucle** (à l'intérieur du `do { ... }`). Une fonction pure comme celle-ci n'a pas besoin d'être recréée à chaque appel : elle doit être déclarée une seule fois, en dehors de `run`.
2. **Le `do...while (number >= 0)` redemandait une saisie en boucle**, alors que le menu ([js/menu.js](../js/menu.js ':ignore')) boucle déjà sur le choix d'un algorithme. Résultat : deux boucles imbriquées qui font la même chose.
3. **Le seul moyen de sortir de cette boucle était de taper un nombre négatif** — mais un nombre négatif passé à `factorial` ne touche jamais le cas de base (`n === 0 || n === 1`) et partirait en récursion infinie.

Le point commun de ces trois erreurs : bien identifier **où s'arrête** une boucle ou une récursion, et **combien de fois** une fonction/un bloc doit vraiment être exécuté.

## Bonnes pratiques appliquées

- **`parseInt(valeur, 10)`** sur toute saisie utilisateur avant de la comparer ou de faire des calculs — `ask()` renvoie toujours une chaîne de caractères. Vu ailleurs dans le projet : [calculPuissance.js](../js/algos/boucles/calculPuissance.js ':ignore').
- **Gérer les cas limites** listés dans le pseudocode : `n = 0` (résultat 1), `n < 0` (non défini → message d'erreur plutôt qu'un résultat silencieusement faux).

## Écritures plus concises (pour info, pas forcément "mieux")

Itératif, avec `reduce` :

```js
const factorial = (n) => Array.from({ length: n }, (_, i) => i + 1).reduce((acc, x) => acc * x, 1);
```

Récursif, avec une fonction fléchée et un ternaire :

```js
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
```

⚠️ Ces deux versions compactes **perdent la gestion explicite de `n < 0`** (elles renvoient silencieusement `1`). Compact n'est pas toujours synonyme de correct — un code plus court qui avale une erreur silencieusement est un mauvais compromis.

## À retenir

- Une fonction récursive a toujours besoin d'un cas de base **atteignable**.
- Ne pas redéclarer une fonction à chaque itération d'une boucle si elle ne change pas.
- Ne pas dupliquer une boucle de contrôle (ici : le menu) à l'intérieur d'un algorithme individuel.
- Toujours revérifier les cas limites du pseudocode (`n = 0`, `n < 0`) une fois le code écrit.
