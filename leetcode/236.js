/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 前序遍历 栈溢出 unsuccess
var lowestCommonAncestor = function (root, p, q) {
  let pParents = [];
  let qParents = [];
  const traversal = (curr, parents) => {
    if (pParents.length && qParents.length) {
      return;
    }
    if (!curr) return;
    parents.push(curr);
    if (curr.val === p.val) {
      pParents = parents;
    }
    if (curr.val === q.val) {
      qParents = parents;
    }
    traversal(curr.left, [...parents]);
    traversal(curr.right, [...parents]);
  };

  traversal(root, []);
  const res = theSame(pParents, qParents);
  if (res.length) {
    return res[res.length - 1];
  }
  return null;
};

function theSame(arr1, arr2) {
  const set2 = new Set(arr2);
  const res = arr1.filter((item) => set2.has(item));
  return res;
}

var lowestCommonAncestor1 = function (root, p, q) {
  // 使用递归的方法
  // 需要从下到上，所以使用后序遍历
  // 1. 确定递归的函数
  const traversal = function (root) {
    // 确定终止条件
    if (!root || root === p || root === q) {
      return root;
    }
    const left = traversal(root.left);
    const right = traversal(root.right);
    if (left && right) return root;
    if (left && !right) return left;
    if (!left && right) return right;
    return null;
  };
  return traversal(root, p, q);
};

// 存储父节点
var lowestCommonAncestor2 = function (root, p, q) {
  const parentsMap = new Map();
  const visited = new Set();
  const traversal = (curr) => {
    if (curr.left) {
      parentsMap.set(curr.left.val, curr);
      traversal(curr.left);
    }
    if (curr.right) {
      parentsMap.set(curr.right.val, curr);
      traversal(curr.right);
    }
  };
  traversal(root);

  // 找到p的所有祖先节
  while (!!p) {
    visited.add(p.val);
    p = parentsMap.get(p.val);
  }

  while(!!q) {
    if (visited.has(q.val)) {
      return q;
    }
    q = parentsMap.get(q.val);
  }

  return null;
};