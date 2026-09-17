const { displayConsole } = require('../../utils/display');

module.exports = {
    name: 'Modulo',
    async run(ask) {
        const dividende = parseInt(await ask('Entrez le dividende : '), 10);
        const diviseur = parseInt(await ask('Entrez le diviseur : '), 10);
        if (diviseur === 0) {
            displayConsole('Calcul impossible : division par zero');
        } else {
            let reste = dividende;
            while (reste >= diviseur) {
                reste -= diviseur;
            }
            displayConsole(`${dividende} modulo ${diviseur} = ${reste}`);
        }
    }

}