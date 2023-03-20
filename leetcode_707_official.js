// 使用了虚拟头节点，降低复杂度
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let curr = this.head;
  for (let i = 0; i <= index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.size, val);
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }
  this.size++;
  let pred = this.head;
  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  const node = new ListNode(val, pred.next);
  pred.next = node;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  this.size--;
  let pred = this.head;
  for (let i = 0; i < index; i++) {
    pred = pred.next;
  }
  pred.next = pred.next.next || null;
};
