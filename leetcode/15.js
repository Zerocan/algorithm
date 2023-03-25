/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 解法1
var threeSum = function (nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; ) {
    const curr = nums[i];
    if (curr > 0) return res
    const currTarget = -curr;
    const currNums = nums.slice(i + 1);
    let currRes = getForTarget(currNums, currTarget);
    if (currRes.length) {

      res.push(
        ...currRes.map((item) => {
          return [curr, ...item];
        })
      );
    }
    while (nums[i] === curr) {
      i++;
    }
  }

  return res;
};

function getForTarget(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  const res = [];
  while (low < high) {
    const sum = nums[low] + nums[high];
    const currLow = nums[low];
    const currHigh = nums[high];
    if (sum < target) {
      while (nums[low] === currLow) {
        low++;
      }
    } else if (sum > target) {
      while (nums[high] === currHigh) {
        high--;
      }
    } else {
      res.push([nums[low], nums[high]]);
      while (nums[low] === currLow) {
        low++;
      }
      while (nums[high] === currHigh) {
        high--;
      }
    }
  }

  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// 解法1空间复杂度太高
var threeSum1 = function (nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    const currNum = nums[i];
    if (currNum > 0) return res;
    // 去重
    if (currNum == nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum > -currNum) {
        r--
      } else if (sum < -currNum) {
        l++
      } else {
        res.push([currNum, nums[l], nums[r]]);
        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r - 1] === nums[r]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return res;
};

console.log(threeSum1([1,-1,-1,0]));