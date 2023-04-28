const tva = 0.194;

function montantTTC(prix: number): void {
  let prixttc = prix + prix * tva;
  if (prixttc < 1000) {
    console.log("Le montant de votre achat est", prixttc, "avec une remise de 0 €");
  }
  if (prixttc >= 1000 && prixttc < 2000) {
    console.log(
      "Le montant de votre achat est",
      prixttc,
      "avec une remise de",
      prixttc * 0.01,
      "€"
    );
  }
  if (prixttc >= 2000 && prixttc <= 5000) {
    console.log(
      "Le montant de votre achat est",
      prixttc,
      "avec une remise de",
      prixttc * 0.02,
      "€"
    );
  }
  if (prixttc > 5000) {
    console.log(
      "Le montant de votre achat est",
      prixttc,
      "avec une remise de",
      prixttc * 0.05,
      "€"
    );
  }
}

montantTTC(2400);
