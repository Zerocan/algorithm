// 二叉树中序遍历
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
var inorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
};

const traversal = (curr, res) => {
  if (curr === null) {
    return;
  }
  traversal(curr.left, res);
  res.push(curr.val);
  traversal(curr.right, res);
}