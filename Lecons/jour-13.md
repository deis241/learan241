# Jour 13 — Triangle de Pascal

## Ce qu'on a fait

Le pseudocode de l'exercice (4.5) est dans [Algorithmes/triangleDePascal.txt](../Algorithmes/triangleDePascal.txt).

L'implémentation JS est dans [js/algos/boucles/triangleDePascal.js](../js/algos/boucles/triangleDePascal.js), ajoutée au menu ([js/menu.js](../js/menu.js)).

## Notion : la programmation dynamique

Le triangle de Pascal se construit ligne par ligne : les deux extrémités valent toujours `1`, et chaque autre nombre est la somme des deux nombres juste au-dessus de lui dans la ligne précédente. C'est de la **programmation dynamique** — on résout la ligne `i` en réutilisant directement les résultats déjà calculés de la ligne `i - 1`, sans jamais tout recalculer depuis zéro.

## Deux versions, deux structures de données

**Première version** (pseudocode et premier jet JS) : un tableau carré `n × n` pré-rempli de zéros, avec des zéros de remplissage à filtrer à l'affichage.

**Deuxième version, plus naturelle** : chaque ligne est construite avec exactement `i + 1` éléments, à partir de la ligne précédente — pas de tableau carré, pas de padding, la structure du code colle à la structure réelle du triangle :

```js
const construireTriangle = (n) => {
  const triangle = [[1]];

  for (let i = 1; i < n; i++) {
    const ligneprecedente = triangle[i - 1];
    const ligne = [1];

    for (let j = 1; j < i; j++) {
      ligne.push(ligneprecedente[j - 1] + ligneprecedente[j]);
    }
    ligne.push(1);

    triangle.push(ligne);
  }

  return triangle;
}
```

## Une troisième approche possible : la formule combinatoire

Il existe une autre façon de faire, non implémentée ici mais utile à connaître : `C(i,j) = C(i,j-1) × (i-j+1)/j`. Elle calcule chaque coefficient à partir du précédent **dans la même ligne**, sans dépendre de la ligne du dessus — un calcul mathématique direct plutôt que de la programmation dynamique.

## À retenir

- Préférer une structure de données qui colle à la forme réelle du problème (ici, des lignes de taille variable) plutôt qu'un tableau fixe qu'il faut ensuite filtrer à l'affichage.
- La programmation dynamique consiste à réutiliser des résultats déjà calculés plutôt que de tout refaire — le triangle de Pascal en est l'exemple le plus visuel.
- Un même problème a souvent plusieurs solutions valables (tableau carré, construction ligne par ligne, formule combinatoire) : le bon choix dépend de ce qu'on veut optimiser (lisibilité, mémoire, calcul direct).
