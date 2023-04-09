/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  const path = [];
  candidates = candidates.sort((a, b) => a - b);
  const backtracking = (sum, startIndex) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length;i++) {
      path.push(candidates[i]);
      backtracking(sum + candidates[i], i + 1);
      path.pop();
      // 去重
      while(candidates[i + 1] === candidates[i]) {
        i++;
      }
    }
  };
  backtracking(0, 0);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
