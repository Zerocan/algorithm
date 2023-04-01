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
var isSymmetric = function (root) {
  // 使用递归遍历左右子树 递归三部曲
  // 1. 确定递归的参数 root.left root.right和返回值true false
  const compare = (left, right) => {
    // 2. 确定终止条件 空的情况
    if ((!left && right) || (left && !right)) {
      return false;
    } else if (!left && !right) {
      return true;
    } else if (left.val !== right.val) {
      return false;
    } else {
      // 3. 确定单层递归逻辑
      const outSide = compare(left.left, right.right);
      const inSide = compare(left.right, right.left);
      return outSide && inSide;
    }
  };
  if (root === null) {
    return true;
  }
  return compare(root.left, root.right);
};

// 迭代
var isSymmetric1 = function (root) {
  if (!root) {
    return true;
  }

  const compare = (left, right) => {
    const queue = [];
    queue.push(left);
    queue.push(right);
    while (queue.length) {
      const l = queue.shift();
      const r = queue.shift();
      if (!l && !r) continue;
      if (!l || !r || l.val !== r.val) {
        return false;
      }
      queue.push(l.left);
      queue.push(r.right);
      queue.push(l.right);
      queue.push(r.left);
    }
    return true;
  };

  return compare(root.left, root.right);
};
