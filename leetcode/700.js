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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  const search = (curr) => {
    if (!curr) {
      return null;
    }
    const currVal = curr.val;
    if (currVal === val) {
      return curr;
    } else if (currVal > val) {
      return search(curr.left);
    } else {
      return search(curr.right);
    }
  };

  return search(root);
};