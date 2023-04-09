/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = [];
  const path = [];
  const backtracking = (startIndex) => {
    if (path.length > 4) {
      return;
    }
    if (startIndex === s.length && path.length === 4) {
      res.push(path.join('.'));
      return;
    }

    for (let i = startIndex; i < s.length && i < startIndex + 3; i++) {
      if (isLegal(s.slice(startIndex, i + 1))) {
        path.push(s.slice(startIndex, i + 1));
      } else {
        continue;
      }
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return res;
};

const isLegal = (str) => {
  if (str.length > 1 && str[0] === '0') {
    return false;
  }
  if (str - '0' > 255) {
    return false;
  }
  return true;
}

console.log(restoreIpAddresses("101023"));
