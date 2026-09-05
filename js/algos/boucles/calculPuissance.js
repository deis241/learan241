module.exports = {
  name: 'Calcul de puissance',
  async run(ask) {
    const nombre = parseInt(await ask('Entre le nombre : '), 10);
    const exposant = parseInt(await ask("Entrer l'exposant : "), 10);

    let resultat;
    for (let i = 0; i <= nombre; i++) {
      resultat = nombre * exposant;
    }

    console.log(`la puissance de ${nombre} est:  ${resultat}`);
  },
};
