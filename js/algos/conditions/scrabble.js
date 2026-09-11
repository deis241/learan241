const { displayConsole } = require('../../utils/display');

/**
 * Normalise un mot pour le calcul des points : majuscules, sans espaces.
 *
 * Methodes natives utilisees :
 * - String.prototype.toLocaleUpperCase()
 * - String.prototype.replace()
 *
 * @param {string} str - le mot a normaliser
 * @returns {string} le mot normalise
 */
const convertToMajuscules = (str) => {
  return str.toLocaleUpperCase().replace(/\s/g, '');
}

const GROUPES_LETTRES = [
  { lettres: 'AEILNORSTU', points: 1 },
  { lettres: 'DGM', points: 2 },
  { lettres: 'BCP', points: 3 },
  { lettres: 'FHV', points: 4 },
  { lettres: 'JQ', points: 8 },
  { lettres: 'KWXYZ', points: 10 },
];

const VALEURS_LETTRES = GROUPES_LETTRES.reduce((valeurs, { lettres, points }) => {
  for (const lettre of lettres) {
    valeurs[lettre] = points;
  }
  return valeurs;
}, {});

module.exports = {
  name: 'Scrabble',
  description: "Calcule la valeur en points d'un mot selon le bareme du Scrabble",

  /**
   * Demande un mot a l'utilisateur et affiche sa valeur en points.
   *
   * Les caracteres qui ne correspondent a aucune lettre du bareme
   * (accents, chiffres, ponctuation) ne rapportent aucun point.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const mot = await ask('Veuillez saisir un mot : ');
    const normalizedMot = convertToMajuscules(mot);

    let total = 0;
    for (const lettre of normalizedMot) {
      total += VALEURS_LETTRES[lettre] ?? 0;
    }

    displayConsole(`${normalizedMot} vaut ${total} points`);
  },
}
