/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let p = g.length - 1;
  let q = s.length - 1;
  let count = 0;
  while (p >= 0 && q >= 0) {
    if (s[q] >= g[p]) {
      count++;
      q--;
      p--;
    } else {
      p--;
    }
  }

  return count;
};