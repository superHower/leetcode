/**
 * 1. 零钱兑换            const coins = [1, 2, 5], amount = 11 // 3 解释：11 = 5 + 5 + 1  最少可用这3个硬币，凑成11
 * 2. 完全平方数          const n = 13                         // 2 解释：13 = 4 + 9      最少可由这2个数 ， 组成13 
 * 3. 分割等和子集[HARD]  const nums = [1,5,11,5]              // true  解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 4. 背包         {id:1, v: 5, w: 1}                         // 容量为w，装前i个商品时的最大价值；思路：有剩余，可装可不装；没剩余，只能不装
 * --------------------------------------------------------------------------------------------------------------
 * 有个目标，不断迭代去寻找这个目标
 * 不断迭代，可选择的方案
 *          如果 有剩余 ，可选剩余也可不选
 */

// 【零钱兑换】
// const coins = [1, 2, 5], amount = 11 // 3  解释：11 = 5 + 5 + 1
const coins = [2], amount = 3 // -1
/**
 * 凑成金额 i 所需硬币 的最少数 =  用coin能凑出？ {   [现] or [剩] + 1   }
 *                                 i >= coin
 */
console.log(coinChange(coins, amount))
function coinChange(coins, amount) {

  const dp = new Array(amount + 1).fill(amount + 1) // 凑成金额 i 所需硬币 的最少数
  dp[0] = 0; 

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {        
      if (i >= coin) dp[i] = Math.min(dp[i], dp[i-coin] + 1)
    }
  }

  if(dp[amount] == amount+1) // 如果 dp[amount] 仍然是初始值 amount + 1，说明无法组成该金额
    return -1

  return dp[amount];  
}

// 【完全平方数】
const n = 12 // 3 解释：12 = 4 + 4 + 4
// const n = 13 // 2 解释：13 = 4 + 9
/*
  某数 i 的完全平方数 最少个数 = 有平方数 ？ { [现]  or [剩] + 1 }
                              i >= j*j
*/
console.log(numSquares(n))
function numSquares(n) {
  const dp = new Array(n+1).fill(Infinity) // 某数 i 的完全平方数 最少个数
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++)  {
        if(i >= j*j)  dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
      }   
  }
  return dp[n];
}

// 【分割等和子集】
const nums = [1,5,11,5] // true  解释：分成多个11： [1, 5, 5] 和 [11] 。
// const nums = [1,2,3,5] // false  解释：数组不能分割成两个元素和相等的子集。


/**
 * 1. 找max 和 sum
 * 2. 排除一定不能分割：sum是奇数 或 half < max 
 * 3. 
 */
console.log(canPartition(nums))
var canPartition = function(nums) {
  let sum = 0, max = -Infinity
  for (let num of nums) {
      max = Math.max(max, num)
      sum += num
  }
  const half = sum / 2
  if (sum % 2 == 1 || half < max) return false // (sum是奇数 或 half < max) 一定不能分割

  const dp = new Array(half + 1).fill(false)
  dp[0] = true
 
  for(let num of nums) { // 从中间往前找
    for(let i = half; i >= num; i--) {
        dp[i] = dp[i] || dp[i-num] // 如果dp[j] true， 那么 || 后面不用看； 如果false, 那就只看后面的dp[j - num]
    }
  }

  return dp[half]// 最后一个数他的dp[j]，依赖之前的，会起到决定作用
};

// 【01背包】
const products = [
  {id:1, v: 5, w: 1}, 
  {id:2, v: 8, w: 2}, 
  {id:3, v: 7, w: 3}
];
const w = 5;  
console.log(backpack(w, products))

/**
 * 容量为w，装前i个商品时的最大价值 = 
 *                          装的下              ？   {       不装           or           装                       }
 *                       w >= products[i - 1].w      [现容量  装之前商品]   or     [剩余容量][装之前商品] + 前商品价值
 *                          装不下              ：          不装
 *
 */

function backpack(W, products) {
  // 初始化动态规划表格
  let n = products.length;
  let dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(0));// 容量为w，装前i个商品时的最大价值

  // 动态规划过程
  for (let i = 1; i <= n; i++) { // 遍历商品
    for (let w = 1; w <= W; w++) { // 遍历背包

      if(w >= products[i - 1].w) dp[w][i] = Math.max(dp[w][i - 1], 
                                                     dp[w - products[i - 1].w][i - 1] + products[i - 1].v);
      else                       dp[w][i] = dp[w][i - 1];

      
    }
  }

  // 最后一个元素dp[W][n]即为最大价值
  return dp[W][n];
}
