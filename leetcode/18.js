/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    const currNum1 = nums[i];
    // 去重i
    if (i > 0 && currNum1 == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      const currNum2 = nums[j];
      // 去重j
      if (j - 1 > i && currNum2 == nums[j - 1]) continue;
      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum + nums[i] + nums[j] > target) {
          r--;
        } else if (sum + nums[i] + nums[j] < target) {
          l++;
        } else {
          res.push([currNum1, currNum2, nums[l], nums[r]]);
          while (l < r && nums[l] == nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r - 1] === nums[r]) {
            r--;
          }
          l++;
          r--;
        }
      }
    }
  }

  return res;
};

console.log(fourSum([-3,-1,0,2,4,5], 0));
