/**
 * @param {number} n
 * @return {boolean}
 */
// Set 判断是否重复
var isHappy = function(n) {
  const set = new Set();
  while (true) {
    if (set.has(n)) return false;
    if (n === 1) return true;
    set.add(n);
    n = powSum(n);
  }
};

function powSum(num) {
  let sum = 0;
  const str = num.toString();
  for(let i = 0; i < str.length; i++) {
    sum += Number(str[i]) * Number(str[i])
  }

  return sum;
}

console.log(isHappy(2))

// 快慢指针
// 如果没有循环，快指针会比慢指针先到达1，若存在循环，快慢指针会重合（相等）
var isHappy1 = function (n) {
  if (powSum(n) === 1) {
    return true;
  }

  let slow = powSum(n);
  let fast = powSum(powSum(n));
  while (true) {
    if (fast === 1) return true;
    if (fast === slow) return false;
    slow = powSum(slow);
    fast = powSum(powSum(fast));
  }
};

console.log(isHappy1(19))