function exo5(année: number): boolean {
  return (année % 4 === 0 && année % 100 !== 0) || année % 400 === 0;
}

function show5(): void {
  console.log(exo5(1600));
}

show5();
