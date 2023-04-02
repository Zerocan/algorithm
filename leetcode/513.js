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
var findBottomLeftValue = function (root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  let bottomLevel = [];
  while (queue.length) {
    let size = queue.length;
    bottomLevel = [];
    while (size--) {
      const node = queue.shift();
      bottomLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return bottomLevel[0];
};

// 递归
var findBottomLeftValue1 = function (root) {
  let maxDepth = -Infinity;
  let res;
  const traversal = (curr, depth) => {
    if (!curr.left && !curr.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        res = curr.val;
      }
      return;
    }
    if (curr.left) {
      traversal(curr.left, depth + 1);
    }
    if (curr.right) {
      traversal(curr.right, depth + 1);
    }
  };

  traversal(root, 0);
  return res;
};
