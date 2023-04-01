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
// 层序遍历 时间复杂度O(n)
var countNodes = function(root) {
  let count = 0;
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const node = queue.shift();
    count++;
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return count;
};

// 基于完全二叉树的特性
var countNodes1 = function(root) {
  if (!root) {
    return 0;
  }
  let left = root.left;
  let right = root.right;
  let leftDepth = 0;
  let rightDepth = 0;
  // 满二叉树
  while (left) {
    left = left.left;
    leftDepth++;
  }
  while (right) {
    right = right.right;
    rightDepth++;
  }
  if (rightDepth === leftDepth) {
    return 2**(leftDepth + 1) - 1;
  }
  const leftCounts = countNodes1(root.left);
  const rightCounts = countNodes1(root.right);
  return leftCounts + rightCounts + 1;
};