function rent(argcli: number, montant: number): number {
  let monnaie: number = argcli - montant;

  if (monnaie % 10 === 0) {
    console.log("Vous revcevez", Math.floor(monnaie / 10), "pièces de 10");
  } 
  if ((monnaie%10!==0 && Math.floor() ))
}
