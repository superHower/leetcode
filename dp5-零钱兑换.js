/*
322. 零钱兑换
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。
*/
const coins = [1, 2, 5], amount = 11 // 3
// const coins = [2], amount = 3 // -1
// const coins = [1], amount = 0 // 0
console.log(coinChange(coins, amount))

/**
 * 每个金额 i {
 *    每个硬币 coin {
 *       只要 （金额 > 硬币）
 *              为凑成金额 i 所需的最少硬币数：
 *                    不能凑成:  dp[i] 
 *                       能凑成  dp[金额-硬币] + 1 
 *    }
 * }
 *
**/

function coinChange(coins, amount) {

  const dp = new Array(amount + 1).fill(amount + 1)
  dp[0] = 0; // 金额为 0 时，不需要任何硬币

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      const c = i - coin
      if (c >= 0 ) {
        console.log('***当前硬币:' + coin +'要凑面额'+ i +'不够，比较(凑' + c + '所需最少硬币' + (dp[i - coin])+'加1 || 和凑自己所需的硬币'+ dp[i])
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        console.log('因此凑'+ i +'最少硬币数:' + dp[i])
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];  // 如果 dp[amount] 仍然是初始值 amount + 1，说明无法组成该金额
}


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

