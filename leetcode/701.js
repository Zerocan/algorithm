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
var insertIntoBST = function (root, val) {
  const traversal = (curr) => {
    if (!curr) return;
    if (curr.val < val) {
      if (!curr.right) {
        const newNode = new TreeNode(val);
        curr.right = newNode;
      } else {
        traversal(curr.right);
      }
    } else {
      if (!curr.left) {
        const newNode = new TreeNode(val);
        curr.left = newNode;
      } else {
        traversal(curr.left);
      }
    }
  };

  if (!root) {
    const newNode = new TreeNode(val);
    return newNode;
  } else {
    traversal(root);
    return root;
  }
};