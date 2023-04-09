/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const path = [];
  const backtracking = (sum) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path].sort((a, b) => a - b));
      return;
    }

    for (let i = 0; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtracking(sum + candidates[i]);
      path.pop();
    }
  };
  backtracking(0);
  return unique(res);
};

const unique = (arr) => {
  const set = new Set();
  arr.forEach((subArr) => {
    set.add(JSON.stringify(subArr));
  });
  const result = [];
  set.forEach((str) => {
    result.push(JSON.parse(str));
  });
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));

// 优化
var combinationSum1 = function (candidates, target) {
  const res = [];
  const path = [];
  const backtracking = (sum, startIndex) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtracking(sum + candidates[i], i);
      path.pop();
    }
  };
  backtracking(0, 0);
  return res;
};
