import * as readlineSync from "readline-sync";
let nom = readlineSync.question("Quel est votre nom ? ");
let age = Number(readlineSync.question("Quel est votre age ? "));
console.log("Bonjour", nom, "à votre prochain anniversaire vous aurez", age + 1, "ans");
