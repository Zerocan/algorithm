/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const res = [];
  const path = [];
  const backtracking = (startIndex) => {
    const pathLen = path.length;
    if (pathLen >= 2) {
      if (path[pathLen - 1] < path[pathLen - 2]) {
        return;
      } else {
        res.push([...path]);
      }
    }
    const set = new Set();
    for (let i = startIndex; i < nums.length; i++) {
      if (set.has(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      set.add(nums[i])
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return res;
};

console.log(findSubsequences([4, 7, 6, 7]));
