import * as readlineSync from "readline-sync";

let a = Number(readlineSync.question("entrez le premier nombre "));
let b = Number(readlineSync.question("Entrez le second nombre"));

let quotient = Math.floor(a / b);

console.log("on peut multiplier", b, "au plus", quotient, "fois avant de dépasser", a);
