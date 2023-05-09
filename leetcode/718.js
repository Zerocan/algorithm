/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 动态规划
var findLength = function (nums1, nums2) {
  let res = 0;
  const dp = new Array(nums1.length + 1)
    .fill()
    .map(() => new Array(nums2.length + 1).fill(0));
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      if (dp[i][j] > res) {
        res = dp[i][j];
      }
    }
  }

  return res;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));

// 滑动窗口
var findLength1 = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let ret = 0;
  // nums2[0] 与 nums1[i]对齐
  for (let i = 0; i < m; i++) {
    let len = Math.min(n, m - i);
    if (len <= ret) break;
    ret = Math.max(ret, maxLength(nums1, nums2, i, 0, len));
  }

  // nums1[0] 与 nums2[i]对齐
  for (let i = 0; i < n; i++) {
    let len = Math.min(m, n - i);
    if (len <= ret) break;
    ret = Math.max(ret, maxLength(nums1, nums2, 0, i, len));
  }

  return ret;
};

function maxLength(nums1, nums2, add1, add2, len) {
  let ret = 0, k = 0;
  for (let i = 0; i < len; i++) {
    if (nums1[add1 + i] === nums2[add2 + i]) {
      k++
    } else {
      k = 0;
    }
    ret = Math.max(ret, k);
  }

  return ret;
}
