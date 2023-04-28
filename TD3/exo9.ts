function date1(jour: number, mois: number, année: number): void {
  if (jour >= 1 && jour < 30 && mois !== 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour >= 1 && jour < 31 && mois !== 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour >= 1 && jour < 28 && mois === 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour === 30 && mois === (4 || 6 || 9 || 11) && mois < 12) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 31 && mois === (1 || 3 || 5 || 7 || 8 || 10)) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 28 && mois === 2 && mois < 12) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 31 && mois == 12) {
    console.log("Demain est le", 1, "/", 1, "/", année + 1);
  } else console.log("ERREUR");
}

function date2(jour: number, mois: number, année: number): void {
  if (jour >= 1 && jour < 30 && mois !== 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour >= 1 && jour < 31 && mois !== 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour >= 1 && jour < 28 && mois === 2) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (
    jour >= 1 &&
    jour < 29 &&
    mois === 2 &&
    ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0)
  ) {
    console.log("Demain est le", jour + 1, "/", mois, "/", année);
  } else if (jour === 30 && mois !== 2 && mois < 12) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 31 && mois !== 2 && mois < 12) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 28 && mois === 2 && mois < 12) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else if (jour === 31 && mois == 12) {
    console.log("Demain est le", 1, "/", 1, "/", année + 1);
  } else if (
    jour === 29 &&
    mois === 2 &&
    mois < 12 &&
    ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0)
  ) {
    console.log("Demain est le", 1, "/", mois + 1, "/", année);
  } else console.log("ERREUR");
}
date1(31, 11, 1659);
