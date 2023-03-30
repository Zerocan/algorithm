/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const res = [];
  for (let char of s) {
    if (res.length > 0 && res[res.length - 1] === char) {
      res.pop();
    } else {
      res.push(char);
    }
  }

  return res.join('');
};

console.log(removeDuplicates('abbaca'));