const { displayConsole } = require('../../utils/display');

const DATE_REGEX = /^\d{2}\/\d{2}\/\d{4}$/;

function calculerMoyenne(noteQcm, noteTp1, noteTp2) {
    return (noteQcm * 0.40) + (noteTp1 * 0.30) + (noteTp2 * 0.30);
}

async function askDate(ask, label) {
    let date;
    do {
        date = await ask(`${label} (format JJ/MM/AAAA) : `);
        if (!DATE_REGEX.test(date)) {
            displayConsole('Format de date invalide, veuillez respecter JJ/MM/AAAA.');
        }
    } while (!DATE_REGEX.test(date));
    return date;
}

async function askNote(ask, label) {
    let note;
    do {
        note = parseFloat(await ask(label));
        if (isNaN(note) || note < 0 || note > 20) {
            displayConsole('Note invalide, veuillez saisir une valeur entre 0 et 20.');
        }
    } while (isNaN(note) || note < 0 || note > 20);
    return note;
}

async function askIdSupinfo(ask) {
    let idSupinfo;
    do {
        idSupinfo = await ask('Veuillez entrer votre identifiant SupInfo : ');
        if (!/^\d+$/.test(idSupinfo)) {
            displayConsole('Identifiant invalide, veuillez saisir uniquement des chiffres.');
        }
    } while (!/^\d+$/.test(idSupinfo));
    return idSupinfo;
}

module.exports = {
    name: 'Moyenne d\'un élève',
    async run(ask) {
        const nom = await ask('Veuillez entrer votre nom : ');
        const prenom = await ask('Veuillez entrer votre prénom : ');
        const idSupInfo = await askIdSupinfo(ask);
        const dateNaissance = await askDate(ask, 'Veuillez entrer votre date de naissance');
        const matieres = ["Algo", "C", "JAVA"];
        let sommeMoyennes = 0;
        for (const matiere of matieres) {
            displayConsole(`Matière : ${matiere}`);

            await askDate(ask, `Veuillez entrer la date du QCM pour ${matiere}`);
            const noteQcm = await askNote(ask, `Veuillez entrer la note du QCM pour ${matiere} : `);

            await askDate(ask, `Veuillez entrer la date du TP1 pour ${matiere}`);
            const noteTp1 = await askNote(ask, `Veuillez entrer la note du TP1 pour ${matiere} : `);

            await askDate(ask, `Veuillez entrer la date du TP2 pour ${matiere}`);
            const noteTp2 = await askNote(ask, `Veuillez entrer la note du TP2 pour ${matiere} : `);

            const moyenneMatiere = calculerMoyenne(noteQcm, noteTp1, noteTp2);
            displayConsole(`Moyenne en ${matiere} : ${moyenneMatiere.toFixed(2)}`);

            sommeMoyennes += moyenneMatiere;
        }

        let moyenneGenerale = sommeMoyennes / matieres.length;
        let mention;
        if (moyenneGenerale >= 16 && moyenneGenerale <= 20) {
            mention = "Très bien";
        } else if (moyenneGenerale >= 14 && moyenneGenerale < 16) {
            mention = "Bien";
        } else if (moyenneGenerale >= 12 && moyenneGenerale < 14) {
            mention = "Assez bien";
        } else if (moyenneGenerale >= 10 && moyenneGenerale < 12) {
            mention = "Passable";
        } else if (moyenneGenerale >= 5 && moyenneGenerale < 10) {
            mention = "Insuffisante";
        } else {
            mention = "Très insuffisante";
        }

        displayConsole(`Nom : ${nom}`);
        displayConsole(`Prénom : ${prenom}`);
        displayConsole(`Identifiant SupInfo : ${idSupInfo}`);
        displayConsole(`Date de naissance : ${dateNaissance}`);
        displayConsole(`Moyenne générale : ${moyenneGenerale.toFixed(2)}`);
        displayConsole(`Mention : ${mention}`);
    }
}