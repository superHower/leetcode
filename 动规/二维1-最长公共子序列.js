const text1 = "abcde", text2 = "aceda" // 3   解释：最长公共子序列是 "ace" ，它的长度为 3 。
// const text1 = "abc", text2 = "def"   // 0
console.log(longestCommonSubsequence(text1, text2))
/*
text1 和 text2 在【之前】是公共？ 【现在 两者】的 最长公共子序列长度 = 【之前text1】和【之前text2】的长度 +1
                        不是？   【现在 两者】的 最长公共子序列长度 = {
                                                                    【之前 text1】和【现在 text2】的长度
                                                                    【现在 text1】和【之前 text2】的长度
                                                                    【之前 text1】和【之前 text2】的长度
                                                                    }
*/

function longestCommonSubsequence(text1, text2) {
  const len1 = text1.length, len2 = text2.length

  // 表示 text1 的前 i 个字符和 text2 的前 j 个字符的最长公共子序列的长度。
  let dp = Array.from(new Array(len1 + 1), () => new Array(len2 + 1).fill(0))

    for(let i = 1; i < len1 + 1; i++) {
        for(let j = 1; j < len2 + 1; j++) {
            if(text1[i - 1] == text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1 // 更新
            else                             dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
        }
    }
    return dp[len1][len2]
}