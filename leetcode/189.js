/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 空间复杂度：O(n)
var rotate = function (nums, k) {
  if (k === 0) return;
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res[(i + k) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = res[i];
  }
};

// 空间复杂度：O(2) 但时间复杂度急速上升
var rotate1 = function (nums, k) {
  if (k === 0) return;
  const len = nums.length;
  let count = 1;
  while (count <= k) {
    let tmp = nums[0];
    for (let i = 0; i < len - 1; i++) {
      const next = nums[i + 1];
      nums[i + 1] = tmp;
      tmp = next;
    }
    nums[0] = tmp;
    count++;
  }

  return nums;
};

console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));

// 翻转数组
const reverse = (nums, start, end) => {
  while (start < end) {
    let tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
};

var rotate3 = function (nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
