function recursive(n: number, s: number): void {
  if (n === 0) console.log(s);
  else recursive(n - 1, n + s);
}

function fibonacci(n: number): number {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

function rechercheDichotomique(t: Array<number>, x: number, a: number, b: number): boolean {
  if (a >= b) return false;
  else {
    let m = Math.floor((a + b - 1) / 2);

    if (x === t[m]) return true;
    else if (x <= t[m]) return rechercheDichotomique(t, x, a, m);
    else return rechercheDichotomique(t, x, m + 1, b);
  }
}

function premièreLettre(mot: string): string {
  return mot[0];
}

function dernièreLettre(mot: string): string {
  return mot[mot.length - 1];
}

function sousMot(mot: string): string {
  return mot.substring(1, mot.length);
}

function palindrome(mot: string): boolean {
  if (mot.length <= 1) return true;
  else if (premièreLettre(mot) != dernièreLettre(mot)) return false;
  else return palindrome(sousMot(mot));
}

function euclide(a: number, b: number): number {
  let reste = a % b;
  if (reste == 0) return b;
  else return euclide(b, reste);
}

console.log(euclide(119, 544));
