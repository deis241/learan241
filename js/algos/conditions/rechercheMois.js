module.exports = {
  name: 'Recherche mois (par nombre de jours)',
  async run(ask) {
    const nbreJour = parseInt(await ask('Entre le nombre de jour: '), 10);

    if (nbreJour === 31) {
      console.log('Janvier, Mars, Mai, Juillet, Aout, Octobre, Decembre');
    } else if (nbreJour === 30) {
      console.log('Avril, Juin, Septembre, Novembre');
    } else {
      console.log('Fevrier');
    }
  },
};
