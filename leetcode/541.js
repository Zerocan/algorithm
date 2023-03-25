/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split('');
  for (let i = 0; i <= Math.floor(s.length / k / 2); i++) {
    const start = 2 * i * k;
    const to = Math.min(start + k - 1, s.length - 1);
    reverseString(s, start, to);
  }

  return s.join('');
};

function reverseString(s, l, r) {
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++;
    r--;
  }
};

console.log(reverseStr("abcdefg", 2))