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
// 自己的思路 没通过
var minCameraCover = function (root) {
  let res = 0;
  const travesal = (curr) => {
    if (!curr.left && !curr.right) {
      return;
    }
    if (curr.left) {
      travesal(curr.left);
    }
    if (curr.right) {
      travesal(curr.right);
    }
    if ((curr.left && curr.left.val === 0) || (curr.right && curr.right.val === 0)) {
      res++;
      curr.val = 1;
      return;
    }
  }
  if (!root.left && !root.right) {
    return 1;
  }
  travesal(root);
  return res;
};

// 代码随想录 贪心算法
// 0:无覆盖 1:有摄像头 2:有覆盖
var minCameraCover1 = function (root) {
  let res = 0;
  const travesal = (curr) => {
    if (!curr) return 2;
    const left = travesal(curr.left);
    const right = travesal(curr.right);

    // 第一种情况：左右孩子都有覆盖
    if (left === 2 && right === 2) {
      return 0;
    }
    
    // 第二种情况：左右孩子至少有一个无覆盖
    if (left === 0 || right === 0) {
      res++;
      return 1;
    }

    // 第三种情况：左右孩子至少有一个有摄像头
    if (left === 1 || right === 1) {
      return 2;
    }
  };

  const status = travesal(root);
  if (status === 0) {
    res++;
  }

  return res;
}