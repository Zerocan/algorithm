/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candys = new Array(ratings.length).fill(1);

  // 右边孩子比左边大
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    }
  }

  // 左边孩子比右边大
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candys[i], candys[i + 1] + 1);
    }
  }

  return candys.reduce((a, b) => a + b);
};

console.log(candy([1,0,2]));

