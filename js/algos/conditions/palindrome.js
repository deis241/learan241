const { displayConsole } = require('../../utils/display');

/**
 * Normalise un mot pour la comparaison d'anagrammes : majuscules,
 * sans espaces.
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

module.exports = {
  name: 'Palindrome',
  description: "Algo de recherche d'un palindrome dans une chaine de caracteres",



  /**
   * Demande a l'utilisateur une chaine de caracteres et affiche si c'est un palindrome ou non.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const mot = await ask("Veuillez saisir un mot ");
    const normalizedStr1 = convertToMajuscules(mot)
    const n = normalizedStr1.length;
    let estPalindrome = true;
    let i = 0;
    let j = n - 1;

    while (i < j) {
      if (normalizedStr1[i] != normalizedStr1[j]) {
        estPalindrome = false
      }
      i = i + 1
      j = j - 1
    }

    if (estPalindrome) {
      displayConsole(`${normalizedStr1} est un palindrome de ${n} lettres`)
    } else {
      displayConsole(`${normalizedStr1} n'est pas un palindrome de ${n} lettres`)
    }
  }
}