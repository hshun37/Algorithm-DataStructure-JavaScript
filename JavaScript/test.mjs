import { Node, LinkedList } from "./LinkedList.mjs";
import { Stack } from "./Stack.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1);
console.log(node1.next);
console.log(node1.next.next);

let list = new LinkedList();

console.log("");
console.log("====== insertAt ======");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("");
console.log("====== deleteAt ======");
let a = list.deleteAt(0);
console.log(a.data);
list.printAll();

console.log("");
console.log("====== insertLast ======");
list.insertLast(5);
list.printAll();

console.log("");
console.log("====== deleteLast ======");
a = list.deleteLast();
console.log(a.data);
a = list.deleteLast();
console.log(a.data);
a = list.deleteLast();
console.log(a.data);
list.printAll();

console.log("====== clear ======");
list.clear();
list.printAll();

console.log("====== insertLast ======");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.printAll();

console.log("====== getNode ======");
a = list.getNode(5);
console.log(a.data);
