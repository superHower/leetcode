/**
 * 1. 最长公共子序列
 * 2. 编辑距离（增删换）
 */

const text1 = "abcde"
const text2 = "aceda" 
// const text1 = "abc", text2 = "def"   // 0
console.log(longestCommonSubsequence(text1, text2)) // 3   解释：最长公共子序列是 "ace" ，它的长度为 3 。
/**
*  
*   是公共   =  dp[i - 1][j - 1] + 1  
*                                    
*   不是公共 =  min(不选text1   不选text2   两个都不选)         
*             
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



/*
返回将 word1 转换成 word2 所使用的最少操作数 
对一个单词可进行如下三种操作：插入、删除、替换
*/ 
const word1 = "horse", word2 = "ros" // 3
/*解释：
  horse -> rorse (将 'h' 替换为 'r')
  rorse -> rose (删除 'r')
  rose -> ros (删除 'e')
*/

/**
 * 
 * 删：即可 删word1 也可 删word2  
 * 增：不会导致操作数的变化  
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
