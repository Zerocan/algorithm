/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 双层for循环
var dailyTemperatures = function (temperatures) {
  const res = [];
  for (let i = 0; i < temperatures.length; i++) {
    let flag = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        flag = 1;
        res.push(j - i);
        break;
      }
    }
    if (!flag) {
      res.push(0);
    }
  }

  return res;
};

// 单调栈
var dailyTemperatures1 = function (temperatures) {
  const len = temperatures.length;
  if (len === 0) return [];
  const res = new Array(len).fill(0); // 避免最后再循环一次填充0
  const stack = [];
  // 注意：这里使用shift和unshift会超出时间限制，使用pop更高效
  for (let i = 0; i < len; i++) {
    while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop()
      res[idx] = i - idx;
    }
    stack.push(i);
  }

  return res;
};

console.log(dailyTemperatures1([73,74,75,71,69,72,76,73]))
