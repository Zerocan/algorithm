/**
 * 基于链表实现的栈。
 *
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class StackBasedLinkedList {
  constructor() {
    this.top = null;
  }

  // 入栈
  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  // 出栈
  pop() {
    if (this.top === null) {
      console.log('栈内无数据');
      return -1;
    }
    const value = this.top.element;
    this.top = this.top.next;
    console.log('出栈：', value);
    return value;
  }

  // 清除栈
  clear() {
    this.top = null
  }

  display() {
    if (this.top !== null) {
      let temp = this.top;
      while (temp !== null) {
        console.log(temp.element);
        temp = temp.next;
      }
    }
  }
}

// 测试
const newStack = new StackBasedLinkedList();
console.log('-------------start push ------------');
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.display();
console.log('-------------start pop ------------');
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.display();

