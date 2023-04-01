/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  const queue = [];
  if (root) {
    queue.push(root);
  }
  while (queue.length) {
    const currRes = [];
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      currRes.push(node.val);
      if (node.children) {
        node.children.forEach(child => {
          queue.push(child);
        });
      }
    }
    res.push(currRes);
  }

  return res;
};