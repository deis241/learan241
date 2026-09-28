# Jour 3 — Recherche de mois par nombre de jours

## Ce qu'on a fait

Le pseudocode de l'exercice (3.3) est dans [Algorithmes/rechercheMois.txt](../Algorithmes/rechercheMois.txt ':ignore').

Deux implémentations JS : la version itérative dans [js/algos/conditions/rechercheMois.js](../js/algos/conditions/rechercheMois.js ':ignore'), et une version récursive dans [js/algos/conditions/rechercheMoisRecursive.js](../js/algos/conditions/rechercheMoisRecursive.js ':ignore').

## Notion : laisser `Date` faire le calcul

Le pseudocode part d'un tableau fixe de jours par mois (`[31, 28, 31, ...]`), avec une limite connue : il ne gère pas les années bissextiles (29 jours en février). La version JS évite ce problème en laissant l'objet `Date` du langage calculer les vraies valeurs :

```js
const joursParMois = Array.from({ length: 12 }, (_, i) => {
  return new Date(year, i + 1, 0).getDate();
});
```

`new Date(year, i + 1, 0)` est une astuce classique : le jour `0` du mois `i + 1` correspond au dernier jour du mois `i`. `.getDate()` renvoie alors le nombre de jours de ce mois, calcul correct pour février selon que `year` est bissextile ou non — sans tableau à maintenir à la main.

Même principe pour les noms de mois, avec `toLocaleDateString('fr-FR', { month: 'long' })` plutôt qu'un tableau de chaînes écrites en dur.

## Itératif vs récursif, deuxième round

Comme pour la factorielle (jour 1), le même problème est résolu deux fois :

- **Itératif** : une boucle `for` qui accumule au fur et à mesure et affiche directement.
- **Récursif** : `chercheMois` avance d'un indice à la fois (`i + 1`), accumule les résultats dans un tableau passé en paramètre (`resultats`), et s'arrête quand `i === joursParMois.length` (le cas de base).

```js
function chercheMois(joursParMois, mois, number, i = 0, resultats = []) {
  if (i === joursParMois.length) {
    return resultats;
  }
  if (joursParMois[i] === number) {
    resultats.push(mois[i]);
  }
  return chercheMois(joursParMois, mois, number, i + 1, resultats);
}
```

Différence clé avec une recherche qui s'arrête au premier résultat trouvé : ici on doit continuer jusqu'au bout du tableau même après une correspondance, parce que **plusieurs mois peuvent avoir le même nombre de jours** (31 jours : sept mois différents). Le cas de base ne peut donc pas être "on a trouvé", seulement "on a tout parcouru".

## À retenir

- Préférer les méthodes natives (`Date`, `getDate()`) à un tableau de constantes écrites à la main quand le langage sait déjà faire le calcul correctement (ici, gérer les années bissextiles gratuitement).
- Dans une recherche récursive **de toutes les correspondances** (pas juste la première), le cas de base est "j'ai fini de parcourir", pas "j'ai trouvé" — sinon on rate les résultats suivants.
- Accumuler dans un paramètre (`resultats = []`) plutôt que dans une variable externe garde la fonction récursive autonome et sans effet de bord.
