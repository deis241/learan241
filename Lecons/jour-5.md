# Jour 5 — Compteur de points Scrabble

## Ce qu'on a fait

Le pseudocode de l'exercice (3.10) est dans [Algorithmes/scrabble.txt](../Algorithmes/scrabble.txt).

L'implémentation JS est dans [js/algos/conditions/scrabble.js](../js/algos/conditions/scrabble.js).

## Notion : la valeur d'un mot au Scrabble

Au Scrabble, chaque lettre a une valeur en points liée à sa rareté : les lettres courantes (A, E, I, L, N, O, R, S, T, U) valent 1 point, les plus rares (K, W, X, Y, Z) en valent 10. La valeur d'un mot, c'est simplement la somme des points de ses lettres. Exemple : **ZOO** = 10 (Z) + 1 (O) + 1 (O) = 12 points.

## Traduction technique : une table de correspondance

Plutôt qu'un long `switch` ou une suite de `if` lettre par lettre, on construit un objet `{ lettre: points }` une seule fois, à partir des groupes de lettres du barème :

```js
const GROUPES_LETTRES = [
  { lettres: 'AEILNORSTU', points: 1 },
  { lettres: 'DGM', points: 2 },
  { lettres: 'BCP', points: 3 },
  { lettres: 'FHV', points: 4 },
  { lettres: 'JQ', points: 8 },
  { lettres: 'KWXYZ', points: 10 },
];

const VALEURS_LETTRES = GROUPES_LETTRES.reduce((valeurs, { lettres, points }) => {
  for (const lettre of lettres) valeurs[lettre] = points;
  return valeurs;
}, {});
```

Ensuite, calculer la valeur d'un mot revient à additionner une simple recherche par lettre :

```js
let total = 0;
for (const lettre of normalizedMot) {
  total += VALEURS_LETTRES[lettre] ?? 0;
}
```

## Point d'attention : les caractères hors barème

Le pseudocode signalait qu'une lettre accentuée ou un caractère non alphabétique ferait sortir l'indice d'un tableau `valeurs[26]` indexé par `c - 'A'`. En passant par un objet plutôt qu'un tableau fixe, ce risque disparaît : une lettre absente du barème renvoie simplement `undefined`, neutralisé par `?? 0` (0 point) au lieu de faire planter le calcul ou de renvoyer `NaN`.

## Bonnes pratiques appliquées

- **Construire une table de correspondance une seule fois** (via `reduce`) plutôt que de refaire les comparaisons à chaque lettre du mot — recherche en O(1) par lettre.
- **Neutraliser les cas non prévus avec `?? 0`** plutôt que de laisser une valeur `undefined` se propager silencieusement dans un calcul.

## À retenir

- Un barème "lettre → valeur" se modélise naturellement avec un objet de correspondance, pas avec une suite de conditions.
- `reduce` est l'outil naturel pour transformer une liste de règles (ici, des groupes de lettres) en une structure de lookup.
- Toujours réfléchir à ce qui se passe quand l'entrée contient un caractère non prévu par le barème, avant que ça ne devienne un bug silencieux.
