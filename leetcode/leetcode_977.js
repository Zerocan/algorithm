var sortedSquares = function (nums) {
  nums.sort((a, b) => {
    return Math.abs(a) - Math.abs(b);
  });

  const res = nums.map((item) => Math.pow(item, 2));
  return res;
};

// 双指针法
var sortedSquares1 = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  const res = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const lowSquare = Math.pow(nums[low], 2);
    const highSquare = Math.pow(nums[high], 2);
    if (lowSquare >= highSquare) {
      res[i] = lowSquare;
      low++;
    } else {
      res[i] = highSquare;
      high--;
    }
  }

  return res;
};

console.log(sortedSquares1([-4, -1, 0, 3, 10]));
