function deb1(): number {
  let j = 200;
  let tab = [];
  for (let i = 0; i < 10; i++) {
    j -= 10;
    tab[i] = j;
  }
  return j;
}

function deb2(x: number, y: number): void {
  const tmp = y;
  y = x;
  x = tmp;
  /* Y prend la valeur 10, ensuite x prends la valeur 20 */
  console.log(x, y);
}

function deb3(xy: number[]): void {
  let tmp = xy[0];
  xy[0] = xy[1];
  xy[1] = tmp;
}

let j = 10;
deb4();
console.log(j);

function deb4(): number {
  let j = 25;
  for (let i = 0; i < 10; i++) {
    let j = 2 * i;
    console.log(j);
  }
  return j;
}

let tab1 = [1, 2, 3];
let tab2 = tab1;

tab1[1] = 5;

console.log(tab1, tab2);
