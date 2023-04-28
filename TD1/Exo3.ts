import * as readlineSync from "readline-sync";
let nomb1 = Number(readlineSync.question("entrez le premier nombre "));
let nomb2 = Number(readlineSync.question("entrez le deuxième nombre "));
console.log("La somme est", nomb1 + nomb2);
