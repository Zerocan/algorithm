/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).indexOf(s, 1) !== s.length;
};

// KMP
var repeatedSubstringPattern1 = function (s) {
  if (s.length === 0) return false;
  const next = getNext(s);
  if (next[next.length - 1] !== 0 && s.length % (s.length - next[next.length - 1]) === 0) {
    return true;
  }
  return false;
};
// 求next数组
const getNext = (needle) => {
  let next = [];
  let j = 0;
  next[0] = 0;

  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }

  return next;
};
