import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("====== enqueue() 세 번 호출 ======");
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
console.log(queue.front());

console.log("===== dequeue() 네 번 호출======");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log("====== isEmpty ======");
console.log(`isEmpty: ${queue.isEmpty()}`);
