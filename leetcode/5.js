/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const regex = / /g;
  s = s.replace(regex, '%20');
  return s;
};

console.log(replaceSpace('We are happy.'));

var replaceSpace1 = function (s) {
  const sArr = s.split(' ');
  return sArr.join('%20');
};

console.log(replaceSpace1('We are happy.'));

// 双指针
var replaceSpace2 = function (s) {
  // 字符串转为数组
  const strArr = Array.from(s);
  let count = 0;

  // 计算空格数量
  for(let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      count++;
    }
  }

  let left = strArr.length - 1;
  let right = strArr.length - 1 + count * 2;
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  return strArr.join('');
};

console.log(replaceSpace2('We are happy.'));
