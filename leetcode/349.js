/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const res = [];
  for (let i = 0; i < nums2.length; i++) {
    const currNum = nums2[i];
    if (nums1.includes(currNum) && !res.includes(currNum)) {
      res.push(currNum);
    }
  }

  return res;
};
console.log(intersection([1,2,2,1], [2,2]))

// Set
var intersection2 = function(nums1, nums2) {
  if (nums1.length < nums2.length) {
    const _ = nums1;
    num1 = nums2;
    num2 = _;
  }

  const nums1Set = new Set(nums1);
  const resSet = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      resSet.add(nums2[i])
    }
  }

  return [...resSet];
}