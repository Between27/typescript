function CheckFermat(a: number, b: number, c: number, n: number): void {
  if (a ** n + b ** n === c ** n && n >= 2) {
    console.log("Ferma avait tort");
  } else {
    console.log("Cela ne marche pas");
  }
}

CheckFermat(2, 3, 4, 2);
