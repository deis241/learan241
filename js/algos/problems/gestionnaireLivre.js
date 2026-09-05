module.exports = {
  name: 'Gestionnaire de livre',
  async run() {
    const numLivreClassement = Math.floor(Math.random() * 1000);

    const livre = {
      id: 0,
      numImat: 0,
      nom: '',
      prenom: '',
      titre: '',
      titreSecondaire: '',
      editeur: '',
      collection: '',
      anneeEdition: 0,
    };
    livre.id = numLivreClassement;
    const first = livre.id;

    const tabLivres = [];
    tabLivres.push(first);

    tabLivres.forEach((v) => console.log(v));
  },
};
