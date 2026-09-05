module.exports = {
  name: 'Choix nom fichier / répertoire',
  async run(ask) {
    const choix = parseInt(
      await ask(`
   Taper:
   1- Nom  du fichier
   2- Nom du repertoire
   3- Nom complet
  `),
      10
    );

    switch (choix) {
      case 1:
        console.log('Nom du fichier: Algo1.txt');
        break;
      case 2:
        console.log('Nom du repertoire: C');
        break;
      case 3:
        console.log('Nom complet: C:/Algo1.txt');
        break;
      default:
        console.log(' Aucune valeur choisie');
    }
  },
};
