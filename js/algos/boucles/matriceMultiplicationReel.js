const { displayConsole } = require('../../utils/display');

module.exports = {
    name: 'Multiplication d\'une matrice par un reel',

    async run(ask) {
        const nbLignes = parseInt(await ask('Entrez le nombre de lignes : '), 10);
        const nbColonnes = parseInt(await ask('Entrez le nombre de colonnes : '), 10);

        const matrice = [];
        for (let i = 0; i < nbLignes; i++) {
            matrice.push([]);
            for (let j = 0; j < nbColonnes; j++) {
                const valeur = parseFloat(await ask(`Terme [${i + 1}][${j + 1}] : `));
                matrice[i].push(valeur);
            }
        }

        const reel = parseFloat(await ask('Entrez le reel a multiplier : '));

        for (let i = 0; i < nbLignes; i++) {
            for (let j = 0; j < nbColonnes; j++) {
                matrice[i][j] *= reel;
            }
        }

        displayConsole('Matrice resultat :');
        matrice.forEach((ligne) => displayConsole(ligne.join('\t')));
    },
};
