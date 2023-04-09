/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 自己的解法
var subsets = function(nums) {
  const res = [[]];

  const backtracking = (startIndex, path) => {
    if (startIndex > nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      res.push([...path]);
      backtracking(i + 1, [...path]);
      path.pop();
    }
  };

  backtracking(0, []);
  return res;
};

console.log(subsets([1,2,3]))

// 代码随想录解法
var subsets1 = function(nums) {
  const res= [];
  const path = [];
  const backtracking = (startIndex) => {
    res.push([...path]);
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return res;
};

console.log(subsets1([1,2,3]))