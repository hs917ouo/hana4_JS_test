class Collection<T> {
  protected items: T[] = [];

  protected push(value: T): void {
    this.items.push(value);
  }

  protected length(): number {
    return this.items.length;
  }

  protected delete(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    } else {
      throw new Error("Index out of bounds");
    }
  }
}

type ListNode<T> = {
  value: T;
  rest?: ListNode<T>;
};

class ArrayList<T> extends Collection<ListNode<T>> {
  private head?: ListNode<T>;
  private last?: ListNode<T>;

  add(value: T, index?: number): void {
    const newNode: ListNode<T> = { value };

    if (index === undefined || index >= this.length()) {
      if (!this.head) {
        this.head = newNode;
        this.last = newNode;
      } else {
        if (this.last) {
          this.last.rest = newNode;
        }
        this.last = newNode;
      }
    } else if (index === 0) {
      newNode.rest = this.head;
      this.head = newNode;
      if (!this.last) {
        this.last = newNode;
      }
    } else {
      let current = this.head;
      let count = 0;
      let prev: ListNode<T> | undefined = undefined;

      while (current && count < index) {
        prev = current;
        current = current.rest;
        count++;
      }

      if (count === index && prev) {
        newNode.rest = current;
        prev.rest = newNode;
        if (!newNode.rest) {
          this.last = newNode;
        }
      } else {
        throw new Error("Index out of bounds");
      }
    }

    this.push(newNode);
  }

  // get 메서드 수정: value 값을 반환하도록 변경
  get(index: number): T | undefined {
    let current = this.head;
    let count = 0;

    while (current && count < index) {
      current = current.rest;
      count++;
    }

    return current ? current.value : undefined; // value 값을 반환
  }

  // set 메서드 수정: get(index)를 사용해 해당 노드의 값을 설정
  set(index: number, value: T): void {
    let current = this.head;
    let count = 0;

    while (current && count < index) {
      current = current.rest;
      count++;
    }

    if (current) {
      current.value = value;
    } else {
      console.log(`index ${index} is not exist.`);
    }
  }

  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.rest;
      index++;
    }

    return -1;
  }

  contains(value: T): boolean {
    const index = this.indexOf(value);
    return index !== -1;
  }

  remove(value: T): void {
    let current = this.head;
    let prev: ListNode<T> | undefined = undefined;
    let index = 0;

    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.rest = current.rest;
        } else {
          this.head = current.rest;
        }

        if (!current.rest) {
          this.last = prev;
        }

        this.delete(index);
        return;
      }

      prev = current;
      current = current.rest;
      index++;
    }

    console.log("Value not found in list");
  }

  size(): number {
    return this.length();
  }

  toString(): string {
    const stringifyNode = (node?: ListNode<T>): string => {
      if (!node) {
        return "";
      }
      const restString = node.rest ? `, rest: ${stringifyNode(node.rest)}` : "";
      return `{ value: ${node.value}${restString} }`;
    };

    return this.head ? stringifyNode(this.head) : "Empty list";
  }

  iterator(): Iterator<T> {
    let current = this.head;

    return {
      next: (): IteratorResult<T> => {
        if (current) {
          const value = current.value;
          current = current.rest;
          return { value, done: false };
        }
        return { value: undefined as any, done: true };
      },
    };
  }
}

class Stack<T> extends Collection<T> {}
class Queue<T> extends Collection<T> {}

export { Stack, Queue, ArrayList };
