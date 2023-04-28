function supprimerPosition(ch: string, ind: number): string {
  let res = "";

  if (ind < 0 || ind >= ch.length) return ch;

  for (let i = 0; i < ch.length; i++) {
    if (i !== ind) res = res + ch[i];
  }
  return res;
}

function insererCaractère(ch: string, ind: number, carac: string): string {
  let res = "";
  for (let i = 0; i < ch.length; i++) {
    if (i === ind) res = res + carac;
    res += ch[i];
  }
  if (ind === ch.length) res += carac;
  return res;
}
