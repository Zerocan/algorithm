/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const bulid = (inArr, postArr) => {
    const node = new TreeNode();
    node.val = postArr[postArr.length - 1]
    postArr.pop();
    const index = inArr.indexOf(node.val)
    if (index > -1) {
      const leftInArr = index > 1 ? inArr.slice(0, index - 1) : [];
      const rightInArr = inArr.slice(index + 1);
      // 优化，基于左中序数组的长度可以拿到左后序数组
      // const leftPostArr = postArr.filter(item => leftInArr.includes(item));
      // const rightPostArr = postArr.filter(item => rightInArr.includes(item));
      const leftInArrLen = leftInArr.length;
      const rightArrLen = rightInArr.length;
      const leftPostArr = leftInArrLen ? postArr.slice(0, leftInArrLen) : [];
      const rightPostArr = postArr.slice(leftInArrLen, leftInArrLen + rightArrLen);
      node.left = leftInArr.length && leftPostArr ? bulid(leftInArr, leftPostArr) : null;
      node.right = rightInArr.length && rightPostArr ? bulid(rightInArr, rightPostArr) : null;
    }

    return node
  };

  return bulid(inorder, postorder);
};