/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力
var subarraySum = function (nums, k) {
  const len = nums.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

// 前缀和 + 哈希表优化
var subarraySum1 = function (nums, k) {
  const map = new Map();
  map.set(0, 1);
  let pre = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    count += map.get(pre - k) || 0;
    map.set(pre, (map.get(pre) || 0) + 1);
  }

  return count;
};

console.log(subarraySum1([1,2,3], 3))
