# Jour 7 — Calcul du modulo

## Ce qu'on a fait

Le pseudocode de l'exercice est dans [Algorithmes/modulo.txt](../Algorithmes/modulo.txt ':ignore').

L'implémentation JS est dans [js/algos/boucles/modulo.js](../js/algos/boucles/modulo.js ':ignore'), et l'algo a été ajouté au menu ([js/menu.js](../js/menu.js ':ignore')).

## Notion : le modulo

Le modulo (reste de la division entière) de deux nombres, c'est ce qui reste quand on a retiré du dividende autant de fois que possible le diviseur. Exemple : **17 modulo 5** -> 17 - 5 - 5 - 5 = **2**, parce qu'on ne peut plus retirer 5 sans passer en négatif.

## Traduction technique : ce qu'on a choisi

L'exercice imposait de ne pas utiliser l'opérateur `%` natif, donc on reproduit le mécanisme "à la main" avec une boucle `while` qui soustrait le diviseur jusqu'à ce que le reste devienne plus petit que lui :

```js
let reste = dividende;

while (reste >= diviseur) {
  reste -= diviseur;
}
```

Simple à lire, et ça colle exactement au pseudocode de base.

## Point d'attention : `const` vs `let`

La première version déclarait `reste` en `const` alors que la boucle le réassigne (`reste -= diviseur`) : ça plante immédiatement avec `TypeError: Assignment to constant variable`. Dès qu'une variable doit changer de valeur après sa déclaration, il faut `let`, pas `const`. `const` est réservé aux valeurs qui ne bougent jamais (comme `diviseur` ici).

## Les autres possibilités (non retenues)

- **Opérateur natif `%`** : `dividende % diviseur`. Le plus simple, mais ça contourne l'exercice qui demande justement de le recoder soi-même.
- **Division entière directe** : `reste = dividende - diviseur * Math.floor(dividende / diviseur)`. Calcul en une seule étape (pas de boucle), mais utilise la division — même souci pédagogique que `%`.
- **Version récursive** : même logique que la boucle, mais écrite sans `while` :

  ```js
  function modulo(dividende, diviseur) {
    return dividende < diviseur ? dividende : modulo(dividende - diviseur, diviseur);
  }
  ```

  Utile pour s'entraîner à penser en récursif (comme pour la factorielle du jour 1), mais moins direct que la boucle pour ce cas précis.

## Bonnes pratiques appliquées

- **`let` pour toute variable réassignée**, `const` sinon — pas de règle "par défaut", ça dépend juste de si la valeur change.
- **Gérer le cas `diviseur = 0` avant le calcul**, avec un message clair plutôt qu'une boucle infinie ou une erreur silencieuse.

## À retenir

- Le choix entre `const` et `let` n'est pas un détail de style : une réassignation sur un `const` fait planter le programme.
- Un même calcul (ici le modulo) a souvent plusieurs implémentations possibles ; le bon choix dépend de la contrainte de l'exercice (ici : pas d'opérateur natif), pas juste de ce qui est le plus court.
