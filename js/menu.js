const { createPrompter } = require('./lib/prompt');

const categories = [
  {
    name: 'Boucles & Conditions',
    algos: [
      require('./algos/boucles/factorielle'),
      require('./algos/boucles/factoriellerecusive'),
      require('./algos/boucles/modulo'),
      require('./algos/boucles/calculPuissance'),
      require('./algos/boucles/matriceMultiplicationReel'),
      require('./algos/boucles/moyenneEleve'),
      require('./algos/boucles/triangleDePascal'),
      require('./algos/conditions/anagrame'),
      require('./algos/conditions/rechercheMois'),
      require('./algos/conditions/rechercheMoisRecursive'),
      require('./algos/conditions/palindrome'),
      require('./algos/conditions/scrabble'),
      require('./algos/conditions/calculFraction'),
      require('./algos/conditions/arabeVersRomain'),
      require('./algos/conditions/romainVersArabe'),

    ],
  },

];

function printMenu(entries) {
  console.log('\n=== Menu des algorithmes ===');
  let lastCategory = null;
  entries.forEach((entry, index) => {
    if (entry.category !== lastCategory) {
      console.log(`\n-- ${entry.category} --`);
      lastCategory = entry.category;
    }
    console.log(`${index + 1}. ${entry.algo.name}`);
  });
  console.log('\n0. Quitter');
}

async function main() {
  const { ask, close } = createPrompter();

  const entries = [];
  categories.forEach((category) => {
    category.algos.forEach((algo) => entries.push({ category: category.name, algo }));
  });

  let running = true;
  while (running) {
    printMenu(entries);
    const choice = await ask('\nChoisissez un algorithme (numéro) : ');
    const index = parseInt(choice, 10);

    if (index === 0) {
      running = false;
      continue;
    }

    const entry = entries[index - 1];
    if (!entry) {
      console.log('Choix invalide, réessayez.');
      continue;
    }

    console.log(`\n--- ${entry.algo.name} ---\n`);
    try {
      await entry.algo.run(ask);
    } catch (err) {
      console.error("Erreur pendant l'exécution :", err.message);
    }

    await ask('\nAppuyez sur Entrée pour revenir au menu...');
  }

  console.log('\nAu revoir mapson241 !');
  close();
}

main();
