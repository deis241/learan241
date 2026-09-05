module.exports = {
  name: "Moyenne d'un élève (bulletin)",
  async run(ask) {
    const id = Math.floor(Math.random() * 10000);

    const nom = await ask('Entrer le nom ');
    const prenom = await ask('Entrer le prenom ');
    const dateNaissance = await ask('Entrer le date_naissance ');

    const dates = [];
    while (dates.length !== 3) {
      const dateExamen = await ask('Entrer la date examen ');
      dates.push(dateExamen);
    }

    function moyenne(n1, n2, n3) {
      return (n1 + n2 + n3) / 3;
    }

    const resul = moyenne(18, 14, 19);
    const qccm = (resul * 40) / 100;
    const tp = (resul * 60) / 100;

    function displayElement(mention) {
      const fullName = nom + prenom;

      console.log(`Bravo au candidat numero : ${id}
 vous avez obtenue une moyenne de : ${resul} avec une mention  ${mention}
 toute nos félicitation a vous ${fullName}

        ne le ${dateNaissance}.
        Voici la repartition de vos notes
 vous avez obtenu une moyenne en QCM de : ${qccm} %

        vous avez obtenu une moyenne en TP de : ${tp} %`);
    }

    if (resul >= 16 && resul <= 20) {
      displayElement('Tres bien');
    } else if (resul >= 14 && resul <= 16) {
      displayElement('Bien');
    } else if (resul >= 12 && resul <= 14) {
      displayElement('Assez bien');
    } else if (resul >= 10 && resul <= 12) {
      displayElement('Passable');
    } else if (resul >= 5 && resul <= 10) {
      displayElement('Insuffisante');
    } else {
      displayElement('Très Insuffisante');
    }
  },
};
