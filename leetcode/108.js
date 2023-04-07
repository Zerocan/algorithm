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
var sortedArrayToBST = function (nums) {
  const len = nums.length;
  const build = (low, high) => {
    if (low > high) return null;
    const mid = Math.floor((high + low) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = build(low, mid - 1);
    root.right = build(mid + 1, high);
    return root;
  };

  return build(0, len - 1);
};