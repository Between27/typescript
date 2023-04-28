function i1(x: number): boolean {
  return x >= -1 && x <= 3;
}

function i2(x: number): boolean {
  return x > -1 && x <= 3;
}
function i3(x: number): boolean {
  return i2(x) || (x >= 8 && x <= 10);
}

function i4(x: number): boolean {
  return i2(x) || x >= 8;
}

function show2(): void {
  console.log(i4(9));
}

show2();
