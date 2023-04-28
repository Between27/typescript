function rotation(tab: Array<number>): Array<number> {
  let fin = tab.length - 1;
  for (let i = 0; i < tab.length; i++) {
    if (i < fin) {
      tab[i] = tab[i + 1];
    } else if (i == 0) {
      tab[fin] = tab[0];
    }
  }

  return tab;
}

console.log(rotation([50, 23, 28, 6, 49]));
