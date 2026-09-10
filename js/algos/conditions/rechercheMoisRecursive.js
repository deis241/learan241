const { displayConsole } = require('../../utils/display');

/**
 * Parcourt joursParMois recursivement (indice i) et accumule dans
 * resultats les mois dont le nombre de jours correspond a number.
 *
 * @param {number[]} joursParMois
 * @param {string[]} mois
 * @param {number} number
 * @param {number} i - indice courant (cas de base : i === joursParMois.length)
 * @param {string[]} resultats
 * @returns {string[]}
 */
function chercheMois(joursParMois, mois, number, i = 0, resultats = []) {
  if (i === joursParMois.length) {
    return resultats;
  }

  if (joursParMois[i] === number) {
    resultats.push(mois[i]);
  }

  return chercheMois(joursParMois, mois, number, i + 1, resultats);
}

module.exports = {
  name: 'Recherche mois version recursive',
  description: "Algo de recherche des mois en fonction d'une valeur rentree par un user, version recursive",

  /**
   * Demande a l'utilisateur un nombre de jours et affiche le ou les mois
   * (annee non bissextile) dont le nombre de jours correspond.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    let number;
    do {
      number = parseInt(await ask('Veuillez saisir un nombre (1 a 31) : '), 10);
    } while (Number.isNaN(number) || number < 1 || number > 31);

    const year = 2026;
    const mois = Array.from({ length: 12 }, (_, i) => {
      return new Date(year, i, 1).toLocaleDateString('fr-FR', { month: 'long' });
    });

    const joursParMois = Array.from({ length: 12 }, (_, i) => {
      return new Date(year, i + 1, 0).getDate();
    });

    const resultats = chercheMois(joursParMois, mois, number);

    if (resultats.length === 0) {
      displayConsole('Aucun mois ne correspond a ce nombre de jours.');
    } else {
      displayConsole(`Les mois correspondants sont les suivants : ${resultats.join(', ')}`);
    }
  },
};
