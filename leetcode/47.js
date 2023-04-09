/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const res = [];
  const path = [];
  const backtracking = (used) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) || used[i]) {
        continue;
      }
      used[i] = 1;
      path.push(nums[i]);
      backtracking(used);
      used[i] = 0;
      path.pop();
    }
  };

  backtracking(new Array(nums.length).fill(0));
  return res;
};

console.log(permuteUnique([1, 2, 1]));