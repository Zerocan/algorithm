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
    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(1);
  return res;
};