function palind(mot: string): boolean {
  for (let i = 0; i < mot.length; i++) {
    if (mot[i] !== mot[mot.length - 1 - i]) return false;
  }

  return true;
}

console.log(palind("mamam"));
