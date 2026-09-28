const { displayConsole } = require('../../utils/display');

module.exports = {
  name: 'Calcul de puissance',
  description: 'Calcule nombre eleve a la puissance exposant',

  /**
   * Demande un nombre et un exposant, et affiche nombre eleve a la puissance exposant.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const nombre = parseInt(await ask('Entrez le nombre : '), 10);
    const exposant = parseInt(await ask("Entrez l'exposant : "), 10);

    let resultat = 1;
    for (let i = 1; i <= exposant; i++) {
      resultat *= nombre;
    }

    displayConsole(`${nombre} puissance ${exposant} = ${resultat}`);
  },
};
