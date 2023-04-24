/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const dp = new Array(len + 1).fill(0);
  dp[0] = 1;
  for (j = 1; j <= len; j++) {
    for (let i = 0; i < wordDict.length; i++) {
      const word = wordDict[i];
      if (
        j >= word.length &&
        dp[j] === 0 &&
        dp[j - word.length] === 1 &&
        s.slice(j - word.length, j) === word
      ) {
        dp[j] = 1;
      }
    }
  }

  return dp[len] === 1 ? true : false;
};

wordBreak('catsanddog', ["cats", "dog", "sand", "and", "cat"]);
