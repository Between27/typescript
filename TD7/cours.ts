function rechercheSéquentielleNaïve(t: Array<number>, x: number, a: number, b: number): boolean {
  let présent = false;
  for (let i = a; i < b; i++) if (t[i] === x) présent = true;
  return présent;
}
// Recherche dans le tableau complet
let tab = [50, 100, 80, 10, 20, 60, 40, 70, 30];
console.log("100 dans tab ?", rechercheSéquentielleNaïve(tab, 50, 0, tab.length));
