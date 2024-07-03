/*
322. 零钱兑换

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

*/

var coinChange = function(coins, amount) {

  const dp = new Array(amount + 1).fill(amount + 1);  // 初始化 dp 数组，dp[i] 表示组成金额 i 所需的最少硬币数
  dp[0] = 0; // 金额为 0 时，不需要任何硬币

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      // console.log('当前硬币:' + coin)
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        // console.log(dp)
        // console.log('组成金额'+i+'时: 硬币数:' + (dp[i - coin] + 1)+', 最少硬币数:' + dp[i])
      }
    }
  }


  return dp[amount] > amount ? -1 : dp[amount];  // 如果 dp[amount] 仍然是初始值 amount + 1，说明无法组成该金额
};

const coins = [1, 2, 5], amount = 11
// const coins = [2], amount = 3
// const coins = [1], amount = 0
console.log(coinChange(coins, amount))
/*
示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0

*/