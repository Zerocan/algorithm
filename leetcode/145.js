// 二叉树后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
};

const traversal = (curr, res) => {
  if (curr === null) {
    return;
  }
  traversal(curr.left, res);
  traversal(curr.right, res);
  res.push(curr.val);
}

// 非递归 栈实现 
// 左右中 = 中右左.reverse()
var postorderTraversal1 = function(root) {
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (node !== null) {
      res.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return res.reverse();
};

// 前中后统一迭代法
// 后序遍历：左右中
// 压栈顺序：中右左
var postorderTraversal2 = function(root) {
  const res = [];
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    } else {
      stack.push(node);
      stack.push(null);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  return res;
};