# Jour 2 — Le détecteur d'anagramme

## Ce qu'on a fait

Le pseudocode de l'exercice (3.12, méthode par comptage d'occurrences) est dans [Algorithmes/anagramme.txt](../Algorithmes/anagramme.txt ':ignore').

L'implémentation JS est dans [js/algos/conditions/anagrame.js](../js/algos/conditions/anagrame.js ':ignore').

## Notion : détecter un anagramme par comptage de lettres

Un anagramme, c'est un mot obtenu en réarrangeant toutes les lettres d'un autre mot, sans en ajouter ni en enlever. Exemple : **AIMER** et **MARIE** utilisent exactement les mêmes lettres, juste dans un ordre différent.

Méthode retenue (celle du pseudocode, sans utiliser `sort`) :

1. Si les deux mots n'ont pas la même longueur, ils ne peuvent pas être anagrammes → sortie immédiate.
2. Un tableau de 26 cases (une par lettre de l'alphabet) sert de compteur.
3. On parcourt le premier mot en **incrémentant** la case de chaque lettre rencontrée, puis le second mot en la **décrémentant**.
4. Si tous les compteurs sont revenus à 0, les deux mots contiennent exactement les mêmes lettres → anagrammes.

```js
const occurrences = new Array(26).fill(0);

for (const c of mot1) occurrences[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
for (const c of mot2) occurrences[c.charCodeAt(0) - 'A'.charCodeAt(0)]--;

const isAnagram = occurrences.every((n) => n === 0);
```

## Erreurs repérées pendant l'écriture

1. **Condition inversée** : un premier essai testait `longueur1 === longueur2` pour afficher "pas des anagrammes", l'inverse de ce que dit le pseudocode (`<>` → pas anagrammes). Toujours relire un test négatif deux fois avant de coder la condition.
2. **Pas de `return` après le premier message** : le code affichait "pas des anagrammes" *et* "sont probablement des anagrammes" à la suite, faute de sortie de fonction après le premier cas.
3. **Boucle de vérification incomplète (`i < 25`)** : le tableau `occurrences` a 26 cases (A à Z, indices 0 à 25), mais la boucle s'arrêtait à l'indice 24 — la lettre **Z** n'était jamais vérifiée. Deux mots ne différant que par leur nombre de Z auraient été déclarés anagrammes à tort. Bien vérifier la borne d'une boucle par rapport à la taille réelle du tableau.
4. **`.trim()` ne suffit pas pour retirer les espaces** : `trim()` ne nettoie que le début et la fin d'une chaîne, pas les espaces internes (ex. "MAR IE" gardait son espace). Le pseudocode demandait de retirer *tous* les espaces avant de comparer → `.replace(/\s/g, '')` était la bonne méthode.

## Bonnes pratiques appliquées

- **JSDoc sur les fonctions utilitaires**, avec la liste des méthodes natives utilisées (`toLocaleUpperCase`, `replace`, `charCodeAt`) — utile comme aide-mémoire des méthodes natives découvertes.
- **Pas de `else` après un `return`** : une fois qu'une branche sort de la fonction, le reste du code n'a pas besoin d'être imbriqué dans un `else`.
- **Tests rapides en ligne de commande** (`node -e`) avec plusieurs cas (mots identiques, cas limite sur la dernière lettre de l'alphabet, espaces internes) avant de considérer l'algo terminé.

## À retenir

- Toujours vérifier qu'une boucle parcourt bien **toute** la structure qu'elle est censée vérifier (borne exacte, pas approximative).
- Une méthode native qui "a l'air" de faire le travail (`trim`) peut ne couvrir qu'une partie du besoin réel (espaces internes vs espaces en bord de chaîne).
- Documenter les méthodes natives utilisées au fur et à mesure aide à les retenir pour la suite.
