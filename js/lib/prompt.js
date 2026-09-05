const readline = require('readline');

function createPrompter() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });

  const pendingLines = [];
  const pendingAsks = [];

  rl.on('line', (line) => {
    if (pendingAsks.length > 0) {
      pendingAsks.shift()(line);
    } else {
      pendingLines.push(line);
    }
  });

  const ask = (question) => {
    process.stdout.write(question);
    return new Promise((resolve) => {
      if (pendingLines.length > 0) {
        resolve(pendingLines.shift());
      } else {
        pendingAsks.push(resolve);
      }
    });
  };

  const close = () => rl.close();

  return { ask, close };
}

module.exports = { createPrompter };
