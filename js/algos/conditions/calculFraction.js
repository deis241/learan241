module.exports = {
  name: 'Calcul de fraction',
  async run(ask) {
    let numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
    let denominateur = parseInt(await ask('Entrez le denominateur : '), 10);

    while (denominateur !== 0) {
      console.log(`Le resultat est : ${numerateur / denominateur}`);

      numerateur = parseInt(await ask('Entrez le numerateur : '), 10);
      denominateur = parseInt(await ask('Entrez le denominateur : '), 10);
    }

    console.log('La divsion par zéro est impossible');
  },
};
