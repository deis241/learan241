module.exports = {
  name: 'Table de multiplication',
  async run() {
    const num = 5;
    for (let i = 10; i >= 0; i--) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
  },
};
