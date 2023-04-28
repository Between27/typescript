import * as readlineSync from "readline-sync";
let jour = Number(readlineSync.question("Entrez un nombre de jours "));
console.log(
  "il y a",
  jour * 24,
  "heures,",
  jour * 1440,
  "minutes et",
  jour * 86400,
  "secondes dans",
  jour,
  "jours"
);
