class LinkedNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function () {
  this._size = 0;
  this._head = null;
  this._tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index > this._size - 1) {
    return -1;
  } else if (index === this._size - 1) {
    return this._tail.val;
  } else {
    let num = 0;
    let curr = this._head;
    while (curr) {
      if (num === index) {
        return curr.val;
      }
      num++;
      curr = curr.next;
    }
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkedNode(val, this._head);
  this._head = node;
  if (!this._tail) {
    this._tail = node;
  }
  this._size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkedNode(val, null);
  if (!this._head) {
    this._head = node;
  }
  if (!this._tail) {
    this._tail = node;
  }  else {
    this._tail.next = node;
    this._tail = node;
  }
  this._size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) {
    return;
  }
  const node = new LinkedNode(val, null);
  if (index === 0) {
    node.next = this._head;
    this._head = node;
    this._size++;
    if (!this._tail) {
      this._tail = node;
    }
    return;
  }
  if (!this._tail) {
    this._tail = node;
  }
  if (index === this._size) {
    this._tail.next = node;
    this._tail = node;
    this._size++;
  } else {
    let num = 0;
    let curr = this._head;
    while (curr) {
      if (num === index -1 ) {
        node.next = curr.next;
        curr.next = node;
        this._size++;
        break;
      }
      num++
      curr = curr.next;
    }
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index > this._size - 1) {
    return;
  }
  if (index === 0) {
    this._head = this._head.next;
    this._size--;
    if (this._size === 0) {
      this._tail = null;
    }
    return;
  }
  let num = 0;
  let curr = this._head;
  while (curr && curr.next) {
    if (num === index - 1) {
      curr.next = curr.next.next;
      if (index === this._size - 1) {
        this._tail = curr;
      }
      this._size--;
      break;
    }
    num++
    curr = curr.next;
  }
};

const myList = new MyLinkedList();
myList.addAtIndex(0, 10);
myList.addAtIndex(0, 20);
myList.addAtIndex(1, 30);
console.log('get', myList.get(0))
// myList.addAtTail(3);
// myList.addAtIndex(1, 2);
// console.log('get', myList.get(1))
// myList.deleteAtIndex(0);
// console.log('get', myList.get(0))