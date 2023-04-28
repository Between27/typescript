export abstract class Epreuve {
  #unite: string;
  points = [1000, 950, 900, 850, 800, 750, 700];
  

  abstract calculePoints(): number;
}
