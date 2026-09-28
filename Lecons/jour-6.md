# Jour 6 — Calcul de fraction

## Ce qu'on a fait

Le pseudocode de l'exercice (3.9) est dans [Algorithmes/fraction.txt](../Algorithmes/fraction.txt).

L'implémentation JS est dans [js/algos/conditions/calculFraction.js](../js/algos/conditions/calculFraction.js), ajoutée au menu ([js/menu.js](../js/menu.js)).

## Notion : la boucle qui s'arrête sur une condition de sortie

L'exercice demande de répéter le calcul `numerateur / denominateur` indéfiniment, jusqu'à ce que l'utilisateur saisisse `0` comme dénominateur (division impossible). C'est une boucle `TANT QUE` classique, mais dont la condition d'arrêt dépend d'une saisie faite **à l'intérieur** de la boucle elle-même :

```js
let numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
let denominateur = parseInt(await ask('Entrez le denominateur : '), 10);

while (denominateur !== 0) {
  displayConsole(`Le resultat est : ${numerateur / denominateur}`);

  numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
  denominateur = parseInt(await ask('Entrez le denominateur : '), 10);
}

displayConsole('Calcul impossible : division par zero');
```

La saisie doit être faite **deux fois** dans le code : une fois avant la boucle (pour avoir une première valeur à tester), et une fois à la fin de chaque itération (pour préparer le prochain tour). C'est le schéma classique d'une boucle "lire avant, tester, relire à la fin" — à ne pas confondre avec une boucle `do...while`, qui exécuterait le calcul au moins une fois avant de tester, y compris avec un dénominateur à 0.

## À retenir

- Une boucle `TANT QUE` pilotée par une saisie utilisateur a besoin d'une première lecture **avant** la boucle, pour avoir une valeur à évaluer dès le premier test.
- Diviser par zéro n'est pas une erreur à intercepter après coup ici : c'est la condition de sortie elle-même, testée avant de faire le calcul.
