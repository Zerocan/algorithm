// 回溯 超出时间限制
var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  const used = new Array(nums.length).fill(false);
  const results = [];
  let path = [];
  let sum = undefined;
  var backtracking = (startIndex) => {
    if (sum === 0 && path.length === 3) {
      results.push([...path]);
      return;
    } else if (path.length === 3) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      const cur = nums[i];
      if ((i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) || (sum > 0 && nums[i] > 0)) {
        continue;
      }
      path.push(cur);
      sum = (sum || 0) +  cur;
      used[i] = true;
      backtracking(i + 1);
      path.pop();
      sum -= cur;
      used[i] = false;
    }
  };
  backtracking(0);
  return results;
};


// console.log(threeSum([0,0,0]));

// 双指针法
var threeSumPoint = function (nums) {
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (nums[i] === nums[i - 1] && i > 0) {
      continue
    }
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return res;
}

console.log(threeSumPoint([-2,0,0,2,2]));
