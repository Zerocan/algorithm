var minSubArrayLen = function(target, nums) {
  let res = Infinity;
  let sum = 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      res = Math.min(j - i + 1, res);
      sum -= nums[i];
      i++;
    }
  }

  return res === Infinity ? 0 : res;
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));