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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  const getPath = (curr, path) => {
    path = `${path}${path ? '->' : ''}${curr.val}`;
    if (!curr.left && !curr.right) {
      res.push(path);
      return;
    }
    if (curr.left) {
      getPath(curr.left, path);
    }
    if (curr.right) {
      getPath(curr.right, path);
    }
  }

  getPath(root, '');
  return res;
};