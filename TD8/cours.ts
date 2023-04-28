function factoriel(n: number): void {
  let res = 1;
  for (let i = 1; i <= n; i++) res *= i;

  console.log(res);
}

factoriel(4);
