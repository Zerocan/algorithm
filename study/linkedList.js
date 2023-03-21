/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 根据value查找结点
  findByValue(val) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.element !== val) {
      currentNode = currentNode.next;
    }
    return currentNode || -1;
  }

  // 根据index查找结点
  findByIndex(index) {
    let currentNode = this.head;
    let pos = 0;
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode || -1;
  }

  // 指定元素向后插入
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode === -1) {
      console.log('未找到插入结点');
      return;
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找前一个结点
  findPrev(item) {
    let currentNode = this.head;
    // 自己实现，没考虑查找不到的情况
    // let prev = null;
    // while(currentNode !== null && currentNode.element !== item) {
    //   prev = currentNode;
    //   currentNode = currentNode.next;
    // }
    // return prev;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      return -1;
    }
    return currentNode;
  }

  // 根据值删除结点
  remove(item) {
    const desNode = this.findByValue(item);
    if (desNode === -1) {
      console.log('未找到元素');
      return;
    }
    const prev = this.findPrev(item);
    prev.next = desNode.next;
    // 自己实现
    // const prev = this.findPrev(item);
    // if (prev === -1) {
    //   console.log('未找到元素');
    //   return;
    // }
    // prev.next = prev.next.next;
  }

  // 环验证
  // 思想：在一个环形跑道上，两个运动员在同一地点起跑，一个运动员速度快，一个运动员速度慢。
  // 当两人跑了一段时间，速度快的运动员必然会从速度慢的运动员身后再次追上并超过，
  // 原因很简单，因为跑道是环形的。
  // 快指针每次前进2步，慢指针每次前进1步，若成环，快慢指针必会相遇
  checkCircle() {
    let fast = this.head.next;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }

  // 遍历显示所有结点
  display() {
    // 先检测是否成环
    if (this.checkCircle()) {
      return false;
    }
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  // 反转链表
  reverseList() {
    // 自己实现 问题：尾部结点为head，而不是null
    // let prev = this.head;
    // let next = this.head.next;
    // while (next !== null) {
    //   let temp = next.next;
    //   next.next = prev;
    //   prev = next;
    //   next = temp;
    // }
    // this.head = new Node('head');
    // this.head.next = prev;
    // 修改
    let prev = null;
    let current = this.head.next;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = new Node('head');
    this.head.next = prev;
    // 参考：尾插法
    // const root = new Node('head');
    // let currentNode = this.head.next;
    // while (currentNode !== null) {
    //   let next = currentNode.next;
    //   currentNode.next = root.next;
    //   root.next = currentNode;
    //   currentNode = next;
    // }
    // this.head = root;
  }

  // 删除倒数第n个节点
  removeByIndexFromEnd(index) {
    if (this.checkCircle() || index <= 0) {
      return false;
    }
    this.reverseList();
    const currentNode = this.findByIndex(index);
    if (currentNode === -1) {
      console.log('该结点不存在');
      return;
    }
    // 自己实现
    const prev = this.findPrev(currentNode.element);
    prev.next = currentNode.next;
    // this.remove(currentNode.element);
    this.reverseList();
  }

  // 求链表的中间结点
  findMiddleNode() {
    if (this.checkCircle()) {
      return false;
    }
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow);
    return slow;
  }
}

// 合并两个有序链表
const mergeSortedLists = (listA, listB) => {
  if (!listA || !listB) {
    console.log(listA || listB);
    return listA || listB;
  }

  let a = listA.head.next;
  let b = listB.head.next;
  // let resultList = undefined;
  // if (a.element < b.element) {
  //   resultList = a;
  //   a = a.next;
  // } else {
  //   resultList = b;
  //   b = b.next;
  // }
  // let currentNode = resultList;
  // while(a !== null && b !== null) {
  //   if (a.element < b.element) {
  //     currentNode.next = a;
  //     a = a.next;
  //   } else {
  //     currentNode.next = b;
  //     b = b.next;
  //   }
  //   currentNode = currentNode.next;
  // }
  let resultList = new Node('head');
  let currentNode = resultList
  while (a !== null && b !== null) {
    if (a.element < b.element) {
      currentNode.next = a
      a = a.next
    } else {
      currentNode.next = b
      b = b.next
    }
    currentNode = currentNode.next
  }

  if (a != null) {
    currentNode.next = a;
  } else {
    currentNode.next = b;
  }
  console.log('resultList', JSON.stringify(resultList));
  return resultList
};

// const LList = new LinkedList();
// LList.insert('chen', 'head');
// LList.insert('curry', 'chen');
// LList.insert('sang', 'curry');
// LList.display();
// console.log('-------------reverse------------')
// LList.reverseList();
// LList.display();
// console.log('-------------remove the one before last ------------')
// LList.removeByIndexFromEnd(3);
// LList.display();

// console.log('-------------find middle node ------------')
// LList.findMiddleNode();

const LListA = new LinkedList();
LListA.insert(3, 'head');
LListA.insert(7, 3);
LListA.insert(9, 7);
console.log('-------------LListA ------------');
LListA.display();

const LListB = new LinkedList();
LListB.insert(2, 'head');
LListB.insert(7, 2);
LListB.insert(8, 7);
LListB.insert(10, 8);
console.log('-------------LListB ------------');
LListB.display();

mergeSortedLists(LListA, LListB);