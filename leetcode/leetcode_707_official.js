class ListNode {
  constructor(val, prev, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null: prev;
  }
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
  this.tail = new ListNode(0);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let curr;
  if (index < this.size - index) {
    curr = this.head;
    for (let i = 0; i <= index; i++) {
      curr = curr.next;
    }
  } else {
    curr = this.tail;
    for (let i = 0; i < this.size - index; i++) {
      curr = curr.prev;
    }
  }
  return curr.val;
}

MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
}

MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
}

MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  let pred, nextd;
  if (index < this.size - index) {
    pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    nextd = pred.next;
  } else {
    nextd = this.tail;
    for (let i = 0; i < this.size - index; i++) {
      nextd = nextd.prev;
    }
    pred = nextd.prev;
  }
  this.size++;
  const node = new ListNode(val, pred, nextd);
  pred.next = node;
  nextd.prev = node;
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  let pred, nextd;
  if (index < this.size - index) {
    pred = this.head;
    for (let i = 0; i < index; i++) {
      pred = pred.next;
    }
    nextd = pred.next.next;
  } else {
    nextd = this.tail;
    for (let i = 0; i < this.size - index - 1; i++) {
      nextd = nextd.prev;
    }
    pred = nextd.prev.prev;
  }
  this.size--;
  pred.next = nextd;
  nextd.prev = pred;
}