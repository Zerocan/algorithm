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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let pre = null;
  const traversal = (curr) => {
    if (!curr) return;
    if (curr.right) {
      traversal(curr.right);
    }
    curr.val += (pre?.val || 0);
    pre = curr;
    if (curr.left) {
      traversal(curr.left);
    }
  }
  traversal(root);
  return root;
};