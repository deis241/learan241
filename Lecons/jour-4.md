# Jour 4 — Le détecteur de palindrome

## Ce qu'on a fait

Le pseudocode de l'exercice (3.11) est dans [Algorithmes/palindrome.txt](../Algorithmes/palindrome.txt).

L'implémentation JS est dans [js/algos/conditions/palindrome.js](../js/algos/conditions/palindrome.js).

## Notion : qu'est-ce qu'un palindrome ?

Un palindrome est un mot (ou une phrase) qui se lit exactement pareil dans les deux sens, de gauche à droite comme de droite à gauche. Exemples : **ICI**, **RADAR**, **KAYAK**.

Pour le détecter avec du code, pas besoin d'inverser le mot et de comparer les deux versions : il suffit de comparer le mot avec lui-même, lettre par lettre, en partant des deux extrémités et en avançant vers le centre. Si à chaque étape les deux lettres comparées sont identiques, le mot est un palindrome.

## Traduction technique : deux pointeurs

```js
let i = 0;          // pointeur qui part du début
let j = n - 1;       // pointeur qui part de la fin

while (i < j) {
    if (mot[i] !== mot[j]) {
        estPalindrome = false;
    }
    i++;
    j--;
}
```

`i` et `j` se rapprochent l'un de l'autre à chaque tour. Dès qu'ils se croisent (`i >= j`), toutes les paires ont été vérifiées.

## Erreur repérée dans la version de départ

Le mot était normalisé (majuscules, espaces retirés) dans une variable `normalizedStr1`, **mais la boucle de comparaison utilisait encore `mot[i]` / `mot[j]`** — la chaîne brute, avec la casse et les espaces d'origine. Résultat : la normalisation ne servait à rien pour la logique de détection, seulement pour l'affichage. Un mot comme `"Été"` aurait été mal comparé.

Deuxième problème : un cas particulier pour les mots de 0 ou 1 lettre affichait un message **sans `return`**, donc le message final s'affichait une seconde fois juste après (double affichage). Comme la boucle `while (i < j)` ne s'exécute déjà pas quand `n <= 1`, ce cas spécial était inutile : la logique générale gère déjà correctement ces cas limites.

## Bonnes pratiques appliquées

- **Normaliser une seule fois, puis toujours comparer sur la version normalisée** — ne pas laisser deux versions de la même donnée (brute et normalisée) coexister dans la logique.
- **Ne pas dupliquer un cas limite déjà couvert par la logique générale** — avant d'ajouter un `if` spécial, vérifier si le cas est déjà géré naturellement par la boucle.

## À retenir

- Normaliser une chaîne (casse, espaces) ne sert à rien si la comparaison continue à se faire sur la chaîne d'origine.
- Un cas particulier ajouté "pour être sûr" peut introduire un bug (double affichage) s'il fait doublon avec la logique déjà en place.
- La technique des deux pointeurs (un au début, un à la fin, qui se rapprochent) revient souvent pour comparer une structure avec son propre miroir.
