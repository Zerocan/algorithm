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
var rightSideView = function(root) {
  const res = [];
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const currRes = [];
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      currRes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(currRes.pop());
  }

  return res;
};