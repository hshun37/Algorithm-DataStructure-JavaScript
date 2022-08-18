export class Node {
  constructor(next = null, data) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("index가 범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    let newNode = new Node(index, data);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index > this.count || index < 0) {
      throw new Error("index가 범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    if (index == 0) {
      const deleteNode = currentNode;
      this.head = currentNode.next;
      currentNode = this.head;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNode(index) {
    if (index >= this.count || index < 0) {
      throw new Error("index가 범위를 넘어갔습니다.");
    }

    let currentNode = this.head;

    if (index == 0) {
      return currentNode;
    } else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let text = "[";
    let currentNode = this.head;

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }
}
