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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const paths = [];
  const traversal = (node, cnt, path) => {
    path.push(node.val);
    // 遇到叶子节点，并且计数为0
    if (!node.left && !node.right && cnt === 0) {
      paths.push(path);
      return;
    }
    // 遇到叶子节点，并且计数不为0
    if (!node.left && !node.right) return;
    if (node.left) {
      traversal(node.left, cnt - node.left.val, [...path])
    }
    if (node.right) {
      traversal(node.right, cnt - node.right.val, [...path])
    }
  };
  if (root) {
    traversal(root, targetSum - root.val, []);
  }
  return paths;
};

// 显式回溯
var pathSum1 = function (root, targetSum) {
  const paths = [];
  const traversal = (node, cnt, path) => {
    // 遇到叶子节点，并且计数为0
    if (!node.left && !node.right && cnt === 0) {
      paths.push([...path]);
      return;
    }
    // 遇到叶子节点，并且计数不为0
    if (!node.left && !node.right) return;
    if (node.left) {
      path.push(node.left.val);
      traversal(node.left, cnt - node.left.val, path)
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      traversal(node.right, cnt - node.right.val, path)
      path.pop();
    }
  };
  if (root) {
    traversal(root, targetSum - root.val, [root.val]);
  }
  return paths;
};