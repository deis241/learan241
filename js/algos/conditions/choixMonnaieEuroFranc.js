module.exports = {
  name: 'Choix devise Euro / Franc',
  async run(ask) {
    const franc = 655;

    const prixEntrer = parseFloat(await ask('Entre le prix '));

    const choixDevise = parseInt(
      await ask(`
    choisir la devise :
    1- Franc
    2- Euro

`),
      10
    );

    let prixSortie;
    switch (choixDevise) {
      case 1:
        prixSortie = prixEntrer * franc;
        console.log(`Votre article coute ${prixSortie} en franc`);
        break;
      case 2:
        prixSortie = prixEntrer / franc;
        console.log(`Votre article coute ${prixSortie} en euro`);
        break;
      default:
        console.log("Vous n'avez rien choisi a plus !");
    }
  },
};
