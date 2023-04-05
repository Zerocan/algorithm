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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  let pre = null;
  const traversal = (curr, isRight) => {
    if (!curr) return root;
    if (curr.val < key) {
      pre = curr;
      traversal(curr.right, true);
    } else if (curr.val > key) {
      pre = curr;
      traversal(curr.left, false);
    } else {
      // 非根节点
      if (pre) {
        // 左右均为空
        if (!curr.left && !curr.right) {
          if (isRight) {
            pre.right = null;
          } else {
            pre.left = null;
          }
        } else if (curr.left && !curr.right) {
          // 左不为空，右为空
          if (isRight) {
            pre.right = curr.left;
          } else {
            pre.left = curr.left;
          }
        } else if (!curr.left && curr.right) {
          // 左为空，右不为空
          if (isRight) {
            pre.right = curr.right;
          } else {
            pre.left = curr.right;
          }
        } else {
          // 左右均不为空
          const moveNode = curr.right;
          const moveNodeLeft = moveNode.left;
          let splitNode = curr.left;
          while (splitNode.right) {
            splitNode = splitNode.right;
          }
          splitNode.right = moveNodeLeft;
          moveNode.left = curr.left;
          if (isRight) {
            pre.right = moveNode;
          } else {
            pre.left = moveNode;
          }
        }
      } else {
        // 左右均为空
        if (!curr.left && !curr.right) {
          root = null;
        } else if (curr.left && !curr.right) {
          // 左不为空，右为空
          root = curr.left;
        } else if (!curr.left && curr.right) {
          // 左为空，右不为空
          root = curr.right;
        } else {
          // 左右均不为空
          const moveNode = curr.right;
          const moveNodeLeft = moveNode.left;
          let splitNode = curr.left;
          while (splitNode.right) {
            splitNode = splitNode.right;
          }
          splitNode.right = moveNodeLeft;
          moveNode.left = curr.left;
          root = moveNode;
        }
      }
    }
  };

  traversal(root, false);
  return root;
};

// 代码优化
var deleteNode1 = function (root, key) {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else {
    // 场景1: 该节点是叶节点
    if (!root.left && !root.right) {
      return null;
    }

    // 场景2: 有一个孩子节点不存在
    if (root.left && !root.right) {
      return root.left;
    } else if (root.right && !root.left) {
      return root.right;
    }

    // 场景3: 左右节点都存在
    const rightNode = root.right;
    let splitNode = root.left;
    while (splitNode.right) {
      splitNode = splitNode.right;
    }
    splitNode = root.right.left;
    rightNode.left = root.left;
    return rightNode;

    // 场景3度另一个处理方法：将右子树的最小值移动到删除节点
    // const rightNode = root.right;
    // // 获取最小值节点
    // const minNode = getMinNode(rightNode);
    // // 将待删除节点的值替换为最小值节点值
    // root.val = minNode.val;
    // // 删除最小值节点
    // root.right = deleteNode(root.right, minNode.val);
    // return root;
  }
};

function getMinNode(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}
