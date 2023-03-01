// 计算莱文斯坦距离 动态规划
// 状态转移方程
// 如果：a[i]!=b[j]，那么：min_edist(i, j)就等于：
// min(min_edist(i-1,j)+1, min_edist(i,j-1)+1, min_edist(i-1,j-1)+1)

// 如果：a[i]==b[j]，那么：min_edist(i, j)就等于：
// min(min_edist(i-1,j)+1, min_edist(i,j-1)+1，min_edist(i-1,j-1))
    
const levenshteinDistance = (str1, str2) => {
  const m = str1.length;
  const n = str2.length;

  // 初始化dp数组
  // const dp = new Array(m).fill(new Array(n).fill(Infinity)); 这种写法有问题，指针相同
  const dp = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    // 对第一行初始化，相当于求解a[0]和b在所有位置的最小编辑距离，
    // 那么对于b第一个位置，如果和a[0]相同则为0，不同则为1。
    // 对于第i个位置的元素，如果和a[0]相同，直接等于i就行，为什么呢？
    // 因为直接把前面i-1个位置的元素删除就行，对应的编辑距离就是i（因为下标是从0开始的）；
    // 如果和a[0]不同，那么就等于前一个位置的编辑距离+1。
    if (str1[0] === str2[i]) {
      dp[0][i] = i;
    } else if (i !== 0) {
      dp[0][i] = dp[0][i-1] + 1;
    } else {
      dp[0][i] = 1;
    }
  }

  for (let i = 0; i < m; i++) {
    if (str1[i] === str2[0]) {
      dp[i][0] = i;
    } else if (i !== 0) {
      dp[i][0] = dp[i-1][0] + 1;
    } else {
      dp[i][0] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (str1[i] === str2[j]) {
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1]);
      } else {
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1);
      }
    }
  }

  return dp[m-1][n-1];
};

console.log(levenshteinDistance('kitten', 'sitting'));

// 代码随想录解法
const minDistance = (word1, word2) => {
  let dp = Array.from(Array(word1.length + 1), () => Array(word2.length+1).fill(0));

  for(let i = 1; i <= word1.length; i++) {
      dp[i][0] = i; 
  }

  for(let j = 1; j <= word2.length; j++) {
      dp[0][j] = j;
  }

  for(let i = 1; i <= word1.length; i++) {
      for(let j = 1; j <= word2.length; j++) {
          if(word1[i-1] === word2[j-1]) {
              dp[i][j] = dp[i-1][j-1];
          } else {
              dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1);
          }
      }
  }
  
  return dp[word1.length][word2.length];
};