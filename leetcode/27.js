var removeElement = function (nums, val) {
  let low = 0;
  let high = nums.length - 1;
  let res = nums.length;
  while (low <= high) {
    if (nums[low] === val) {
      res--;
      nums[low] = nums[high];
      nums[high] = 3;
      high--;
    } else {
      low++;
    }
  }
  return res;
};

var removeElement1 = function (nums, val) {
  let slow = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[slow] = nums[i];
      slow++;
    }
  }

  return slow;
}

console.log(removeElement1([3, 2, 2, 3], 3));
