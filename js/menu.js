const { createPrompter } = require('./lib/prompt');

const categories = [
  {
    name: 'Boucles',
    algos: [
      require('./algos/boucles/tableMultiplication'),
      require('./algos/boucles/sommeEntiers'),
      require('./algos/boucles/sommeEntierPair'),
      require('./algos/boucles/sommeEntierImpairs'),
      require('./algos/boucles/calculPuissance'),
      require('./algos/boucles/remplissageTableau'),
      require('./algos/boucles/matriceTab'),
      require('./algos/boucles/motUtilisateur'),
      require('./algos/boucles/impressionPageCompteur'),
    ],
  },
  {
    name: 'Conditions',
    algos: [
      require('./algos/conditions/moyenne'),
      require('./algos/conditions/rechercheMois'),
      require('./algos/conditions/choixNumerosMois'),
      require('./algos/conditions/choixMonnaieEuroFranc'),
      require('./algos/conditions/choixNomFichierRepertoire'),
      require('./algos/conditions/choixUtilisateur'),
      require('./algos/conditions/calculFraction'),
      require('./algos/conditions/prixTtc'),
      require('./algos/conditions/sommeProduitsNombre'),
      require('./algos/conditions/palindrome'),
      require('./algos/conditions/anagrame'),
    ],
  },
  {
    name: 'Problèmes',
    algos: [require('./algos/problems/moyenneEleve'), require('./algos/problems/gestionnaireLivre')],
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

  console.log('\nAu revoir !');
  close();
}

main();
