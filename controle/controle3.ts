import { read } from "fs";
import * as readlineSync from "readline-sync";

function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function menu(): void {
  console.log("1) Addition");
  console.log("2) Soustraction");
  console.log("Entrez 1 or 2 : ");
}

function erreur(): void {
  menu();
  let entrée = Number(readlineSync.question(" "));
  let b = true;
  while (entrée > 0 && !b) {
    entrée = Number(readlineSync.question("Entrez 1 or 2 : "));
  }
}
erreur();
