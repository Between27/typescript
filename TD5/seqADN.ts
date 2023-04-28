function estBase(base: string): boolean {
  return base === "A" || base === "C" || base === "G" || base === "T";
}

function estADN(seq: string): boolean {
  //
  for (let c of seq) if (!estBase(c)) return false;

  return true;
}

function transcrit(seqADN: string): string {
  let seqARN = "";

  for (let c of seqADN)
    if (c === "T") seqARN += "U";
    else seqARN += c;
  return seqARN;
}

function baseComplémentaire(base: string): string {
  if (base === "A") return "T";
  else if (base === "C") return "G";
  else if (base === "G") return "C";
  else if (base === "T") return "A";
  else return "";
}

function séquenceComplémentaireInversée(seqADN: string): string {
  let res = "";

  for (let c of seqADN) res = baseComplémentaire(c) + res;

  return res;
}

function nbre0ccurenceCodon(codon: string, seq: string): number {
  let res = "";

  for (let i = 0; i < seq.length; i += 3)
    if (codon[0] === seq[i] && codon[1] === seq[i + 1] && codon[2] === seq[i + 2]) res++;

  return res;
}
