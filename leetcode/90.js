/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const path = [];
  nums = nums.sort((a, b) => a - b);
  const backtracking = (startIndex) => {
    res.push([...path]);
    for (let i = startIndex; i < nums.length; i++) {
      // 代码随想录解法 i > startIndex 用来控制同一层去重，而不会在枝上去重
      if (i > startIndex && nums[i - 1] === nums[i]) {
        continue;
      }
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
      // while (nums[i + 1] === nums[i]) {
      //   i++;
      // }
    }
  };

  backtracking(0);
  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
