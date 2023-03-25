/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(' ').filter(Boolean).reverse();
  return s.join(' ');
};

console.log(reverseWords('  hello world  '));

// 1.移除多余空格
// 2.反转整个字符串
// 3.反转每个单词
var reverseWords1 = function (s) {
  let sArr = Array.from(s);
  removeExtraSpaces(sArr);
  reverse(sArr, 0, sArr.length - 1);
  let lastIndex = 0;
  for (let i = 0; i <= sArr.length; i++) {
    // 遇到空格，翻转单词
    if (sArr[i] === ' ' || i === sArr.length) {
      reverse(sArr, lastIndex, i - 1);
      lastIndex = i + 1;
    }
  }
  return sArr.join('');
};

function removeExtraSpaces(sArr) {
  let slow = 0;
  let fast = 0;
  // 移除开头和中间部分的多余空格
  while (fast < sArr.length) {
    if ((sArr[fast] === ' ' && sArr[fast + 1] === ' ') || (slow === 0 && sArr[fast] === ' ')) {
      fast++;
    } else {
      sArr[slow++] = sArr[fast++];
    }
  }

  // 移除末尾的多余空格
  sArr.length = sArr[slow - 1] === ' ' ? slow - 1 : slow;
}

// 翻转
function reverse(strArr, start, end) {
  let l = start, r = end;
  while (l < r) {
    [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
    l++;
    r--;
  }
}

console.log(reverseWords1("the sky is blue"))
