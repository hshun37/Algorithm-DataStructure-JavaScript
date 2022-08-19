import { HashTable } from "./HashTable.mjs";

export class HashSet {
  constructor() {
    this.hashtable = new HashTable();
  }

  add(data) {
    if (this.hashtable.get(data) == null) {
      this.hashtable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hashtable.get(data) != null;
  }

  remove(data) {
    this.hashtable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashtable.arr.length; i++) {
      this.hashtable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.hashtable.arr.length; i++) {
      if (this.hashtable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashtable.arr.length; i++) {
      let currentNode = this.hashtable.arr[i].head;
      while (currentNode != null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}
