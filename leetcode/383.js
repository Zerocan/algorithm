/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// Map 使用map的空间消耗要比数组大一些的，因为map要维护红黑树或者哈希表
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let key of magazine) {
    map.set(key, (map.get(key) || 0) + 1);
  }

  for (let key of ransomNote) {
    if (map.get(key)) {
      map.set(key, map.get(key) - 1);
      continue;
    }
    return false;
  }

  return true;
};

// 数组
var canConstruct1 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  const basicCode = 'a'.charCodeAt();
  for (let key of magazine) {
    cnt[key.charCodeAt() - basicCode]++;
  }
  for (let key of ransomNote) {
    cnt[key.charCodeAt() - basicCode]--;
    if (cnt[key.charCodeAt() - basicCode] < 0) {
      return false;
    }
  }

  return true;
};
console.log(canConstruct1('aa', 'aba'));
