# Jour 11 — Calcul de la moyenne d'un élève

## Ce qu'on a fait

Le pseudocode de l'exercice (4.1) est dans [Algorithmes/moyenneEleve.txt](../Algorithmes/moyenneEleve.txt).

L'implémentation JS est dans [js/algos/boucles/moyenneEleve.js](../js/algos/boucles/moyenneEleve.js), et l'algo a été ajouté au menu ([js/menu.js](../js/menu.js)).

## Notion : la moyenne pondérée

La moyenne générale d'un élève se calcule matière par matière : chaque matière a une note de QCM (40 %) et deux notes de TP (30 % chacune), et la moyenne générale est la moyenne des trois moyennes de matière. Une pondération, c'est juste donner plus ou moins de poids à certaines valeurs avant de les additionner — ici `(qcm * 0.40) + (tp1 * 0.30) + (tp2 * 0.30)`.

## Deux bugs classiques corrigés

Le code de départ avait deux erreurs fréquentes :

1. **Une fonction qui s'appelle elle-même par erreur** : `calculerMoyenne` se rappelait elle-même au lieu de faire le calcul, provoquant une boucle infinie / un crash.
2. **`forEach` avec une fonction `async`** : `forEach` n'attend jamais les promesses retournées par son callback, donc le code après la boucle s'exécutait avant que toutes les notes soient saisies. La bonne pratique ici est `for...of`, qui respecte `await` :

```js
for (const matiere of matieres) {
  const note = await ask(`Note pour ${matiere} : `);
  // ...
}
```

## Zoom sur les regex

**Une regex (expression régulière), c'est un motif qui décrit une forme de texte attendue.** On l'utilise pour valider une saisie, chercher un pattern dans une chaîne, ou remplacer du texte. En JS, une regex s'écrit entre deux `/` et se teste avec `.test(chaine)` qui renvoie `true` ou `false`.

Deux regex définies dans l'algo, avec leur lecture symbole par symbole :

```js
const DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;
// ^        début de la chaîne
// \d{2}    exactement 2 chiffres (JJ)
// \/       le caractère / littéral (échappé car / a un sens spécial en regex)
// \d{2}    exactement 2 chiffres (MM)
// \/       encore un / littéral
// \d{4}    exactement 4 chiffres (AAAA)
// $        fin de la chaîne
```

```js
const ID_REGEX = /^\d+$/;
// ^ et $   toute la chaîne, du début à la fin
// \d+      un ou plusieurs chiffres, rien d'autre
```

Sans `^` et `$`, la regex accepterait une chaîne qui contient juste un fragment valide quelque part au milieu (ex : `"abc12/03/2020xyz"` passerait le test). Ancrer le motif au début et à la fin est ce qui garantit que **toute** la saisie respecte le format, pas juste une partie.

Chaque regex est encapsulée dans une fonction `askXxx(ask, label)` qui boucle avec `do...while` tant que `.test()` renvoie `false`, et redemande la saisie :

```js
async function askDate(ask, label) {
    let date;
    do {
        date = await ask(`${label} (format JJ/MM/AAAA) : `);
        if (!DATE_REGEX.test(date)) {
            displayConsole('Format de date invalide, veuillez respecter JJ/MM/AAAA.');
        }
    } while (!DATE_REGEX.test(date));
    return date;
}
```

## Bonnes pratiques appliquées

- **Toujours valider une saisie utilisateur avec une regex** plutôt que de faire confiance au format donné dans le libellé de la question.
- **Ancrer une regex avec `^` et `$`** dès qu'on veut valider un format complet et pas juste détecter un fragment.
- **Isoler chaque validation dans une fonction dédiée** (`askDate`, `askNote`, `askIdSupinfo`) réutilisable partout où la même règle s'applique, plutôt que de dupliquer la logique de retry.
- **`for...of` plutôt que `forEach`** dès qu'il y a un `await` à l'intérieur de la boucle.

## À retenir

- Une regex se définit une fois (`const XXX_REGEX = /.../`) et se réutilise avec `.test()`, `.match()` ou `.replace()`.
- `^` et `$` ancrent le motif sur toute la chaîne — un réflexe à avoir dès qu'on valide un format strict (date, identifiant, email...).
- `forEach` ignore les `await` de son callback ; `for...of` est le bon outil pour une boucle asynchrone séquentielle.
