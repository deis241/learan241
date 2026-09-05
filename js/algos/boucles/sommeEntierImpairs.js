module.exports = {
  name: 'Somme des entiers impairs',
  async run(ask) {
    const nombreUtilisateur = parseInt(await ask('Entrez un nombre entier : '), 10);

    function sommeEntiersImpair(nombre) {
      let somme = 0;
      for (let i = 0; i <= nombre; i++) {
        console.log(`i = ${i + 1}`);
        somme = i * i;
      }
      return somme;
    }

    console.log(`La somme des entiers de 1 à ${nombreUtilisateur} est : ${sommeEntiersImpair(nombreUtilisateur)}`);
  },
};
