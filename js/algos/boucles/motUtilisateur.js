module.exports = {
  name: "Mots de l'utilisateur (do-while)",
  async run(ask) {
    const defaultValue = 'fin';
    let value = '';
    const tabValue = [];

    do {
      value = await ask('Ajouter un mot au panier: ');
      if (value !== defaultValue) {
        tabValue.push(value);
      }
    } while (value !== defaultValue);

    console.log(`voici votre dernier mot : ${tabValue}`);
    console.log(`Aurevoir vous saisi ${defaultValue}`);
  },
};
