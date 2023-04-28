import * as readlineSync from "readline-sync";
let poids = Number(readlineSync.question("Entrez un poids en kilo "));
console.log(poids, "kilos =", poids * 2.204, "livres");
