function indices(t: Array<number>, x: number): Array<number> {
  let tab = new Array<number>();

  for (let i = 0; i < t.length; i++) {
    if (t[i] === x) tab.push(i);
  }

  return tab;
}

console.log(indices([1, 6, 6, 6, 5], 6));
