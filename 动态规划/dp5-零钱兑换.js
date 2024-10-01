// const coins = [1, 2, 5], amount = 11 // 3  解释：11 = 5 + 5 + 1
const coins = [2], amount = 3 // -1
// const coins = [1], amount = 0 // 0
console.log(coinChange(coins, amount))

function coinChange(coins, amount) {

  const dp = new Array(amount + 1).fill(amount + 1) // 凑成金额 i 所需的 最少的硬币个数
  dp[0] = 0; // 金额为 0 时，不需要任何硬币

  for (let i = 1; i <= amount; i++) { // 每个金额 [1, 2, 3, 4, ... , 11]
    for (let coin of coins) {         // 每个硬币 [1, 2, 5]
      const c = i - coin
      if (i >= coin ) {              // 当前硬币 coin 凑不够金额 i, 但差额，之前的肯定能凑够
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); 
      }
    }
  }

  if(dp[amount] == amount+1) // 如果 dp[amount] 仍然是初始值 amount + 1，说明无法组成该金额
    return -1

  return dp[amount];  
}
