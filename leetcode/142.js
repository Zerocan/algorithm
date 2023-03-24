/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 哈希 空间复杂度O(n)
var detectCycle = function(head) {
  const set = new Set();
  let temp = head;
  while (temp) {
    if (set.has(temp)) {
      return temp;
    }
    set.add(temp);
    temp = temp.next;
  }
  return null;
};

// 双指针 空间复杂度O(1)
var detectCycle1 = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let index1 = fast;
      let index2 = head;
      while (index1 !== index2) {
        index1 = index1.next;
        index2 = index2.next;
      }
      return index1;
    }

  }
  return null;
};