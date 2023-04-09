/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 自己解法
var permute = function (nums) {
  const res = [];
  const path = [];
  const backtracking = (arr) => {
    if (arr.length === 0) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      arr.splice(i, 1);
      backtracking([...arr]);
      const val = path.pop();
      arr.unshift(val);
    }
  };

  backtracking(nums);
  return res;
};

console.log(permute([1, 2, 3]));

// 代码随想录解法
var permute1 = function (nums) {
  const res = [];
  const path = [];
  const backtracking = (used) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      used[i] = 1;
      path.push(nums[i]);
      backtracking(used);
      used[i] = 0;
      path.pop();
    }
  };

  backtracking(new Array(nums.length).fill(0));
  return res;
};

console.log(permute1([1, 2, 3]));
