/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let curr = head;
  let nextCurr = null;
  let num = 0;
  while (curr && curr.next) {
    let next = curr.next;
    nextCurr = next.next;
    next.next = curr;
    curr.next = nextCurr?.next || nextCurr;
    curr = nextCurr;
    if (num === 0) {
      head = next;
    }
    num++;
  }
  return head;
};

// 虚拟头节点
var swapPairs = function(head) {
  const dummyHead = new ListNode(0, head);
  let curr = dummyHead;
  while (curr.next && curr.next.next) {
    const temp = curr.next;
    const temp1 = curr.next.next.next;
    curr.next = curr.next.next;
    curr.next.next = temp;
    temp.next = temp1;
    curr = temp;
  }

  return dummyHead.next;
};