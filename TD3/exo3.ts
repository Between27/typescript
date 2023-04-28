function exo3(x: number, y: number): boolean {
  return (x >= 0 && y >= 0) || (x <= 0 && y <= 0);
}

function show3(): void {
  console.log(exo3(-4, -5));
}

show3();
