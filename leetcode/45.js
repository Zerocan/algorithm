/**
 * @param {number[]} nums
 * @return {number}
 */
// 自己的思路
var jump = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  let stepNum = 1;
  let toIndex = nums[0];
  let startIndex = 0;
  while (toIndex < len - 1) {
    [toIndex, startIndex] = maxStep(nums, startIndex);
    stepNum++;
  }

  return stepNum;
};

function maxStep(nums, startIndex) {
  let max = 0;
  let maxIndex = startIndex;
  for (let i = 1; i <= nums[startIndex]; i++) {
    const currStep = i + nums[startIndex + i];
    if (currStep > max) {
      max = currStep;
      maxIndex = startIndex + i;
    }
  }

  return [max + startIndex, maxIndex];
}

console.log(jump([2, 3, 1, 1, 4]));

// 代码随想录
var jump1 = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let stepNum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(i + nums[i], nextIndex);
    if (curIndex === i) {
      stepNum++;
      curIndex = nextIndex;
      if (curIndex >= nums.length - 1) {
        break;
      }
    }
  }
  return stepNum;
};

console.log(jump1([2,3,1,1,4]))
