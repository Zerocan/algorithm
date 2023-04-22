/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const getZeroAndOneNum = (str) => {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      zero++;
    } else {
      one++;
    }
  }
  return [zero, one];
};

var findMaxForm = function (strs, m, n) {
  const len = strs.length;
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  console.log(dp);

  for (let i = 0; i < len; i++) {
    const [zero, one] = getZeroAndOneNum(strs[i]);
    for (let j = m; j >= zero; j--) {
      for (let k = n; k >= one; k--) {
        dp[j][k] = Math.max(dp[j - zero][k - one] + 1, dp[j][k]);
      }
    }
  }

  return dp[m][n];
};

findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3);
