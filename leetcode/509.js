/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  const res = [0, 1];
  for (i = 2; i <= n; i++) {
    const num = res[i-1] + res[i-2];
    res.push(num);
  }

  return res[n];
};

console.log(fib(3));

// 优化：不需要使用数组维护，减少空间复杂度
var fib1 = function(n) {
  if (n <= 1) return n;
  let prev1 = 0, prev2 = 1;
  for (let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev1 = prev2;
    prev2 = curr;
  }
  return prev2;
};

console.log(fib1(3));
