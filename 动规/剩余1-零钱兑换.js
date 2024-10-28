// const coins = [1, 2, 5], amount = 11 // 3  解释：11 = 5 + 5 + 1
const coins = [2], amount = 3 // -1
console.log(coinChange(coins, amount))
/**
 * 凑成金额 i 所需硬币 的最少数 =  用coin能凑出？ {   [现] or [剩] + 1   }
 *                                 i >= coin
 */

function coinChange(coins, amount) {

  const dp = new Array(amount + 1).fill(amount + 1) // 凑成金额 i 所需硬币 的最少数
  dp[0] = 0; 

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {        
      if (i >= coin) dp[i] = Math.min(dp[i], dp[-coini] + 1)
    }
  }

  if(dp[amount] == amount+1) // 如果 dp[amount] 仍然是初始值 amount + 1，说明无法组成该金额
    return -1

  return dp[amount];  
}
