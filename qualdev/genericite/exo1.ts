class Triple<T, U, V> {
  private _first: T;
  private _second: U;
  private _third: V;

  constructor(first: T, second: U, third: V) {
    this._first = first;
    this._second = second;
    this._third = third;
  }

  get first(): T {
    return this._first;
  }
  get second(): U {
    return this._second;
  }
  get third(): V {
    return this._third;
  }
  set first(first: T) {
    this._first = first;
  }
  set second(second: U) {
    this._second = second;
  }
  set third(third: V) {
    this._third = third;
  }

  toString(): string {
    return this._first + " " + this._second + " " + this._third;
  }
}

const p = new Triple<string, number, boolean>("Azerty", 7, true);
console.log(p.toString());
const s = new Triple<number, number, number>(14, 15, 16);
const tr = new Triple<string, string, string>("premier", "deuxieme", "troisième");
