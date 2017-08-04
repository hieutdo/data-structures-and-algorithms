export interface LinkedListNode<T> {
  value: T,
  next?: LinkedListNode<T>,
}

export class LinkedList<T> {
  public head?: LinkedListNode<T> = undefined;
  public tail?: LinkedListNode<T> = undefined;

  add(value: T) {
    const node: LinkedListNode<T> = {
      value,
      next: undefined,
    };
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  * values<T>() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

const list = new LinkedList<number>();

[1, 2, 3, 4].forEach(x => list.add(x));

for (const x of list.values()) {
  console.log(x)
}