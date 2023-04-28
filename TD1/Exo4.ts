import * as readlineSync from "readline-sync";
let nomb1 = Number(readlineSync.question("Entrez le premier nombre "));
let nomb2 = Number(readlineSync.question("Entrez le deuxième nombre "));
let nomb3 = Number(readlineSync.question("Entrez le troisième nombre "));
console.log("le résultat est ", nomb3 * (nomb1 + nomb2));
