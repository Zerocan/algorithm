/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;
  let prev1 = 1, prev2 = 2;
  for (let i = 3; i <= n; i++) {
    const cur = prev1 + prev2;
    prev1 = prev2;
    prev2 = cur;
  }

  return prev2;
};

console.log(climbStairs(4))