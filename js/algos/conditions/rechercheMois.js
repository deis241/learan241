const { displayConsole } = require('../../utils/display');

module.exports = {
  name: 'Recherche mois (par nombre de jours)',
  description: "Algo de recherche des mois en fonction d'une valeur rentree par un user",

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

    let trouve = false;

    for (let i = 0; i < 12; i++) {
      if (joursParMois[i] === number) {
        displayConsole(`Les mois correspondants sont les suivants : ${mois[i]}`);
        trouve = true;
      }
    }

    if (!trouve) {
      displayConsole('Aucun mois ne correspond a ce nombre de jours.');
    }
  },
};
