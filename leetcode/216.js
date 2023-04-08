/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  let path = [];
  const backtracking = (startIndex) => {
    const sum = path.length ? path.reduce((a, b) => a + b) : 0;
    if (sum > n) return;
    if (path.length === k) {
      if (sum === n) {
        res.push([...path]);
      }
      return;
    }

    // for (let i = startIndex; i <= 9; i++) {
    // 剪枝
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(1);
  return res;
};
