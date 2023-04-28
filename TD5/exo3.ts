function miroir(ch: string): string {
  let res = "";

  //for (let c of ch) res = c + res ;
  //for (let i = 0; i < ch.length; i++) res = res + ch[ch.length -1 -i ];
  for (let i = ch.length - 1; i >= 0; i--) res = res + ch[i];
  return res;
}

console.log(miroir("dragon"));
