/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const len = nums2.length;
  const res = new Array(len).fill(-1);
  const stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }

  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const idx = nums2.indexOf(nums1[i]);
    result.push(res[idx] === -1 ? -1 : nums2[idx + res[idx]]);
  }

  return result;
};

console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));

// 使用map
var nextGreaterElement1 = function (nums1, nums2) {
  const len = nums2.length;
  const stack = [];
  const map = new Map();

  for (let i = 0; i < len; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const idx = stack.pop();
      map.set(nums2[idx], nums2[i]);
    }
    stack.push(i);
  }

  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i]) || -1;
  }

  return res;
};
