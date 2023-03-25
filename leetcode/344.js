/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 库函数
var reverseString = function(s) {
  return s.reverse();
};

console.log('reverseString', reverseString(["h","e","l","l","o"]))

var reverseString1 = function(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    // const temp = s[l];
    // s[l] = s[r];
    // s[r] = temp;
    l++;
    r--;
  }

  return s;
};

console.log('reverseString1', reverseString1(["h","e","l","l","o"]))