/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 排序
var isAnagram1 = function(s, t) {
  return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};

// 数组
// 另一种解法，使用一个数组，遍历t时去-数组对应的值，判断最后数组每个值是否都为0，节约空间复杂度
var isAnagram2 = function (s, t) {
  const sArr = new Array(26).fill(0);
  const tArr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const charIndex = s[i].charCodeAt() - 'a'.charCodeAt();
    sArr[charIndex]++;
  }

  for (let i = 0; i < t.length; i++) {
    const charIndex = t[i].charCodeAt() - 'a'.charCodeAt();
    tArr[charIndex]++;
  }

  for (let i = 0; i < 26; i++) {
    if (sArr[i] !== tArr[i]) {
      return false;
    }
  }

  return true;
};

const s = 'rat',
  t = 'car';
console.log('isAnagram', isAnagram(s, t));

// map
var isAnagram3 = function (s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  if (sMap.size !== tMap.size) {
    return false;
  }

  const sArrKeys = Array.from(sMap.keys());
  for (let i = 0; i < sArrKeys.length; i++) {
    const key = sArrKeys[i];
    if (sMap.get(key) !== tMap.get(key)) {
      return false;
    }
  }

  return true;
};

console.log('isAnagram1', isAnagram1(s, t));
