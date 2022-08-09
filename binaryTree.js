/**
 * 搜索二叉树
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  insert(num) {
    const node = new Node(num);
    const insertNode = (node, newNode) => {
      if (newNode.value < node.value) {
        if (node.left) {
          insertNode(node.left, newNode);
        } else {
          node.left = newNode;
        }
      } else {
        if (node.right) {
          insertNode(node.right, newNode);
        } else {
          node.right = newNode;
        }
      }
    };
    if (this.root === null) {
      this.root = node;
    } else {
      insertNode(this.root, node);
    }
  }

  // 中序遍历
  inOrderTraverse() {
    let backs = [];
    const inOrder = (node) => {
      if (node !== null) {
        inOrder(node.left);
        backs.push(node.value);
        inOrder(node.right);
      }
    };
    inOrder(this.root);
    return backs;
  }

  // 前序遍历
  preOrderTraverse() {
    let backs = [];
    const preOrder = (node) => {
      if (node !== null) {
        backs.push(node.value);
        preOrder(node.left);
        preOrder(node.right);
      }
    };
    preOrder(this.root);
    return backs;
  }

  // 后序遍历
  postOrderTraverse() {
    let backs = [];
    const postOrder = (node) => {
      if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        backs.push(node.value);
      }
    }
    postOrder(this.root);
    return backs;
  }

  // 查找最小值
  min(node) {
    const minNode = (node) => {
      return node ? (node.left ? minNode(node.left) : node) : null;
    };
    return minNode(node || this.root);
  }

  // 查找最大值
  max(node) {
    const maxNode = (node) => {
      return node ? (node.right ? maxNode(node.right) : node) : null;
    }
    return maxNode(node || this.root);
  }

  // 查找特定值
  search(num) {
    const searchNode = (node) => {
      if (node === null) return false;
      if (node.value === num) return node;
      return searchNode(num < node.value ? node.left : node.right);
    };
    return searchNode(this.root);
  }

  // 从树中移除某个节点
  remove(num) {
    // 复杂之处在于每次删除节点时候二叉树要根据不同情况改变结构 同样也需要递归
    const removeNode = (node, num) => {
      if (node === null) return null;
      if (node.value === num) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        if (node.left !== null && node.right !== null) {
          const _node = this.min(node.right);
          node.value = _node.value;
          node.right = removeNode(node.right, _node.value);
          return node;
        }
      } else if (node.value < num) {
        node.right = removeNode(node.right, num);
        return node;
      } else {
        node.left = removeNode(node.left, num);
        return node;
      }
    };
    return removeNode(this.root, num);
  }

  // insert(num) {
  //   const node = new Node(num);
  //   if (this.root === null) {
  //     this.root = node;
  //     return;
  //   }
  //   let prent = this.getPrev(num);
  //   if (num.value < prent.value) {
  //     prent.left = node;
  //   } else {
  //     prent.right = node;
  //   }
  // }

  // remove(num) {
  //   let point = this.root;
  //   let prent = null;
  //   let tree = this;

  //   let res = null;
  //   while(true) {
  //     if (point.left) {
  //       if (num < point.left.value || point.value) {
  //         prent = point;
  //         point = point.left;
  //         continue;
  //       }
  //     }
  //     if (point.right) {
  //       if (num >= point.right.value || num >= point.value) {

  //       }
  //     }
  //   }
  // }
}

const tree = new SearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);                                          
tree.insert(18);
tree.insert(25);
console.log("中序：", tree.inOrderTraverse());
console.log("前序：", tree.preOrderTraverse());
console.log("后序：", tree.postOrderTraverse());
console.log("最小值：", tree.min());
console.log("最大值：", tree.max());
console.log(tree.search(20));
console.log(tree.remove(7))
console.log("中序：", tree.inOrderTraverse());