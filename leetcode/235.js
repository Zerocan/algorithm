/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // p：两者之间小的那个，q：两者之间大的那个
  if (p.val > q.val) {
    [p, q] = [q, p];
  }
  const traversal = (curr) => {
    if (!curr) return;
    const currVal = curr.val;
    if (currVal >= p.val && currVal <= q.val) {
      return curr;
    } else if (currVal > q.val) {
      return traversal(curr.left);
    } else {
      return traversal(curr.right);
    }
  };

  return traversal(root);
};