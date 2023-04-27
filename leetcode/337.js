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
 * @return {number}
 */
var rob = function(root) {
  const  postOrder = node => {
    if (!node) return [0, 0];
    const left = postOrder(node.left);
    const right = postOrder(node.right);

    // 不偷该节点
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    // 偷该节点
    const Do = node.val + left[0] + right[0];
    
    return [DoNot, Do];
  };
  const res = postOrder(root);
  return Math.max(res[0], res[1]);
};