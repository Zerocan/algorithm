/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];
    nums[i] = null;
    const restNum = target - num;
    if (!nums.includes(restNum)) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === restNum) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum([0, 4, 3, 0], 0));

// 哈希表 降低时间复杂度至O(n)
var twoSum1 = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const restNum = target - nums[i];
    if (map.has(restNum)) {
      return [map.get(restNum), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum1([3, 2, 4], 6));
