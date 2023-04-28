import * as readlineSync from "readline-sync";

let sommePositive = 0;
let nbrepositifs = 0;
let sommeNegative = 0;
let nbrenegatifs = 0;
let min = 0;
let max = 0;

let nombre;

while (nombre !== 0) {
  nombre = Number(readlineSync.question("entrez un nombre "));

  if (nombre > 0) {
    sommePositive += nombre;
    nbrepositifs++;
  }
  if (nombre < 0) {
    sommeNegative += nombre;
    nbrenegatifs++;
  }
  if (nombre > 0 && max <= nombre) {
    max = nombre;
  }
  if (nombre < 0 && min >= nombre) {
    min = nombre;
  }
}

console.log("La somme des nombres positifs est", sommePositive);
console.log(" il y a ", nbrepositifs, "nombres positifs");
console.log("la moyenne positive est ", sommePositive / nbrepositifs);
console.log("le maximum est", max);
console.log("La somme des nombres négatifs est", sommeNegative);
console.log(" il y a ", nbrenegatifs, "nombres négatifs");
console.log("la moyenne négative est ", sommeNegative / nbrenegatifs);
console.log("le minimum est", min);
