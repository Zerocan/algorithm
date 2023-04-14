/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const len = nums.length;
  if (len <= 1) {
    return true;
  }
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
    if (max < i) {
      return false;
    }
    const toIndex = i + nums[i];
    max = Math.max(max, toIndex);
    if (max >= len - 1) {
      return true;
    }
  }

  return false;
};

console.log(canJump([3,2,1,0,4]))