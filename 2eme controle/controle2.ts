function apparait(t1: Array<number>, indice: number, t2: Array<number>): boolean {
  let tab = new Array<number>();

  for (let i = indice; i <= t2.length; i++) {
    tab.push(t1[i]);
  }
  for (let i in t2) if (t2[i] !== tab[i]) return false;

  return true;
}

function estSousTableau(t1: Array<number>, t2: Array<number>): boolean {
  let r = false;
  let i = -1;
  while (!r && i <= t2.length) {
    if (apparait(t1, i++, t2)) r = true;
  }

  return r;
}

console.log(estSousTableau([1, 5, 2, 10, 7], [5, 2, 10]));
