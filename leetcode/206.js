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
// 双指针 时间复杂度：O(n) 空间复杂度：O(1)
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (!!curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
};

// 递归 时间复杂度：O(n) 空间复杂度：O(n)
var reverse = function(pre, head) {
  if(!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head
  return reverse(pre, temp);
}

var reverseList1 = function(head) {
  return reverse(null, head);
};