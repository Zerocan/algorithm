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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  const sumArr = [];
  const pathSum = (curr, sum) => {
    sum += curr.val;
    if (!curr.left && !curr.right) {
      sumArr.push(sum);
      return;
    }
    if (curr.left) {
      pathSum(curr.left, sum);
    }
    if (curr.right) {
      pathSum(curr.right, sum);
    }
  };
  if (root) {
    pathSum(root, 0);
  }
  return sumArr.includes(targetSum);
};

// 及时返回
var hasPathSum1 = function (root, targetSum) {
  const traversal = (node, cnt) => {
    // 遇到叶子节点，并且计数为0
    if (!node.left && !node.right && cnt === 0) return true;
    // 遇到叶子节点，并且计数不为0
    if (!node.left && !node.right && cnt === 0) return false;
    if (node.left && traversal(node.left, cnt - node.left.val)) {
      return true;
    }
    if (node.right && traversal(node.right, cnt - node.right.val)) {
      return true;
    }
    return false;
  };
  if (!root) return false;
  return traversal(root, targetSum - root.val);
};
