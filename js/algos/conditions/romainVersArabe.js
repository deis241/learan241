const { displayConsole } = require('../../utils/display');

const valeurs = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

/**
 * Convertit une ecriture en chiffres romains en nombre arabe.
 *
 * @param {string} romain - la chaine de chiffres romains
 * @returns {number} la valeur en ecriture arabe
 */
const convertirEnArabe = (romain) => {
  const n = romain.length;
  let total = 0;
  let i = 0;

  while (i < n) {
    const valeurActuelle = valeurs[romain[i]];
    const valeurSuivante = i + 1 < n ? valeurs[romain[i + 1]] : 0;

    if (valeurActuelle < valeurSuivante) {
      total -= valeurActuelle;
    } else {
      total += valeurActuelle;
    }

    i = i + 1;
  }

  return total;
}

/**
 * Verifie que la chaine ne contient que des symboles romains connus.
 *
 * @param {string} romain - la chaine a valider
 * @returns {boolean} vrai si tous les caracteres sont des symboles valides
 */
const estValide = (romain) => {
  if (romain.length === 0) {
    return false;
  }
  for (const caractere of romain) {
    if (!(caractere in valeurs)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  name: 'Romain vers Arabe',
  description: 'Convertit une ecriture en chiffres romains en ecriture arabe',

  /**
   * Demande a l'utilisateur une chaine de chiffres romains et affiche sa valeur arabe.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const saisie = await ask('Entrez un nombre en chiffres romains : ');
    const romain = saisie.toLocaleUpperCase().replace(/\s/g, '');

    if (!estValide(romain)) {
      displayConsole(`"${saisie}" n'est pas une ecriture romaine valide`);
    } else {
      displayConsole(`${romain} en ecriture arabe : ${convertirEnArabe(romain)}`);
    }
  }
}
