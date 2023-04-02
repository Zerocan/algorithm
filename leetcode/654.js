/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const traversal = (arr) => {
    if (!arr.length) return null;
    const index = getArrIndexForMaxNum(arr);
    const node = new TreeNode(arr[index]);
    node.left = traversal(arr.slice(0, index));
    node.right = traversal(arr.slice(index + 1));

    return node;
  }

  return traversal(nums);
};

function getArrIndexForMaxNum (arr) {
  let maxNum = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}