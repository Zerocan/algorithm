/**
 * BF 暴力算法、RK算法
 *
 */

// BF
const BF = (src, dest) => {
  let len1 = src.length;
  let len2 = dest.length;
  let i= 0, j = 0;
  while (i < len1 && j < len2) {
    if (src[i] === dest[j]) {
      ++i;
      ++j;
    } else {
      ++i;
      j = 0;
    }
  }
  if (j === len2) {
    return i - j;
  }
  return -1;
};

// console.log('BF:', BF('abcdedf', 'edf'));

// RK
const hash = (data) => {
  let total = 0;
  for (let i = 0, len = data.length; i < len; ++i) {
    total = total * 37 + data.charCodeAt(i);
  }
  total = total % 144451;
  return parseInt(total);
};

const isMatch = (str, dest) => {
  if (str.length !== dest.length) {
    return false;
  }
  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== dest[i]) {
      return false;
    }
  }
  return true;
}

const RK = (src, dest) => {
  if (!src || !dest) {
    return -1;
  }
  const len1 = src.length;
  const len2 = dest.length;
  const destHash = hash(dest);
  for (let i = 0; i <= len1 - len2; ++i) {
    const subStr = src.substring(i, i + len2);
    if (hash(subStr) === destHash && isMatch(subStr, dest)) {
      return i;
    }
  }
  return -1;
};

console.log('RK:', RK('abcdedf', 'edf'));