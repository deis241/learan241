# Jour 12 — Convertisseur de chiffres romains

## Ce qu'on a fait

Le pseudocode de l'exercice (4.4) est dans [Algorithmes/convertisseurRomain.txt](../Algorithmes/convertisseurRomain.txt ':ignore'), avec les deux sens de conversion (4.4.1 et 4.4.2).

Les implémentations JS sont dans [js/algos/conditions/arabeVersRomain.js](../js/algos/conditions/arabeVersRomain.js ':ignore') et [js/algos/conditions/romainVersArabe.js](../js/algos/conditions/romainVersArabe.js ':ignore'), toutes les deux ajoutées au menu ([js/menu.js](../js/menu.js ':ignore')).

## Notion : l'algorithme glouton (greedy)

Pour convertir un nombre arabe en romain, on ne "devine" rien : on prépare une table ordonnée, de la plus grande valeur à la plus petite (en y glissant les cas composés `CM`, `CD`, `XC`, `XL`, `IX`, `IV`), puis on prend systématiquement le plus gros symbole qui rentre encore dans ce qu'il reste à représenter :

```js
const valeurs = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symboles = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
```

C'est un **algorithme glouton** : à chaque étape on fait le choix localement optimal (le plus gros symbole possible) sans jamais revenir en arrière, et ça suffit ici parce que la table est construite pour que ça marche à tous les coups (contrairement à d'autres problèmes où un choix glouton peut être une impasse).

Pour le sens inverse (romain → arabe), pas besoin de table de correspondance triée : on lit la chaîne de gauche à droite, et pour chaque symbole on regarde son voisin de droite. S'il vaut moins que lui, c'est une soustraction (`IV`, `IX`, `XL`, `XC`, `CD`, `CM`), sinon une addition :

```js
if (valeurActuelle < valeurSuivante) {
  total -= valeurActuelle;
} else {
  total += valeurActuelle;
}
```

## Deux structures de données, deux besoins différents

- **Arabe → romain** utilise un **tableau ordonné** (`valeurs`/`symboles` en parallèle) parce que l'ordre est l'information : on doit tester les valeurs de la plus grande à la plus petite.
- **Romain → arabe** utilise un **objet** (`{ I: 1, V: 5, X: 10, ... }`) parce qu'on n'a besoin que d'un accès direct "quelle est la valeur de ce symbole ?", sans notion d'ordre.

Le bon choix de structure dépend de la façon dont on va s'en servir, pas seulement des données qu'elle contient.

## Validation avant conversion

`romainVersArabe.js` valide la saisie avant de convertir, avec l'opérateur `in` qui teste l'existence d'une clé dans un objet :

```js
const estValide = (romain) => {
  if (romain.length === 0) {
    return false;
  }
  for (const caractere of romain) {
    if (!(caractere in valeurs)) {
      return false;
    }
  }
  return true;
}
```

Ça évite de planter (ou de renvoyer `NaN`) sur une saisie qui contient un caractère qui n'est pas un chiffre romain.

## À retenir

- Un algorithme **glouton** choisit le meilleur coup immédiat à chaque étape ; ça ne marche pas pour tous les problèmes, mais c'est le bon outil ici parce que la table de correspondance est conçue pour ça.
- **Tableau vs objet** : tableau quand l'ordre de parcours compte, objet quand on veut juste une correspondance clé → valeur.
- `caractere in objet` teste l'existence d'une clé — pratique pour valider qu'une saisie ne contient que des symboles connus avant de la traiter.
