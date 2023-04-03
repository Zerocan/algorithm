/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 双指针遍历
var getMinimumDifference = function(root) {
  let pre = null;
  let min = Infinity;
  const traversal = (curr) => {
    if (!curr) return;
    traversal(curr.left);
    if (pre !== null) {
      const diff = Math.abs(curr.val - pre.val);
      min = Math.min(diff, min);
    }
    pre = curr;
    traversal(curr.right);
  };
  traversal(root);
  return min;
};