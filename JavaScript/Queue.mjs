import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enQueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    return this.list.tail.data;
  }

  isEmpty() {
    return this.list.count == 0;
  }
}
