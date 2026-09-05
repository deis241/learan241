module.exports = {
  name: "Choix utilisateur (touche 'q' pour quitter)",
  async run(ask) {
    const sortie = 'q';

    let toucheSaisie = await ask('Pressez une touche : ');

    while (toucheSaisie !== sortie) {
      console.log(`votre valeur est: ${toucheSaisie}`);
      toucheSaisie = await ask('Pressez une touche : ');
    }

    console.log('Aurevoir man!');
  },
};
