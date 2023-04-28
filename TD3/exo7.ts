function triangle(a: number, b: number, c: number): boolean {
  return a + b <= c || b + c <= a || a + c <= b;
}

function show7(): void {
  console.log(triangle(1, 2, 3));
}

show7();
