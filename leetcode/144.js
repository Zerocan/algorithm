// 二叉树前序遍历
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
var preorderTraversal = function (root) {
  const res = [];
  traversal(root, res);
  return res;
};

const traversal = (curr, res) => {
  if (curr === null) {
    return;
  }
  res.push(curr.val);
  traversal(curr.left, res);
  traversal(curr.right, res);
};

// 非递归 栈实现
var preorderTraversal1 = function (root) {
  const res = [];
  const stack = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    if (node !== null) {
      res.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }

  return res;
};

// 前中后统一迭代法
// 中序遍历：左中右
// 压栈顺序：右中左
var preorderTraversal2 = function (root) {
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
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
      stack.push(node);
      stack.push(null);
    }
  }

  return res;
};
