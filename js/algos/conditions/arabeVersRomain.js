const { displayConsole } = require('../../utils/display');

const valeurs = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symboles = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

/**
 * Convertit un nombre en ecriture arabe (1 a 3999) en chiffres romains.
 *
 * @param {number} nombre - le nombre a convertir
 * @returns {string} l'ecriture en chiffres romains
 */
const convertirEnRomain = (nombre) => {
  let resultat = '';
  let reste = nombre;
  let i = 0;

  while (reste > 0) {
    while (reste >= valeurs[i]) {
      resultat += symboles[i];
      reste -= valeurs[i];
    }
    i = i + 1;
  }

  return resultat;
}

module.exports = {
  name: 'Arabe vers Romain',
  description: 'Convertit un chiffre en ecriture arabe (1 a 3999) en chiffres romains',

  /**
   * Demande a l'utilisateur un nombre et affiche son equivalent en chiffres romains.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const nombre = parseInt(await ask('Entrez un nombre (1 a 3999) : '), 10);

    if (isNaN(nombre) || nombre < 1 || nombre > 3999) {
      displayConsole('Nombre hors limites (1 a 3999)');
    } else {
      displayConsole(`${nombre} en chiffres romains : ${convertirEnRomain(nombre)}`);
    }
  }
}
