function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = {
    name: "factorielle version recursive",
    description: "Calculer la factorielle d'un nombre positif",

    async run(ask) {
        const number = parseInt(await ask("Entrez un nombre pour calculer sa factorielle: "), 10);
        if (number < 0) {
            console.log("La factorielle n'est pas definie pour un nombre negatif.");
            return;
        }
        console.log(`La factorielle de ${number} est ${factorial(number)}`);
    }
}

