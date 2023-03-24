/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 时间复杂度：O(L)其中 L 是链表的长度。
var removeNthFromEnd = function(head, n) {
  const curr = head;
  let sum = 0;
  while (curr) {
    sum++;
    curr = curr.next;
  }
  const dummyHead = new ListNode(0, head);
  const prev = dummyHead;
  let i = 0;
  while (i < sum - n && prev) {
    prev = prev.next;
    i++;
  }
  prev.next = prev.next.next;

  return dummyHead.next;
};

// 双指针 一趟扫描
var removeNthFromEnd1 = function(head, n) {
  const dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;
  let i = 0;
  while (i < n + 1) {
    fast = fast.next;
    i++;
  }
  while (!!fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return dummyHead.next;
};