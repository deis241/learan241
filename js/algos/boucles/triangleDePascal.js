const { displayConsole } = require('../../utils/display');

/**
 * Construit les n premieres lignes du triangle de Pascal.
 *
 * Chaque ligne est construite a partir de la precedente, sans tableau
 * carre ni zeros de remplissage : une ligne i contient exactement i + 1
 * coefficients.
 *
 * @param {number} n - le nombre de lignes a generer
 * @returns {number[][]} le triangle, une ligne = un tableau de i + 1 coefficients
 */
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

module.exports = {
  name: 'Triangle de Pascal',
  description: 'Affiche les n premieres lignes du triangle de Pascal',

  /**
   * Demande a l'utilisateur un nombre de lignes et affiche le triangle de Pascal correspondant.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const n = parseInt(await ask('Entrez le nombre de lignes : '), 10);

    if (isNaN(n) || n < 1) {
      displayConsole('Le nombre de lignes doit etre superieur ou egal a 1');
    } else {
      const triangle = construireTriangle(n);
      triangle.forEach((ligne) => {
        displayConsole(ligne.join(' '));
      });
    }
  }
}
