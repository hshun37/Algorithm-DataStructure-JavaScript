import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

export class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let curruntNode = this.arr[this.hashFunction(key)].head;

    while (curruntNode != null) {
      if (curruntNode.data.key == key) {
        return curruntNode.data.value;
      }
      curruntNode = curruntNode.next;
    }
    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let curruntNode = list.head;
    let deletedIndex = 0;
    while (curruntNode != null) {
      if (curruntNode.data.key == key) {
        return list.deleteAt(deletedIndex);
      }
      curruntNode = curruntNode.next;
      deletedIndex++;
    }
    return null;
  }
}
