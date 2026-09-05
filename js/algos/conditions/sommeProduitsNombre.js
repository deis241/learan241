module.exports = {
  name: 'Somme ou produit de deux nombres',
  async run(ask) {
    const nbre1 = parseInt(await ask('Entrer le premier nombre '), 10);
    const nbre2 = parseInt(await ask('Entrer le second nombre '), 10);

    const choixUtilisateur = parseInt(
      await ask(`
      Veuillez choisir un caractère :

      1: pour la somme
      2: pour le produit
`),
      10
    );

    switch (choixUtilisateur) {
      case 1:
        console.log(`Le resultat de la somme  est : ${nbre1 + nbre2}`);
        break;
      case 2:
        console.log(`Le resultat du produit est : ${nbre1 * nbre2}`);
        break;
      default:
        console.log("Vous n'avez rien choisi de correct");
    }
  },
};
