/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  const left = s.slice(0, n);
  const right = s.slice(n);
  return [...right, ...left].join('');
};

console.log(reverseLeftWords('abcdefg', 2));

// 不申请额外空间
// 1.反转区间为前n的子串
// 2.反转区间为n到末尾的子串
// 3.反转整个字符串
var reverseLeftWords1 = function(s, n) {
  const sArr = Array.from(s);
  reverse(sArr, 0, n - 1);
  reverse(sArr, n, sArr.length - 1);
  reverse(sArr, 0, sArr.length - 1);
  return sArr.join('');
};


// 翻转
function reverse(strArr, start, end) {
  let l = start, r = end;
  while (l < r) {
    [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
    l++;
    r--;
  }
}

console.log(reverseLeftWords1('abcdefg', 2));