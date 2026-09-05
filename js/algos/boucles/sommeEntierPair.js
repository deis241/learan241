module.exports = {
  name: 'Somme des entiers pairs',
  async run(ask) {
    const nombreUtilisateur = parseInt(await ask('Entrez un nombre entier : '), 10);

    function sommeEntiersPair(nombre) {
      let somme = 0;
      for (let i = 0; i <= nombre; i++) {
        console.log(`i = ${i + 1}`);
        somme = i * (i + 1);
      }
      return somme;
    }

    console.log(`La somme des entiers de 1 à ${nombreUtilisateur} est : ${sommeEntiersPair(nombreUtilisateur)}`);
  },
};
