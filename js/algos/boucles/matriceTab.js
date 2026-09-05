module.exports = {
  name: 'Matrice (tableau 2D)',
  async run() {
    const M = 5;
    const N = 5;

    const tab = [];
    for (let i = 0; i < N; i++) {
      tab.push([]);
      for (let j = 0; j < M; j++) {
        tab[i].push(0);
      }
    }

    tab.forEach((row) => console.log(row));
  },
};
