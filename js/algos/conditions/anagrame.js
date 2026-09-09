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
  name: 'Anagramme',
  /**
   * Demande deux mots a l'utilisateur et indique s'ils sont des anagrammes.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const str1 = await ask('Enter le premier mot: ');
    const str2 = await ask('Enter le second mot: ');
    const normalizedStr1 = convertToMajuscules(str1);
    const normalizedStr2 = convertToMajuscules(str2);

    if (normalizedStr1.length !== normalizedStr2.length) {
      console.log(`"${str1}" et "${str2}" ne sont pas des anagrammes.`);
      return;
    }

    const occurrences = new Array(26).fill(0);

    for (const c of normalizedStr1) {
      occurrences[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    for (const c of normalizedStr2) {
      occurrences[c.charCodeAt(0) - 'A'.charCodeAt(0)]--;
    }

    let isAnagram = true;
    for (let i = 0; i < 26; i++) {
      if (occurrences[i] !== 0) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) {
      console.log(`"${str1}" et "${str2}" sont des anagrammes.`);
    } else {
      console.log(`"${str1}" et "${str2}" ne sont pas des anagrammes.`);
    }
  },
};
