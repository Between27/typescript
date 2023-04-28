function tirets(chaine: string): string {
  let res = "";

  for (let c of chaine) {
    res += c + "-";
  }
  return res;
}

function tirets1(chaine: string): string {
  let res = "";

  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] === " ") res += "" + chaine[i];
    else res += chaine[i] + "-";
  }

  return res;
}

function tirets2(chaine: string): string {
  let res = "";

  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] === " ") res += chaine[i];
    else if (i === chaine.length - 1) res += chaine[i];
    else res += chaine[i] + "-";
  }

  return res;
}
console.log(tirets2("tirets dans la chaîne"));
