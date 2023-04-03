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
 * @return {boolean}
 */


// 中序遍历 结果数组是有序的
var isValidBST = function (root) {
  const res = [];
  const traversal = (curr) => {
    if (!curr) return;
    traversal(curr.left);
    res.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);
  return isSorted(res);
};

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i-1]) {
      return false;
    }
  }
  return true;
}

// 双指针 实现 数组遍历
var isValidBST1 = function (root) {
  let pre = null;
  const isValid = (curr) => {
    if (!curr) return true;
    const leftValid = isValid(curr.left);
    if (pre !== null && curr.val <= pre) {
      return false;
    }
    pre = curr.val;
    const rightValid = isValid(curr.right);
    return leftValid && rightValid;
  }

  return isValid(root);
};