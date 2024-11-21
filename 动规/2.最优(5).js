/**
 * 1. 最小路径和---------右下往左上走
 * 2. 最长递增子序列     const nums1 = [0,1,0,3,2,3]            // 4 解释： 【0,1,x,x,2,3】
 * 3. 最长公共子序列     const text1 = "abcde", text2 = "aceda" // 3 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 4. 编辑距离（增删换） const word1 = "horse", word2 = "ros"   // 3 解释：最少操作3次
 * 5. 股票II(同天买卖)---每天都要考虑【持有和不持有】的情况
 * -------------------------------------------------------------------------------------------------------------
 * 双循环
 *    满足条件时：选最优的
 *-------------------------------------------------------------------------------------------------------------*/

// 【最小路径和 （打家劫舍2.0）】
/*  
    从右下往左上走
   
    最小路径和 = {
        最后一行：只走右边的和 + 自己
        最后一列：只走下边的和 + 自己
        其他情况：{ 走右边 or 走下边 } + 自己
    }
*/
var minPathSum2 = function(grid) {
  const m = grid.length, n = grid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0)) // 最小路径和

  // 状态初始化
  dp[m - 1][n - 1] = grid[m - 1][n - 1]

  for (let i = m - 1; i >= 0 ; i--) {
      for (let j = n - 1; j >= 0 ; j--) {
          if (i == m - 1 && j != n - 1)      dp[i][j] = grid[i][j] + dp[i][j + 1] // 最后一行
          else if (i != m - 1 && j == n - 1) dp[i][j] = grid[i][j] + dp[i + 1][j] // 最后一列
          else if (i != m - 1 && j != n - 1) dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]) // 既不是最后一行，已不是最后一列
      }
  }

  // 返回结果
  return dp[0][0]
}

  

// 【最长递增子序列 】-------------------------------------------------------
const nums1 = [0,1,0,3,2,3]            // 4 解释： 【0,1,x,x,23】
// const nums = [10,9,2,5,3,7,101,18] // 4 解释：[x,x,2,5,x,7,x,18]
// const nums = [7,7,7,7,7,7,7]       // 1
/**
 * 如何确保递增？二次循环时保证pre在当前i之前
 * 由于是长度，故dp[]+1
 * 递增子序列的最大长度 =  是递增？  max( dp[i],  dp[pre]+1 )
 */   
console.log(lengthOfLIS(nums1))                
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1) // 到 i 的位置， 递增子序列的最大长度

  for (let i = 0; i < nums.length; i++) { 
    for (let pre = 0; pre < i; pre++) {
      if (nums[i] > nums[pre] ) dp[i] = Math.max(dp[i], dp[pre] + 1)
    }
  }
 
  return Math.max(...dp)
};




// 【最长公共子序列 】
const text1 = "abcde", text2 = "aceda" 
// const text1 = "abc", text2 = "def"   // 0
/**
  *   是公共   =  dp[i - 1][j - 1] + 1  
  *   不是公共 =  min(选1  选2  都不选)         
  */
function longestCommonSubsequence(text1, text2) {
  const len1 = text1.length, len2 = text2.length
  let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0))

  for(let i = 1; i < len1 + 1; i++) {
      for(let j = 1; j < len2 + 1; j++) {
          if(text1[i - 1] == text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1 // 更新
          else                             dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
  }
  return dp[len1][len2]
}


// 【编辑距离（增删换）】
const word1 = "horse", word2 = "ros" // 3
/*解释：
  horse -> rorse (将 'h' 替换为 'r')
  rorse -> rose (删除 'r')
  rose -> ros (删除 'e')
*/

/**
 * 
 * 删：即可 删word1 也可 删word2  操作数+1
 * 增：不会导致操作数的变化        不变化
 * 换：相当于在不操作的基础上加上一个换的操作步骤 
 * 
 * 
 * 不操作 = dp[i-1][j-1]
 * 操作 =  min(    删1、            删2、             换       )
 *            dp[i-1][j]+1    dp[i][j-1]+1   dp[i-1][j-1]+1
 */
const minDistance = (word1, word2) => {
  let dp = Array.from(Array(word1.length + 1), () => Array(word2.length+1).fill(0));
  // 初始化边界
  for(let i = 1; i <= word1.length; i++) { dp[i][0] = i; }
  for(let j = 1; j <= word2.length; j++) { dp[0][j] = j; }

  for(let i = 1; i <= word1.length; i++) {
      for(let j = 1; j <= word2.length; j++) {
          if(word1[i-1] === word2[j-1]) {
              dp[i][j] = dp[i-1][j-1]; // 不操作，则操作数不变
          } else {
              //                  ( 删一个word1字符，删word2一个字符，  换)
              dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + 1);
          }
      }
  }
  
  return dp[word1.length][word2.length];
};

// 【股票II】
/*
每天都可以 买卖股票。（甚至同一天 先买后卖）但是 最多 只能持有一股股票。
*/
const prices = [7,1,5,3,6,4] // 7
/**
 * 今天不持 = { 不买卖  or  前天持有，今天买入 }
 * 今天持有 = { 不买卖  or  前天不持有，今天卖出 }
 */
var maxProfit = function(prices) {
  let n = prices.length
  let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))// 某天 [持有或不持有的] 的利润
  dp[0][0] = 0          // 第0天 不持有
  dp[0][1] = -prices[0] // 第0天 持有
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]

};