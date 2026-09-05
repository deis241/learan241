module.exports = {
  name: 'Choix numéro de mois (nombre de jours)',
  async run(ask) {
    const numeroMois = parseInt(await ask('Entrer un numeros de mois : '), 10);

    switch (numeroMois) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        console.log('31 jours');
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        console.log('30 jours');
        break;
      case 2:
        console.log('28 jours');
        break;
      default:
        console.log('Aucun mois ne correspond');
    }
  },
};
