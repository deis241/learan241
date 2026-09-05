module.exports = {
  name: 'Moyenne (réussite examen)',
  async run(ask) {
    const moyenne = parseFloat(await ask('Entrer la moyenne :'));

    if (moyenne >= 12) console.log('Examen Réussi');
  },
};
