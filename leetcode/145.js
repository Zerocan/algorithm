// 二叉树后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
};

const traversal = (curr, res) => {
  if (curr === null) {
    return;
  }
  traversal(curr.left, res);
  traversal(curr.right, res);
  res.push(curr.val);
}