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
// 层序遍历
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  const queue = [];
  if (root) {
    queue.push([root, false]);
  }
  while (queue.length) {
    const [node, isLeft] = queue.shift();
    if (isLeft && !node.left && !node.right) {
      sum += node.val;
    }
    if (node.left) {
      queue.push([node.left, true]);
    }
    if (node.right) {
      queue.push([node.right, false]);
    }
  }

  return sum;
};

// 递归法
var sumOfLeftLeaves1 = function(root) {
  const nodeSum = (curr) => {
    if (!curr) {
      return 0;
    }
    const leftValue = nodeSum(curr.left);
    const rightValue = nodeSum(curr.right);
    let midValue = 0;
    if (curr.left && !curr.left.left && !curr.left.right) {
      midValue = curr.left.val;
    }

    let sum = midValue + leftValue + rightValue;
    return sum;
  }

  return nodeSum(root);
};