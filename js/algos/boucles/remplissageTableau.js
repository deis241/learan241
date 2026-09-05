module.exports = {
  name: 'Remplissage de tableau',
  async run() {
    const tableauValue = [];
    for (let i = 1; i < 100; i++) {
      tableauValue.push(i);
    }

    console.log(tableauValue);
  },
};
