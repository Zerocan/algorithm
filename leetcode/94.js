// 二叉树中序遍历
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
var inorderTraversal = function(root) {
  const res = [];
  traversal(root, res);
  return res;
};

const traversal = (curr, res) => {
  if (curr === null) {
    return;
  }
  traversal(curr.left, res);
  res.push(curr.val);
  traversal(curr.right, res);
}

// 非递归 栈实现
var inorderTraversal1 = function(root) {
 const res = [];
 const stack = [];
 let curr = root;
 while (curr || stack.length) {
  if (curr !== null) {
    stack.push(curr);
    curr = curr.left;
  } else {
    const node = stack.pop();
    res.push(node.val);
    curr = node.right;
  }
 }

 return res;
};

// 前中后统一迭代法
// 中序遍历：左中右
// 压栈顺序：右中左
var inorderTraversal2 = function(root) {
  const res = [];
  const stack = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    while (stack.length) {
      const node = stack.pop();
      if (!node) {
        res.push(stack.pop().val);
        continue;
      } else {
        if (node.right) {
          stack.push(node.right);
        }
        stack.push(node);
        stack.push(null);
        if (node.left) {
          stack.push(node.left);
        }
      }
    }
  }

  return res;
}