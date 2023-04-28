function chiffreDroit(n: number): number {
  return n % 10;
}
function popDroit(n: number): number {
  return Math.floor(n / 10);
}

function milieu(n: number): number {
  return Math.floor(chiffreDroit(popDroit(n)) % 10);
}

function chiffreGauche(n: number): number {
  return popDroit(popDroit(n));
}

function sommemoi(n: number): void {
  console.log(chiffreDroit(n) + milieu(n) + chiffreGauche(n));
}

function somme(n: number): void {
  let resultat = 0;
  while (n !== 0) {
    resultat += chiffreDroit(n);
    n = popDroit(n);
  }
  console.log(resultat);
}

function miroir(n: number): void {
  let resultat = 0;
  while (n !== 0) {
    resultat = resultat * 10 + chiffreDroit(n);
    n = popDroit(n);
  }
  console.log(resultat);
}

miroir(523);
