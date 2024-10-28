const text1 = "abcde"
const text2 = "aceda" 
// const text1 = "abc", text2 = "def"   // 0
console.log(longestCommonSubsequence(text1, text2)) // 3   解释：最长公共子序列是 "ace" ，它的长度为 3 。
/**
*  最长公共子序列长度 = {
*                  是公共         ？      之前二者公共长度 + 1
*             t1[i-1] == t2[j-1] ？       [前t1 前t2]    + 1          
*               不是公共            ：   { [前t1 现t2]  or [现t1 前t2] or [前t1 前t2] }         
*                     }                   
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