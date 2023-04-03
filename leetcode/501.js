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
var findMode = function (root) {
  let max = 0;
  let res = [];
  let num = 1;
  let last = null;
  const traversal = (curr) => {
    if (!curr) return;
    traversal(curr.left);
    if (curr.val === last) {
      num++;
    } else {
      num = 1;
    }
    if (num > max) {
      max = num;
      res = [curr.val];
    } else if (num === max) {
      res.push(curr.val);
    }
    last = curr.val;
    traversal(curr.right);
  };

  traversal(root);
  return res;
};