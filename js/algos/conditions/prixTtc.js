module.exports = {
  name: 'Prix TTC',
  async run(ask) {
    const tvaLuxe = 0.196;
    const tvaAutre = 0.055;
    let prixTtc = 0;

    const prixHt = parseFloat(await ask('Entrer le prix ht du produit: '));
    const categorie = parseInt(
      await ask(`
    Entrer la categorie du produit :
    1- pour luxe
    2- pour autre
 `),
      10
    );

    if (categorie === 1) prixTtc = prixHt * (tvaLuxe + 1);
    else if (categorie === 2) prixTtc = prixHt * (tvaAutre + 1);
    else console.log('Aucune categorie choisie!');

    console.log(`Votre produit coute : ${prixTtc}`);
  },
};
