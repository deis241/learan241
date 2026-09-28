const { displayConsole } = require('../../utils/display');

/**
 * Calcule les n premiers termes de la suite de Fibonacci.
 *
 * Version iterative : on garde uniquement les deux derniers termes en
 * memoire, pas de recursion (evite le recalcul exponentiel de la
 * version naive F(n) = F(n-1) + F(n-2)).
 *
 * @param {number} n - le nombre de termes a generer
 * @returns {number[]} les n premiers termes de la suite
 */
const construireFibonacci = (n) => {
  const suite = [0];
  let precedent = 0;
  let actuel = 1;

  for (let i = 2; i <= n; i++) {
    suite.push(actuel);
    const suivant = precedent + actuel;
    precedent = actuel;
    actuel = suivant;
  }

  return suite;
}

module.exports = {
  name: 'Suite de Fibonacci',
  description: 'Affiche les n premiers termes de la suite de Fibonacci',

  /**
   * Demande a l'utilisateur un nombre de termes et affiche la suite de Fibonacci correspondante.
   *
   * @param {(question: string) => Promise<string>} ask - invite qui lit une ligne saisie au terminal
   * @returns {Promise<void>}
   */
  async run(ask) {
    const n = parseInt(await ask('Entrez le nombre de termes : '), 10);

    if (isNaN(n) || n < 1) {
      displayConsole('Le nombre de termes doit etre superieur ou egal a 1');
    } else {
      const suite = construireFibonacci(n);
      displayConsole(suite.join(', '));
    }
  }
}
