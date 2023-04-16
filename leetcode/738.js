/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = Array.from(String(n), Number);
  let flag = 0;
  do {
    flag = 0;
    for (let i = 0; i < n.length - 1; i++) {
      if (n[i] > n[i + 1]) {
        n[i] = n[i] - 1;
        const restLen = n.length - i - 1;
        const newRest = new Array(restLen).fill(9);
        n.splice(i + 1, restLen, ...newRest);
        flag = 1;
        break;
      }
    }
  } while (flag);

  return n.join('');
};

console.log(monotoneIncreasingDigits(10));

// 优化：从后往前遍历 不需要执行do while
var monotoneIncreasingDigits1 = function (n) {
  n = Array.from(String(n), Number);
  let flag;
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i] < n[i - 1]) {
      n[i - 1] = n[i - 1] - 1;
      flag = i;
    }
  }

  for (let i = flag; i < n.length; i++) {
    n[i] = 9
  }
  return n.join('');
};

console.log(monotoneIncreasingDigits1(15654372));
