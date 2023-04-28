import * as readlinSync from "readline-sync";

function randint(inf: number, sup: number): number {
  return Math.floor(Math.random() * (sup - inf + 1) + inf);
}

function main(): void {
  console.log("1) Addition");
  console.log("2) Soustraction");
  choix();
}

function choix(): void {
  let x = Number(readlinSync.question("Entrez 1 or 2 : "));

  if (x == 1) reponse(adition());
  else if (x == 2) reponse(Soustraction());
  else {
    console.log("ERREUR !!!");
    choix();
  }
}

function adition(): boolean {
  let pre = randint(5, 20);
  let deu = randint(5, 20);
  let x = Number(readlinSync.question(pre + "+" + deu + " = "));
  if (x === pre + deu) return true;
  else return false;
}

function Soustraction(): boolean {
  let pre = randint(5, 20);
  let deu = randint(5, 20);
  let x = Number(readlinSync.question(pre + "-" + deu + " = "));
  if (x === pre - deu) return true;
  else return false;
}

function reponse(n: boolean): void {
  if (n === false) console.log("Incorrect");
  else console.log("Correct");
}

main();
