/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, i);
  }

  let prev = -1;
  let pos = -Infinity;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    pos = Math.max(pos, map.get(char));
    if (pos === i) {
      res.push(pos - prev);
      prev = pos;
      pos = -Infinity;
    }
  }

  return res;
};

console.log(partitionLabels("eccbbbbdec"))

// optimize
var partitionLabels1 = function(s) {
  const res = [];
  let start = 0;
  let end = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastIndex = s.lastIndexOf(char);
    end = Math.max(end, lastIndex);
    
    if (i === end) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }

  return res;
};

console.log(partitionLabels1("eccbbbbdec"))