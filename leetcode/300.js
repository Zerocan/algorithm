/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.sort((a, b) => a - b)[len - 1];
};

lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);

// 贪心 + 二分
var lengthOfLIS1 = function (nums) {
  const len = nums.length;
  const tails = [];
  tails[0] = nums[0];
  for (let i = 1; i < len; i++) {
    const tailLen = tails.length;
    if (nums[i] > tails[tailLen - 1]) {
      tails.push(nums[i]);
    } else {
      let high = tailLen - 1,
        low = 0;
      while (low < high) {
        const mid = Math.floor((high + low) / 2);
        if (tails[mid] < nums[i]) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      tails[low] = nums[i];
    }
  }

  return tails.length;
};

console.log(lengthOfLIS1([1, 3, 6, 7, 9, 4, 10, 5, 6]));
