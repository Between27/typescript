interface IStack<T> {
  push(truc: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

class Stack<T> implements IStack<T> {
  elements: T[];

  constructor() {
    this.elements = [];
  }

  push(truc: T): void {
    this.elements.push(truc);
  }
  pop(): T | undefined {
    return this.elements.pop();
  }
  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  size(): number {
    return this.elements.length;
  }
}

let e = new Stack<number>();
e.push(14);
e.push(16);
e.pop();
console.log(e.peek());
