const pi = 3.1415;
function aire(rayon: number): number {
  return pi * rayon * rayon;
}

function main(): void {
  console.log("le double de l'aire du dique de rayon  10 est ", aire(10));
}

main();
