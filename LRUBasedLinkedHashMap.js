/**
 * leetcode 146 LRU缓存
 * 双链表 + map
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addLast(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;

    return node.key;
  }

  removeFirst() {
    if (this.head.next === this.tail) return null;
    const firstNode = this.head.next;
    return this.removeNode(firstNode); 
  }
}

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.hash = new Map();
  this.cache = new DoubleList();
  this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
  if (this.hash.get(key)) {
    const moveNode = this.hash.get(key);
    this.cache.removeNode(moveNode);
    this.cache.addLast(moveNode)

    return moveNode.value;
  }
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  if (this.hash.get(key)) {
    const changedNode = this.hash.get(key);
    this.cache.removeNode(changedNode);
  } else if(this.cache.size === this.capacity) {
    const deleted = this.cache.removeFirst();
    this.hash.delete(deleted);
  }
  let newNode = new Node(key, value);
  this.cache.addLast(newNode);
  this.hash.set(key, newNode);
};

const LRU = new LRUCache(5);
LRU.put(1, 11);
LRU.put(2, 22);
LRU.put(3, 33);
LRU.put(4, 44);
LRU.put(5, 55);
LRU.put(6, 66);
console.log(LRU.get(1));