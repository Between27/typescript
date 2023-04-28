function gain(mise: number, r1: number, r2: number, r3: number): void {
  let cash: number;

  if (r1 == 1 && r2 == 1 && r3 == 1) {
    cash = mise * 250;
  } else if (r1 == 2 && r2 == 2 && r3 == 2) {
    cash = mise * 150;
  } else if ((r1 == 1 && r2 == 1) || (r1 == 1 && r3 == 1) || (r2 == 1 && r3 == 1)) {
    cash = mise * 5;
  } else if (
    (r1 == 1 && r2 != 1 && r3 != 1) ||
    (r1 != 1 && r2 == 1 && r3 != 1) ||
    (r1 != 1 && r2 != 1 && r3 == 1)
  ) {
    cash = mise * 2;
  } else cash = 0;

  console.log(cash);
}

gain(2, 1, 1, 1);
gain(5, 2, 2, 2);
gain(10, 3, 1, 1);
gain(20, 2, 1, 3);
gain(50, 2, 3, 2);
