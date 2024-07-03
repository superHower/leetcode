/*
139. 单词拆分
给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

*/

var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict); // 将字典转换为集合，以加快查找速度
  // console.log(wordSet)
  const dp = new Array(s.length + 1).fill(false);// 记录字符串 s 前 i 个字符是否可以被拆分成字典 wordDict 中的单词
  dp[0] = true; // 

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        // console.log(dp)
        // console.log('当前字符串', s.substring(j, i))
        dp[i] = true;
        break; // 一旦找到可以拆分的情况，就可以停止内层循环
      }
    }
  }
  return dp[s.length]; // 返回字符串 s 是否可以被拆分
};

// const s = "catsandog"
// const wordDict = ["cats", "dog", "sand", "and", "cat"]
const s = "leetcode"
const  wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))


/*

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
*/