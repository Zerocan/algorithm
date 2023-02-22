/**
 * 动态规划
 * 对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，
 * 在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少呢？
 */

/**
 * 
 * @param {*} items 物品重量数组
 * @param {*} n 物品个数
 * @param {*} w 背包可承受的最大重量
 * 
 * 定义一个二位数组dp[i][j]来存储当背包容量为j时，前i个物品所能取得的最大重量。
 * 遍历数组，比较当前物品的重量w[i]和背包的最大容量j的关系，分为两种情况：
 * a) 若w[i]>j，则只能用前i-1件物品装满物品，即dp[i][j]=dp[i-1][j];
 * b) 若w[i]<=j，则可以选择装或者不装，则dp[i][j]=max{dp[i-1][j], dp[i-1][j-v[i]]+w[i]} 。
 * 最终结果就是dp[n][m]，即背包最大容量为m，能装的最大重量。
 * 
 * 时间复杂度 O(n*w)
 */
function knapsack(items, n, w) {
  let states = new Array(n);
  for (let i = 0; i < n; i++) {
    states[i] = new Array(c + 1).fill(0);
  }
  for (let j = 0; j <= w; j++) {
    if (j >= items[i]) {
      states[i][j] = items[i];
    }
  }

  for (let i = 1; i < n; i++) { // 循环物品
    for (let j = 0; j <= w; j++) {
      if (items[i] > j) {
        a[i][j] = a[i-1][j];
      } else {
        a[i][j] = Math.max(a[i-1][j], items[i] + a[i-1][j-items[i]]);
      }
    }
  }

  return states[n-1][w];
}