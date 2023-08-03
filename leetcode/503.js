/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 拼接一个相同数组
var nextGreaterElements = function(nums) {
  const newNums = nums.concat(nums);
  const len = newNums.length;
  if (len === 0) return [];
  const res = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < len; i++) {
    while(stack.length && newNums[i] > newNums[stack[stack.length - 1]]) {
      const idx = stack.pop()
      res[idx] = newNums[i];
    }
    stack.push(i);
  }

  return res.slice(0, len / 2 );
};

// 取模
var nextGreaterElements1 = function(nums) {
  const len = nums.length;
  if (len === 0) return [];
  const res = new Array(len).fill(-1);
  const stack = [];
  for (let i = 0; i < len * 2; i++) {
    while(stack.length && nums[i % len] > nums[stack[(stack.length - 1)] % len]) {
      const idx = stack.pop()
      res[idx % len] = nums[i % len];
    }
    stack.push(i);
  }

  return res;
};

console.log(nextGreaterElements1([2,7,5,6]))