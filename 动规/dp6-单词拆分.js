// const s = "catsandog" 
// const wordDict = ["cats", "dog", "sand", "and", "cat"] // false
const s = "leetcode"
const  wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict)) // true: "leetcode" 可以由 "leet" 和 "code" 拼接成。


function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict); // 转换为集合
  const dp = new Array(s.length + 1).fill(false);// 判断字符串 s 前 i 个字符是否可以被拆分成字典 wordDict 中的单词
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
   
      if (dp[j] && wordSet.has(s.substring(j, i))) { // 一旦找到可以，就可停止
        console.log(dp[j], j)
        dp[i] = true;
        console.log(dp, s.substring(j, i))
        break; 
      }
    } 
   }
  return dp[s.length]; // 返回字符串 s 是否可以被拆分
};
/*
[         l       e       e      t      c       o     d       e ]

[ true,  false, false, false, false, false, false, false, false ]
 
[ true,  false, false, false, true,  false, false, false, false ] leet
[ true,  false, false, false, true,  false, false, false, true  ] code
*/