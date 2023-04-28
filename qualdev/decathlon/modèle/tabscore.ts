export class TabScore {
  private _perf: Array<Array<number>>;

  constructor(
    perf = [
      [10.39, 10.6, 10.82, 11.05, 11.27, 11.51, 11.75],
      [7.76, 7.56, 7.36, 7.15, 6.95, 6.73, 6.51],
      [18.4, 17.59, 16.79, 15.98, 15.16, 14.35, 13.53],
      [2.21, 2.16, 2.11, 2.05, 2, 1.94, 1.89],
      [46.17, 47.17, 48.19, 49.24, 50.32, 51.43, 52.58],
      [13.81, 14.19, 14.59, 15, 15.41, 15.85, 16.29],
      [56.18, 53.8, 51.4, 49, 46.6, 44.16, 41.72],
      [5.29, 5.13, 4.97, 4.8, 4.64, 4.46, 4.3],
      [77.2, 73.94, 70.68, 67.4, 64.1, 60.78, 57.46],
      [233.79, 240.53, 247.42, 254.5, 261.77, 269.25, 276.96],
    ]
  ) {
    this._perf = perf;
  }

  get perf(): Array<Array<number>> {
    return this._perf;
  }
  set perf(perf: Array<Array<number>>) {
    this._perf = perf;
  }
}
