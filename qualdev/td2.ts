import * as readlineSync from "readline-sync";

function dateSplit(date: string): Array<number> {
  let res = new Array<number>();
  let split = date.split("/");

  res.push(parseInt(split[0]));
  res.push(parseInt(split[1]));
  res.push(parseInt(split[3]));

  return res;
}

function testeConversion(): void {
  let date = readlineSync.question("Entrez une date (JJ/MM/AAAA");
  let res = new Array<number>();
}
