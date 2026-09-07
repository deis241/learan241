module.exports = {
    name: "factorielle",
    description: "Calculer la factorielle d'un nombre positif",

    async run(ask) {
        const number = parseInt(await ask("Entrez un nombre pour calculer sa factorielle: "), 10);

        if (number < 0) {
            console.log("La factorielle n'est pas definie pour un nombre negatif.");
            return;
        }

        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        console.log(`La factorielle de ${number} est ${result}`);
    }
}
