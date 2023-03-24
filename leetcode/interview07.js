/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 双指针 思路参考 https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/solution/mian-shi-ti-0207-lian-biao-xiang-jiao-sh-b8hn/
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let pA = headA, pB = headB;
  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};

// 哈希
var getIntersectionNode1 = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  const setA = new Set();
  let temp = headA;
  while (temp) {
    setA.add(temp);
    temp = temp.next;
  }

  temp = headB;
  while (temp) {
    if (setA.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }

  return null;
};