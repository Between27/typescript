function syracuse(N: number, n: number, memoire: Map<string, number>): void {
  memoire = new Map<string, number>();

  let suite = [N];
  for (let i = 1; i < n + 1; i++) {
    if (suite[i - 1] % 2 == 0) {
      suite.push(Math.floor(suite[i - 1] / 2));
    } else {
      suite.push(3 * suite[i - 1] + 1);
    }
  }

  for (let j = 0; j < suite.length; j++) {
    memoire.set(j.toString(), suite[j]);
  }

  console.log(memoire);
}

function occurenceMoyenne(t: Array<number>): number {
  let memoire = new Map<number, number>();
  let somme = 0;
  let i = 0;
  for (let v of t) {
    if (memoire.has(v)) {
      memoire.set(v, memoire.get(v)! + 1);
    } else {
      memoire.set(v, 1);
    }
  }
  for (let v of memoire.values()) {
    somme += v;
    i++;
  }
  return somme / i;
}

let t = [1, 5, 5, 8, 8, 8];

// console.log(occurenceMoyenne(t));
syracuse(15, 25, new Map<string, number>());
