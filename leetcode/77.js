/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  let path = [];
  const backtracking = (startIndex) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    // 原先为 i <= n 剪枝优化后 i <= n - (k - path.length) + 1
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(1);
  return res;
};
