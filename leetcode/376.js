/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己解法 贪心算法
var wiggleMaxLength = function (nums) {
  if (nums.length === 1) {
    return 1;
  }
  let res = [nums[0]];
  let p = 1;
  while (p < nums.length) {
    if (nums[p] === nums[0]) {
      p++;
    } else {
      break;
    }
  }
  if (p >= nums.length) {
    return res.length;
  }
  let flag;
  if (nums[p] > nums[0]) {
    flag = 1;
  } else {
    flag = -1;
  }
  while (p + 1 < nums.length) {
    if ((nums[p + 1] - nums[p]) * flag >= 0) {
      p++;
    } else {
      res.push(nums[p]);
      p++;
      flag = -flag;
    }
  }

  if ((nums[p] - res[res.length - 1]) * flag > 0) {
    res.push(nums[p]);
  }

  return res.length;
};

console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 官方 贪心算法
var wiggleMaxLength1 = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  let prevdiff = nums[1] - nums[0];
  let ret = prevdiff !== 0 ? 2 : 1;
  for (let i = 2; i < n; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
      ret++;
      prevdiff = diff;
    } 
  }

  return ret;
};
