module.exports = {
  name: 'Somme des entiers',
  async run(ask) {
    const nombreUtilisateur = parseInt(await ask('Entrez un nombre entier : '), 10);

    function sommeEntiers(nombre) {
      let somme = 0;
      for (let i = 0; i <= nombre; i++) {
        somme = ((i + 1) * i) / 2;
      }
      return somme;
    }

    console.log(`La somme des entiers de 1 à ${nombreUtilisateur} est : ${sommeEntiers(nombreUtilisateur)}`);
  },
};
