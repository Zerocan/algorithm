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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const res = [];
  const getHeight = (curr) => {
    if (!curr) {
      return 0;
    }
    const leftHeight = getHeight(curr.left);
    const rightHeight = getHeight(curr.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      res.push(false)
    } else {
      res.push(true);
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }
  getHeight(root);
  return res.every(item => item === true);
};

var isBalanced1 = function(root) {
  const getHeight = (curr) => {
    if (!curr) {
      return 0;
    }
    const leftHeight = getHeight(curr.left);
    const rightHeight = getHeight(curr.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  }

  return getHeight(root) > 0;
};
