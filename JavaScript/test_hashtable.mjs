import { HashTable } from "./HashTable.mjs";

let hashtable = new HashTable();

hashtable.set(1, "홍성훈");
hashtable.set(4, "홍성우");
hashtable.set(20, "홍성렬");
hashtable.set(6, "유상철");
hashtable.set(22, "송종국");
hashtable.set(21, "박지성");
hashtable.set(5, "김남일");
hashtable.set(10, "이영표");
hashtable.set(8, "최태욱");
hashtable.set(9, "설기현");
hashtable.set(14, "이천수");

console.log(`1: ${hashtable.get(1)}`);
hashtable.remove(1);
console.log(`1: ${hashtable.get(1)}`);
console.log(`21: ${hashtable.get(21)}`);
