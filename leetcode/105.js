/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const build = (preArr, inArr) => {
    if (!preArr.length) return null;
    const currVal = preArr.shift();
    const node = new TreeNode(currVal);
    const index = inArr.indexOf(currVal);
    node.left = build(preArr.slice(0, index), inArr.slice(0, index));
    node.right = build(preArr.slice(index), inArr.slice(index + 1));

    return node;
  }

  return build(preorder, inorder);
};