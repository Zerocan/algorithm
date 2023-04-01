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
// 递归
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  if (!root.left && root.right) {
    return 1 + rightDepth;
  } else if (root.left && !root.right) {
    return 1 + leftDepth;
  } else {
    return 1 + Math.min(leftDepth, rightDepth);
  }
};