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
 * @return {TreeNode}
 */
// 层序遍历
var invertTree = function(root) {
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return root;
};

// 递归 前序遍历
var invertTree1 = function(root) {
  if (!root) {
    return root;
  }
  [root.left, root,right] = [root.right, root.left];
  invertTree1(root.left);
  invertTree1(root.right);

  return root;
};