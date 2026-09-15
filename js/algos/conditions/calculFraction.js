const { displayConsole } = require('../../utils/display');

module.exports = {
  name: 'Calcul de fraction',
  description: "Calcule numerateur / denominateur en boucle jusqu'a un denominateur nul",

  /**
   * Demande numerateur et denominateur a l'utilisateur et affiche le
   * resultat de la division, en recommencant a chaque fois. S'arrete
   * des que le denominateur saisi vaut 0 (division impossible).
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    let numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
    let denominateur = parseInt(await ask('Entrez le denominateur : '), 10);

    while (denominateur !== 0) {
      displayConsole(`Le resultat est : ${numerateur / denominateur}`);

      numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
      denominateur = parseInt(await ask('Entrez le denominateur : '), 10);
    }

    displayConsole('Calcul impossible : division par zero');
  },
};
